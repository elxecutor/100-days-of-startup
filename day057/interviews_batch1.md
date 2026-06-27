# Day 57 — User Interviews (Batch 1)

> "Interview potential users (first 5)"

## Methodology

All interviews followed the "past behavior, not opinions" structure:
1. Walk me through the last time you designed or simulated an antenna.
2. What tools did you use? What did they cost you (time, money, sanity)?
3. What have you tried to solve these problems before?
4. What would it take for you to switch to something new?
5. If you could wave a magic wand, what would your ideal antenna tool look like?

---

## Interview 01 — Marco Velez

**Background:** 12-year independent RF consultant. Specializes in IoT antenna integration for European smart-building startups. Works from a co-working space in Barcelona. Has 4 active clients, bills €90–€140/hr.

**Interviewer:** Marco, walk me through the last antenna simulation you ran.

**Marco:** Three weeks ago. A client needed a dual-band LoRa + NB-IoT antenna for a smart meter enclosure. I'd normally use CST — I have an old cracked license from 2019 that barely works on my MacBook under Parallels. It took me two hours just to get the solver to launch. The mesh failed twice. I ended up using analytical formulas and a lot of gut feel.

**Interviewer:** What did that cost you?

**Marco:** Time-wise? I billed 6 hours for something that should have taken 2. The client was happy, but I basically subsidized their project with my own inefficiency. Money-wise? I've spent about €3,000 over the years on various licenses, dongles, and "lifetime" deals that turned out to be nothing of the sort.

**Interviewer:** What have you tried to fix this?

**Marco:** I tried OpenEMS twice. First time I gave up after a weekend of trying to compile it. Second time I got it running in Docker, simulated a simple dipole — took me three days to get a result I didn't trust. I've tried Python + scikit-rf + some FDTD notebooks. It works but it's not a product. I've looked at every "HFSS alternative" listicle on the internet. They're all either toy tools or redirects to HFSS.

**Interviewer:** What would make you switch?

**Marco:** I need results I can send to a client. That means: S-parameter plots with axis labels, 3D radiation patterns I can rotate, a report I can export as PDF. If it runs in a browser so I don't need to install anything on client laptops? That's the dream. Must be accurate within maybe 2 dB of measured. Price under €100/month. I'd sign up today.

**Interviewer:** Magic wand?

**Marco:** I open a URL. I draw my antenna shape, maybe import a STEP file of the enclosure. I set frequency range. I click simulate. Results come back in under 5 minutes. I export a PDF report with my logo on it. I send it to the client. I get paid. That's it.

---

## Interview 02 — Amina Diallo

**Background:** CTO and co-founder of a 8-person IoT hardware startup in Nairobi. Building soil sensors for smallholder farms. Has a MSc in EE from University of Cape Town. Manages a team of 3 hardware engineers.

**Interviewer:** Last antenna design you worked on?

**Amina:** Yesterday. We're doing a sub-1GHz ISM band radio for our soil sensor. We're using a chip antenna from Johanson because our EE said "it's pre-certified, just follow the layout guide." We've had three board spins because the antenna detuned inside the IP67 enclosure. Each respin costs us about $1,200 in fabrication and two weeks.

**Interviewer:** What tools do you use?

**Amina:** We don't have simulation tools. We can't afford them. Our EE uses — I'm not joking — graph paper and a spreadsheet for impedance calculations. We measure with a VNA we borrowed from a university partnership, then we iterate. It's slow. We've shipped two products where the range was 30% below spec because we couldn't simulate the enclosure interaction.

**Interviewer:** What have you tried?

**Amina:** I looked into Altair FEKO a year ago. The sales call was awkward — the rep asked about our "team size" and when I said 8, he paused and said "let me see if we have a startup program." The quote came back at $18k/year. I laughed. I've looked at microwave offices in India and China — $500 to simulate an antenna. We did that once. It was fine but it took 3 weeks turnaround and we couldn't iterate.

**Interviewer:** What would make you switch?

**Amina:** Price under $200/month. Easy import of our CAD files. A library of common chip antennas so I don't have to model the package from dimensions in a datasheet. Integration with our workflow — we use Git for everything, I want simulation-as-code so we can version control our antenna designs.

**Interviewer:** Magic wand?

**Amina:** I want my hardware engineer to open a browser tab, drop in the 3D model of our enclosure with the PCB, place an antenna from a library, and run a simulation that tells us "this will work" or "move the ground plane 3mm to the left." I want the answer in 10 minutes, not 3 weeks. I want to pay for compute, not licenses.

---

## Interview 03 — Dr. Kofi Akinwande

**Background:** Professor of Electrical Engineering at University of Ibadan, Nigeria. Teaches antennas and propagation to ~60 final-year students per year. Runs a small research lab with 4 grad students. PhD from University of Ghana.

**Interviewer:** When was the last time you simulated an antenna?

**Dr. Akinwande:** I demonstrated a half-wave dipole in class two weeks ago. I used NEC2 on a Linux machine in my office. The students couldn't see — I had to project a terminal window and type commands. They watched me edit an input file. It is not inspiring.

**Interviewer:** What tools are available to you and your students?

**Dr. Akinwande:** Officially? We have an institutional license for CST that expired in 2021. The IT department hasn't renewed it. Students cannot install it on their laptops anyway — they have Windows laptops from 2017. Some of them use my NEC2 setup. A few have found online Python notebooks. Most of my graduates have never seen a modern EM simulation GUI.

**Interviewer:** What have you tried?

**Dr. Akinwande:** I applied to CST's university program. The response was polite but the process was complex — they needed our department head, the dean, and procurement to sign. I gave up after three months. I tried convincing the university to buy COMSOL. The quote was $12k. I tried using free tiers of cloud services but none of them do antenna simulation. My students are resourceful — some use Android apps that claim to simulate antennas. The results are... decorative.

**Interviewer:** What would make you switch?

**Dr. Akinwande:** It must work in a browser. My students have Chromebooks, phones, library computers. If it works on those, I can assign simulations as homework. Must be free or very cheap for education — maybe a class plan for $100-200/month that gives 30 students access. Must be accurate enough for teaching — within 10% of real measurements.

**Interviewer:** Magic wand?

**Dr. Akinwande:** I assign "design a patch antenna for 2.4 GHz." My students open a link, fill in substrate parameters, get a starting geometry, simulate, see the Smith chart move as they tweak dimensions. They submit a screenshot. I grade from my phone during my commute. That would be revolutionary.

---

## Interview 04 — Elena Vasquez

**Background:** Senior antenna engineer at a mid-size defense contractor outside Washington, D.C. 15 years experience. Designs phased array antennas for SATCOM terminals. Holds 3 patents.

**Interviewer:** Walk me through your last simulation.

**Elena:** It was a 64-element Ku-band phased array. I used HFSS on our company cluster. The model took 11 hours to solve. I had to reserve the license two days in advance — we have 18 engineers sharing 12 floating licenses. The IT policy requires a VPN into the office even for remote days, so I was working from home, VPN'd in, running a solver on a cluster in a building I haven't physically entered in 18 months.

**Interviewer:** What does this cost you?

**Elena:** Not money — the company pays. But the friction is real. The license server goes down at least once a quarter. Our IT team has a 48-hour ticket SLA. I can't work on simulation during those days. The solver itself is fine, but the ecosystem around it is fragile. One time a Windows update killed our license manager. I lost a weekend.

**Interviewer:** What have you tried?

**Elena:** Personally? I tried to run OpenEMS on WSL at home. I got it working after a few weekends but the workflow is so different from HFSS that I was never productive. I know colleagues who use MATLAB's Antenna Toolbox. It's fine for simple things. At work we're locked into HFSS because our customers require it in the SOW — they want to see "simulated using ANSYS HFSS" in the report.

**Interviewer:** What would make you switch?

**Elena:** I can't switch at work, but if you're asking about my own side projects — I consult sometimes and do freelance antenna design. For that, I'd use something else. Needs to export to HFSS-compatible formats (they'll want to re-simulate on their end). Needs to produce reports that look professional. Price at $100–150/month is fine. Must handle arrays of at least 16 elements.

**Interviewer:** Magic wand?

**Elena:** A hybrid: simple things run in the cloud instantly. Complex things I can set up in the browser GUI but the solver runs on my own cluster. Data syncs between both. And it has an API so I can script parametric sweeps from Python. That would be the dream.

---

## Interview 05 — Yuki Tanaka

**Background:** RF engineer at a Japanese automotive electronics supplier. 6 years experience. Works on automotive radar (77 GHz) and keyless entry antennas. Based in Nagoya.

**Interviewer:** Walk me through your last antenna simulation.

**Yuki:** I was designing a 77 GHz patch array for an automotive radar module. We use CST at work. The simulation fidelity is excellent but the compute time is brutal — a full 77 GHz array with housing takes 20+ hours. I set it up before leaving, check results in the morning. The problem is when the mesh fails at 2 AM — the solver stops and nobody knows until morning. We've lost weeks this way.

**Interviewer:** What tools do you use and what do they cost?

**Yuki:** Company license, so I don't directly pay. But I see the budget — our department spends about ¥3M ($20k) per year on CST licenses. The procurement approval for any new tool takes minimum 3 months. For personal projects, I use nothing. I have ideas for IoT antennas I'd like to prototype at home but I don't have access to simulation.

**Interviewer:** What have you tried to solve these problems?

**Yuki:** I tried using the CST trial. It's 2 weeks. Not long enough to learn. I looked into cloud-based EM simulation — there are a few services but they're all per-simulation pricing and extremely expensive if you run many iterations. I attempted to use open-source Python libraries (meep, gprMax) — the documentation is written for researchers, not engineers. I spent a month learning meep and still couldn't model a simple microstrip.

**Interviewer:** What would make you switch?

**Yuki:** For work, our tools are set by corporate standards. For personal projects or side work: must be under ¥10,000/month ($70). Must have Japanese language UI or at least very clear visual workflow. Must have good documentation with examples. I want to design an antenna on my MacBook at a cafe and have it simulated in the cloud.

**Interviewer:** Magic wand?

**Yuki:** A tool that knows automotive materials. I select "typical automotive ABS with 5% carbon fill" from a dropdown — the dielectric constant and loss tangent are already there. I draw my antenna. I add the housing. I click simulate. Results in 5 minutes. That's the dream.
