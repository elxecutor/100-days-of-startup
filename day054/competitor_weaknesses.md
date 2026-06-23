# Competitive Weaknesses & Ignored Customers — Day 054

## Step 3 (continued): What competitors are doing badly, which customers they ignore

---

## What They Do Badly

### 1. Pricing is predatory for small teams

Every major EM tool uses per-seat perpetual licensing or annual subscription priced for enterprises with dedicated procurement departments. There is no "I just need to simulate 2 antennas a week" tier. No monthly subscription. No free tier. No education pricing that actually works for students.

The pricing model assumes every user is an enterprise with a $50k engineering tools budget. This leaves 80% of potential users (freelancers, startups, students, hobbyists) with no legal, affordable option — pushing them toward cracked software or no simulation at all.

**What this costs them:** They leave millions on the table from the underserved mid-market. More importantly, they lose a generation of engineers who learn on open-source or cracked tools and never develop loyalty to HFSS or CST.

### 2. Installation and setup is a nightmare

HFSS and CST require:
- A dedicated high-performance workstation (or license server)
- 30-60 minutes of installation
- License server configuration (floating licenses need IT)
- VPN access for remote work
- Administrator privileges (blocking many corporate users)
- OS-specific compatibility (Linux or Windows, not both)

If a laptop dies, re-licensing takes days. If the VPN is down, you cannot work. If IT changes the license server, nothing works until they fix it.

**What this costs them:** Every minute an engineer spends configuring tools is a minute they resent the vendor. Cloud-native tools have zero setup friction. Desktop vendors are fighting a war they already lost.

### 3. Zero collaboration built in

In 2026, these tools cannot do what Google Docs did in 2006: let two people look at the same design simultaneously. The workflow is:
- Design locally → Export to neutral format → Email to colleague → Colleague imports → Reviews → Emails back → You import changes → Re-run simulation → Export again → Repeat

Each cycle takes 1-3 days. For a 5-iteration design process, that is 5-15 days lost to file transfer friction.

**What this costs them:** Teams adopt point solutions (Google Drive, Slack, email) to patch the collaboration gap. These patches are terrible. A tool with native collaboration would win on workflow alone.

### 4. Training and onboarding is expensive

HFSS training courses cost $1,500-3,000 per person per week. The official Ansys learning center requires a paid subscription beyond the license fee. Most engineers learn HFSS from:
- A colleague who already knows it (if available)
- YouTube tutorials (unofficial, variable quality)
- Trial and error (slow, frustrating)

The learning curve is 2-6 months to basic productivity. Many engineers never learn simulation at all because the upfront time investment is too high.

**What this costs them:** High barrier to adoption means fewer engineers use simulation at all. Every engineer who skips simulation and guesses an antenna design is a potential customer who was never captured.

### 5. Mobile and field use is impossible

An engineer at an antenna installation site cannot open HFSS. Even with remote desktop, the latency kills usability. The tools assume you are at a desk with a powerful workstation.

Field engineers measure antenna VSWR with a handheld VNA, write it in a notebook, and later (maybe) compare against simulation — if they remember. There is no mobile app, no tablet interface, no offline mode.

**What this costs them:** They completely miss the "install and verify" market — the fastest-growing segment as IoT and 5G deployments explode.

### 6. Lock-in is obvious and resented

HFSS projects cannot be opened in CST. CST projects cannot be opened in Feko. Switching costs are enormous. Once a company has 500 HFSS simulation files, they are locked in for life.

Vendors exploit this lock-in with annual price increases of 5-10% above inflation. Customers resent it but cannot leave. This resentment creates hunger for any viable alternative.

**What this costs them:** Customers stay because they have to, not because they want to. When a viable alternative appears (cloud-native, data portable, open format), the lock-in will shatter faster than vendors expect.

### 7. Support is slow and expensive

Enterprise support is priced into the $20-30k license. But if you are a freelance engineer with a cracked copy (or a shared license with limited support incidents), you get zero help. Even paying customers report 24-48 hour response times for non-critical issues.

**What this costs them:** Engineers learn to solve their own problems or ask on forums. Vendor support becomes irrelevant. When the support relationship is gone, the loyalty is gone.

---

## Which Customers They Ignore

### Ignored Segment 1 — Independent RF Consultants (the "Solo Professional")

**Size:** Estimated 10,000-20,000 worldwide.

**Why they are ignored:** Too small to justify enterprise sales effort ($30k ACV from one person? Not worth the sales commission). Too price-sensitive to buy full-priced licenses. Too technically competent to need support. They fly under the radar.

**What they do instead:** Pirate HFSS. Share licenses with friends. Avoid simulation-heavy projects. Charge less than they should because they cannot offer simulation reports.

**What they need:** $100-250/mo tool. Instant setup. Pay-as-you-go. Accuracy good enough for 90% of commercial work. Export to standard formats.

**Revenue left on table by competitors:** ~$1,500-3,000/mo per consultant × 10,000 consultants = **$15M-36M/mo in untapped revenue.**

### Ignored Segment 2 — IoT Hardware Startups

**Size:** 5,000-15,000 active hardware startups globally (not counting dead ones).

**Why they are ignored:** Startups have no procurement department, no purchase order system, no IT-managed software budget. They do not fit the enterprise sales model. They also churn at high rates (50% fail within 2 years), so the LTV seems unattractive.

**What they do instead:** Use reference designs (suboptimal antenna). Copy from open-source (wrong for their enclosure). Skip simulation entirely (multiple PCB spins). Ship bad antennas (poor range, failed certification). Hire a consultant once and hope.

**What they need:** $50-100/mo. PCB trace antenna templates. Enclosure material simulation. FCC pre-compliance checks. Integration with Altium/KiCad.

**Revenue left on table by competitors:** At $79/mo, even 2,000 startups = **$158k/mo.** At scale: $500k-1M/mo.

### Ignored Segment 3 — University Labs (Multi-Student)

**Size:** ~2,000 antenna/EM research labs globally, each with 5-20 students.

**Why they are ignored:** Low revenue per seat ($20-50/mo is too small for enterprise sales). Complicated procurement (educational discounts require paperwork). High support cost per dollar of revenue.

**What they do instead:** Share 5 floating licenses across 20 students. Waste days waiting for license availability. Use OpenEMS with no UI (steep learning curve, bugs). Graduate students who never learn proper simulation workflow.

**What they need:** Per-student pricing at $20-30/mo. No license server. Multi-user management for the professor. Export to formats suitable for papers. Integration with Google Scholar for citations.

**Revenue left on table by competitors:** $20-30/mo × 10,000 students = **$200k-300k/mo.** Plus the long-term play: students who learn on a tool become professionals who buy it.

### Ignored Segment 4 — Advanced Hobbyists / Ham Radio Operators

**Size:** 50,000-100,000 globally (ham radio alone: 3M licensed operators, ~3% do antenna design).

**Why they are ignored:** Zero revenue potential per user. High support cost. No procurement path. They are a distraction to enterprise-focused sales teams.

**What they do instead:** Free online calculators (single-frequency, inaccurate). Spreadsheets. Build-measure-build cycles on the workbench. Buy $50-200 antennas on Amazon instead of designing custom ones.

**What they need:** Free tier with 5-10 sims/month. Simple UI. YouTube-integrated tutorials. Community templates. No credit card required.

**Revenue left on table by competitors:** Near-zero direct. But this segment is the **feedstock** for the other segments. A hobbyist today is a consultant tomorrow, a startup founder the day after.

### Ignored Segment 5 — Field Installation Engineers

**Size:** 20,000-50,000 technicians who install and commission antennas for cellular, broadcast, satellite, and IoT networks.

**Why they are ignored:** They are not "engineers" in the traditional EM sense. They do not design antennas — they install them. No competitor builds tools for this workflow.

**What they do instead:** Use a handheld VNA to measure VSWR. Write it down. Email a photo of the screen to someone who might care. No comparison against the design specification. No documentation.

**What they need:** Mobile-friendly interface. VNA data import via Bluetooth/USB. Automatic comparison against design spec. Photo documentation with geotags. One-button report generation for the client.

**Revenue left on table by competitors:** $20-40/mo per technician × 50,000 = **$1M-2M/mo.** Entirely unserved.

---

## The Ignored Market — Total Addressable

| Segment | Size (potential customers) | WTP per month | Untapped monthly revenue |
|---------|--------------------------:|:-------------:|------------------------:|
| Independent RF consultants | 15,000 | $79-249 | $1.2M-3.7M |
| IoT hardware startups | 10,000 | $79-249 | $790k-2.5M |
| University students | 15,000 | $25 | $375k |
| Field installation engineers | 50,000 | $20-40 | $1M-2M |
| Advanced hobbyists | 75,000 | $0-15 | $0-1.1M |
| **Total** | **~165,000** | **—** | **$3.4M-9.7M/mo** |

These are customers HFSS, CST, Feko, and OpenEMS have explicitly or implicitly chosen not to serve.

**AntennaForge is not competing for HFSS's customers. AntennaForge is serving customers HFSS refuses to serve.**
