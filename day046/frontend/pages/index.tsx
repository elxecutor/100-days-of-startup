import { useState } from 'react'

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

const PROBLEM_ITEMS: { id: string; label: string; detail: string }[] = [
  { id: 'cost', label: 'Too Expensive', detail: 'HFSS: $30k/yr. CST: $20k/yr. AntennaForge: $948/yr.' },
  { id: 'locked', label: 'Desktop-Locked', detail: 'Run simulations on a remote cluster while you keep working. No machine lock-up.' },
  { id: 'share', label: 'No Collaboration', detail: 'Share designs via a link instead of emailing ZIP files. Built-in team review.' },
  { id: 'loop', label: 'No Feedback Loop', detail: 'Upload real VNA measurements and compare against simulation instantly.' },
]

const PROBLEM_ITEMS_BY_ID: Record<string, string> = {
  cost: 'Too Expensive',
  locked: 'Desktop-Locked',
  share: 'No Collaboration',
  loop: 'No Feedback Loop',
}

const PROBLEM_DETAILS_BY_ID: Record<string, string> = {
  cost: 'HFSS: $30k/yr. CST: $20k/yr. AntennaForge: $948/yr.',
  locked: 'Run simulations on a remote cluster while you keep working. No machine lock-up.',
  share: 'Share designs via a link instead of emailing ZIP files. Built-in team review.',
  loop: 'Upload real VNA measurements and compare against simulation instantly.',
}

export default function Landing() {
  const [showProblem, setShowProblem] = useState<string | null>(null)

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* ── Nav ── */}
      <nav style={{ borderBottom: '1px solid #1f2937', padding: '14px 0', position: 'sticky', top: 0, background: '#0a0a0fe0', backdropFilter: 'blur(12px)', zIndex: 100 }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2"><circle cx="12" cy="12" r="7"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/></svg>
            <span style={{ fontWeight: 700, fontSize: 18, color: '#f0f0f5' }}>AntennaForge</span>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <a href="/pricing" style={{ color: '#9ca3af', fontSize: 13, padding: '6px 12px' }}>Pricing</a>
            <a href="/roadmap" style={{ color: '#9ca3af', fontSize: 13, padding: '6px 12px' }}>Roadmap</a>
            <a href="/about" style={{ color: '#9ca3af', fontSize: 13, padding: '6px 12px' }}>About</a>
            <a href="/login" className="btn btn-ghost" style={{ fontSize: 13, padding: '6px 14px' }}>Sign In</a>
            <a href="/signup" className="btn btn-primary" style={{ fontSize: 13, padding: '6px 14px' }}>Get Started</a>
          </div>
        </div>
      </nav>

      {/* ────────────────────────────────────────────────────────────── */}
      {/* STEP 1: Core Problem / STEP 4: Value Proposition             */}
      {/* ────────────────────────────────────────────────────────────── */}
      <section style={{ padding: '100px 0 60px', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <div style={{ marginBottom: 16 }}>
            <span className="tag tag-blue">The Problem We Solve</span>
          </div>
          <h1 style={{ fontSize: 44, fontWeight: 800, lineHeight: 1.15, marginBottom: 16, color: '#f0f0f5' }}>
            Antenna design tools cost{' '}
            <span style={{ color: '#f87171', textDecoration: 'line-through' }}>$30k/seat</span>
            {' '}and lock your machine.
          </h1>
          <p style={{ fontSize: 18, color: '#9ca3af', marginBottom: 24, maxWidth: 600, margin: '0 auto 24px', lineHeight: 1.7 }}>
            AntennaForge is the first cloud-native antenna simulation platform — no install, no license servers, 
            no tying up your workstation. Design, simulate, and collaborate entirely in the browser 
            starting at <strong style={{ color: '#f0f0f5' }}>$79/month</strong>.
          </p>

          {/* Problem details expandable */}
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 32 }}>
            {PROBLEM_ITEMS.map((p) => (
              <div key={p.id}
                onMouseEnter={() => setShowProblem(p.id)}
                onMouseLeave={() => setShowProblem(null)}
                style={{ cursor: 'pointer', padding: '10px 18px', background: showProblem === p.id ? '#1e3a5f' : '#14141f', border: `1px solid ${showProblem === p.id ? '#3b82f6' : '#1f2937'}`, borderRadius: 8, transition: 'all 0.2s', fontSize: 13, color: showProblem === p.id ? '#93c5fd' : '#9ca3af' }}>
                {p.label}
              </div>
            ))}
          </div>
          {showProblem && (
            <div style={{ background: '#1e3a5f', border: '1px solid #3b82f6', borderRadius: 8, padding: '12px 20px', marginBottom: 32, maxWidth: 500, margin: '0 auto 32px', fontSize: 13, color: '#bfdbfe' }}>
              {[...new Set(['cost','locked','share','loop'])].filter(p => p === showProblem).map(p => {
                return <div key={p}><strong>{PROBLEM_ITEMS_BY_ID[p]}:</strong> {PROBLEM_DETAILS_BY_ID[p]}</div>
              })}
            </div>
          )}

          {/* STEP 5 + 6: Validate WTP — Free Trial + Pricing visible */}
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', maxWidth: 440, margin: '0 auto' }}>
            <a href="/signup" className="btn btn-primary" style={{ fontSize: 15, padding: '12px 28px' }}>
              Start Free Trial
            </a>
            <a href="/pricing" className="btn btn-secondary" style={{ fontSize: 15, padding: '12px 28px' }}>
              See Pricing
            </a>
          </div>
          <p style={{ fontSize: 12, color: '#6b7280', marginTop: 10 }}>
            300+ engineers signed up · Free 14-day trial · No credit card
          </p>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────── */}
      {/* STEP 3: Market Gap — Competitor Comparison                     */}
      {/* ────────────────────────────────────────────────────────────── */}
      <section style={{ padding: '60px 0', borderTop: '1px solid #1f2937' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <span className="tag tag-yellow" style={{ marginBottom: 8 }}>Market Gap Analysis</span>
            <h2 style={{ fontSize: 26, fontWeight: 700, color: '#f0f0f5', marginTop: 8 }}>What competitors ignore, we built for</h2>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', fontSize: 13, borderCollapse: 'collapse', minWidth: 600 }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #1f2937' }}>
                  <th style={{ textAlign: 'left', padding: '12px 16px', color: '#9ca3af', fontWeight: 600 }}>Feature</th>
                  <th style={{ textAlign: 'center', padding: '12px 16px', color: '#f87171', fontWeight: 600 }}>Ansys HFSS</th>
                  <th style={{ textAlign: 'center', padding: '12px 16px', color: '#f87171', fontWeight: 600 }}>CST Studio</th>
                  <th style={{ textAlign: 'center', padding: '12px 16px', color: '#f87171', fontWeight: 600 }}>Altair Feko</th>
                  <th style={{ textAlign: 'center', padding: '12px 16px', color: '#34d399', fontWeight: 600 }}>AntennaForge</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feat: 'Price (per seat/year)', hfss: '$30,000+', cst: '$20,000+', feko: '$15,000+', af: '$948' },
                  { feat: 'Cloud-native', hfss: 'No', cst: 'No', feko: 'No', af: 'Yes' },
                  { feat: 'Team collaboration', hfss: 'No', cst: 'Partial', feko: 'No', af: 'Yes' },
                  { feat: 'API/SDK', hfss: 'No', cst: 'No', feko: 'No', af: 'Yes' },
                  { feat: 'Real-world feedback loop', hfss: 'No', cst: 'No', feko: 'No', af: 'Yes' },
                  { feat: 'Free tier', hfss: 'No', cst: 'No', feko: 'No', af: 'Yes (14-day)' },
                  { feat: 'Education pricing', hfss: 'Partial', cst: 'Partial', feko: 'Partial', af: 'Yes $25/mo' },
                ].map((r, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #14141f' }}>
                    <td style={{ padding: '10px 16px', color: '#d1d5db', fontWeight: 500 }}>{r.feat}</td>
                    <td style={{ padding: '10px 16px', textAlign: 'center', color: r.hfss === 'No' ? '#6b7280' : '#fca5a5' }}>{r.hfss}</td>
                    <td style={{ padding: '10px 16px', textAlign: 'center', color: r.cst === 'No' ? '#6b7280' : '#fca5a5' }}>{r.cst}</td>
                    <td style={{ padding: '10px 16px', textAlign: 'center', color: r.feko === 'No' ? '#6b7280' : '#fca5a5' }}>{r.feko}</td>
                    <td style={{ padding: '10px 16px', textAlign: 'center', color: '#34d399', fontWeight: 600 }}>{r.af}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────── */}
      {/* STEP 2: Customer Segments                                       */}
      {/* ────────────────────────────────────────────────────────────── */}
      <section style={{ padding: '60px 0', borderTop: '1px solid #1f2937' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <span className="tag tag-green" style={{ marginBottom: 8 }}>Who This Is For</span>
            <h2 style={{ fontSize: 26, fontWeight: 700, color: '#f0f0f5', marginTop: 8 }}>Target Customer Segments</h2>
          </div>
          <div className="grid-3">
            {[
              { name: 'Independent RF Consultants', pain: 'Billable hours wasted on slow tools', budget: '$50-100/mo', urgency: 'High', behavior: 'Freelance, need fast turnaround, price-sensitive' },
              { name: 'IoT Hardware Startups', pain: 'Cannot afford $30k tool licenses', budget: '$30-80/mo', urgency: 'High', behavior: 'Agile teams, cloud-native, need collaboration' },
              { name: 'Mid-size Telecom OEMs', pain: 'Reducing OpEx, scaling design teams', budget: '$200-500/mo', urgency: 'Medium', behavior: 'Need SSO, audit trails, API integration' },
              { name: 'University Research Labs', pain: 'Student access, license server headaches', budget: 'Grant-funded $0-50/mo', urgency: 'Medium', behavior: 'Need education pricing, multi-user' },
              { name: 'Field Installation Engineers', pain: 'No way to verify on-site performance', budget: '$20-40/mo (company-paid)', urgency: 'High', behavior: 'Mobile, need VNA comparison, offline-capable' },
              { name: 'Broadcast & Comms Companies', pain: 'Complex antenna arrays, compliance docs', budget: '$500-2000/mo', urgency: 'Low-Medium', behavior: 'Enterprise procurement, need compliance reports' },
            ].map((s, i) => (
              <div key={i} className="card card-hover">
                <h3 style={{ fontSize: 15, fontWeight: 600, color: '#f0f0f5', marginBottom: 8 }}>{s.name}</h3>
                <div style={{ fontSize: 12, color: '#f87171', marginBottom: 4 }}>Pain: {s.pain}</div>
                <div style={{ fontSize: 12, color: '#34d399', marginBottom: 4 }}>Budget: {s.budget}</div>
                <div style={{ fontSize: 12, color: '#fbbf24', marginBottom: 4 }}>Urgency: {s.urgency}</div>
                <div style={{ fontSize: 12, color: '#9ca3af' }}>{s.behavior}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────── */}
      {/* Features / MVP (Step 7)                                          */}
      {/* ────────────────────────────────────────────────────────────── */}
      <section style={{ padding: '60px 0', borderTop: '1px solid #1f2937' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="tag tag-blue" style={{ marginBottom: 8 }}>MVP Features</span>
          <h2 style={{ fontSize: 26, fontWeight: 700, color: '#f0f0f5', marginTop: 8, marginBottom: 32 }}>What you can do right now</h2>
          <div className="grid-4">
            {[
              { title: '6 Antenna Types', desc: 'Dipole, patch, helical, monopole, Yagi, loop — with analytical models tuned to published results.' },
              { title: 'S-Parameter Sweep', desc: 'Plot S11 across frequency. Find your resonance, measure bandwidth, check impedance match.' },
              { title: 'Key Metrics', desc: 'VSWR, return loss, gain, impedance, bandwidth, efficiency — all computed instantly.' },
              { title: 'Team Sharing', desc: 'Share simulation results via link. Your team sees the same plots, no file exports.' },
              { title: 'REST API', desc: 'Automate simulations. Integrate into your CI/CD. Generate API keys from the dashboard.' },
              { title: 'Touchstone Export', desc: 'Export S-parameters to .s1p/.s2p format. Import into your system design tool.' },
              { title: 'Cloud Scheduler', desc: 'Simulations run on our cluster. Close your laptop. Get notified when done.' },
              { title: 'Dashboard Analytics', desc: 'Track simulation history, monitor usage, view trends over time.' },
            ].map((f, i) => (
              <div key={i} className="card card-hover" style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: 14, fontWeight: 600, color: '#f0f0f5', marginBottom: 6 }}>{f.title}</h3>
                <p style={{ fontSize: 12, color: '#9ca3af', lineHeight: 1.5 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────── */}
      {/* CTA (Step 15: Sales Funnel entry)                                 */}
      {/* ────────────────────────────────────────────────────────────── */}
      <section style={{ padding: '60px 0', borderTop: '1px solid #1f2937', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 26, fontWeight: 700, color: '#f0f0f5', marginBottom: 12 }}>Ready to run your first simulation?</h2>
          <p style={{ color: '#9ca3af', marginBottom: 24, maxWidth: 480, margin: '0 auto 24px', fontSize: 14 }}>
            From awareness to first simulation in under 3 minutes. No install. No credit card.
          </p>
          <a href="/signup" className="btn btn-primary" style={{ fontSize: 16, padding: '14px 36px' }}>
            Start Free Trial
          </a>
          <p style={{ fontSize: 12, color: '#6b7280', marginTop: 12 }}>
            Awareness &gt; Signup &gt; Free Trial &gt; First Simulation &gt; Upgrade
          </p>
        </div>
      </section>

      <footer style={{ borderTop: '1px solid #1f2937', padding: '24px 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2"><circle cx="12" cy="12" r="7"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/></svg>
            <span style={{ fontSize: 13, color: '#6b7280' }}>AntennaForge — Cloud Antenna Simulation</span>
          </div>
          <div style={{ display: 'flex', gap: 16, fontSize: 12, color: '#6b7280' }}>
            <a href="/pricing">Pricing</a>
            <a href="/roadmap">Roadmap</a>
            <a href="/about">About</a>
            <a href="/partners">Partners</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
