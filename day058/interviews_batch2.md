# Day 58 — User Interviews (Batch 2)

> "Interview potential users (next 5)"

## Methodology (same as Day 57)

---

## Interview 06 — Lars Jorgensen

**Background:** Ham radio operator (callsign: LA9XJ). 35 years old, IT consultant by day. Runs a popular YouTube channel about antenna building (45k subscribers). Lives in Oslo, Norway. Has designed and built over 200 antennas for HF, VHF, UHF, and microwave bands.

**Interviewer:** Lars, walk me through the last antenna you designed.

**Lars:** Two weekends ago I built a 6-element Yagi for 2m EME (moonbounce). I used my own spreadsheets and some NEC2 I run in a terminal on my home server. I modeled it, built it, put it on my antenna analyzer — the SWR curve matched my model within 3%. I was pleased, but the process is ugly. I spent more time fighting NEC2 input syntax than designing the antenna.

**Interviewer:** What tools do you use?

**Lars:** Free stuff. NEC2, 4nec2 (Windows only, I'm a Mac guy so I run it in Wine), EZNEC demo (limited to 20 segments, useless for anything real). I've tried MMANA-GAL — it's Japanese, the English translation is charming but the UI is from 1998. For VHF/UHF I sometimes use HFSS at work — I can stay late and use the company license. That's how I know what good simulation looks like.

**Interviewer:** What have you tried to solve this?

**Lars:** I've tried every free antenna simulator on the internet. There's maybe 15 of them. They're all either: abandonware from 2005, limited demos, or academic tools that require you to cite a paper to use them. I tried OpenEMS on my NAS. I watched 6 hours of tutorials and still couldn't simulate a simple quad loop. I thought about building my own solver — I'm a decent programmer — but I value my sanity.

**Interviewer:** What would make you switch?

**Lars:** A web app that doesn't make me install anything. I want to model wire antennas with an easy UI — click, drag, set properties. I want to see the radiation pattern in 3D and rotate it. I want NEC2-compatible output so I can export and share with other hams. I want to pay maybe $10–15/month. I'm a hobbyist. I'm not spending $79.

**Interviewer:** Magic wand?

**Lars:** I draw the antenna on a canvas. The software auto-meshes it. I set frequency range. It simulates using a cloud FDTD or MoM solver. I get SWR, gain, front-to-back ratio, 3D pattern. I click "export to YouTube video" and it generates a visualization I can narrate over for my channel. That would get me 100k subscribers.

---

## Interview 07 — Marcus Webb

**Background:** Senior RF systems engineer at a defense contractor outside Baltimore. 20 years experience. Works on electronic warfare systems. Active Secret clearance. Can't talk about most of his work.

**Interviewer:** Walk me through your last simulation — sanitize as needed.

**Marcus:** I was modeling a wideband spiral antenna for a DF (direction-finding) application. We use CST and HFSS. The model had about 200,000 mesh cells and took 36 hours on our HPC cluster. The simulation team is separate from my team — I submit a request, they put it in the queue, I get results 2-5 days later.

**Interviewer:** What does this cost you?

**Marcus:** The licenses are budgeted at the division level. I don't know the exact number — probably $200k/year for our department. The bigger cost is velocity. When I want to try 10 design variations, I'm looking at 10-20 business days. I make decisions with less data because simulation turnaround is too slow.

**Interviewer:** What have you tried?

**Marcus:** I've pushed for more HPC resources. I've tried simplified models that run faster. I've tried using method-of-moments instead of FDTD when geometry allows. The fundamental problem is that these tools were designed in the 90s and the workflow hasn't changed. Install on a workstation, license check out, submit to cluster, wait, get results, plot in MATLAB. Every step is manual.

**Interviewer:** What would make you switch?

**Marcus:** For our secure environment, most cloud tools are non-starters. But I have an unclassified side — I teach a course at a community college, I mentor FIRST Robotics kids, I do conference talks. For that, I'd use a browser tool. Must be ITAR-compliant or at least understand that some users have export control restrictions. Must have a FIPS-compatible mode.

**Interviewer:** Magic wand?

**Marcus:** A simulation tool with a proper API. I write a Python script that generates geometries, runs parametric sweeps, and collects results — all programmatically. Then I can integrate simulation into our CI/CD pipeline for hardware. That's the dream.

---

## Interview 08 — Priya Sharma

**Background:** Satellite communications engineer at a NewSpace startup in Bangalore. 5 years experience. Designs S-band and X-band antennas for LEO cubesats and smallsats. Previous role at ISRO.

**Interviewer:** Last antenna simulation you ran?

**Priya:** An S-band patch array for a 6U cubesat. We used CST at ISRO but at my startup we can't afford it. I'm using a combination of: (a) my personal MATLAB license with Antenna Toolbox, (b) Ansys HFSS student version (limited to 2,000 cells, basically useless), and (c) measuring prototypes on a network analyzer in our lab.

**Interviewer:** What does this cost you?

**Priya:** MATLAB is $2k/year. But it's slow — an array simulation takes 6-8 hours and locks my laptop completely. I can't do anything else. When it crashes at hour 5, I want to throw the laptop out the window. Our startup's runway is tight — we can't justify $15k for HFSS when we're not sure our satellite will get a launch slot.

**Interviewer:** What have you tried?

**Priya:** I've tried OpenEMS, gprMax, and a few other open-source tools. They're all focused on academic research, not engineering. I need to export results for a Design Review — that means plots with proper axes, report-quality graphics, and numbers I can stand behind. The open-source tools produce results I don't trust enough to present to investors.

**Interviewer:** What would make you switch?

**Priya:** Needs to handle multi-layer stackups (solar cells, PCB, honeycomb panel). Needs to include space environment effects — outgassing on dielectric properties, thermal cycling effects. Price under $200/month. Must have a startup plan that grows with us — 2 engineers now, maybe 10 next year.

**Interviewer:** Magic wand?

**Priya:** I import my satellite's 3D CAD model. I place antennas on the surfaces. The simulator accounts for the body of the satellite in the radiation pattern. It runs on the cloud in parallel for multiple frequency bands. Results come back in minutes, not hours. I can iterate 20 designs in a day. That's what we need to move at NewSpace speed.

---

## Interview 09 — Dr. Wei Chen

**Background:** RF engineer at a medical device company in Minneapolis. Designs antennas for wireless implantable sensors and external readers. 8 years experience. PhD in Bioelectromagnetics.

**Interviewer:** Walk me through your last antenna simulation.

**Dr. Chen:** I'm designing a 403 MHz MICS-band antenna for an implantable glucose monitor. I use HFSS with a human body model — the simulation includes skin, fat, muscle layers. A single run takes about 4 hours. The problem is body models are expensive — we bought one for $6k and it's only for an adult male. We need pediatric and elderly models too but can't justify the cost.

**Interviewer:** What tools do you use?

**Dr. Chen:** HFSS and Sim4Life (for SAR analysis). Combined cost to our department is about $40k/year for licenses. We also use a VNA and an RF shield box in the lab for measurements. The simulations are often less accurate than we'd like because the body tissue properties vary so much between patients. We aim for within 3 dB of measured.

**Interviewer:** What have you tried?

**Dr. Chen:** I've tried CST — our sister company uses it. I've tried open-source tools (gprMax for bio EM). The problem with open-source is the body models aren't standardized and the SAR computation requires validation that the FDA would accept. For regulatory purposes, we need validated tools. But for early-stage design exploration, a faster tool would be invaluable.

**Interviewer:** What would make you switch?

**Dr. Chen:** For initial design exploration before formal validation: must include at least one anatomical body model. Must compute SAR accurately enough for pre-scan decisions. Must import DICOM/medical imaging data for patient-specific models. Must have an API so I can script Monte Carlo simulations across tissue property variations.

**Interviewer:** Magic wand?

**Dr. Chen:** A tool that comes with 10+ anatomical body models (different ages, BMIs, genders). I place the implant antenna. The tool tells me not just S-parameters but also link budget — can a 1mW reader reliably communicate with this implant at 5cm depth? It accounts for all the layers. I get a "link margin" number. That single number would save us months of prototyping.

---

## Interview 10 — Prof. James O'Brien

**Background:** Teaching professor at Arizona State University. Teaches EE 341 (Electromagnetics) to ~200 students per year. Runs a small antennas lab with 5 undergrad researchers. Frustrated with his institution's slow procurement.

**Interviewer:** Last antenna simulation you ran?

**Prof. O'Brien:** I had a student who wanted to simulate a Yagi-Uda for a senior design project. We don't have any EM simulation software available to undergraduates. I told him to look at 4nec2. He spent two weeks getting it to work on his Windows laptop. The project is due next week and he's behind schedule because of tool problems, not engineering problems.

**Interviewer:** What tools are available?

**Prof. O'Brien:** The graduate students have access to COMSOL on three lab machines. Undergraduates have nothing. We applied for an educational grant from ANSYS — it took 8 months and we got 5 licenses for one year. When they expired, reapplication was a nightmare. Our IT security team blocks any cloud-based tool that isn't pre-approved. Getting a new SaaS tool approved takes 6 months.

**Interviewer:** What have you tried?

**Prof. O'Brien:** I've tried to get my students to use Python with the scikit-rf and PyEPFD libraries. The strong students succeed. The average student gets lost in dependency hell. I've tried uploading solver Docker images to our university's research computing cluster — IT shut it down because of "security concerns." I've spent maybe 40 hours of my life trying to get EM tools working for my students. It's exhausting.

**Interviewer:** What would make you switch?

**Prof. O'Brien:** A university plan that costs under $2,000/year for unlimited students. Browser-based so IT can't block it (we can't block websites, only apps). Must include curriculum: pre-built lab assignments, tutorials, a library of common antennas for students to explore. Grading integration — I want to see each student's simulation results without asking them to send me screenshots.

**Interviewer:** Magic wand?

**Prof. O'Brien:** A platform where I say "Module 1: Dipole antennas. Students will vary length and observe resonance." The system generates the assignment, provisions each student's workspace, and collects results. I review a dashboard showing which students got it, which didn't. Auto-graded simulation homework. That would save me 100 hours per semester and my students would learn 10x more.
