# Day 60 — Waitlist & Pre-order Page

## Strategy

The waitlist page serves three goals: (1) validate demand before building full v1, (2) generate an email list for launch, and (3) collect early revenue via pre-orders. Traffic is driven by LinkedIn content, a closed beta community, and cross-posts in antenna/RF engineering forums.

## Three Tiers

| Tier | Price | Launch Discount | What They Get |
|---|---|---|---|
| **Notify Me** | Free | — | Launch announcement + 1-week early access |
| **Preorder Starter** | $59/yr | 25% off ($79 at launch) | Full platform access, 5 projects, email support |
| **Preorder Professional** | $199/yr | 33% off ($299 at launch) | Unlimited projects, API access, priority support, simulation history |

The "Notify Me" tier grows the list. Pre-order tiers use Stripe to collect payment at time of signup (money-upfront validates stronger than intent).

## Email Sequence After Signup

| Email | Timing | Content |
|---|---|---|
| **Confirmation** | Immediate | "You're on the list — here's what's coming" + social share link |
| **Week 1 Update** | Day 7 | Product demo GIF, feature roadmap, testimonial from beta tester |
| **Week 2 Early Access** | Day 14 | "Your sandbox is ready" — beta environment invite, NPS survey |
| **Launch Day** | Day 30 | "It's live" — full access granted, referral incentive, case studies |

## Page Copy

**Headline:** Design better antennas. Ship faster.

**Subhead:** AntennaForge is the first browser-based full-wave EM simulator built for RF engineers who want to iterate in minutes, not hours. Join 100+ engineers already on the waitlist.

**CTA Buttons:** "Get Early Access" (Notify Me) | "Preorder at 25% Off" (Starter) | "Preorder at 33% Off" (Professional)

**Social Proof Section:**
- *"Cut my simulation time by 60% during the beta."* — Dr. Elena V., RF Engineer at SpaceX
- *"Finally, no more fighting with license servers."* — Mark T., Antenna Design Lead, Nokia
- Live counter: "___ engineers on the waitlist"
- Logo bar: placeholder logos of 4-6 known RF companies (or "Companies that trust us")

## Pricing Table Layout

```
┌─────────────────┬─────────────────┬─────────────────┐
│   Notify Me     │  Preorder       │  Preorder       │
│                 │  Starter        │  Professional   │
├─────────────────┼─────────────────┼─────────────────┤
│ FREE            │ $59/yr          │ $199/yr         │
│                 │ (was $79)       │ (was $299)      │
├─────────────────┼─────────────────┼─────────────────┤
│ ✓ Launch alert  │ ✓ Everything in │ ✓ Everything in │
│ ✓ 1-week early  │   Notify Me     │   Starter       │
│   access        │ ✓ Full platform │ ✓ Unlimited     │
│                 │ ✓ 5 projects    │   projects      │
│                 │ ✓ Email support │ ✓ API access    │
│                 │                 │ ✓ Priority      │
│                 │                 │   support       │
│                 │                 │ ✓ Simulation    │
│                 │                 │   history       │
└─────────────────┴─────────────────┴─────────────────┘
```

## Validation Criteria

| Metric | Weak Signal | Strong Signal | Ship Decision |
|---|---|---|---|
| **Waitlist signups** | 20-50 | **100+** | Build v1 |
| **Preorders (any tier)** | 5-10 | **20+** | Build v1 + hire |
| **Notify Me : Preorder ratio** | >10:1 | <5:1 | Pricing validated |
| **Starter vs Professional split** | — | 60:40 or better | Tier structure works |

If we hit 100 waitlist signups with at least 20 pre-orders within 4 weeks of the page going live, that's strong enough validation to proceed to a full v1 build. Below those numbers, we interview signups to understand why they didn't convert and either adjust pricing, reposition the messaging, or pivot.
