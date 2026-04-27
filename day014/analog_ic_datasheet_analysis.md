Analog IC Datasheet Analysis - Day 014
Part: AD8421
Focus: RTD front-end

Quick checks:
- Supply range: 5.0 V single-supply (verify absolute max)
- Key specs: input offset, input bias, noise density, CMRR, output swing
- Application target: RTD front-end

Design notes:
- Decouple supply near the pins and verify input common-mode range.
- Validate output headroom at the target load and gain.
- Simulate with a vendor SPICE model for noise and stability.

Action:
- Use AD8421 if you need a compact RTD front-end front-end at 5.0 V. Otherwise select a part with better noise or speed for your band.
