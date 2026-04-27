Analog IC Datasheet Analysis - Day 016
Part: LMP7721
Focus: pH probe buffer

Quick checks:
- Supply range: 5.0 V single-supply (verify absolute max)
- Key specs: input offset, input bias, noise density, CMRR, output swing
- Application target: pH probe buffer

Design notes:
- Decouple supply near the pins and verify input common-mode range.
- Validate output headroom at the target load and gain.
- Simulate with a vendor SPICE model for noise and stability.

Action:
- Use LMP7721 if you need a compact pH probe buffer front-end at 5.0 V. Otherwise select a part with better noise or speed for your band.
