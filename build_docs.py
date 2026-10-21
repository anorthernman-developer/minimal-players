import json,os
P=json.load(open('players.json'));L=json.load(open('links.json')) if os.path.exists('links.json') else {}
OWN='anorthernman-developer';REPO='minimal-players';PAGES=f'https://{OWN}.github.io/{REPO}/'
for p in P:
    f=f"players/{p['id']}-{p['slug']}.html";s=open(f).read();p['file']=f;p['lines']=s.count('\n');p['bytes']=len(s.encode())
    p['page']=PAGES+f;p['gist']=L.get(p['id'],{}).get('gist','');p['issue']=L.get(p['id'],{}).get('issue','')
json.dump([{k:p[k] for k in('id','slug','lines','bytes')} for p in P],open('counts.json','w'),indent=1)
# index.html
rows='\n'.join(f'<li><a href="{p["file"]}">{p["id"]} · {p["slug"]}</a> <span>{p["bytes"]} B</span>' for p in P)
open('index.html','w').write(f'''<!doctype html><meta charset=utf-8><title>minimal players</title>
<style>body{{background:#000;color:#777;font:14px monospace;max-width:520px;margin:12vh auto;padding:0 20px}}a{{color:#eee;text-decoration:none}}a:hover{{color:#fd4}}li{{list-style:none;margin:6px 0;display:flex;justify-content:space-between}}ul{{padding:0}}</style>
<p>minimal sample loop players · one idea each · drop a sound on any of them</p><ul>
{rows}
</ul><p><a href="https://github.com/{OWN}/{REPO}">source · devlog · feedback</a></p>
''')
# README
tbl='\n'.join(f"| [{p['id']} · {p['name']}]({p['page']}) | {p['how']} | {p['lines']} | {p['bytes']} | {'[gist]('+p['gist']+')' if p['gist'] else ''} | {'[feedback]('+p['issue']+')' if p['issue'] else ''} |" for p in P)
open('README.md','w').write(f'''# minimal players

How little does a sample loop player with effects need?

This is an ongoing experiment in **minimal sample loop players**. Each one is a single self-contained HTML file using the Web Audio API, with no libraries, no build step and no server. Each one is a different answer to the question "what is the least you need for this to feel musical?"

Every player:
- loops a sample you **drop** onto it (WAV / MP3 / AIFF, e.g. from a Splice folder), or plays a tiny **built-in generated sound** if you don't have one to hand
- has at least one effect (filter, delay, reverb, crush, grains…)
- has as few controls as possible, often just one

**Play them all in the browser:** {PAGES}

## Run locally
Download any `players/*.html` file (or clone the repo) and double-click it. It opens in Chrome or Edge and works offline. Drag a sample from Explorer onto the page. AIFF files are decoded by a small built-in parser because Chrome can't decode AIFF itself (except in `006-1k`, which is too small to fit one).

## The players
| Player | How to play | Lines | Bytes | Gist | Feedback |
|---|---|---:|---:|---|---|
{tbl}

## Why
See [DEVLOG.md](DEVLOG.md) for what each one is and why it exists, and [LEARNINGS.md](LEARNINGS.md) for the design principles collected so far.

## Feedback → next iteration
Each player has a **feedback issue** (label `feedback`). Comment there with what worked, what didn't and what to try next. Daily runs read those comments, update `LEARNINGS.md`, and build two new players each day:
1. one based on what we think the project should do next (from the learnings and feedback), and
2. one based on a randomly drawn **Oblique Strategies**-style card.

## Testing
`test/run.js` loads every player in headless Chromium. It checks there are no console errors, that the audio context is running, that signal reaches the output, and that a test WAV and a test AIFF load and loop. Results are in `test/results.json`.

Oblique Strategies is by Brian Eno and Peter Schmidt. The cards in 010 are short quotations and paraphrases, used as prompts.
''')
# DEVLOG
dl=['# Devlog\n','A dated entry for each player: what it is, why it exists, its size, and what it taught us for the next one.\n']
for p in P:
    d='21 Oct 2026' if p['id']=='000' else '22 Oct 2026'
    dl.append(f"## {d} · {p['id']} · {p['name']}\n\n**Play:** {p['page']}  \n**Size:** {p['lines']} lines, {p['bytes']} bytes\n\n**What:** {p['what']}\n\n**Why:** {p['why']}\n\n**Learned:** {p['learned']}\n\n**Next:** {p['next']}\n")
open('DEVLOG.md','w').write('\n'.join(dl))
