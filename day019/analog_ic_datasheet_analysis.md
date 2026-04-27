Analog IC Datasheet Analysis - Day 019
Part: OPA132
Focus: piezo charge amp

Quick checks:
- Supply range: 3.3 V single-supply (verify absolute max)
- Key specs: input offset, input bias, noise density, CMRR, output swing
- Application target: piezo charge amp

Design notes:
- Decouple supply near the pins and verify input common-mode range.
- Validate output headroom at the target load and gain.
- Simulate with a vendor SPICE model for noise and stability.

Action:
- Use OPA132 if you need a compact piezo charge amp front-end at 3.3 V. Otherwise select a part with better noise or speed for your band.
