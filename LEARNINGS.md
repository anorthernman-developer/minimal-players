# Learnings

Design principles for minimal sample loop players, updated by each daily run.

## Principles so far (after 000–010)
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

## Open questions
- Is a visual (glow, genome, waveform) part of the minimum, or a crutch?
- Should loops lock to a tempo, or stay free?
- What is the minimal *recording* gesture?

## Craig's feedback
_(Empty for now. Daily runs copy feedback here from the `feedback` issues and note what they changed because of it.)_
