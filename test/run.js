// Headless test: for each player — no console errors, audio context running, signal reaches the destination,
// built-in fallback plays, a test WAV and a test AIFF load and loop.
const { chromium } = require('playwright-core');
const fs = require('fs'), path = require('path');
const ROOT = path.resolve(__dirname, '..');
const W = fs.readFileSync(__dirname + '/test.wav').toString('base64');
const AIF = fs.readFileSync(__dirname + '/test.aif').toString('base64');
const C = require('./config.js');
const only = process.argv[2];
const HOOK = () => {
  window.__ctx = []; window.__starts = [];
  const AC = window.AudioContext;
  window.AudioContext = window.webkitAudioContext = class extends AC { constructor(...a) { super(...a); __ctx.push(this); this.__an = this.createAnalyser(); this.__an.fftSize = 2048; } };
  const oc = AudioNode.prototype.connect;
  AudioNode.prototype.connect = function (d, ...r) { if (d instanceof AudioDestinationNode && this.context.__an && this !== this.context.__an) oc.call(this, this.context.__an); return oc.call(this, d, ...r); };
  const os = AudioBufferSourceNode.prototype.start;
  AudioBufferSourceNode.prototype.start = function (...a) { __starts.push(+(this.buffer && this.buffer.duration).toFixed(3)); return os.apply(this, a); };
  window.__rms = () => { const c = __ctx[0]; if (!c) return -1; const d = new Float32Array(2048); c.__an.getFloatTimeDomainData(d); return Math.sqrt(d.reduce((s, x) => s + x * x, 0) / d.length); };
};
(async () => {
  const browser = await chromium.launch({ executablePath: process.env.CHROME || [process.env.HOME + '/.cache/ms-playwright/chromium-1243/chrome-linux64/chrome', '/usr/bin/google-chrome', '/usr/bin/chromium'].find(p => fs.existsSync(p)), headless: true, args: ['--autoplay-policy=user-gesture-required'] });
  let fails = 0; const summary = [];
  for (const [file, cfg] of Object.entries(C)) {
    if (only && !file.startsWith(only)) continue;
    const page = await browser.newPage({ viewport: { width: 1000, height: 700 } });
    const errs = [];
    page.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
    page.on('pageerror', e => errs.push('PAGEERROR ' + e.message));
    await page.addInitScript(HOOK);
    await page.goto('file://' + ROOT + '/players/' + file);
    await page.waitForTimeout(300);
    const run = async (acts) => { for (const a of acts) {
      if (a.click) await page.mouse.click(...a.click);
      if (a.move) await page.mouse.move(...a.move, { steps: 5 });
      if (a.down) await page.mouse.down(); if (a.up) await page.mouse.up();
      if (a.key) await page.keyboard.press(a.key);
      if (a.keydown) await page.keyboard.down(a.keydown); if (a.keyup) await page.keyboard.up(a.keyup);
      if (a.fill) await page.fill(a.fill[0], a.fill[1]);
      if (a.type) await page.keyboard.type(a.type);
      if (a.wait) await page.waitForTimeout(a.wait);
    } };
    const peak = async (ms = 1200) => { let m = 0; for (let i = 0; i < ms / 100; i++) { await page.waitForTimeout(100); m = Math.max(m, await page.evaluate(() => __rms())); } return +m.toFixed(4); };
    const load = async (b64, name, mime) => {
      if (cfg.input) { const p = path.join(__dirname, name); await page.setInputFiles(cfg.input, p); }
      else await page.evaluate(([b64, name, mime, xy]) => {
        const bin = Uint8Array.from(atob(b64), c => c.charCodeAt(0)), dt = new DataTransfer(); dt.items.add(new File([bin], name, { type: mime }));
        const el = document.elementFromPoint(...xy) || document.body;
        for (const t of ['dragenter', 'dragover', 'drop']) el.dispatchEvent(new DragEvent(t, { dataTransfer: dt, bubbles: true, cancelable: true, clientX: xy[0], clientY: xy[1] }));
      }, [b64, name, mime, cfg.dropAt || [500, 350]]);
      await page.waitForTimeout(600);
    };
    const r = { file };
    await run(cfg.start); r.state = await page.evaluate(() => __ctx[0] && __ctx[0].state);
    r.fallbackRms = await peak();
    if (cfg.after) await run(cfg.after);
    r.afterRms = await peak(600);
    const n0 = await page.evaluate(() => __starts.length);
    await load(W, 'test.wav', 'audio/wav'); if (cfg.postLoad) await run(cfg.postLoad);
    r.wavRms = await peak(); r.wavStarted = await page.evaluate(n => __starts.slice(n).includes(1.5), n0);
    const n1 = await page.evaluate(() => __starts.length);
    if (!cfg.noAiff) await load(AIF, 'test.aif', 'audio/aiff');
    r.aifRms = await peak(); r.aifStarted = cfg.noAiff ? 'n/a' : await page.evaluate(n => __starts.slice(n).includes(1.25), n1);
    r.t = await page.evaluate(() => +__ctx[0].currentTime.toFixed(2));
    r.errors = errs;
    const ok = r.state === 'running' && r.fallbackRms > 0.002 && r.wavRms > 0.002 && r.wavStarted && (cfg.noAiff || (r.aifStarted && r.aifRms > 0.002)) && !errs.length;
    if (!ok) fails++;
    console.log(ok ? 'PASS' : 'FAIL', JSON.stringify(r));
    summary.push({ ...r, ok });
    await page.screenshot({ path: __dirname + '/shot-' + file.replace('.html', '.png') });
    await page.close();
  }
  fs.writeFileSync(__dirname + '/results' + (only ? '-' + only : '') + '.json', JSON.stringify(summary, null, 1));
  await browser.close(); process.exit(fails ? 1 : 0);
})();
