# Day 79 — Team Roles & Operating Model

---

## Founding Team (3 People)

### CEO / Product — Alex
| Attribute | Detail |
|-----------|--------|
| **Responsibilities** | Product vision, roadmap, user research, marketing, sales, fundraising, hiring |
| **Key Metrics** | MRR, trial-to-paid conversion, NPS, CAC, active users |
| **Reporting** | Reports to board (future) |
| **Background** | Previous hardware startup founder or product manager at engineering SaaS |

### CTO / Full-Stack — Jordan
| Attribute | Detail |
|-----------|--------|
| **Responsibilities** | Architecture, backend (simulation engine API), frontend (React), infrastructure (AWS), CI/CD, security |
| **Key Metrics** | Sims uptime (99.5%+), simulation latency, deployment frequency, bug close rate |
| **Reporting** | Reports to CEO |
| **Background** | Full-stack engineer with cloud infra experience; physics/engineering background a plus |

### RF Engineer (Part-Time) — Dr. Sam
| Attribute | Detail |
|-----------|--------|
| **Responsibilities** | Solver accuracy validation, reference designs, technical content, customer engineering support, benchmarks vs. competitors |
| **Key Metrics** | Sim-to-measurement correlation, customer sim success rate, technical blog output |
| **Reporting** | Reports to CEO on product; collaborates with CTO on solver |
| **Background** | PhD or MS in RF/microwave engineering with 5+ years industry experience |
| **Commitment** | 15-20 hrs/week, equity + hourly consulting rate |

---

## Hiring Roadmap (by MRR Milestones)

| MRR Milestone | Hire | Rationale |
|---------------|------|-----------|
| **$3k MRR** (~12 customers) | **Engineer #1** (full-stack or solver-focused) | CTO is bottleneck; need to split frontend/backend or solver work |
| **$10k MRR** (~40 customers) | **Customer Support Specialist** | CEO doing all support → can't scale. Hire first non-technical role. |
| **$20k MRR** (~80 customers) | **Sales/Account Executive** | CEO doing all sales → needs to focus on product/strategy. Outbound + demo capacity. |
| **$40k MRR** (~160 customers) | **Marketing Lead** | Organic growth plateaus; need paid acquisition, content engine, and demand generation. |

---

## Role Details for Post-Founding Hires

### Engineer #1 (hired at $3k MRR)
| Attribute | Detail |
|-----------|--------|
| **Responsibilities** | Frontend features (React + Three.js visualization), API integrations, bug fixes, performance optimization |
| **Key Metrics** | PRs merged/week, bug fix velocity, feature completion vs. roadmap |
| **Reporting** | Reports to CTO |

### Customer Support Specialist (hired at $10k MRR)
| Attribute | Detail |
|-----------|--------|
| **Responsibilities** | Crisp chat, email support, ticket triage, knowledge base maintenance, bug reproduction |
| **Key Metrics** | First response time (<2hr), CSAT score (>90%), tickets resolved without escalation |
| **Reporting** | Reports to CEO |

### Sales/Account Executive (hired at $20k MRR)
| Attribute | Detail |
|-----------|--------|
| **Responsibilities** | Outbound prospecting (LinkedIn, email), demo calls, trial follow-up, enterprise deals, partner channel |
| **Key Metrics** | Demo → trial rate, trial → paid rate, ACV, deals closed/month |
| **Reporting** | Reports to CEO |

### Marketing Lead (hired at $40k MRR)
| Attribute | Detail |
|-----------|--------|
| **Responsibilities** | Content strategy, paid ads, SEO, social media, email campaigns, webinar production, analyst relations |
| **Key Metrics** | MQLs/month, CAC, blog traffic, conversion rate by channel, influencer partnerships |
| **Reporting** | Reports to CEO |

---

## Operating Culture

| Principle | Practice |
|-----------|----------|
| **Customer Obsession** | Every team member talks to 2 customers/week. Support rotation for engineers. |
| **Speed Over Polish** | Ship when it works, not when it's perfect. 80% solution today > 100% solution next month. |
| **Transparency** | All metrics shared weekly. Open salaries. CEO writes monthly "state of the business" memo. |
| **Learning from Failures** | Post-mortems are blameless. Failure celebration: "Best Failure of the Month" award. |
| **No Bureaucracy** | No meetings without agenda. No approval chains >2 people. Write things down; don't schedule a call. |
| **Async-First** | Default to written communication. Record decisions in Notion. Use Slack for urgent only. |

---

## Communication Cadence

| Frequency | Meeting | Duration | Attendees | Agenda |
|-----------|---------|----------|-----------|--------|
| **Daily** | Async standup | 15 min | All | 3 things: Done yesterday / Doing today / Blockers. Via Slack/Discord. |
| **Weekly** | All-hands | 30 min | All | Metrics review, wins, customer feedback, product demo, blocker triage. |
| **Monthly** | Strategy | 2 hours | Founders + 1 (rotating) | OKR review, roadmap decisions, hiring pipeline, financial health, big bets. |
| **Quarterly** | Offsite | 1 day | All | Retrospective, annual planning, team building. |

---

## Decision-Making Framework

```
┌──────────────────────────────────────────┐
│  Does this help the customer design      │
│  a better antenna?                       │
├──────────────────────────────────────────┤
│  Yes ───→ Do it. (No further approval)   │
│                                          │
│  No ────→ Don't do it.                  │
│                                          │
│  Not sure → Ask: "Will this help us      │
│              help more customers design  │
│              better antennas?"           │
│              (If still no → don't do)    │
└──────────────────────────────────────────┘
```

This framework applies to: feature requests, partnerships, hiring, marketing campaigns, conference attendance, tool purchases, and pricing changes.

**Exception:** Anything affecting revenue, legal, or brand safety requires CEO approval regardless of the antenna test.
