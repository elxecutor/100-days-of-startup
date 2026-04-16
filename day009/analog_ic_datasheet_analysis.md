Analog IC Datasheet Analysis — Charge-Amplifier Front-End

Checklist:
- **Input model:** piezo behaves like a charge source — high impedance; leakage dominates DC behavior.
- **Key specs to check:** input bias/leakage current, input capacitance, noise density, GBP, and output offset behavior.
- **Design notes:** use a feedback capacitor for charge-to-voltage conversion with a high-value resistor or active reset for DC restoration; include input protection against mechanical shock; validate transients in `.tran` with realistic impulses.

If you have a specific piezo sensor or op amp in mind, I will tailor a one-page analysis.