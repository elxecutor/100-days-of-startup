# Day 77 — CRM, Automation & Analytics Stack

---

## Tool Stack

| Category | Tool | Plan | Purpose |
|----------|------|------|---------|
| **CRM** | HubSpot | Free tier | Contacts, deals, tasks, email tracking, pipeline management |
| **Email Automation** | ConvertKit | Creator ($29/mo) | Signup sequences, onboarding, re-engagement, churn prevention |
| **Web Analytics** | Plausible | $19/mo | Privacy-friendly site analytics, bounce rate, top pages |
| **Product Analytics** | Mixpanel | Free (up to 20M events) | User behavior, activation rate, feature adoption, funnel analysis |
| **MRR Analytics** | ChartMogul | $49/mo | MRR, churn rate, LTV, cohort analysis, revenue reporting |
| **Session Recording** | Hotjar | Free (100 sessions/day) | Heatmaps, session replays, UX friction identification |
| **Live Chat + Support** | Crisp | Free tier | Live chat, chatbot, knowledge base, ticket management |

**Total monthly cost:** ~$97/mo (HubSpot free + ConvertKit $29 + Plausible $19 + ChartMogul $49 + Hotjar free + Crisp free)

---

## Automation Flows

### Flow 1: Welcome & Onboarding
**Trigger:** User signs up for free trial
**Channel:** Email (ConvertKit) + In-app (HubSpot + Crisp bot)

| Step | Action | Timing | Goal |
|------|--------|--------|------|
| 1 | Send welcome email: "Welcome to AntennaForge — your first sim is 5 minutes away" | Immediate | Set expectations |
| 2 | Send "Your first simulation" tutorial with step-by-step video | +1 hour | Drive activation |
| 3 | Send "5 pro tips for better antenna designs" | +24 hours | Deepen engagement |
| 4 | Crisp bot: "Need help? Here are 3 common questions" | On landing in-app | Reduce friction |
| 5 | Create HubSpot task for CEO if trial user hasn't run a sim in 48h | +48 hours | Manual outreach |

### Flow 2: Abandoned Signup
**Trigger:** User starts signup but doesn't complete
**Channel:** Email (ConvertKit)

| Step | Action | Timing | Goal |
|------|--------|--------|------|
| 1 | Send "Forgot something?" email with direct signup link | +1 hour | Recover signup |
| 2 | Send "Still thinking about antenna simulation?" with ROI comparison | +24 hours | Overcome hesitation |
| 3 | Send "Last chance — your free sim is waiting" | +72 hours | Final nudge |
| 4 | Tag in HubSpot as "Abandoned Signup" for retargeting ads | After flow | Off-platform retargeting |

### Flow 3: Inactive Trial User
**Trigger:** Trial user hasn't opened the app in 5 days
**Channel:** Email (ConvertKit) + In-app notification

| Step | Action | Timing | Goal |
|------|--------|--------|------|
| 1 | Send "Haven't seen you in a bit" + template library link | Day 5 of inactivity | Re-activate |
| 2 | Send "See what other engineers built this week" (case studies) | Day 8 | Social proof push |
| 3 | Send "Your trial ends in 3 days — here's your simulation summary" | Day 11 | Urgency + value recap |
| 4 | Send "Your trial has ended — export your designs" | Day 15 | Graceful exit + re-engagement seed |
| 5 | Tag as "Trial Expired — Lost" in HubSpot for future re-engagement | Day 15 | Segment for later campaigns |

### Flow 4: Churn Prevention (At-Risk Customers)
**Trigger:** Paid customer shows churn signals (↓usage, ↑support tickets, billing failure)
**Channel:** Email (ConvertKit) + Crisp + HubSpot task

| Step | Action | Timing | Goal |
|------|--------|--------|------|
| 1 | Identify at-risk: <2 sims in 14 days, or 3+ support tickets in 7 days, or failed payment | Real-time (Mixpanel → HubSpot) | Flag |
| 2 | Sent automated check-in email: "How can we help you design better antennas?" | Same day | Proactive care |
| 3 | CEO sends personal email to customers on Enterprise/Team plan | +24 hours | High-touch retention |
| 4 | Offer 1-month credit or extended trial pause if billing issue | +48 hours | Reduce friction |
| 5 | If churned: Send "We're sorry to see you go" + survey + "Your data is ready for export" | On churn | Gather feedback + leave door open |

### Flow 5: Feature Adoption Campaign
**Trigger:** User has run ≥5 sims but hasn't used a key feature (e.g., parametric sweep, team sharing)
**Channel:** Email (ConvertKit) + In-app (Crisp bot)

| Step | Action | Timing | Goal |
|------|--------|--------|------|
| 1 | Identify feature gap from Mixpanel event data | Weekly batch | Segment |
| 2 | Send "Did you know? You can run parametric sweeps in 2 clicks" with video | +1 day after detection | Feature education |
| 3 | Send "Teams that use collaboration features see 40% faster design cycles" | +1 week | Team feature upsell |
| 4 | Crisp bot triggers in-app: "Want to try [feature]? Click here for a 60s walkthrough." | On next login | In-context adoption |
| 5 | Track feature adoption in Mixpanel; tag HubSpot deal as "Expanded Usage" | When used | Update lead score |

---

## Data Flow Architecture

```
Web (Plausible) ──→ Mixpanel (events) ──→ HubSpot (contacts/deals)
                         │
                         ├── ChartMogul (MRR/churn/LTV)
                         │
                         └── Crisp (support context)
```

- Mixpanel is the event source of truth for user behavior
- HubSpot is the source of truth for contacts, deals, and pipeline
- ChartMogul pulls revenue data from Stripe and behavioral data from Mixpanel
- Plausible handles anonymous web traffic (not logged-in app usage)
- Hotjar sessions linked to Mixpanel user IDs for UX analysis
- Crisp shows HubSpot contact data in support chats via API integration
