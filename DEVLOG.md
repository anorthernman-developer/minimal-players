# Devlog

A dated entry for each player: what it is, why it exists, its size, and what it taught us for the next one.

## 21 Oct 2026 · 000 · One

**Play:** https://anorthernman-developer.github.io/minimal-players/players/000-one.html  
**Size:** 21 lines, 2579 bytes

**What:** The baseline: one sample, looped, with a single gesture. Pointer height is one 'depth' value that closes a low-pass filter while pushing a dotted-eighth feedback delay and a generated reverb up together.

**Why:** If you can only have one control, make it a macro. Filter, delay and reverb almost always move together when you play a loop live (darker = further away = more echo), so one axis that moves all three still feels musical.

**Learned:** One gesture is enough to be expressive. The text hint is the biggest bit of UI, and the AIFF parser is the biggest bit of code.

**Next:** Try taking the text away entirely, and try a single key instead of a pointer.

## 22 Oct 2026 · 001 · Key

**Play:** https://anorthernman-developer.github.io/minimal-players/players/001-key.html  
**Size:** 24 lines, 2964 bytes

**What:** A one-key player. Tapping space toggles the loop. Holding space does a dub throw: delay send and feedback swell, the reverb blooms, and the filter sinks while the dry loop ducks. Letting go brings it back.

**Why:** Live dub mixing is mostly one move, the throw, repeated with good timing. Splitting one key into tap and hold gives two verbs with no extra controls. The only UI is a dot that grows while you hold.

**Learned:** Tap versus hold doubles what one control can do. Timing is the instrument here, not position.

**Next:** Remove even the dot and let the whole screen be the feedback.

## 22 Oct 2026 · 002 · Move

**Play:** https://anorthernman-developer.github.io/minimal-players/players/002-move.html  
**Size:** 22 lines, 2697 bytes

**What:** No UI at all. The pointer is the instrument: X is tape speed, snapped to semitones across ±1 octave, and Y is a resonant low-pass. A radial glow follows the cursor and changes colour with pitch. Moving off the window fades the loop out. A limiter keeps it safe.

**Why:** Testing the floor: can a player have zero visible controls and still be playable? Snapping pitch to semitones keeps it musical rather than a siren.

**Learned:** Zero UI works if the screen gives feedback (the glow). Resonance plus feedback on pure tones clipped in testing, so after this every player keeps levels conservative and 002 gets a compressor.

**Next:** Bring back exactly one physical-feeling control.

## 22 Oct 2026 · 003 · Knob

**Play:** https://anorthernman-developer.github.io/minimal-players/players/003-knob.html  
**Size:** 27 lines, 3352 bytes

**What:** A single knob that is one journey: off → clean → filtered and resonant → echoing → washed out in reverb and slowing down like tape.

**Why:** The 000 macro was linear. This one is a narrative: each stretch of the knob's travel brings in a different effect, so one control gives a whole arrangement arc (intro → build → breakdown).

**Learned:** Ordering effects along one control's travel turns a parameter into a composition. Click-without-drag to load a file is a nice hidden second verb.

**Next:** Instead of a gesture, let text be the control.

## 22 Oct 2026 · 004 · Type

**Play:** https://anorthernman-developer.github.io/minimal-players/players/004-type.html  
**Size:** 28 lines, 3779 bytes

**What:** The text is the score. The loop is cut into 16 slices and the characters you type play them as 16th notes, with symbols for rests, ties, echo throws and reverb.

**Why:** Minimal UI doesn't have to mean minimal control. A single text field is the densest UI there is, and typing words gives you patterns you'd never program on purpose. Try your name.

**Learned:** A text field is a sequencer, a pattern store and a share format in one, so you can paste a pattern to a friend. Slicing is the most musical transform of a loop.

**Next:** Keep the keyboard but drop the text field: every key does something.

## 22 Oct 2026 · 005 · Keys

**Play:** https://anorthernman-developer.github.io/minimal-players/players/005-keys.html  
**Size:** 32 lines, 3689 bytes

**What:** Keyboard only. Each row of the keyboard is one dimension of the loop: number row = loop length (beat repeat down to 1/32), top row = loop start, home row = pitch, bottom row = effect preset (dry, low, high, echo, room, crush, all). The state is one line of text.

**Why:** Physical layout as interface: you learn it by position, not by reading labels. It's the most playable of the set, a beat-repeat performance tool with no mouse.

**Learned:** Rows map well to dimensions. Presets (the z–m colours) beat continuous parameters when you only have keys.

**Next:** How small can the code get? Try 1 KB.

## 22 Oct 2026 · 006 · 1K

**Play:** https://anorthernman-developer.github.io/minimal-players/players/006-1k.html  
**Size:** 7 lines, 846 bytes

**What:** Code golf: a full sample loop player with a built-in sound, file loading, a low-pass filter and a feedback delay in under 1 KB of HTML.

**Why:** Counting bytes is a way of asking what's essential. The answer is buffer + loop + one filter + one delay + a mouse. Everything else in 000–005 is comfort.

**Learned:** The essence fits in ~850 bytes. What gets cut first is AIFF support (Chrome can't decode AIFF natively), nice text and safe levels.

**Next:** Give the loop a mind of its own so it needs no input at all.

## 22 Oct 2026 · 007 · Drift

**Play:** https://anorthernman-developer.github.io/minimal-players/players/007-drift.html  
**Size:** 28 lines, 3738 bytes

**What:** A generative, self-evolving loop. Eight steps, each a 'gene' [slice, rate, reverse, gain]. Every bar one gene mutates, while the filter and echo random-walk. Now and then it resets to the original, so it keeps coming home.

**Why:** The most minimal control is none. In the spirit of Eno's generative music, you set the conditions (the sample) and the system plays it. The genome on screen shows what's changing.

**Learned:** Slow mutation (one gene per bar) keeps it recognisable. An occasional reset stops it drifting into noise. Showing the genome makes a generative system legible.

**Next:** Two sources, one gesture.

## 22 Oct 2026 · 008 · Two

**Play:** https://anorthernman-developer.github.io/minimal-players/players/008-two.html  
**Size:** 27 lines, 3736 bytes

**What:** A two-sample crossfader with an equal-power curve. Loop B is varispeeded to the nearest power-of-two length ratio with loop A, so the two always stay in phase. Y is the same depth macro as 000.

**Why:** The smallest DJ: two things and the space between them. Matching loop lengths by speed is the cheapest beat-sync there is, with no BPM detection.

**Learned:** Reusing the 000 macro on the other axis made it instantly playable. Power-of-two speed matching works well for Splice loops, which mostly have bar-multiple lengths.

**Next:** Zoom into one sample instead of between two: grains.

## 22 Oct 2026 · 009 · Grain

**Play:** https://anorthernman-developer.github.io/minimal-players/players/009-grain.html  
**Size:** 32 lines, 3684 bytes

**What:** A granular player in under 40 lines: a cloud of Hann-windowed grains read from the pointer's position, into a long reverb. The waveform is drawn with live grain marks.

**Why:** Granular is the extreme of 'looping': every grain is a tiny loop. Mapping position and size to X and Y makes a scrub-able sound cloud from any one-shot.

**Learned:** setValueCurveAtTime with a 64-point Hann is all a grain envelope needs. Holding the mouse for a 'more' mode (scatter + shimmer) is the same tap-vs-hold idea as 001.

**Next:** Hand the decisions to a deck of cards.

## 22 Oct 2026 · 010 · Oblique

**Play:** https://anorthernman-developer.github.io/minimal-players/players/010-oblique.html  
**Size:** 38 lines, 5164 bytes

**What:** The loop is played by a deck of Oblique Strategies-style cards (after Brian Eno & Peter Schmidt). Each card is a concrete, audible instruction: 'Reverse' flips the loop, 'Emphasise the flaws' bit-crushes, 'Repetition is a form of change' halves the loop, 'Use an old idea' returns to an earlier state, 'Do nothing for as long as possible' freezes changes for 12 loops.

**Why:** Turns a creative-block tool into a performer. The only UI is the card, a sentence. It's a different kind of generative from 007: semantic instead of random, and each change has a reason you can read.

**Learned:** Words make generative changes understandable. History ('Use an old idea') gives the system memory. It's the biggest file (5 KB), because each card is code.

**Next:** Daily runs: one player from our own reasoning, one from a random card.
