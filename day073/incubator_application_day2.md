# Day 73 — Incubator Application Drafting (Day 2)

**Theme:** Research and draft Y Combinator + Techstars applications

---

## Y Combinator Application — Full Draft

### What is your company going to make?

AntennaForge is a cloud-native antenna simulation platform that runs entirely in the browser. We are building the Figma of RF engineering — a collaborative, GPU-accelerated electromagnetic solver that lets hardware engineers design, simulate, and iterate on antennas without installing a single piece of software.

### What is your product and how does it work?

AntennaForge is a web application with three layers:

1. **Design Canvas** — A parametric 3D geometry editor where users draw antenna structures (patch, dipole, horn, array, etc.) using a drag-and-drop interface. Integrates with CAD imports (STEP, STL) for existing models.

2. **Solver Engine** — A cloud-hosted finite element method (FEM) and method of moments (MoM) hybrid solver running on GPU clusters. Users click "Simulate" and get results (S-parameters, radiation patterns, impedance, gain) in minutes instead of hours. The solver auto-meshes, parallelizes across GPUs, and caches results.

3. **Collaboration Layer** — Real-time shared projects, version history, comment threads, and one-click report generation (PDF, interactive 3D plots). Designed for teams where RF engineers, mechanical engineers, and product managers need to stay aligned.

The platform handles geometry import → meshing → solve → post-processing → reporting in a single browser tab.

### Who are your customers and how will you acquire them?

**Primary customers:**
- IoT hardware startups (smart devices, connected sensors, wearables)
- Defense contractors (antenna design for communications, radar)
- Telecom/RF consultancies
- University research labs

**Acquisition channels:**
- **Direct sales** — Outreach to CTOs and RF engineering leads at IoT startups via LinkedIn and cold email. Offer 30-day free trials.
- **Content marketing** — Technical blog posts ("How to design a 2.4 GHz patch antenna in 10 minutes"), YouTube tutorials, open-source antenna design libraries.
- **Community** — Partner with IEEE, Reddit r/rfelectronics, and Hackaday. Sponsor university antenna design competitions.
- **PLG** — Self-serve signup for individuals, team plans for companies. Freemium tier (limited mesh resolution) drives adoption.

### Why is this a good time to start this company?

Three converging trends:

1. **Cloud compute is now viable for EM simulation.** GPU-accelerated instances (A100, H100) make what used to require a $50k workstation achievable on demand for pennies per minute. AWS and GCP now offer bare-metal GPU instances suitable for HPC workloads.

2. **IoT explosion raises antenna demand.** There are 15B+ connected devices. Every smart sensor, tracker, and wearable needs an antenna. The engineers designing them are at startups that cannot afford ANSYS licenses.

3. **Engineers expect web-native tools.** The old guard (HFSS, CST) is desktop-only, Windows-only, license-manager-locked. A generation of engineers trained on Figma, GitHub, and Google Docs will not tolerate 1990s UX. The market is ready for a modern alternative.

### Who are the founders and why are you the right team?

*(To be filled with founder bios — suggest structure below)*

**Founder 1 (CEO/Product):** Background in RF engineering + product management. Deep domain knowledge of antenna design workflows and the pain of legacy simulation tools. Previously led RF design at [X] and shipped [Y] antenna products to production.

**Founder 2 (CTO/Infrastructure):** Background in HPC and distributed systems. Experience building GPU-accelerated solvers. Previously built [Z] simulation pipeline that reduced solve times by 10x.

We combine the domain expertise to know what engineers actually need with the technical ability to build it.

### How do you know customers need this?

We conducted 25+ customer discovery interviews with RF engineers at:
- IoT hardware startups (smart home, industrial sensing)
- Defense primes (antenna design teams)
- RF consultancy firms

**Key signals:**
- 100% of engineers we spoke to described their current toolchain as "painful" or "frustrating"
- 80% said license cost is a major constraint for their team size
- 60% said they have considered cloud-based alternatives but found none viable
- Several engineers shared stories of 2+ hour simulation queue wait times because license server slots were full

Additionally, existing solutions (Altair One, SimScale) are general-purpose simulation and do not specialize in antenna/RF — leaving a gap for a vertical-specific platform.

---

## Techstars Application — Draft Sections

### Problem & Solution (Techstars angle)

Hardware teams waste 40% of their engineering budget on simulation software licenses and IT maintenance. AntennaForge eliminates both by moving electromagnetic simulation to the cloud — no installs, no license servers, no IT overhead. Engineers get faster solves via GPU clusters and can collaborate in real-time across teams.

### Market size

The CAE (computer-aided engineering) simulation market is $10B+ and growing at 8% CAGR. The RF/microwave segment is $1.5B. By removing cost and friction, AntennaForge expands the addressable market to include early-stage hardware startups that currently skip simulation entirely due to cost.

### Business model

- **Free tier:** 1 project, limited mesh (10k elements)
- **Pro ($99/mo):** Unlimited projects, 100k elements, 5 team seats
- **Team ($299/mo):** 500k elements, unlimited seats, version control, admin
- **Enterprise (custom):** On-prem option, SSO, dedicated GPU clusters, SLA

### Traction / milestones

*(Placeholder for real metrics)*
- Beta signups: [X]
- Active users: [Y]
- Simulations run: [Z]
- LOIs from enterprise customers: [W]

### Competitive advantage

- **Vertical specialization:** Unlike Ansys (general-purpose) or SimScale (cloud CFD), AntennaForge is built specifically for antenna/RF design. Custom meshing tuned for EM, built-in antenna templates, RF-specific post-processing.
- **Modern UX:** Real-time collaboration, version history, one-click sharing. Engineers can send a link instead of a PDF.
- **Cost:** 10x cheaper than equivalent commercial licenses on an annual basis.
