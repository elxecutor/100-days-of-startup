# Day 80 — KPI Dashboard

---

## Dashboard Tool: Mixpanel + ChartMogul + Google Sheets (weekly snapshot)

---

## Tier 1 — Weekly Metrics (Reviewed Every Monday)

| Metric | Target | Current (Est.) | Leading Indicator | Why It Matters |
|--------|--------|---------------|-------------------|---------------|
| **MRR** | $7,500/mo (month 3) | $0 (pre-launch) | Free trial signups this week | Revenue health |
| **Monthly Churn** | <5% | N/A | Support tickets / customer | Revenue retention |
| **Sims/Week** | 500 (all users) | 0 | Active trial users | Platform engagement; proxy for stickiness |
| **CAC** | <$200 | N/A | Blog traffic source breakdown | Marketing efficiency |
| **LTV** | >$2,500 | N/A | Trial → Paid conversion rate | Unit economics health |
| **Trial → Paid Conversion** | ≥25% | N/A | First sim completion rate | Monetization effectiveness |

**Weekly dashboard layout (top section):**
```
┌──────┬──────┬──────┬──────┬──────┬──────┬──────┐
│ MRR  │Churn │Sims  │ CAC  │ LTV  │Conv% │Trend │
│$7.5k │<5%   │500/wk│<$200 │$2.5k │≥25%  │  ↑   │
│ 🟢   │ 🟢   │ 🟢   │ 🟢   │ 🟢   │ 🟢   │      │
└──────┴──────┴──────┴──────┴──────┴──────┴──────┘
```

**Color coding:** 🟢 On track / 🟡 Borderline / 🔴 Off track

---

## Tier 2 — Monthly Metrics (Reviewed First Week of Month)

| Metric | Target | Current (Est.) | Leading Indicator | Why It Matters |
|--------|--------|---------------|-------------------|---------------|
| **Activation Rate** | ≥60% (% who run first sim within 7 days) | N/A | Signup → tutorial view rate | First-impression stickiness |
| **NRR (Net Revenue Retention)** | ≥100% | N/A | Upgrade vs. downgrade ratio | Expansion revenue offsets churn |
| **Customer Health Score** | ≥70/100 | N/A | Sims/active day, support tickets, login frequency | Predict churn 30 days early |
| **Sim Success Rate** | ≥95% (% of sims that complete without error) | N/A | Solver error rate, infrastructure uptime | Product reliability |
| **Referral Rate** | ≥10%/qtr | N/A | Referral link clicks, referral program signups | Organic growth engine |

**Monthly dashboard layout (middle section):**
```
┌──────────┬─────────┬──────────┬──────────┬─────────┐
│Activation│  NRR    │  Health  │  Sim Succ│ Referral│
│  ≥60% 🟢 │ ≥100% 🟡│ ≥70 🟢   │ ≥95% 🟢  │ ≥10% 🟡 │
└──────────┴─────────┴──────────┴──────────┴─────────┘
```

---

## Tier 3 — Quarterly Metrics (Reviewed Quarterly Offsite)

| Metric | Target | Current (Est.) | Why It Matters |
|--------|--------|---------------|---------------|
| **NPS** | ≥50 | N/A | Overall customer sentiment; predictor of referrals & churn |
| **Time to First Sim** | <5 min | N/A | Friction in onboarding; correlates with activation |
| **Feature Adoption** | ≥40% using 3+ advanced features | N/A | Stickiness and upgrade propensity |
| **Support Ticket Volume** | <10 tickets/100 sims | N/A | Product quality and UX clarity |
| **Avg Sims Per Customer** | ≥20 sims/mo per paid customer | N/A | Core engagement metric; correlates with retention |
| **Cash Flow** | Positive by month 12 | N/A | Runway and sustainability |

---

## Full Dashboard Layout Description

```
┌──────────────────────────────────────────────────────────────────────┐
│                    ANTENNAFORGE — EXECUTIVE DASHBOARD                │
│                       Updated: Mon 09:00 AM                          │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  TIER 1 — WEEKLY (Red/Yellow/Green status)                          │
│  ┌──────┬──────┬──────┬──────┬──────┬──────┐                        │
│  │ MRR  │Churn │Sims  │ CAC  │ LTV  │Conv% │                        │
│  │$7.5k │<5%   │500   │<$200 │$2.5k │≥25%  │                        │
│  │ 🟢   │ 🟢   │ 🟡   │ 🟢   │ 🟢   │ 🟢   │                        │
│  └──────┴──────┴──────┴──────┴──────┴──────┘                        │
│                                                                      │
│  Sparkline charts for each metric (last 8 weeks)                     │
│  [MRR ╱╱╱╱╱╱╱╱] [Churn ╲╲╲╲╲╲╲╲] [Sims ╱╱╱╱╱╱╱╱]                  │
│                                                                      │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  TIER 2 — MONTHLY                                                    │
│  ┌──────────┬─────────┬──────────┬──────────┬─────────┐              │
│  │Activ. %  │  NRR    │  Health  │ Sim Succ │ Referral│              │
│  │ ≥60% 🟢  │ ≥100% 🟡│ ≥70 🟢   │ ≥95% 🟢  │ ≥10% 🟡 │              │
│  └──────────┴─────────┴──────────┴──────────┴─────────┘              │
│                                                                      │
│  Monthly trend bars (last 6 months)                                  │
│  [Activation ████████░░] [NRR ██████████] [Health ██████░░░░]        │
│                                                                      │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  TIER 3 — QUARTERLY                                                  │
│  ┌──────────┬─────────────┬──────────┬───────────┬──────────┐        │
│  │   NPS    │Time1stSim   │FeatAdopt │ TktVolume │AvgSims   │        │
│  │  ≥50 🟡  │ <5min 🟢    │ ≥40% 🟡  │<10/100 🟢 │ ≥20 🟢   │        │
│  └──────────┴─────────────┴──────────┴───────────┴──────────┘        │
│                                                                      │
│  Quarter-over-quarter comparison: [Q1] [Q2] [Q3] [Q4]               │
│                                                                      │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  LEADING INDICATORS PANEL                                            │
│  ┌────────────────────────────────────────────────────────────┐      │
│  │ Free Trial Signups (this week): 45  │ 7-day trend: ↑12%   │      │
│  │ Blog Traffic (this week): 1,200     │ 7-day trend: ↑8%    │      │
│  │ Support Tickets Opened: 12          │ 7-day trend: ↓3%    │      │
│  │ Active Trials (7-day): 89           │ 7-day trend: ↑5%    │      │
│  │ Payment Failures: 2                 │ 7-day trend: →0%    │      │
│  └────────────────────────────────────────────────────────────┘      │
│                                                                      │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  COHORT ANALYSIS (from ChartMogul)                                   │
│  ┌──────┬──────┬──────┬──────┬──────┬──────┬──────┐                 │
│  │Cohort│ Mo 1 │ Mo 2 │ Mo 3 │ Mo 4 │ Mo 5 │ Mo 6 │                 │
│  │Jan   │ 100% │  85% │  78% │  72% │  68% │  65% │                 │
│  │Feb   │ 100% │  88% │  80% │  75% │  70% │   —  │                 │
│  │Mar   │ 100% │  90% │  82% │   —  │   —  │   —  │                 │
│  └──────┴──────┴──────┴──────┴──────┴──────┴──────┘                 │
│                                                                      │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ALERTS & ACTIONS                                                    │
│  ┌────────────────────────────────────────────────────────────┐      │
│  │ 🔴 Churn spiked to 7% — investigate support tickets this   │      │
│  │    week. Root cause: solver bug on complex geometries.     │      │
│  │ 🟡 CAC trending up ($230) — blog traffic down 15%.         │      │
│  │    Action: Publish 2 blog posts this week.                 │      │
│  └────────────────────────────────────────────────────────────┘      │
└──────────────────────────────────────────────────────────────────────┘
```

---

## Data Sources by Metric

| Metric | Source | Update Frequency |
|--------|--------|-----------------|
| MRR | ChartMogul (Stripe data) | Daily |
| Churn | ChartMogul | Daily |
| Sims/Week | Mixpanel | Real-time |
| CAC | Google Sheets (manual entry) | Weekly |
| LTV | ChartMogul | Monthly |
| Trial → Paid Conv. | Mixpanel + HubSpot | Weekly |
| Activation Rate | Mixpanel | Weekly |
| NRR | ChartMogul | Monthly |
| Customer Health Score | Mixpanel (composite) | Real-time |
| Sim Success Rate | App database (custom query) | Weekly |
| NPS | Survey (Crisp/HubSpot) | Quarterly |
| Time to First Sim | Mixpanel | Weekly |
| Feature Adoption | Mixpanel | Monthly |
| Support Tickets | Crisp | Daily |
| Avg Sims/Customer | Mixpanel | Monthly |
| Cash Flow | QuickBooks/Xero | Monthly |

---

## Review Cadence

| Frequency | Who | What |
|-----------|-----|------|
| **Daily** | CEO + CTO (2 min) | Sims uptime, active trials, new support tickets |
| **Weekly** | Full team (30 min) | Tier 1 metrics, wins, blockers, customer stories |
| **Monthly** | Founders (2 hours) | Tier 1 + Tier 2, cohort analysis, roadmap impact |
| **Quarterly** | Full team (1 day offsite) | All tiers, NPS, annual target progress, strategy pivot decisions |
