# Analog IC Datasheet Analysis — Day 005

Part evaluated: Precision low-noise CMOS op amp (Day 005 candidate)

Summary:
- Purpose: pick an amplifier optimized for low-frequency biopotentials (ECG wearable frontend).
- Key desirable specs: low input offset, low input bias current, low 1/f noise, rail-to-rail input/output for single-supply, and modest GBP for stability in high closed-loop gains.

Checklist of datasheet items to verify:
- Supply range and rail-to-rail performance on 3.3 V supply.
- Input offset and offset drift — affects baseline and DC recovery after electrode contact.
- Input bias current and input impedance — large bias currents distort signals from high-impedance electrodes.
- Noise density (especially 0.1–100 Hz) and flicker (1/f) corner — critical for ECG band.
- Open-loop gain and GBP — ensure closed-loop gain of 20–200 is stable with chosen feedback network.
- Output swing and drive capability with expected load and filter network.

Design implications:
- Use AC-coupling ahead of the amplifier with a high-pass cutoff around 0.5 Hz to remove electrode DC while preserving QRS.
- For a target passband of 0.5–40 Hz, choose a low-pass stage (second-order) with quality factor tuned for low peaking.
- Prioritize devices with specified input noise density at low frequencies (e.g., noise given at 1 Hz) rather than only wideband noise.

Practical notes:
- If using instrumentation-amplifier topology, match resistor tolerances or use trimmed parts to reduce gain error and common-mode rejection dependency on mismatch.
- Consider input protection (back-to-back diodes) and series input resistance to limit currents during defibrillation or accidental contact.

Conclusion:
This part is suitable if the measured low-frequency noise and offset drift meet system-level SNR needs; otherwise move to a chopper-stabilized or matched-input instrumentation amplifier for ultra-low offset.
