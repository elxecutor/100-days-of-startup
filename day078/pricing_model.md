# Day 78 — AntennaForge Pricing Model

## Primary Model: Tiered Monthly Subscription

| Plan | Price | Sims/Month | Seats | Features |
|------|-------|------------|-------|----------|
| **Starter** | $79/mo | 100 | 1 | Full solver, basic output formats, email support |
| **Professional** | $249/mo | 500 | 3 | Advanced solver, all output formats, parametric sweeps, priority support |
| **Team** | $499/mo | 1,500 | 10 | Everything in Pro + collaboration, shared templates, API access, Slack support |
| **Enterprise** | Custom | Unlimited | Unlimited | Custom solver configs, SLA, dedicated support, SSO, on-prem option |

---

## Secondary Pricing Elements

| Element | Detail |
|---------|--------|
| **Usage Overage** | $2 per additional simulation beyond plan limit. Capped at 2x plan limit before auto-upgrade. |
| **Extra Seats** | Starter: +$29/seat/mo. Professional: +$49/seat/mo. Team: +$39/seat/mo. |
| **API Rate Limit** | Starter: 10 req/min. Professional: 100 req/min. Team: 500 req/min. Enterprise: custom. |
| **Performance Monitoring** | Add-on for Team & Enterprise: $99/mo for detailed solver benchmarks and optimization reports. |

---

## Discounts

| Type | Offer | Conditions |
|------|-------|------------|
| **Annual** | 20% off monthly price (billed yearly) | Prepaid annually, any plan |
| **Education** | $25/mo flat for all plans | .edu email, verified student/faculty |
| **Nonprofit** | 50% off any plan | 501(c)(3) or equivalent verification |
| **Referral** | 1 month free per successful referral | Referred customer must complete 3 months paid |
| **Founder Pricing** | $49/mo forever for first 100 customers | Beta users who joined during pre-launch |

---

## Pricing Philosophy: Value-Based Pricing

- Price is tied to **simulations per month** — the core unit of value
- Customers who run more simulations get more value; they should pay more
- Tier boundaries chosen to align with market segments: solo consultants ($79), small engineering firms ($249), R&D teams ($499)
- Enterprise pricing is custom because large companies have unique requirements (compliance, SLA, volume)
- Annual discount creates cash flow stability and reduces churn

---

## Why NOT Other Models

| Model | Rejected Because |
|-------|-----------------|
| **One-time payment** | No recurring revenue. SaaS requires predictable MRR for runway planning. Also reduces ability to fund ongoing development. |
| **Freemium** | Antenna simulation has high compute cost per sim. Free users would cost money with low conversion likelihood. B2B buyers expect to pay for professional tools. |
| **Commission** | Not a marketplace. We are the tool provider, not a middleman. No transactions between third parties to commission. |
| **Dynamic pricing** | B2B buyers want predictable costs. Surge pricing or demand-based pricing creates distrust in professional procurement. |
| **Licensing (perpetual)** | Old-school model. Requires upfront payment large enough to cover lifetime development — makes entry too expensive. $79/mo is accessible; $15k perpetual license is not. |
| **Bundled offers (with other tools)** | Not strategic. We don't own complementary tools. Partnerships may come later, but bundling now dilutes focus and revenue attribution. |

---

## Pricing Page Layout

```
┌─────────────────────────────────────────────────────┐
│  Choose Your Plan                                    │
│  Monthly / Annual (Save 20%)                         │
├──────────┬──────────┬──────────┬─────────────────────┤
│ Starter  │ Professional │ Team  │ Enterprise          │
│ $79/mo   │ $249/mo    │ $499/mo │ Custom              │
│          │            │         │                     │
│ 100 sims │ 500 sims   │ 1500 sims │ Unlimited sims    │
│ 1 seat   │ 3 seats    │ 10 seats │ Unlimited seats    │
│          │            │         │                     │
│ [Start   │ [Start     │ [Start  │ [Contact Sales]     │
│  Free]   │  Free]     │  Free]  │                     │
├──────────┴──────────┴──────────┴─────────────────────┤
│ All plans include: 14-day free trial, no credit card  │
│ Overage: $2/sim beyond plan limit                     │
│ Annual: 20% off · Education: $25/mo · Nonprofit: 50% │
└─────────────────────────────────────────────────────┘
```

---

## Estimated Revenue per Customer Cohort

| Plan | Monthly | Annual (per mo) | Annual (total) | Gross Margin (est.) |
|------|---------|-----------------|---------------|-------------------|
| Starter | $79 | $63 | $758 | ~65% (compute-heavy) |
| Professional | $249 | $199 | $2,389 | ~70% |
| Team | $499 | $399 | $4,789 | ~75% |
| Enterprise | $1,500 avg | $1,200 | $14,400 | ~80% |

**Target mix (mature state):** 40% Starter, 35% Professional, 20% Team, 5% Enterprise

**Blended ARPU target:** ~$249/mo per customer
