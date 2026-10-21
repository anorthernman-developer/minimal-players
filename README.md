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
| [000 · One](https://anorthernman-developer.github.io/minimal-players/players/000-one.html) | Click to play/stop. Move the pointer up and down. Drop or pick a sound. | 21 | 2579 |  |  |
| [001 · Key](https://anorthernman-developer.github.io/minimal-players/players/001-key.html) | Space: tap to play/stop, hold to throw the loop into the echo. Drop a sound. | 24 | 2964 |  |  |
| [002 · Move](https://anorthernman-developer.github.io/minimal-players/players/002-move.html) | Click once (the browser needs it), then just move. Leave the window to fade out. Drop a sound. | 22 | 2697 |  |  |
| [003 · Knob](https://anorthernman-developer.github.io/minimal-players/players/003-knob.html) | Drag the knob up/down. Click it (without dragging) to pick a sound, or drop one. | 27 | 3352 |  |  |
| [004 · Type](https://anorthernman-developer.github.io/minimal-players/players/004-type.html) | Type in the line. Enter plays/stops. a–p = slices, CAPS = octave up, q–z = reversed slices, space/. = rest, - = hold, * = echo throw, ~ = room on/off. Drop a sound. | 28 | 3779 |  |  |
| [005 · Keys](https://anorthernman-developer.github.io/minimal-players/players/005-keys.html) | Space play/stop, Enter pick a file. 1–6 loop length, q–p loop start, a–l pitch, z–m effect colour. Drop a sound. | 32 | 3689 |  |  |
| [006 · 1K](https://anorthernman-developer.github.io/minimal-players/players/006-1k.html) | Click anywhere to play. Mouse Y = filter, X = delay time. Use the file button to load. | 7 | 846 |  |  |
| [007 · Drift](https://anorthernman-developer.github.io/minimal-players/players/007-drift.html) | Click to start/pause. Then leave it alone. Drop a sound. | 28 | 3738 |  |  |
| [008 · Two](https://anorthernman-developer.github.io/minimal-players/players/008-two.html) | Click to play/stop. Pointer X crossfades A↔B, Y adds space. Drop a sound on the left or right half, or click A / B. | 27 | 3736 |  |  |
| [009 · Grain](https://anorthernman-developer.github.io/minimal-players/players/009-grain.html) | Click to start. X = position in the sound, Y = grain size. Hold the mouse for scatter + octave shimmer. Space stops. Drop a sound. | 32 | 3684 |  |  |
| [010 · Oblique](https://anorthernman-developer.github.io/minimal-players/players/010-oblique.html) | Click to start and draw a card. A new card is drawn every 4 loops. Drop a sound. | 38 | 5164 |  |  |

## Why
See [DEVLOG.md](DEVLOG.md) for what each one is and why it exists, and [LEARNINGS.md](LEARNINGS.md) for the design principles collected so far.

## Feedback → next iteration
Each player has a **feedback issue** (label `feedback`). Comment there with what worked, what didn't and what to try next. Daily runs read those comments, update `LEARNINGS.md`, and build two new players each day:
1. one based on what we think the project should do next (from the learnings and feedback), and
2. one based on a randomly drawn **Oblique Strategies**-style card.

## Testing
`test/run.js` loads every player in headless Chromium. It checks there are no console errors, that the audio context is running, that signal reaches the output, and that a test WAV and a test AIFF load and loop. Results are in `test/results.json`.

Oblique Strategies is by Brian Eno and Peter Schmidt. The cards in 010 are short quotations and paraphrases, used as prompts.
