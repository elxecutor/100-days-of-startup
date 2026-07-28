We built an antenna simulator that runs in your browser. No install. No license key. Here's the tech stack.

People ask me: "How do you run 3D EM simulations in a browser without a client app?"

Short answer: we don't do the math in the browser. The browser is just the UI.

Longer answer — here's the actual stack:

🧩 Frontend: Next.js + Three.js for 3D geometry viewer
We render the antenna geometry and mesh using WebGL. Users can drag, rotate, zoom, and edit parameters (trace width, substrate height, feed location) directly in the browser. The 3D viewer communicates with the backend via WebSocket for real-time status updates.

🧩 API Layer: FastAPI (Python)
Stateless REST + WebSocket endpoints. Accepts geometry definitions, queues simulation jobs, returns S-parameter results and far-field patterns. FastAPI gives us automatic OpenAPI docs and async request handling — critical when simulations can run 5-45 minutes.

🧩 Solver Backend: OpenEMS (C++/Python bindings)
Open-source FDTD solver that handles the actual EM computation. We've containerized it with Docker and tuned the meshing parameters for common IoT antenna geometries. No proprietary solver lock-in — OpenEMS is GPL, and we contribute patches back.

🧩 Compute Orchestration: Kubernetes + Autoscaling
Simulation jobs run as K8s pods. When traffic spikes, we spin up more solver nodes. When idle, we scale to zero. This is what makes the per-simulation pricing model viable — you only pay for the compute you actually use.

🧩 Storage: Postgres (metadata) + S3 (simulation results)
Far-field patterns and S-parameter touchstone files get stored in S3. User projects, billing data, and job history live in Postgres.

🧩 Auth: Clerk
Because building auth is boring and we'd rather spend time on solver accuracy.

We're iterating fast. Current focus: reducing solver time for electrically large structures and adding multi-port support for MIMO antennas.

RF engineers: what would your ideal cloud simulation tool look like? I'm genuinely asking — we're building the roadmap from user feedback, not guesses.

#Engineering #SaaS #WebDevelopment #CloudComputing #AntennaDesign #TechStack
