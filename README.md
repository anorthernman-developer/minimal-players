# minimal players

How little does a sample loop player with effects need?

This is an ongoing experiment in **minimal sample loop players**. Each one is a single self-contained HTML file using the Web Audio API, with no libraries, no build step and no server. Each one is a different answer to the question "what is the least you need for this to feel musical?"

Every player:
- loops a sample you **drop** onto it (WAV / MP3 / AIFF, e.g. from a Splice folder), or plays a tiny **built-in generated sound** if you don't have one to hand
- has at least one effect (filter, delay, reverb, crush, grains…)
- has as few controls as possible, often just one

**Play them all in the browser:** https://anorthernman-developer.github.io/minimal-players/

## Run locally
Download any `players/*.html` file (or clone the repo) and double-click it. It opens in Chrome or Edge and works offline. Drag a sample from Explorer onto the page. AIFF files are decoded by a small built-in parser because Chrome can't decode AIFF itself (except in `006-1k`, which is too small to fit one).

## The players
| Player | How to play | Lines | Bytes | Gist | Feedback |
|---|---|---:|---:|---|---|
| [000 · One](https://anorthernman-developer.github.io/minimal-players/players/000-one.html) | Click to play/stop. Move the pointer up and down. Drop or pick a sound. | 21 | 2579 | [gist](https://gist.github.com/anorthernman-developer/8e222573dd0799cd4d6080a9c86dcf8b) | [feedback](https://github.com/anorthernman-developer/minimal-players/issues/2) |
| [001 · Key](https://anorthernman-developer.github.io/minimal-players/players/001-key.html) | Space: tap to play/stop, hold to throw the loop into the echo. Drop a sound. | 24 | 2964 | [gist](https://gist.github.com/anorthernman-developer/41fc90134f234c253c2a25b429732aa1) | [feedback](https://github.com/anorthernman-developer/minimal-players/issues/3) |
| [002 · Move](https://anorthernman-developer.github.io/minimal-players/players/002-move.html) | Click once (the browser needs it), then just move. Leave the window to fade out. Drop a sound. | 22 | 2697 | [gist](https://gist.github.com/anorthernman-developer/5fa8dcacec1b7968263e5f32b674955b) | [feedback](https://github.com/anorthernman-developer/minimal-players/issues/4) |
| [003 · Knob](https://anorthernman-developer.github.io/minimal-players/players/003-knob.html) | Drag the knob up/down. Click it (without dragging) to pick a sound, or drop one. | 27 | 3352 | [gist](https://gist.github.com/anorthernman-developer/901e93251531125c8bc070c237707b3b) | [feedback](https://github.com/anorthernman-developer/minimal-players/issues/5) |
| [004 · Type](https://anorthernman-developer.github.io/minimal-players/players/004-type.html) | Type in the line. Enter plays/stops. a–p = slices, CAPS = octave up, q–z = reversed slices, space/. = rest, - = hold, * = echo throw, ~ = room on/off. Drop a sound. | 28 | 3779 | [gist](https://gist.github.com/anorthernman-developer/6afacb5d4ab0c8cd626fc22052ad3eb6) | [feedback](https://github.com/anorthernman-developer/minimal-players/issues/6) |
| [005 · Keys](https://anorthernman-developer.github.io/minimal-players/players/005-keys.html) | Space play/stop, Enter pick a file. 1–6 loop length, q–p loop start, a–l pitch, z–m effect colour. Drop a sound. | 32 | 3689 | [gist](https://gist.github.com/anorthernman-developer/93a5cc49ed0af161a053db2c037add24) | [feedback](https://github.com/anorthernman-developer/minimal-players/issues/7) |
| [006 · 1K](https://anorthernman-developer.github.io/minimal-players/players/006-1k.html) | Click anywhere to play. Mouse Y = filter, X = delay time. Use the file button to load. | 7 | 846 | [gist](https://gist.github.com/anorthernman-developer/4464fdabc790df276b8da94718bd10eb) | [feedback](https://github.com/anorthernman-developer/minimal-players/issues/8) |
| [007 · Drift](https://anorthernman-developer.github.io/minimal-players/players/007-drift.html) | Click to start/pause. Then leave it alone. Drop a sound. | 28 | 3738 | [gist](https://gist.github.com/anorthernman-developer/627b2fc65381e1e7746f293c72cef639) | [feedback](https://github.com/anorthernman-developer/minimal-players/issues/9) |
| [008 · Two](https://anorthernman-developer.github.io/minimal-players/players/008-two.html) | Click to play/stop. Pointer X crossfades A↔B, Y adds space. Drop a sound on the left or right half, or click A / B. | 27 | 3736 | [gist](https://gist.github.com/anorthernman-developer/fcb6c5fd56a9ac2c76d1a16ddf304d7a) | [feedback](https://github.com/anorthernman-developer/minimal-players/issues/10) |
| [009 · Grain](https://anorthernman-developer.github.io/minimal-players/players/009-grain.html) | Click to start. X = position in the sound, Y = grain size. Hold the mouse for scatter + octave shimmer. Space stops. Drop a sound. | 32 | 3684 | [gist](https://gist.github.com/anorthernman-developer/2c30e570d8631e7cc3abcf96623da403) | [feedback](https://github.com/anorthernman-developer/minimal-players/issues/11) |
| [010 · Oblique](https://anorthernman-developer.github.io/minimal-players/players/010-oblique.html) | Click to start and draw a card. A new card is drawn every 4 loops. Drop a sound. | 38 | 5164 | [gist](https://gist.github.com/anorthernman-developer/bc802e2f4f6108d361f935c970dd82a2) | [feedback](https://github.com/anorthernman-developer/minimal-players/issues/12) |
| [011 · Print](https://anorthernman-developer.github.io/minimal-players/players/011-print.html) | Click to play/stop. Pointer up/down = depth. Space prints the loop into itself, Backspace undoes, S saves the loop as a WAV. Drop a sound. | 36 | 4853 | [gist](https://gist.github.com/anorthernman-developer/c7a307810dd782fff23b2b0b2fa7ec24) | [feedback](https://github.com/anorthernman-developer/minimal-players/issues/14) |
| [012 · Warp](https://anorthernman-developer.github.io/minimal-players/players/012-warp.html) | Click to play/stop. Pointer up = bend time more, left/right = how many bends per loop (1, 2, 3, 4, 6 or 8). Drop a sound. | 28 | 3843 | [gist](https://gist.github.com/anorthernman-developer/93289cc623afb89425741b846fc950ae) | [feedback](https://github.com/anorthernman-developer/minimal-players/issues/15) |
| [013 · Strip](https://anorthernman-developer.github.io/minimal-players/players/013-strip.html) | Click to play/stop. Pointer up/down = depth. Space prints the loop into itself, Shift+Space prints only the echoes and reverb, click any print on the strip (or use the arrow keys) to go back to it, S saves the current print as a WAV. Drop a sound. | 40 | 5771 | [gist](https://gist.github.com/anorthernman-developer/7eb94af7dcc679088efbf8b0a03f99c8) | [feedback](https://github.com/anorthernman-developer/minimal-players/issues/16) |
| [014 · Speeds](https://anorthernman-developer.github.io/minimal-players/players/014-speeds.html) | Click to play/stop. Pointer left/right = which speed you listen from (×2, ×1, ×½, ×¼), up = let the other speeds bleed in. Drop a sound. | 28 | 3800 | [gist](https://gist.github.com/anorthernman-developer/bda4329867ac7d16c505ce1635b17e55) | [feedback](https://github.com/anorthernman-developer/minimal-players/issues/17) |
| [015 · Strata](https://anorthernman-developer.github.io/minimal-players/players/015-strata.html) | Click to play/stop. Pointer left/right = which layer you're in (×2 air, ×1 dry, ×½ grit, ×¼ echo, ×⅛ room), up = open the other layers in. Keys 1–5 mute or unmute a layer. Drop a sound. | 39 | 4546 | [gist](https://gist.github.com/anorthernman-developer/cf0702709aebdbd60b09b3a4c25e15d0) | [feedback](https://github.com/anorthernman-developer/minimal-players/issues/18) |
| [016 · Kinds](https://anorthernman-developer.github.io/minimal-players/players/016-kinds.html) | Click to play/stop. Pointer up = stricter, so fewer kinds survive; pointer left/right = how much echo fills the gaps. Drop a sound. | 34 | 4683 | [gist](https://gist.github.com/anorthernman-developer/ea8fd41c277c39d2cd3f8eb0b02cf226) | [feedback](https://github.com/anorthernman-developer/minimal-players/issues/19) |
| [017 · Sediment](https://anorthernman-developer.github.io/minimal-players/players/017-sediment.html) | Click to play/stop. Move the pointer down to sink through the speeds (×1 dry, ×½ grit, ×¼ echo, ×⅛ room). Space keeps what you're hearing as the new loop, Backspace undoes. Drop a sound. | 37 | 4710 |  |  |
| [018 · Finished?](https://anorthernman-developer.github.io/minimal-players/players/018-finished.html) | Click to play. After that, click when it's finished and it stays exactly as it is; click again if it isn't, and it carries on changing. Pointer up = more echo. Space stops. Drop a sound. | 35 | 4731 |  |  |

## Why
See [DEVLOG.md](DEVLOG.md) for what each one is and why it exists, and [LEARNINGS.md](LEARNINGS.md) for the design principles collected so far.

## Feedback → next iteration
Each player has a **feedback issue** (label `feedback`). Comment there with what worked, what didn't and what to try next. Daily runs read those comments, update `LEARNINGS.md`, and build two new players each day:
1. one based on what we think the project should do next (from the learnings and feedback), and
2. one based on a randomly drawn **Oblique Strategies**-style card.

## Testing
`test/run.js` loads every player in headless Chromium. It checks there are no console errors, that the audio context is running, that signal reaches the output, and that a test WAV and a test AIFF load and loop. Results are in `test/results.json`.

Oblique Strategies is by Brian Eno and Peter Schmidt. The cards in 010 are short quotations and paraphrases, used as prompts.
