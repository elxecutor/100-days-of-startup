type RoadmapStatus = 'completed' | 'in_progress' | 'planned'

interface RoadmapStage {
  stage: string
  timeline: string
  status: RoadmapStatus
  deliverables: string[]
  metric: string
  eta?: string
}

const ROADMAP: RoadmapStage[] = [
  {
    stage: 'Concept', timeline: 'Week 1-2', status: 'completed',
    deliverables: ['Customer interviews (15+ RF engineers)', 'Problem validation document', 'Competitive analysis matrix'],
    metric: '10+ confirmed pain-point interviews',
  },
  {
    stage: 'Prototype', timeline: 'Week 3-4', status: 'completed',
    deliverables: ['Figma clickable mockup', '3 antenna type prototypes', 'Simulation flow validated'],
    metric: '5 users navigate prototype without help',
  },
  {
    stage: 'Alpha', timeline: 'Week 5-10', status: 'completed',
    deliverables: ['Working MVP: 6 antenna types', 'Cloud solver with OpenEMS wrapper', 'S-parameter plots', 'User auth + database'],
    metric: '10 alpha users run 5+ sims each',
  },
  {
    stage: 'Beta', timeline: 'Week 11-16', status: 'in_progress',
    deliverables: ['Public beta with billing', 'Team sharing via link', 'Touchstone export', 'API keys', 'Onboarding email sequence'],
    metric: '100 signups · 20% trial-to-paid',
    eta: '6 weeks',
  },
  {
    stage: 'Public Launch', timeline: 'Week 17-20', status: 'planned',
    deliverables: ['Product Hunt launch', 'LinkedIn campaign', 'Content: 12 tutorials', 'Case studies with beta customers'],
    metric: '500 signups · $5k MRR',
    eta: '10 weeks',
  },
  {
    stage: 'Growth', timeline: 'Week 21+', status: 'planned',
    deliverables: ['Far-field pattern visualization', 'Optimization engine', 'REST API GA', 'Education program', 'Enterprise SSO'],
    metric: '$30k MRR · <5% churn',
    eta: 'Q3 2026',
  },
  {
    stage: 'Scale', timeline: '2027', status: 'planned',
    deliverables: ['Real-world VNA feedback loop', 'AI-assisted antenna design', 'Custom geometry builder', 'On-prem enterprise deployment'],
    metric: '$200k MRR · >5000 customers',
    eta: '2027',
  },
]

const STATUS_COLORS: Record<RoadmapStatus, string> = { completed: '#34d399', in_progress: '#fbbf24', planned: '#6b7280' }
const STATUS_LABELS: Record<RoadmapStatus, string> = { completed: 'Done', in_progress: 'In Progress', planned: 'Planned' }

export default function Roadmap() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <nav style={{ borderBottom: '1px solid #1f2937', padding: '14px 0', background: '#0a0a0f' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700, fontSize: 16, color: '#f0f0f5', textDecoration: 'none' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2"><circle cx="12" cy="12" r="7"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/></svg>
            AntennaForge
          </a>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <a href="/" style={{ color: '#9ca3af', fontSize: 13 }}>Home</a>
            <a href="/pricing" style={{ color: '#9ca3af', fontSize: 13 }}>Pricing</a>
            <a href="/roadmap" style={{ color: '#60a5fa', fontSize: 13, fontWeight: 500 }}>Roadmap</a>
            <a href="/login" className="btn btn-ghost" style={{ fontSize: 12, padding: '6px 14px' }}>Sign In</a>
          </div>
        </div>
      </nav>

      <section style={{ padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h1 style={{ fontSize: 28, fontWeight: 800, color: '#f0f0f5', marginBottom: 8 }}>
              Product Roadmap
            </h1>
            <p style={{ color: '#9ca3af', fontSize: 14, lineHeight: 1.6 }}>
              <strong>Step 11:</strong> Development broken into clear stages with deliverables and success metrics.
              Each stage must hit its metric before advancing.
            </p>
          </div>

          <div style={{ position: 'relative' }}>
            {/* Timeline line */}
            <div style={{ position: 'absolute', left: 19, top: 0, bottom: 0, width: 2, background: '#1f2937' }} />

            {ROADMAP.map((r, i) => (
              <div key={i} style={{ display: 'flex', gap: 20, marginBottom: 32, position: 'relative' }}>
                {/* Dot */}
                <div style={{
                  width: 40, height: 40, borderRadius: '50%', flexShrink: 0,
                  border: `2px solid ${STATUS_COLORS[r.status]}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 16, zIndex: 1, background: '#0a0a0f',
                }}>
                  {i + 1}
                </div>

                {/* Card */}
                <div className="card" style={{ flex: 1, borderColor: r.status === 'in_progress' ? '#fbbf24' : '#1f2937' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                    <div>
                      <h2 style={{ fontSize: 16, fontWeight: 700, color: '#f0f0f5' }}>{r.stage}</h2>
                      <div style={{ fontSize: 12, color: '#9ca3af' }}>{r.timeline}</div>
                    </div>
                    <span className="tag" style={{
                      background: STATUS_COLORS[r.status] + '20',
                      color: STATUS_COLORS[r.status],
                      border: `1px solid ${STATUS_COLORS[r.status]}40`,
                    }}>
                      {STATUS_LABELS[r.status]}
                    </span>
                  </div>

                  <div style={{ marginBottom: 12 }}>
                    <div style={{ fontSize: 12, fontWeight: 600, color: '#9ca3af', marginBottom: 4 }}>Deliverables</div>
                    <ul style={{ listStyle: 'none' }}>
                      {r.deliverables.map((d, j) => (
                        <li key={j} style={{ fontSize: 12, color: '#d1d5db', padding: '2px 0' }}>• {d}</li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #1f2937', paddingTop: 8 }}>
                    <div>
                      <span style={{ fontSize: 11, color: '#9ca3af' }}>Success Metric: </span>
                      <span style={{ fontSize: 12, color: '#60a5fa', fontWeight: 600 }}>{r.metric}</span>
                    </div>
                    {r.eta && <span style={{ fontSize: 11, color: '#6b7280' }}>ETA: {r.eta}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
