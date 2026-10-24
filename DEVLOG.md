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

## 22 Oct 2026 · 011 · Print

**Play:** https://anorthernman-developer.github.io/minimal-players/players/011-print.html  
**Size:** 36 lines, 4853 bytes

**What:** A one-key resampler. Space bounces one loop through the player's own filter, echo and reverb (offline, with the effect tails folded back onto the start so it stays seamless) and that print becomes the new loop at the next loop boundary. Prints stack, so each one sinks the sound further into its own echoes. Backspace steps back through the prints and S downloads the current loop as a WAV.

**Why:** This is Player A, my pick for what to do next. It answers the open question in LEARNINGS.md, 'what is the minimal recording gesture?', with a single tap: the length comes from the loop, and it happens at the next loop boundary so it's always in time. It reuses the 000 depth macro because that's the most playable control so far, and printing over and over turns one control into a slow, Basinski-style decay piece. S gives Craig a file he can take back into his DAW or Splice folder.

**Learned:** Rendering offline is a better recording than capturing live output: no latency to line up, it's exactly one loop long, and folding the tails in makes any loop seamless. Normalising each print keeps the levels safe as the prints stack.

**Responds to:** No feedback comments yet, so this follows the open questions in LEARNINGS.md.

**Next:** Try a print that only keeps the wet signal, and a way to print just half the loop.

## 22 Oct 2026 · 012 · Warp

**Play:** https://anorthernman-developer.github.io/minimal-players/players/012-warp.html  
**Size:** 28 lines, 3843 bytes

**What:** Each loop still lasts exactly as long, but time inside it is bent. Playback speed follows 1 + a·sin(2πkt/D), which averages to exactly 1, so the loop rushes and drags (with tape-style pitch bends) but always lands back on the downbeat. The screen draws the time map, sample position against clock time, so you can see the bend, with a playhead dot moving along it. A quarter-loop echo plays the bent sound against straight time.

**Why:** This is Player B. The card drawn was 'Distorting time.' from Oblique Strategies (Brian Eno and Peter Schmidt). Taken literally, it asks what happens if time inside the loop is the thing you play. Keeping the average speed at 1 is what makes it musical rather than broken: it is swing and wow taken to an extreme, and it never drifts out of sync.

**Learned:** Bending time while keeping the loop length gives you groove control with no tempo detection. Drawing the time map makes an abstract idea visible at a glance (principle 4 again).

**Oblique card drawn:** “Distorting time.”

**Responds to:** No feedback comments yet.

**Next:** Try a sync mode where 008's second loop gets bent against a straight first loop.

## 23 Oct 2026 · 013 · Strip

**Play:** https://anorthernman-developer.github.io/minimal-players/players/013-strip.html  
**Size:** 40 lines, 5771 bytes

**What:** 011's one-tap print, but every print stays on a strip of small waveforms along the bottom. Click any of them and that print becomes the loop at the next loop boundary, so nothing is ever thrown away and you can jump back and forth between generations. Shift+Space is a second kind of print that keeps only the effects (no dry signal), so the loop turns into its own shadow.

**Why:** This is Player A, my pick for what to do next. Yesterday's LEARNINGS left two follow-ups from 011: 'is saving a WAV enough, or should a player keep a strip of prints?' and 'try a print that only keeps the wet signal'. A strip answers the first: undo in 011 was a one-way stack, which made exploring feel risky. Making history visible and clickable turns it into a palette you can perform from, and it fits principle 4 (zero UI needs feedback) because the strip is both the record and the control. The wet-only print gives a second verb on the same key (principle 2, with Shift instead of hold).

**Learned:** Visible history should make resampling feel safe, so you print more: undo stops being a one-way stack. The wet-only print is the strongest transform so far on paper, since it removes the attack of every hit; whether it reads as a pad after two or three prints on a real Splice loop is a question for Craig.

**Responds to:** No feedback comments yet (checked all feedback issues on 23 Oct), so this follows the open questions in LEARNINGS.md and the 'Next' notes from 011.

**Next:** Try printing half a loop, and dragging a print from the strip out as a file.

## 23 Oct 2026 · 014 · Speeds

**Play:** https://anorthernman-developer.github.io/minimal-players/players/014-speeds.html  
**Size:** 28 lines, 3800 bytes

**What:** The same loop plays at four speeds at once, ×2, ×1, ×½ and ×¼, like tape running at different speeds, so each is an octave apart and twice as long as the one above. They all start together, so they meet on the downbeat every four loops. Moving left and right chooses which speed you're listening from, moving up widens the focus so the neighbouring speeds come in too, and the slow layers feed a long, dark echo. The screen shows four orbits with a dot going round each at its own speed.

**Why:** This is Player B. The card drawn was 'Work at a different speed.' from Oblique Strategies (Brian Eno and Peter Schmidt). 012 already bent time inside one loop, so this takes the card more literally: several speeds of the same material working side by side, in the spirit of Eno's own tape-loop pieces. Using powers of two (principle 9) keeps everything in sync with no tempo detection.

**Learned:** Octave-related speeds of one sample line up as top, middle, bass and pad versions of the same material, so in principle they read as an arrangement rather than a mess. A focus control (which layer, and how wide) is a small mixer: two axes for four channels.

**Oblique card drawn:** “Work at a different speed.”

**Responds to:** No feedback comments yet.

**Next:** Try letting each speed have its own effect, and adding ×⅛ for very slow drones.

## 24 Oct 2026 · 015 · Strata

**Play:** https://anorthernman-developer.github.io/minimal-players/players/015-strata.html  
**Size:** 39 lines, 4546 bytes

**What:** 014's idea of one loop at several speeds, taken one step further: five speeds (×2, ×1, ×½, ×¼ and the new ×⅛) and each speed has its own effect. ×2 goes through a highpass and sits to the left, ×1 stays dry in the middle, ×½ is soft-clipped and darkened, ×¼ feeds a dark echo on the right, and ×⅛ only goes into a long reverb, so it becomes a slow drone. The layers meet on the downbeat every eight loops. Number keys mute a layer.

**Why:** This is Player A, my pick for what to do next. 014's devlog ended with 'let each speed have its own effect, and add ×⅛ for very slow drones'. Giving each speed a fixed effect turns five copies of one sample into five different instruments, which tests principle 16 (octaves of one loop make an arrangement) more seriously. It keeps principle 1 too: the effects aren't separate controls, they come with the layer, so the same two pointer axes still mix everything.

**Learned:** Tying an effect to a layer, rather than giving it a knob, adds sound without adding controls. The ×⅛ layer through a wet-only reverb is the first player that makes a drone from any sample. Whether five layers is past the point where it turns to mush is the open question for Craig's ears.

**Responds to:** No feedback comments yet (checked all 17 issues on 24 Oct, and no notes from Craig in chat since the last run), so this follows the 'Next' note from 014 and open question 5 in LEARNINGS.md.

**Next:** Try letting the print from 013 capture a single stratum, so a slow drone layer can be resampled into a new loop.

## 24 Oct 2026 · 016 · Kinds

**Play:** https://anorthernman-developer.github.io/minimal-players/players/016-kinds.html  
**Size:** 34 lines, 4683 bytes

**What:** The loop is cut into 16 slices, and each slice is sorted into a 'kind' by how loud and how bright it is. Only the first slice of each kind plays. Every later slice of the same kind falls silent, and an echo of what came before fills the gap. At the bottom of the screen all 16 slices play; as you move up, the player decides more slices are 'the same' and keeps fewer, until only two or three remain. The loop length never changes, so it stays in time. The screen shows the 16 slices as coloured blocks, filled if they play and outlined if they've been removed.

**Why:** This is Player B. The card drawn was 'Only one element of each kind.' from Oblique Strategies (Brian Eno and Peter Schmidt). Most loops are made of repeats (the same kick, the same hat), so the most literal reading of the card is to throw the repeats away and hear what's left. Keeping silences where the repeats were, rather than closing up the gaps, means the groove survives as a skeleton and the echo becomes the instrument.

**Learned:** Subtraction can be generative: one 'strictness' axis on any sample gives a smooth path from the full loop to a sparse skeleton, with no randomness. Very crude features (loudness and zero crossings) were enough to tell a kick from a hat from a note on the built-in loop; real Splice loops may need something better.

**Oblique card drawn:** “Only one element of each kind.”

**Responds to:** No feedback comments yet.

**Next:** Try choosing which slice represents each kind (the loudest, or a random one each loop) instead of always the first.
