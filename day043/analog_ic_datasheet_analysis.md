Analog IC Datasheet Analysis - Day 043
Part: TLV9062
Focus: high-side current sense

Quick checks:
- Supply range: 3.3 V single-supply (verify absolute max)
- Key specs: input offset, input bias, noise density, CMRR, output swing
- Application target: high-side current sense

Design notes:
- Decouple supply near the pins and verify input common-mode range.
- Validate output headroom at the target load and gain.
- Simulate with a vendor SPICE model for noise and stability.

Action:
- Use TLV9062 if you need a compact high-side current sense front-end at 3.3 V. Otherwise select a part with better noise or speed for your band.
