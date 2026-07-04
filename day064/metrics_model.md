# Day 64 — Metrics Model & Factor Tree

## How Other Metrics Influence the North Star

The North Star (Simulations/Week) doesn't exist in isolation. It's the output of a system of leading and lagging indicators.

---

### Metric Tree

```
                          Sims / Week  (North Star)
                                │
            ┌───────────────────┴───────────────────┐
            │                                       │
    Active Users (7d)              Sims per Active User / Week
            │                                       │
    ┌───────┴───────┐                       ┌───────┴───────┐
    │               │                       │               │
Signups      Activation            Sim Requests   Avg Sims per
             Rate (48h)            per User       Request
    │               │                       │               │
    │               │                       │               │
Marketing     Onboarding              UI/UX        Solver
Spend         Completion           Quality        Speed
    │               │                       │               │
    │               │                       │               │
Traffic →    First Sim Run →        Satisfaction →   Confidence
Signups      (value moment)         Score (CSAT)     in Results
```

---

### Leading vs Lagging Indicators

| Type | Metric | Why | Current | Target |
|------|--------|-----|---------|--------|
| **Leading** | Signups/week | Top of funnel — feeds active users | 340 | 500 |
| **Leading** | Activation rate (% who run 1st sim in 48h) | Converts signup → value | 42% | 60% |
| **Leading** | Simulation requests/user/day | Shows engagement depth | 3.1 | 5.0 |
| **Lagging** | 8-week retention | Long-term value signal | 58% | 75% |
| **Lagging** | MRR | Revenue proxy for value | $18.4K | $40K |
| **Lagging** | LTV | Ultimate value capture | $640 | $1,200 |
| **Lagging** | Referral signups | Organic growth from delight | 22/mo | 80/mo |

---

### The Math

```
Sims/Week = Active Users × Sims per Active User per Week
  12,847  =     529       ×             24.3
```

**Decomposition:**

- Active Users = Signups × Activation Rate × 7-Day Retention
  - 529 = 340 × 0.42 × 0.72 × 5.15 (weekly factor)
- Sims per Active User = Sim Requests per User × Sims per Request
  - 24.3 = 3.1 × 7.8

**Leverage points** (biggest impact per % improvement):

1. **Activation rate** (42% → 60% = +43% more active users)
2. **Sim requests per user** (3.1 → 5.0 = +61% more sims/active)
3. **Signups** via referral loop (22 → 80/mo = +264% annual organic)

---

### Causal Chain

```
Better Onboarding
        ↓ (improves Activation Rate +30%)
Higher Activation
        ↓ (drives Active Users +43%)
More Sims Completed
        ↓ (deepens habit, more data in platform)
Better Retention
        ↓ (8-week retention 58% → 75%)
Higher LTV
        ↓ ($640 → $1,200)
More Referrals
        ↓ (22 → 80/mo → compounds signups)
┌───────────────────────────────────────────┐
│            VIRTUOUS FLYWEEL               │
│  Each loop turn strengthens the next      │
└───────────────────────────────────────────┘
```

---

### Target Values (Quarterly Plan)

| Metric | Q1 (Current) | Q2 | Q3 | Q4 |
|--------|-------------|-----|-----|-----|
| Signups/week | 340 | 400 | 480 | 600 |
| Activation rate | 42% | 50% | 55% | 60% |
| Active users (7d) | 529 | 720 | 950 | 1,300 |
| Sims/active/week | 24.3 | 28 | 32 | 36 |
| **Sims/week** | **12,847** | **20,160** | **30,400** | **46,800** |
| 8-week retention | 58% | 65% | 70% | 75% |
| MRR | $18.4K | $28K | $42K | $65K |
| LTV | $640 | $800 | $1,000 | $1,200 |
| Referral signups/mo | 22 | 40 | 60 | 80 |
