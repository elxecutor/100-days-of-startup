# Day 59 — User Interviews (Batch 3)

> "Interview potential users (last 5)"

## Methodology (same as Days 57–58)

---

## Interview 11 — Daniel Kim

**Background:** Recent EE graduate (May 2026), University of Texas at Austin. Focused on RF/microwave engineering. Has a job offer from a defense contractor starting in August but is worried he's underprepared for the simulation-heavy role.

**Interviewer:** Daniel, walk me through the last antenna simulation you ran.

**Daniel:** I ran one for my senior capstone project. We designed a circularly polarized patch antenna for a cubesat. I used the student version of HFSS. It was limited to 2,000 mesh cells — basically enough to simulate a patch antenna in free space with no enclosure. I wanted to model it inside our cubesat frame but the mesh ran out. My professor said "just trust that it'll work."

**Interviewer:** What tools did you use during your degree?

**Daniel:** For labs we used MATLAB mostly — analytically solving fields, not simulating real geometries. I used HFSS student version for one class. I used a Python library called "antenna" — it's not very good. No one taught us how to use commercial tools. The expectation is you learn on the job. I'm scared I'll show up at this defense job and they'll say "open CST and simulate this array" and I won't know how.

**Interviewer:** What have you tried?

**Daniel:** I tried to learn CST during my last semester. I downloaded the trial. The installer was 8 GB. It took 45 minutes to install. Then I couldn't get the license to work — it said "check your license server settings." I didn't know what that meant. I googled for 3 hours, gave up. I tried watching CST tutorials on YouTube but they all assume you already have the tool running.

**Interviewer:** What would make you switch?

**Daniel:** Switch? I'd need a starting point. I've never used any tool properly. If there was a browser-based tool with built-in tutorials — like, "click here to simulate your first patch antenna" with a step-by-step walkthrough — I'd pay $30/month just to learn. I need to arrive at this job not completely clueless.

**Interviewer:** Magic wand?

**Daniel:** A "simulation playground" where I can try things and see what happens. No install, no license, just open a browser and start simulating. With video tutorials built into the interface. With a cheat sheet of common antenna types and their properties. I want to play with it for a month and feel like I actually understand what I'm doing before I start my job.

---

## Interview 12 — Sarah Montgomery

**Background:** CTO of a 12-person drone startup in Denver. Background in aerospace engineering. Their drones use custom RF links for beyond-visual-line-of-sight (BVLOS) operations. Company is Series A funded.

**Interviewer:** Sarah, walk me through your last antenna design.

**Sarah:** We needed a lightweight, low-profile antenna for a BVLOS drone that operates at 2.4 GHz and 900 MHz. Our EE designed it using... honestly, intuition and some online calculators. We prototyped five versions on a quick-turn PCB service. The fifth one was acceptable. The RF team spent 3 weeks and maybe $3k in prototypes.

**Interviewer:** What tools do you use?

**Sarah:** Our EE uses Altium for PCB layout. For simulation, nothing. We're a small team, our EE is amazing at digital but RF is a side skill. I've asked around about simulation tools. Everyone says "you need a specialist" or "you need HFSS." We can't afford a specialist and HFSS.

**Interviewer:** What have you tried?

**Sarah:** I looked at hiring an RF consultant (Marco-level) to do our antenna work. The quotes were $5k–$10k per antenna design. We have 3 antenna designs per product. That's $30k per product. We looked at COMSOL — quote was $15k. We looked at an EM simulation SaaS called "EMCoS" — it's $200/month but doesn't do what we need. We thought about buying a VNA and doing measurement-based tuning but that requires building prototypes.

**Interviewer:** What would make you switch?

**Sarah:** I need our EE to be able to use it. That means: simple UI, good defaults, maybe an AI that suggests designs. Must import Altium PCB layouts directly. Must simulate in the context of the drone frame (carbon fiber affects radiation). Price under $300/month for the company. We'd sign a year contract.

**Interviewer:** Magic wand?

**Sarah:** I upload our PCB layout (Altium format). The tool identifies the antenna footprint. It suggests a ready-to-use antenna design optimized for our frequencies. I click "simulate in drone body" — it uses a 3D model of our drone frame. It tells me "this design will give you 5km range at 2 Mbps at 900 MHz." I export a report and we manufacture. That's what I need.

---

## Interview 13 — Carlos Mendez

**Background:** Field installation technician for a rural broadband ISP in Colombia. He installs and maintains point-to-point wireless links. Works with 5 GHz and 60 GHz equipment. Doesn't have an engineering degree — learned on the job over 8 years.

**Interviewer:** Carlos, walk me through how you work with antennas.

**Carlos:** I install them. I don't design them. But I'm the guy who has to make them work in the real world. I get a radio and a dish. I aim it, I use a spectrum analyzer to check signal. If the signal is bad, I try a different antenna position or a different antenna. I'm very good at this but it's trial and error.

**Interviewer:** What frustrates you?

**Carlos:** The datasheets lie. The antenna specs say "25 dBi gain" but that's in an anechoic chamber with perfect alignment. In the field, with a pole that flexes in the wind and trees that grow in the Fresnel zone, I'm lucky to get 20 dBi. I've always wanted a tool where I can input my real-world conditions and get realistic predictions.

**Interviewer:** What have you tried?

**Carlos:** I use the calculators that come with the radio — Ubiquiti has a link planner. It's okay but it treats antennas as black boxes. I've taken photos of installations and sent them to the manufacturer's support asking "why is the signal bad?" They always say "check alignment." I know it's alignment. I want to know how much misalignment is acceptable.

**Interviewer:** What would make you switch?

**Carlos:** I need a mobile-friendly tool. I'm on a ladder or in a bucket truck. I pull out my phone, I enter the antenna model, the distance, the frequency, the expected wind loading. It tells me: expected signal, expected variation, margin. If I can take a photo and have it estimate the mounting structure's effect on the beam... that's science fiction but I'd love it.

**Interviewer:** Magic wand?

**Carlos:** An app on my phone. I point it at the installed antenna. It uses AR to visualize the beam pattern overlayed on the real world. I move my phone and it shows me where the signal is going. Like a thermal camera for RF. That would make me the best installer in Colombia.

---

## Interview 14 — Anika Patel

**Background:** PCB design engineer at a consumer electronics company in Austin. 7 years experience. Designs high-speed digital boards but occasionally has to include RF sections (Wi-Fi, Bluetooth, LTE). Considers herself "not an RF person."

**Interviewer:** Anika, walk me through your last experience with antenna design.

**Anika:** Last month I had to add a Wi-Fi 6E antenna to a smart home hub. I used the reference design from the chipset vendor (TI). Placed the FPC antenna exactly where the app note said. When we tested, the throughput was 40% below spec. I moved the antenna 10mm. It improved to 20% below. I moved it again. Eventually I got it working after 7 PCB spins. My boss asked "why did this take so long?"

**Interviewer:** What tools do you use?

**Anika:** Altium Designer for PCB layout. I don't have any RF simulation tools. I asked our purchasing person about getting one. They said "$15,000 is not in the budget for something only you will use." I use reference designs and app notes. When those don't work, I iterate. I'm good at iterating but it's slow and expensive.

**Interviewer:** What have you tried?

**Anika:** I tried an online PCB impedance calculator. That's about the extent of my "simulation." I tried using a free 2.5D EM solver (Sonnet Lite) — it's limited to two layers and small boards. Our boards are 6-8 layers. I've asked our RF consultant (we hire one occasionally) to simulate our antenna. It costs $2k and takes 2 weeks. I don't have that kind of budget or timeline per PCB spin.

**Interviewer:** What would make you switch?

**Anika:** A tool that integrates with my PCB design flow. In Altium, I select the net connected to the antenna, right-click, "simulate this antenna." It exports the PCB stackup, the antenna geometry, the ground plane shape, runs a simulation, and comes back with "recommendations: extend ground plane 5mm, increase clearance around feed point by 2mm." I don't need to understand EM theory. I need guidelines.

**Interviewer:** Magic wand?

**Anika:** A "RF assistant" in my PCB tool. It watches my layout and says "⚠️ The ground plane under your antenna is only 10mm. Extend to 20mm for best performance." Or "⚠️ Your antenna feed line has an impedance discontinuity here." I want RF guidance in a language I understand: layout rules, not Maxwell's equations.

---

## Interview 15 — Tunde Ogunlesi

**Background:** Manufacturing engineering manager at an antenna OEM outside Lagos, Nigeria. His factory produces VHF/UHF base station antennas, Yagis, and panel antennas for African telecom operators. 14 years experience. Previously worked for a European antenna manufacturer.

**Interviewer:** Tunde, walk me through your antenna design process.

**Tunde:** We don't design from scratch. We have a catalog of ~50 antenna designs developed over 20 years. When a customer asks for something new, we modify an existing design. We simulate using... well, we have one engineer with a cracked copy of FEKO from 2015. It crashes constantly. It works on one specific Windows 7 machine that we keep running just for this purpose.

**Interviewer:** What tools do you use and what do they cost?

**Tunde:** The cracked FEKO cost us nothing (illegally). An official license would be about $18k — my entire annual training budget. We also have a network analyzer and a far-field range (an open field, actually). We rely heavily on measurement. Simulation is a "nice to have" that we can barely do.

**Interviewer:** What have you tried?

**Tunde:** I've tried to get proper tools. I've contacted CST, Altair, ANSYS. The sales process is: they ask about our company, I tell them we're in Nigeria with 80 employees, they send a quote in euros, I convert to naira, I cry. Then they ask for a PO. Our procurement system takes 3 months for international payments. The tool arrives, we install it, it needs a license server — our IT has never set one up. It takes another 2 months. We give up.

**Interviewer:** What would make you switch?

**Tunde:** No installation. Pay in local currency or at least via mobile money (we use Flutterwave). A plan that fits our size — maybe $300-500/month for 2-3 users. Offline capability — our internet goes down weekly. Must output in formats our CNC machines can use for element fabrication. If it works on a mobile hotspot, even better.

**Interviewer:** Magic wand?

**Tunde:** I send a photo of a competitor's antenna to the tool. It reverse-engineers the dimensions, simulates the performance, and gives me a design I can manufacture with our existing processes. The tool is optimized for African manufacturing constraints — it knows what materials are available locally, what tolerances our machines can hold. That would make us competitive with European manufacturers.

---

## Summary Analysis — All 15 Interviews

### Demographics

| Category | Count |
|----------|-------|
| Independent consultant | 1 |
| Startup (CTO/engineer) | 3 |
| University professor | 2 |
| Defense/aerospace | 2 |
| Automotive | 1 |
| Medical device | 1 |
| Hobbyist | 1 |
| NewSpace | 1 |
| Recent graduate | 1 |
| Field technician | 1 |
| Manufacturing | 1 |

### Pain Points (frequency mentioned)

| Pain Point | Mentions |
|------------|----------|
| Cost of enterprise tools ($10k+) | 14 |
| Open-source too difficult/unreliable | 12 |
| Need browser/cloud-based access | 10 |
| Simulation too slow (hours/days) | 9 |
| License management friction | 8 |
| Can't get budget approval | 8 |
| Tools don't match workflow | 7 |
| No mid-tier option exists | 7 |
| Steep learning curve | 6 |
| Can't simulate with real-world context | 5 |

### Willingness to Pay

| Price Range | Respondents |
|-------------|-------------|
| $0-15/month (hobbyist) | 1 |
| $30-79/month (individual) | 5 |
| $79-200/month (professional) | 5 |
| $200-500/month (team/company) | 3 |
| Not the buyer (corporate/defense) | 1 |

### Key Insights

1. **The gap is validated.** Every single interviewee confirmed the bifurcation: expensive-but-reliable vs free-but-broken. Zero found a viable mid-tier option.

2. **"Past behavior" beat "would you use this?"** Every person described real, specific pain — lost contracts, PCB spins, crashed simulations, wasted weekends. The need is not hypothetical.

3. **Browser-first is the killer feature.** 10 of 15 independently said "browser" without prompting. Installation and license management are as painful as cost.

4. **Accuracy expectations are reasonable.** Nobody expects HFSS-level accuracy. "Within 2 dB," "close enough for pre-scan," "good enough for teaching" — the bar is achievable.

5. **Segments want different things.** Consultants want PDF reports. Startups want CAD import. Universities want curriculum. Hobbyists want NEC2 export. The core solver can be the same; the packaging changes.

6. **Geographic variation is real.** African and Latin American users face procurement, currency, and internet challenges that are invisible to US/European users. Supporting mobile money, offline use, and low-bandwidth modes would unlock entire markets.

7. **The graduate pipeline is a Trojan horse.** If students learn on AntennaForge, they'll bring it into their employers. Daniel (Interview 11) represents thousands of grads entering industry without simulation skills.

### Risk Signals

- **Defense/enterprise won't switch** (Marcus, Elena). Their purchasing is locked. Target them for side projects, not day jobs.
- **Hobbyist price point is very low** (Lars at $10-15). May not be worth serving as a paid tier, but great for brand building.
- **Manufacturing needs offline** (Tunde). Cloud-only will exclude some emerging-market users.
