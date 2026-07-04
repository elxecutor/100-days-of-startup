# Day 63 — North Star Metric

## North Star: Simulations Completed Per Week

Every completed simulation is a unit of value delivered. The faster users iterate on antenna designs, the better their final product — and the more they need AntennaForge.

---

### Why This Metric

| Dimension | Why It Tracks Value |
|-----------|-------------------|
| **Retention** | Users who run 10+ sims/week have 90% 8-week retention vs 30% for <3 sims/week |
| **Revenue** | Power users hit plan limits faster, driving upgrades from Starter to Pro ($49 → $199/mo) |
| **Referrals** | NPS among users with >20 sims/month is 72 vs 12 for inactive users |

---

### How It Correlates

```
More sims → Faster design iteration → Better antennas → Stickier product
                                                          ↓
                                              Higher willingness to pay
                                                          ↓
                                              More referrals (word of mouth)
```

---

### Countermetrics

Watching the raw sims count alone is dangerous. Track these alongside:

- **Simulation failure rate** — target <5%. High failure rate means frustrated users, even if total sims look healthy.
- **Average time to completion** — target <90s for S-param, <5min for far-field. Slow sims erode the iteration loop.
- **Sims per active user** — a rising total with a falling per-user average means we're adding lots of low-value users. Investigate activation.

---

### Dashboard Mockup

```
┌──────────────────────────────────────────────────────────────┐
│  ANTENNAFORGE — NORTH STAR DASHBOARD                    LIVE │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─ Simulations Completed (This Week) ──────────────────┐   │
│  │                                                      │   │
│  │               ████ 12,847 ▲ 23% WoW                  │   │
│  │                                                      │   │
│  │  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐    │   │
│  │  │ Mon    │  │ Tue    │  │ Wed    │  │ Thu    │    │   │
│  │  │ 1,847  │  │ 1,932  │  │ 2,104  │  │ 2,211  │    │   │
│  │  └────────┘  └────────┘  └────────┘  └────────┘    │   │
│  │  ┌────────┐  ┌────────┐  ┌────────┐                 │   │
│  │  │ Fri    │  │ Sat    │  │ Sun    │                 │   │
│  │  │ 2,087  │  │ 1,153  │  │ 1,513  │                 │   │
│  │  └────────┘  └────────┘  └────────┘                 │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
│  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐   │
│  │ Sims/Active   │  │ Failure Rate  │  │ Avg Time      │   │
│  │ 24.3          │  │ 3.1%          │  │ 72s           │   │
│  │ ▲ 8% WoW      │  │ ▼ 0.4 pp WoW │  │ ▼ 3s WoW      │   │
│  └───────────────┘  └───────────────┘  └───────────────┘   │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Weekly Active Users: 529 ▲ 12% WoW                   │   │
│  │ Sims/Active User:     24.3 ▲ 8% WoW                  │   │
│  │ Sims/Week:         12,847 ▲ 23% WoW = 529 × 24.3    │   │
│  └──────────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────────────┘
```

---

### Target Ranges by Stage

| Stage | Sims/Week | Failure Rate | Avg Time |
|-------|-----------|--------------|----------|
| Seed (now) | 5,000–10,000 | <8% | <120s |
| Series A | 25,000–50,000 | <5% | <90s |
| Series B | 100,000+ | <3% | <60s |
