Day 005 — LinkedIn Post: Compact ECG Frontend

Built a compact, low-power ECG frontend for wearable prototypes today. Key takeaways:

- Problem: most hobby frontends either eat battery life or add noise at low frequencies.
- Approach: two-stage architecture — AC-coupled front-end + second-order low-pass to keep 0.5–40 Hz clean.
- Result: reliable QRS and P-wave visibility on bench electrodes with under 3 mW total analog power draw.

If you're building wearable health sensors and care about battery life + signal fidelity, DM me — happy to share schematics and test data.

Image: attach a clean photo of the board and a short oscilloscope capture showing filtered ECG.
