# Learnings

Design principles for minimal sample loop players, updated by each daily run.

## Principles so far (after 000–012)
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

## Open questions
- Is a visual (glow, genome, waveform) part of the minimum, or a crutch?
- Should loops lock to a tempo, or stay free?
- ~~What is the minimal *recording* gesture?~~ One tap that prints the next loop, offline (011). Next: is saving a WAV enough, or should a player keep a strip of prints?
- Should players share one sound between them (one tab plays, another prints)?

## Craig's feedback
_No feedback yet. As of 22 Oct 2026 (run that built 011 and 012), none of the `feedback` issues have comments and there are no notes from Craig in chat. Daily runs copy feedback here from the issues and note what they changed because of it._
