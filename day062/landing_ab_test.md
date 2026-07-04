# Day 62 — Landing Page A/B Test: Pricing

## Hypothesis

> *"A higher price signals higher quality in B2B engineering tools. Visitors who see $79/mo will have a lower click-to-signup rate than those who see $49/mo, but higher revenue per visitor due to better-qualified leads and higher perceived value. At $99/mo, conversion will drop further but revenue per visitor will plateau or decline."*

The null hypothesis: price has no effect on revenue per visitor — $49/mo always wins due to higher volume.

## Variants

All three pages are **identical** — same headline, copy, hero image, testimonials, and feature list. The **only difference** is the Starter tier price:

| Variant | Starter Price | Professional Price | Expected Signup Rate | Expected Rev/Visitor |
|---|---|---|---|---|
| **A (Control)** | $49/mo | $149/mo | 8% (baseline) | $3.92 |
| **B (Test 1)** | $79/mo | $149/mo | 5.5% | **$4.35** |
| **C (Test 2)** | $99/mo | $149/mo | 3.5% | $3.47 |

Revenue-per-visitor = signup rate × average revenue per signup (assuming a 70:30 Starter:Professional split at $149 Pro).

## Methodology

**Traffic:** LinkedIn Ads — same audience (RF engineers, antenna designers, EE grad students in US/DE/UK), same creative, same bid strategy. Each variant gets equal traffic (~500 visitors each over 2 weeks). Use UTM parameters and Plausible goal tracking to split.

**Tool:** Plausible's built-in A/B testing via custom URL paths (`/a`, `/b`, `/c`) or a simple JS snippet that randomly assigns a variant cookie. No dedicated A/B tool needed at this stage.

**Duration:** 14 days or until each variant reaches 500 visitors, whichever comes first. Minimum 300 visitors per variant for statistical significance at ±5% margin.

## Metrics to Track

| Metric | Tool | Minimum Detectable Effect |
|---|---|---|
| Click-to-signup rate | Plausible goals | 2 percentage points |
| Preorder conversion rate | Plausible goals | 1 percentage point |
| Time on page | Plausible avg. duration | 10 seconds |
| Bounce rate | Plausible | 5 percentage points |
| Revenue per visitor | Manual calc (signups × price tier) | $0.50 |

## Decision Framework

After 14 days / 500 visitors per variant:

```
                ┌─────────────────────────────────────┐
                │  Does any variant show statistically │
                │  significant higher rev/visitor?     │
                └──────────┬──────────────────────────┘
                           │
              ┌────────────┴────────────┐
              ▼                         ▼
            YES                        NO
              │                         │
     ┌────────┴────────┐     ┌──────────┴──────────┐
     ▼                 ▼     ▼                     ▼
Pick winner     Check if B     Keep A (control)    Consider
at that price.   beats A:      for another 2        testing
Roll out to     if yes → B     weeks or try         larger gaps
100% traffic.   is optimal.    different prices.    ($39 vs $119).
```

**Secondary signals:**
- If time-on-page is **higher** at higher prices (users read more carefully), that supports the "price = quality signal" theory.
- If bounce rate is **lower** at higher prices, visitors are more intentional.
- If preorder conversion (among signups) is **higher** at higher prices, the Starter price filters out tire-kickers and leaves higher-intent users.

## Go / No-Go

If Variant B ($79/mo) achieves ≥15% higher revenue per visitor than Variant A ($49/mo) at 90% confidence, adopt $79/mo as the launch price. If no clear winner emerges, run a follow-up with wider price gaps ($39 vs $99 vs $149) or test annual vs monthly billing instead.
