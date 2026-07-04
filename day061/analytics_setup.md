# Day 61 — Analytics Setup

## Choice: Plausible (Self-Hosted)

Plausible over GA4 because (a) it's privacy-compliant without cookie banners, (b) simple dashboard reduces noise, and (c) self-hosting on a $5/mo VPS keeps data ownership clear. If we later need deeper funnel analysis, we can pipe raw events into PostHog.

## Key Events to Track

| Event Name | Trigger | Why |
|---|---|---|
| `page_view` | Every page load | Baseline traffic |
| `signup_started` | "Get Early Access" / "Preorder" click | Top-of-funnel intent |
| `signup_completed` | Form submitted successfully | Conversion |
| `preorder_clicked` | Click on any "Preorder" CTA | Pricing interest |
| `preorder_completed` | Stripe payment confirmed | Revenue event |
| `simulation_started` | User runs first simulation | Activation |
| `simulation_completed` | Simulation finishes successfully | Value delivery |

## Dashboard Mockup

```
┌─────────────────────────────────────────────────────────┐
│  AntennaForge — Plausible Dashboard          [Last 7d]  │
├─────────────────────────────────────────────────────────┤
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐        │
│ │ Visitors    │ │ Signup Rate  ││ Preorders   │        │
│ │ 1,247       │ │ 8.3%        ││ 22          │        │
│ │ ↑ 12% WoW   │ │ ↑ 1.2pp     ││ ↑ 5 WoW     │        │
│ └─────────────┘ └─────────────┘ └─────────────┘        │
│                                                         │
│  ┌─── Visitors ───── Signups ─── Simulations ────┐     │
│  │   ████████████    ██████       ███             │     │
│  │   1,247           103          41              │     │
│  └───────────────────────────────────────────────┘     │
│                                                         │
│  Top Pages           │  Goals (Last 7d)                 │
│  /                   587│  signup_completed   103       │
│  /pricing            312│  preorder_completed  22       │
│  /blog/*             198│  simulation_started  41       │
│  /about               89│  simulation_completed 28      │
│                                                         │
│  Referrers            │  Countries                      │
│  linkedin.com    42%  │  US       38%                   │
│  direct          31%  │  Germany  14%                   │
│  reddit.com/r/rf 12%  │  UK       11%                   │
│  github.com       8%  │  India     9%                   │
└─────────────────────────────────────────────────────────┘
```

## Conversion Funnel

```
Landing Page Visit → 100%
        ↓
  Signup Started → ~15%
        ↓
Signup Completed → ~8-10%
        ↓
First Simulation → ~5%
        ↓
  Preorder Click → ~3%
        ↓
Preorder Completed → ~1.5-2%
```

Monitor the three biggest drop-offs:
1. **Signup Started → Completed:** Form too long? Pricing unclear? Check if users abandon on the pricing table.
2. **First Simulation:** If signups don't run a simulation, onboarding or value prop is failing.
3. **Preorder Click → Completed:** Stripe checkout issues, price objection, or trust concerns.

## Weekly Review Cadence

Every Monday at 10am, 30 min, with the whole team:

1. **Traffic check** — Any spikes or drops? Correlate with LinkedIn posts, forum mentions.
2. **Funnel raw numbers** — Step-through counts vs prior week. Highlight the biggest drop-off.
3. **Preorder revenue** — Count, average order value, Starter vs Professional split.
4. **Simulation stats** — Started vs completed (completion rate below 60% = bug or UX issue).
5. **Action items** — One thing to improve this week based on data (e.g., "simplify signup form", "add testimonial near CTA").

Use Google Sheets to log these weekly with a screenshot of the dashboard and a short paragraph of observations. After 4 weeks, produce a trends summary to decide whether to double down on ads, adjust pricing, or improve onboarding.
