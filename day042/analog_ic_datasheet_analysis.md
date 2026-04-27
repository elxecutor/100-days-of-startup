Analog IC Datasheet Analysis - Day 042
Part: MAX4080
Focus: low-side current sense

Quick checks:
- Supply range: 5.0 V single-supply (verify absolute max)
- Key specs: input offset, input bias, noise density, CMRR, output swing
- Application target: low-side current sense

Design notes:
- Decouple supply near the pins and verify input common-mode range.
- Validate output headroom at the target load and gain.
- Simulate with a vendor SPICE model for noise and stability.

Action:
- Use MAX4080 if you need a compact low-side current sense front-end at 5.0 V. Otherwise select a part with better noise or speed for your band.
