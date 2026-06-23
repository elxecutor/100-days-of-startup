# Customer Personas — Day 051

## 4 Behavioral Segmentation Personas

---

## Persona 1 — "The Pragmatic Pro" (Marco archetype)

**Segment:** Independent RF Consultant

### Behavioral Profile

| Trait | Description |
|-------|-------------|
| **Adoption style** | Late majority — will not try until someone validates. Once validated, switches entirely. |
| **Buying behavior** | High deliberation before purchase. Needs proof. Once convinced, buys immediately — no approval chain. |
| **Usage pattern** | Daily during active projects. Zero usage between contracts. Power user when engaged. |
| **Risk tolerance** | Low — cannot afford tool failure during a client deliverable. |
| **Information sources** | IEEE papers, colleague recommendations, solver validation reports, Google Scholar. Does not read blogs. |
| **Price sensitivity** | Low — optimizes for time saved, not dollars spent. |
| **Loyalty** | High — once a tool is in workflow, switching cost is enormous. |
| **Social proof need** | Needs to see solver matched published reference designs. Does not care about star ratings or testimonials. |

### Day in the life
6:30 AM — coffee, check email for client feedback on antenna specs. 8:00 AM — open previous simulation results, prepare report for 10 AM client call. 10:00 AM — call with client who asks "what if we change the substrate to Rogers 4350B?" — internally sighs because that means re-running all simulations. 11:00 AM — starts simulation, knows it will take 2 hours, opens a book while waiting. 1:00 PM — results ready, client already in another meeting. 3:00 PM — exports PDF, emails client. 5:00 PM — invoices client for the day.

**Tool relationship:** HFSS is a necessary evil. Does not enjoy using it. Would switch immediately if a credible alternative existed.

**What makes him buy:** Email with subject "Dipole simulation matched Balanis reference within 3% — see comparison." The validation report must be technical, not marketing.

**What makes him cancel:** Simulation results that are consistently wrong. Nothing else matters.

**Behavioral segment:** *Quality-Conscious Skeptic*

---

## Persona 2 — "The Ship-It Engineer" (Amina archetype)

**Segment:** IoT Hardware Startup Lead

### Behavioral Profile

| Trait | Description |
|-------|-------------|
| **Adoption style** | Early majority — will try if it solves an immediate, painful problem. |
| **Buying behavior** | Impulse-driven by pain. A PCB failure today triggers purchase today. Two weeks without a failure, the purchase loses urgency. |
| **Usage pattern** | Burst usage aligned to PCB design cycles. Heavy for 1-2 weeks during antenna design, then nothing for 2 months during testing/manufacturing. |
| **Risk tolerance** | Moderate — will accept imperfect tool if it is better than current alternative (which is nothing). |
| **Information sources** | Hacker News, Reddit r/embedded, YouTube tutorials, colleague at another startup. Skims documentation, watches videos. |
| **Price sensitivity** | High — bootstrapped startup. Every dollar is scrutinized. But will pay if ROI is clearly calculated. |
| **Loyalty** | Low — will switch the moment a cheaper or better option emerges. Startup mindset: no tool vendor loyalty. |
| **Social proof need** | Needs to see "this startup used it and passed FCC." A case study with measurable outcomes. |

### Day in the life
9:00 AM — standup. Reports that antenna spin is delayed again. 10:00 AM — meets with CEO who asks "why can't we just use the reference design?" — explains impedance mismatch with enclosure for the 5th time. 11:00 AM — opens KiCad, adjusts trace antenna width based on gut feel. 2:00 PM — assembly house calls, PCB panelization is ready, asks if this is the final layout. Says yes because he has to. 4:00 PM — realizes the antenna matching network values might be wrong. Orders new components via Digi-Key for next-day delivery. 6:00 PM — watches YouTube video on antenna tuning. Learns something he should have known months ago.

**Tool relationship:** Needs simulation but currently has none. Any tool that works is a huge improvement.

**What makes him buy:** A simulation that correctly predicts a measurement he already took. "I built a monopole, measured VSWR of 1.4, your tool said 1.34 — that's close enough."

**What makes him cancel:** A tool that gives wrong results that cause a PCB spin failure. Tool becomes scapegoat.

**Behavioral segment:** *Pain-Driven Pragmatist*

---

## Persona 3 — "The Academic Validator" (Dr. Akinwande archetype)

**Segment:** University Professor / Lab Director

### Behavioral Profile

| Trait | Description |
|-------|-------------|
| **Adoption style** | Innovator (evaluates) → Late majority (deploys). Adopts for research after thorough validation, then workflow becomes sticky. |
| **Buying behavior** | Extremely slow and methodical. Will run parallel testing for 2-4 weeks before committing. |
| **Usage pattern** | Indirect usage — students run it, professor reviews results. Seasonal (semester-based) with spikes before conference deadlines. |
| **Risk tolerance** | Very low — publishing incorrect results damages career. A single bad experience = permanent rejection. |
| **Information sources** | Peer-reviewed journals, IEEE conferences, colleague professors. Does not trust vendor marketing material. |
| **Price sensitivity** | Low for pilot (discretionary fund), moderate for rollout (grant budget). Education pricing is a strong signal. |
| **Loyalty** | Very high — once lab methodology is built around a tool, switching requires retraining all students. 3-5 year commitment. |
| **Social proof need** | Needs another professor at a peer institution to validate. A published paper using the tool is the ultimate proof. |

### Day in the life
8:00 AM — checks email. Student A reports CST license server is down. Student B needs license for deadline in 3 days. Spends 30 minutes shuffling license allocations. 10:00 AM — research meeting. Student C shows simulation results that look wrong — suspect mesh convergence issue. 11:30 AM — writes 3 paragraphs of a grant proposal. Mentions "state-of-the-art simulation tools" but avoids naming specific vendors. 1:00 PM — lunch with colleague who mentions trying a new cloud simulation tool. Files it away mentally. 3:00 PM — reviews Student D's paper draft. Simulation section is poorly documented — cannot reproduce results from the description. 5:00 PM — answers email from department chair about software budget for next fiscal year. Deadline is next week.

**Tool relationship:** Infrastructure. Does not have an emotional relationship with simulation tools. Wants them to work reliably and be invisible.

**What makes him buy:** Student says "I tried this cloud tool, results match CST within 5%, and I didn't need to wait for a license."

**What makes him cancel:** A student publishes incorrect results because the tool was inaccurate. Permanent ban.

**Behavioral segment:** *Methodical Delegator*

---

## Persona 4 — "The Hobbyist Maker"

**Segment:** Advanced hobbyist, hardware enthusiast, ham radio operator

### Behavioral Profile

| Trait | Description |
|-------|-------------|
| **Adoption style** | Early adopter — will try anything new and shiny. Enthusiastic but impatient. |
| **Buying behavior** | Low friction — will sign up with credit card immediately if the first experience is good. High cancellation rate — churns after the novelty wears off if not daily use. |
| **Usage pattern** | Weekend warrior. Uses tool for personal projects: custom antennas for drones, ham radio, weather stations, hobby robotics. |
| **Risk tolerance** | High — this is not their job. If the tool is wrong, the antenna just performs poorly. No one is angry. |
| **Information sources** | YouTube, Hackaday, Reddit (r/amateurradio, r/arduino, r/esp32), Instructables, GitHub. Reads nothing longer than a 5-minute read. |
| **Price sensitivity** | Very high — $49/mo for a hobby is expensive. $10-20/mo is impulse territory. Free tier is essential. |
| **Loyalty** | Very low — will use the tool for one project, then never come back. Or will evangelize it enthusiastically to their community if it's free/cheap and cool. |
| **Social proof need** | A YouTube video showing the tool in action. "I built this antenna using AntennaForge and got 3km range on my LoRa node." |

### Day in the life
Saturday, 10:00 AM — scrolling YouTube, sees video about designing a helical antenna for drone video transmission. 10:15 AM — opens browser, searches for antenna simulation tool. Finds AntennaForge landing page. 10:17 AM — signs up for free trial. 10:20 AM — runs a helical antenna simulation at 5.8 GHz. Gets VSWR of 1.3 — "cool!" 10:25 AM — exports S-parameters, not sure what to do with them. 10:30 AM — shares screenshot on Reddit: "Check out this antenna sim tool, results in 2 seconds!" 11:00 AM — closes browser, goes outside to fly drone. Does not open the tool again until next weekend.

**Tool relationship:** Curiosity-driven. The tool is a means to an end for a specific project. No long-term commitment.

**What makes him buy (or free-sign):** A YouTube or Reddit post showing the tool. "I simulated my antenna in 2 seconds."

**What makes him cancel:** The free trial ends and he hasn't touched it in 3 weeks. Does not even notice the cancellation email.

**Behavioral segment:** *Curiosity-Driven Hobbyist*

---

## Behavioral Segmentation Matrix

| Dimension | Pragmatic Pro (Marco) | Ship-It Engineer (Amina) | Academic Validator (Prof) | Hobbyist Maker |
|-----------|----------------------|-------------------------|--------------------------|----------------|
| **Adoption curve** | Late majority | Early majority | Innovator → Late majority | Early adopter |
| **Buying trigger** | Validation report | Pain event (PCB failure) | Colleague recommendation | YouTube video |
| **Decision speed** | Days | Hours (after pain event) | Weeks | Minutes |
| **Usage pattern** | Daily (project-driven) | Burst (design cycles) | Indirect (students) | Sporadic (weekends) |
| **Risk tolerance** | Low | Medium | Very low | High |
| **Price sensitivity** | Low | High | Low (pilot) / Med (rollout) | Very high |
| **LTV potential** | ~$2,500 | ~$900 | ~$2,400 | ~$50 (or zero) |
| **Churn risk** | Low | Medium | Low | Very high |
| **Word-of-mouth value** | Low (small network) | Medium (startup community) | Medium (academic network) | High (Reddit/YouTube) |
| **Support need** | Low (expert user) | Medium (needs tutorials) | Low (students figure it out) | Low (self-sufficient) |

### Which persona to build for first

1. **Ship-It Engineer (Amina)** — largest TAM, easiest to reach, pain is acute
2. **Pragmatic Pro (Marco)** — highest revenue per user, validates accuracy for other segments
3. **Academic Validator (Prof)** — slow burn, high LTV once converted, education pricing
4. **Hobbyist Maker** — brand awareness and community growth, but near-zero direct revenue

**Build the product for Amina. Validate with Marco. Monetize through Marco and the Professor. Use the Hobbyist for free-tier volume and word of mouth.**
