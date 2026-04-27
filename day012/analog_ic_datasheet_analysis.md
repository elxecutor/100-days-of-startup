Analog IC Datasheet Analysis - Day 012
Part: OPA381
Focus: photodiode TIA

Quick checks:
- Supply range: 5.0 V single-supply (verify absolute max)
- Key specs: input offset, input bias, noise density, CMRR, output swing
- Application target: photodiode TIA

Design notes:
- Decouple supply near the pins and verify input common-mode range.
- Validate output headroom at the target load and gain.
- Simulate with a vendor SPICE model for noise and stability.

Action:
- Use OPA381 if you need a compact photodiode TIA front-end at 5.0 V. Otherwise select a part with better noise or speed for your band.
