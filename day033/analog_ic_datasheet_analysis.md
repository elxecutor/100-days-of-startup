Analog IC Datasheet Analysis - Day 033
Part: ADXL1002
Focus: vibration monitor

Quick checks:
- Supply range: 3.3 V single-supply (verify absolute max)
- Key specs: input offset, input bias, noise density, CMRR, output swing
- Application target: vibration monitor

Design notes:
- Decouple supply near the pins and verify input common-mode range.
- Validate output headroom at the target load and gain.
- Simulate with a vendor SPICE model for noise and stability.

Action:
- Use ADXL1002 if you need a compact vibration monitor front-end at 3.3 V. Otherwise select a part with better noise or speed for your band.
