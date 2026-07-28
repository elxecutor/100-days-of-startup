# NSF SBIR/STTR Phase I Grant Application Draft

## Project Title: Cloud-Based Electromagnetic Simulation Platform for Small Manufacturers and IoT Hardware Startups

### Agency: National Science Foundation
### Program: SBIR (Small Business Innovation Research) — Seed Fund
### Topic: Advanced Manufacturing / Microelectronics and Semiconductors
### Estimated Budget: $275,000 (Phase I, 12 months)

---

## 1. Project Summary

### 1.1 Problem

Electromagnetic (EM) simulation is a critical step in antenna and RF circuit design for wireless products. However, commercially available EM simulation software (e.g., Ansys HFSS, Dassault CST) costs $20,000–$40,000 per user per year, requires dedicated high-performance workstations, and depends on on-premise license servers. These barriers effectively exclude small manufacturers, IoT hardware startups, and solo engineering consultants from performing professional-grade antenna simulation.

As a result, small hardware teams either:
(a) Skip simulation entirely and rely on trial-and-error prototyping (average cost: $15,000–$50,000 per board spin), or
(b) Use inappropriate tools that produce inaccurate results, leading to FCC certification failures and delayed product launches.

### 1.2 Solution

AntennaForge is a cloud-native 3D EM simulation platform that runs entirely in a web browser. Users define antenna geometry through an interactive 3D editor, submit simulation jobs to an autoscaling cloud compute cluster, and receive results (S-parameters, radiation patterns, Smith charts) within minutes — with no software installation, no license management, and no upfront capital expenditure.

### 1.3 Innovation

This project addresses three technical gaps in existing EM simulation tools:

1. **Cloud-native FDTD solver orchestration**: We containerize the OpenEMS finite-difference time-domain (FDTD) solver and deploy it on Kubernetes with GPU acceleration support, enabling autoscaling compute without user infrastructure management.

2. **Browser-based 3D geometry engine for RF**: Real-time parameterized antenna geometry editing using WebGL (Three.js), with constraint-based design rules specific to common antenna topologies (IFA, PIFA, meandered monopole, patch).

3. **Simulation-to-measurement correlation database**: A systematic database of simulated vs measured antenna performance across common PCB stackups and frequency bands, enabling AI-assisted design correction.

### 1.4 Commercial Impact

Phase I will validate solver accuracy against industry-standard tools and physical measurements, develop multi-port support for MIMO antenna design, and establish a customer pipeline of 50+ paying users. Phase II will target defense/aerospace applications, FDA wireless medical device compliance, and automotive radar certification.

---

## 2. Technical Objectives (Phase I)

### Objective 1: Solver Accuracy Validation
- Compare AntennaForge simulation results (S11, gain, efficiency, pattern) with HFSS/CST across 10 reference antenna designs
- Achieve correlation within:
  - Resonance frequency: ±5 MHz (at 2.4 GHz)
  - S11 magnitude: ±1.5 dB
  - Peak gain: ±1 dB
  - Pattern shape: 90% correlation coefficient
- Document all discrepancies and root causes

### Objective 2: Multi-Port S-Parameter Support
- Extend the solver interface to support 2-port and 4-port simulations for MIMO antennas and differential feeds
- Implement Touchstone (.S2P, .S4P) file export
- Validate with a 2-port PIFA MIMO antenna reference design

### Objective 3: GPU-Accelerated Solver
- Integrate GPU acceleration (CUDA/OpenCL) into the OpenEMS solver pipeline
- Target: 3–5× speedup over CPU-only simulation for typical PCB antenna meshes
- Benchmark against CPU baseline across 20 reference designs

### Objective 4: Enclosure and Environment Modeling
- Allow users to import STEP/STL files for enclosure and battery geometry
- Extend material library (plastics, metals, absorbers)
- Validate with a smart sensor reference design inside a plastic enclosure

### Objective 5: User Growth and Commercial Validation
- Grow to 200 active users across target segments
- Achieve 20% conversion from free trial to paid subscription
- Conduct 30 structured user interviews to validate product-market fit

---

## 3. Technical Approach

### 3.1 FDTD Solver Containerization (Months 1–3)

Current state: OpenEMS is installed natively on a single server with manual job queuing. We will:
- Dockerize OpenEMS with all dependencies (CSXCAD, Python bindings, h5io)
- Create Helm charts for Kubernetes deployment with GPU node pools
- Implement a job queue (Redis + Celery) for simulation request handling
- Build auto-scaling policies: scale up on queue depth, scale to zero after idle period

Deliverable: Containerized solver running on K8s with autoscaling.

### 3.2 Solver Accuracy Benchmarking (Months 2–5)

We will fabricate and measure 10 antenna reference designs covering:
- Frequency: 433 MHz, 868/915 MHz, 2.4 GHz, 5.8 GHz
- Antenna types: IFA, PIFA, meandered monopole, patch, chip antenna (simulated as 3D model)
- Substrates: FR4, Rogers 4350B, flex PCB

Each design will be:
1. Simulated in AntennaForge
2. Simulated in HFSS (baseline)
3. Simulated in CST (secondary reference)
4. Fabricated and measured with VNA (Keysight E5071C) and 3D chamber
5. Documented in a public correlation database

Deliverable: Accuracy report with 10 validated reference designs.

### 3.3 Multi-Port Extension (Months 3–6)

OpenEMS natively supports multiple excitation ports. We will extend the platform to:
- Accept multi-port geometry definitions via the web UI
- Run separate simulations for each feed (mutual coupling requires careful handling)
- Export multi-port Touchstone files
- Display mutual coupling (S21, S12) in the results viewer

Deliverable: Multi-port simulation support with validated 2-port reference.

### 3.4 GPU Integration (Months 4–8)

OpenEMS uses basic OpenMP parallelism for CPU. We will:
- Profile solver to identify GPU-eligible kernels (field update loop, DFT calculation)
- Implement CUDA kernels for the FDTD update loop
- Fall back to CPU for non-parallelizable operations (mesh generation, file I/O)
- Benchmark speedup on NVIDIA A10G (K8s GPU nodes)

Deliverable: GPU-accelerated solver with 3–5× speedup.

### 3.5 Enclosure Import and Material Library (Months 6–10)

- Integrate STEP/STL file parser (assimp or similar)
- Implement voxelization of imported mesh into the FDTD grid
- Material library expansion: common plastics (ABS, PC, PP), metals (Al, steel, Cu), microwave absorbers
- Validate with an enclosed reference design

Deliverable: Enclosure modeling support with validated test case.

### 3.6 Commercial Validation (Months 1–12, ongoing)

- Growth marketing via technical content (blog, LinkedIn, YouTube)
- Community engagement in RF forums
- Cold outreach to RF consultants and IoT startups
- User interview program (3 structured interviews per week)
- Pricing optimization through A/B testing

Deliverable: 200 active users, 20% paid conversion, 30 user interviews.

---

## 4. Project Team

### Principal Investigator (PI): [Your Name]
- 8 years RF engineering experience at [Companies]
- Designed antennas for [Specific Products] (1M+ units shipped)
- Expertise: antenna design, FDTD simulation, PCB layout for RF
- Role: Technical lead, solver development, user research

### Co-PI / Research Consultant: [Academic Collaborator Name, if applicable]
- Professor of Electrical Engineering at [University]
- Expertise: computational electromagnetics, numerical methods
- Role: Solver accuracy validation, algorithmic guidance

### Software Engineer (to be hired)
- Expertise: Kubernetes, Python, WebGL
- Role: Platform infrastructure, frontend development

---

## 5. Budget Summary

| Category | Year 1 |
|----------|--------|
| PI Salary & Benefits | $90,000 |
| Software Engineer (0.5 FTE) | $55,000 |
| Research Consultant | $15,000 |
| Equipment (GPU compute, VNA access) | $25,000 |
| PCB Fabrication (10 reference designs × 5 revs) | $15,000 |
| Measurement Lab Time (3D chamber, 40 hours) | $20,000 |
| Cloud Infrastructure (AWS/Azure K8s) | $30,000 |
| Travel (conference, user visits) | $10,000 |
| Materials & Supplies | $5,000 |
| Indirect Costs (F&A, max allowed for SBIR) | $10,000 |
| **Total** | **$275,000** |

---

## 6. Commercialization Plan

### Market Size
- Total addressable market (TAM): $4.8B (global EM simulation software)
- Serviceable addressable market (SAM): $800M (small-to-medium engineering teams, IoT hardware)
- Serviceable obtainable market (SOM): $15M (year 3 target, 0.3% penetration of IoT hardware segment)

### Revenue Model
| Tier | Price | Features |
|------|-------|----------|
| Pay-per-sim | $10/sim | Individual simulations, occasional use |
| Monthly Unlimited | $200/mo | Unlimited simulations, priority queue |
| Team (2026) | $500/mo for 3 seats | Shared projects, admin console |

### Go-to-Market
- Channels: Technical content marketing, community building (Reddit, Discord, Stack Exchange), cold outreach, university partnerships
- Sales cycle: 1–7 days for self-serve, 2–4 weeks for team plans
- Target segments in order: RF consultants → IoT hardware startups → university labs → small manufacturers

### Competition
| Competitor | Strength | Weakness | Our Advantage |
|------------|----------|----------|---------------|
| Ansys HFSS | Accuracy, brand | Cost ($30k/yr), desktop-only | Cloud-native, pay-per-use |
| Dassault CST | Broadband solvers | Same cost issues, Dassault lock-in | No lock-in, open formats |
| OpenEMS | Free | No GUI, steep learning curve | UX + cloud compute |
| EMCoS, Altair | Niche solvers | Small market share | Better UX, IoT focus |

---

## 7. Broader Impacts

- **Small manufacturers**: Access to professional EM simulation without $30k capital investment, enabling US small businesses to compete in wireless product development
- **Education**: Free tier for university labs — students can simulate antennas without lab workstation scheduling
- **Open source**: Contributions to OpenEMS solver upstream, public measurement database advancing antenna design knowledge
- **Workforce development**: Lower barrier to entry for aspiring RF engineers

---

## 8. Timeline (12 Months)

| Month | Milestone |
|-------|-----------|
| 1–2 | Solver containerization, K8s deployment, autoscaling |
| 2–3 | Initial accuracy benchmarking (3 reference designs) |
| 3–4 | Multi-port support development |
| 4–5 | Solver accuracy benchmarking complete (10 designs) |
| 5–7 | GPU acceleration kernel development |
| 6–8 | Enclosure import and material library |
| 7–9 | GPU solver benchmarking complete |
| 8–10 | Beta launch to 50+ users |
| 9–11 | User feedback integration, iteration |
| 10–12 | Accuracy validation report, 200 users, Phase II planning |

---

*This grant application is a draft. Final submission will require budget justification, biographical sketches, and a data management plan per NSF SBIR guidelines.*
