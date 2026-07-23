# Day 74 — Incubator Application Drafting (Day 3)

**Theme:** HAX application, comparison table, tracking sheet, pitch paragraph

---

## HAX Accelerator Application Draft

### The Hard Tech Angle

HAX is unique among accelerators — it is built for hardware-first, deep-tech companies. AntennaForge is technically a SaaS, but its core value proposition rests on hard tech: a physics-accurate electromagnetic solver that runs on distributed GPU infrastructure.

### 1. What hard tech are you building?

We are building a hybrid FEM/MoM electromagnetic solver optimized for GPU architectures, delivered as a cloud API and web application. Key technical innovations:

- **Auto-adaptive meshing for antenna geometry** — Proprietary meshing algorithms that handle the high aspect ratios typical of antenna structures (thin traces, large ground planes) without requiring manual mesh refinement.
- **GPU-parallelized matrix assembly and solve** — Our solver kernel uses CUDA/HIP to parallelize the MoM impedance matrix fill (the bottleneck in traditional solvers). Early benchmarks show 20x speedup over CPU for moderate-size problems (100k unknowns).
- **Browser-based 3D visualization** — WebGL/WebGPU rendering of radiation patterns, surface currents, and near-field distributions. No install required.
- **Distributed batch solve** — Users can queue parametric sweeps (sweep frequency, geometry parameters) across a GPU cluster, receiving results in minutes.

### 2. What is the hardware/software breakdown?

| Layer | Software | Hardware |
|-------|----------|----------|
| Geometry input | Web-based 3D canvas + CAD import | User's laptop (any OS) |
| Meshing | Cloud auto-mesher | CPU cluster (pre-processing) |
| Solving | GPU-accelerated FEM/MoM solver | GPU cluster (NVIDIA A100/H100) |
| Post-processing | Interactive WebGL plots | User's browser |
| Storage | S3/CDN for result archives | Cloud object storage |

The hardware moat: solver optimization for specific GPU architectures, custom CUDA kernels that are not easily replicated.

### 3. Manufacturing & supply chain (HAX asks this)

While AntennaForge is a simulation tool (not a physical product), we help with manufacturing indirectly: our simulation results are directly exportable as Gerber files (for PCB antennas) and 3D printing CAD files (for custom antenna housings). Engineers can go from simulation → fabrication without leaving the platform. HAX's Shenzhen supply chain network would help us build integrations with PCB fab houses and antenna test labs.

### 4. Team background relevant to hard tech

*(Placeholder)*
- RF/microwave engineering PhD or equivalent experience
- HPC and GPU programming background
- Previous hardware product shipped to production

---

## Incubator Comparison Table — Where to Apply First

Apply to **3 in parallel** for maximum coverage. Recommended order:

| Priority | Incubator | Why | Apply By | Probability | Effort |
|----------|-----------|-----|----------|-------------|--------|
| **1st** | **Y Combinator** | Highest value, broadest network. B2B SaaS model fits their thesis. | Rolling (next batch) | Low (~2%) but worth it | High |
| **2nd** | **HAX** | Hardware expertise. They understand solver + antenna domain. | Rolling | Medium (~5%) | Medium |
| **3rd** | **TinySeed** | B2B SaaS specific. Remote program, no relocation. Capital-efficient. | Next batch (~2 mo) | Medium (~3%) | Medium |
| *Backup* | *Techstars* | If above don't work, strong network. | Cohort-dependent | Low (~1.5%) | High |

---

## Submission Tracking Spreadsheet

| Name | Deadline | Status | Submitted Date | Response Date | Notes |
|------|----------|--------|----------------|---------------|-------|
| Y Combinator (W2025) | Rolling (next batch cutoff: TBD) | Not started | — | — | Apply 2 weeks before batch |
| HAX (Shenzhen) | Rolling (cohorts quarterly) | Not started | — | — | Need hardware-focused video pitch |
| TinySeed (Batch 9) | TBD (watch for announcement) | Not started | — | — | B2B SaaS focus, remote |
| Techstars (Anywhere) | Varies by city | Not started | — | — | Research which city cohort fits |
| Startupbootcamp IoT | TBD | Not started | — | — | Equity-free grant possible |
| Entrepreneur First | Cohort-based | Not started | — | — | Only if needing co-founder |
| Plug and Play IoT | Rolling | Not started | — | — | Corporate pilot opportunity |

---

## Final Pitch Paragraph (Customizable)

> AntennaForge is a cloud-native antenna simulation platform that replaces expensive desktop tools like HFSS and CST with a browser-based, collaborative alternative. Hardware engineers use it to design, simulate, and iterate on antennas in minutes instead of hours — without installing software, managing license servers, or waiting for IT. Our GPU-accelerated solver runs in the cloud, so a startup can access enterprise-grade simulation for $99/month instead of $50k/year. We are making antenna design as fast and accessible as modern software development.
