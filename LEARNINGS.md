# Learnings

Design principles for minimal sample loop players, updated by each daily run.

## Principles so far (after 000–016)
1. **One macro beats many knobs.** Filter, delay and reverb usually move together in live play, so map them to a single "depth" axis (000, 008).
2. **Tap vs hold doubles a control.** One key or button can do two jobs: tap = toggle, hold = throw or scatter (001, 009).
3. **Travel can tell a story.** Put different effects along one control's travel to turn a parameter into an arrangement arc (003).
4. **Zero UI needs feedback.** With no visible controls, the screen itself has to react: colour, glow, size (002).
5. **Text is the densest UI.** A single line of text is a sequencer, a pattern store and a share format in one (004).
6. **Layout is a label.** Keyboard rows map naturally to dimensions of the loop, and you learn them by position (005).
7. **The essence is under 1 KB.** Buffer + loop + filter + delay + pointer. Everything else is comfort (006).
8. **Generative needs a way home.** Mutate slowly, show the state, and reset now and then so it stays recognisable (007).
9. **Sync by speed, not BPM.** Varispeed the second loop to a power-of-two length ratio with the first (008).
10. **Words make change legible.** A generative change you can read ("Reverse") feels like a decision, not noise (010).
11. **Keep levels safe.** Resonance plus feedback can clip. Keep gains conservative or add a limiter (002).
12. **Always ship a fallback sound.** Each player has a generated loop so it works the moment it opens.
13. **Record offline, not live.** The minimal recording gesture is one tap that renders exactly one loop through the effects offline, with tails folded back onto the start. There's no latency to line up and the result is always seamless (011).
14. **Bend time, keep the length.** Any speed curve that averages to 1 over a loop gives groove and wow with no tempo detection and no drift (012).
15. **Show the history, and it becomes a palette.** A clickable strip of prints makes resampling feel safe and turns undo into something you can play (013).
16. **Octaves of one loop make an arrangement.** Playing one sample at ×2, ×1, ×½ and ×¼ together is a cheap way to get top, middle, bass and pad from the same material (to be confirmed by ear on real samples), and powers of two keep it in sync (014).
17. **Give each layer its own effect, not its own knob.** When an effect belongs to a layer, you get a richer sound with the same number of controls (015).
18. **Subtraction is generative.** Removing repeats from a loop, with one strictness axis, gives a smooth path from full loop to skeleton without any randomness. Leave the gaps silent so the groove survives (016).

## Open questions
- Is a visual (glow, genome, waveform) part of the minimum, or a crutch?
- Should loops lock to a tempo, or stay free?
- ~~What is the minimal *recording* gesture?~~ One tap that prints the next loop, offline (011). ~~Is saving a WAV enough, or should a player keep a strip of prints?~~ A strip, clickable at the loop boundary (013).
- What counts as a 'kind' of slice in a real loop? Loudness and brightness work on the built-in sound (016).
- Should players share one sound between them (one tab plays, another prints)?
- How many simultaneous layers of one sample is the limit before it turns to mush? (014 suggests four octaves is fine; 015 tries five, each with its own effect.)

## Craig's feedback
_No feedback yet. As of 24 Oct 2026 (run that built 015 and 016), none of the 17 issues have comments and there are no notes from Craig in chat since the last run. Daily runs copy feedback here from the issues and note what they changed because of it._
