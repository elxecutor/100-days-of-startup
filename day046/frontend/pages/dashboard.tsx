import { useState, useEffect } from 'react'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts'
import type { User, Simulation, SimulationListResponse } from '../lib/types'

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

interface Kpi {
  label: string
  value: string | number
  target: string
  color: string
}

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null)
  const [sims, setSims] = useState<Simulation[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('overview')

  useEffect(() => {
    const token = localStorage.getItem('af_token')
    if (!token) { window.location.href = '/login'; return }
    fetch(`${API}/me`, { headers: { Authorization: `Bearer ${token}` } })
      .then(r => r.json())
      .then(u => { setUser(u as User); return fetch(`${API}/simulations?page=1&size=50`, { headers: { Authorization: `Bearer ${token}` } }) })
      .then(r => r.json())
      .then((d: SimulationListResponse) => setSims(d.items || []))
      .catch(() => { localStorage.removeItem('af_token'); window.location.href = '/login' })
      .finally(() => setLoading(false))
  }, [])

  const logout = () => { localStorage.removeItem('af_token'); localStorage.removeItem('af_user'); window.location.href = '/' }
  if (loading) return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', color: '#9ca3af' }}>Loading...</div>
  if (!user) return null

  const completed = sims.filter(s => s.status === 'completed')
  const failed = sims.filter(s => s.status === 'failed')
  const thisWeek = sims.filter(s => Date.now() - new Date(s.created_at).getTime() < 7 * 86400000)

  // ── KPIs (Step 20) ──
  const kpis: Kpi[] = [
    { label: 'North Star: Sims/Week', value: thisWeek.length, target: 'Target: 5+', color: '#60a5fa' },
    { label: 'Activation Rate', value: completed.length > 0 ? `${Math.round(completed.length / Math.max(sims.length, 1) * 100)}%` : '0%', target: 'Target: >80%', color: '#34d399' },
    { label: 'Sim Success Rate', value: sims.length > 0 ? `${Math.round(completed.length / Math.max(sims.length, 1) * 100)}%` : '0%', target: 'Target: >95%', color: completed.length / Math.max(sims.length, 1) > 0.9 ? '#34d399' : '#fbbf24' },
    { label: 'Sims Remaining', value: user.simulations_remaining, target: `Plan: ${user.plan}`, color: user.simulations_remaining > 10 ? '#34d399' : '#f87171' },
  ]

  const chartData = completed.slice(0, 30).reverse().map(s => ({
    name: (s.name || 'sim').slice(0, 16),
    vswr: s.result?.vswr || 0,
    gain: s.result?.gain_dbi || 0,
  }))

  const weeklyData = Array.from({ length: 12 }, (_, i) => {
    const week = 12 - i
    const count = sims.filter(s => {
      const d = new Date(s.created_at)
      const weekAgo = Date.now() - week * 7 * 86400000
      const weekForward = Date.now() - (week - 1) * 7 * 86400000
      return d.getTime() > weekAgo && d.getTime() <= weekForward
    }).length
    return { week: `W${week}`, sims: count }
  })

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Nav */}
      <nav style={{ borderBottom: '1px solid #1f2937', padding: '12px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#0a0a0f' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <a href="/dashboard" style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700, fontSize: 16, color: '#f0f0f5', textDecoration: 'none' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2"><circle cx="12" cy="12" r="7"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/></svg>
            AntennaForge
          </a>
          <a href="/simulate" style={{ color: '#9ca3af', fontSize: 13 }}>New Simulation</a>
          <a href="/pricing" style={{ color: '#9ca3af', fontSize: 13 }}>Upgrade</a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span className="tag tag-blue">{user.plan}</span>
          <span style={{ fontSize: 12, color: '#9ca3af' }}>{user.email}</span>
          <button onClick={logout} className="btn btn-ghost" style={{ padding: '4px 12px', fontSize: 12 }}>Sign Out</button>
        </div>
      </nav>

      <div style={{ padding: 24, maxWidth: 1400, margin: '0 auto' }}>

        {/* ── Step 8 + Step 20: North Star Metric + KPIs ── */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <h1 style={{ fontSize: 20, fontWeight: 700, color: '#f0f0f5' }}>
              Dashboard — Your Antenna Operations Center
            </h1>
            <a href="/simulate" className="btn btn-primary" style={{ fontSize: 13, padding: '8px 18px' }}>
              + Run Simulation
            </a>
          </div>
          <p style={{ fontSize: 13, color: '#6b7280' }}>
            North Star Metric: Simulations completed per week. This measures value delivered.
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid-4" style={{ marginBottom: 24 }}>
          {kpis.map((k, i) => (
            <div key={i} className="card" style={{ textAlign: 'center', padding: '16px 20px' }}>
              <div style={{ fontSize: 24, fontWeight: 800, color: k.color }}>{k.value}</div>
              <div style={{ fontSize: 11, color: '#9ca3af', marginTop: 2 }}>{k.label}</div>
              <div style={{ fontSize: 10, color: '#6b7280', marginTop: 4 }}>{k.target}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 4, marginBottom: 20, borderBottom: '1px solid #1f2937', paddingBottom: 0 }}>
          {[
            { id: 'overview', label: 'Overview', step: 'Step 8, 20' },
            { id: 'history', label: 'Sim History', step: 'Step 15' },
            { id: 'analytics', label: 'Analytics', step: 'Step 20' },
          ].map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '8px 20px', fontSize: 13, fontWeight: 500,
                background: activeTab === tab.id ? '#1e3a5f' : 'transparent',
                color: activeTab === tab.id ? '#93c5fd' : '#9ca3af',
                border: 'none', borderBottom: activeTab === tab.id ? '2px solid #60a5fa' : '2px solid transparent',
                cursor: 'pointer', marginBottom: -1,
              }}>
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── Tab: Overview ── */}
        {activeTab === 'overview' && (
          <div className="grid-2" style={{ gridTemplateColumns: '2fr 1fr' }}>
            <div className="card">
              <h2 style={{ fontSize: 15, fontWeight: 600, color: '#f0f0f5', marginBottom: 16 }}>
                Weekly Simulation Trend (Step 20: Track KPIs continuously)
              </h2>
              {weeklyData.some(d => d.sims > 0) ? (
                <ResponsiveContainer width="100%" height={220}>
                  <BarChart data={weeklyData}>
                    <XAxis dataKey="week" tick={{ fontSize: 10, fill: '#9ca3af' }} />
                    <YAxis tick={{ fontSize: 10, fill: '#9ca3af' }} />
                    <Tooltip contentStyle={{ background: '#1f2937', border: '1px solid #374151', borderRadius: 8, fontSize: 12 }} />
                    <Bar dataKey="sims" fill="#60a5fa" radius={[4, 4, 0, 0]} name="Simulations" />
                  </BarChart>
                </ResponsiveContainer>
              ) : (
                <p style={{ color: '#6b7280', fontSize: 13, textAlign: 'center', padding: 40 }}>
                  No data yet. <a href="/simulate">Run your first simulation.</a>
                </p>
              )}
            </div>

            <div className="card">
              <h2 style={{ fontSize: 15, fontWeight: 600, color: '#f0f0f5', marginBottom: 16 }}>
                Retention Status (Step 15: Sales Funnel)
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { step: 'Awareness', status: 'done', detail: 'You found us' },
                  { step: 'Signup to Trial', status: 'done', detail: `Day ${Math.floor((Date.now() - new Date(user.created_at).getTime()) / 86400000)} of 14` },
                  { step: 'First Simulation', status: completed.length > 0 ? 'done' : 'pending', detail: completed.length > 0 ? 'Completed' : 'Not yet' },
                  { step: 'Trial to Paid', status: user.plan !== 'starter' ? 'done' : 'pending', detail: user.plan === 'starter' ? 'Pending' : 'Converted' },
                  { step: 'Referral', status: 'pending', detail: 'Refer a friend for 1 month free' },
                ].map((f, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 12px', background: '#1a1a2e', borderRadius: 8 }}>
                    <span style={{ color: f.status === 'done' ? '#34d399' : '#6b7280', fontSize: 16 }}>{f.status === 'done' ? 'Done' : 'Pending'}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13, color: '#d1d5db' }}>{f.step}</div>
                      <div style={{ fontSize: 11, color: '#6b7280' }}>{f.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── Tab: History ── */}
        {activeTab === 'history' && (
          <div className="card">
            <h2 style={{ fontSize: 15, fontWeight: 600, color: '#f0f0f5', marginBottom: 16 }}>
              Simulation History (Step 15: Track drop-off points)
            </h2>
            {sims.length === 0 ? (
              <p style={{ color: '#6b7280', fontSize: 13, textAlign: 'center', padding: 40 }}>No simulations yet.</p>
            ) : (
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', fontSize: 12, borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ color: '#9ca3af', borderBottom: '1px solid #1f2937' }}>
                      <th style={{ textAlign: 'left', padding: '8px 12px' }}>Name</th>
                      <th style={{ textAlign: 'left', padding: '8px 12px' }}>Type</th>
                      <th style={{ textAlign: 'right', padding: '8px 12px' }}>Freq</th>
                      <th style={{ textAlign: 'right', padding: '8px 12px' }}>VSWR</th>
                      <th style={{ textAlign: 'right', padding: '8px 12px' }}>Gain</th>
                      <th style={{ textAlign: 'right', padding: '8px 12px' }}>S11</th>
                      <th style={{ textAlign: 'center', padding: '8px 12px' }}>Status</th>
                      <th style={{ textAlign: 'right', padding: '8px 12px' }}>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sims.map(s => (
                      <tr key={s.id} style={{ borderBottom: '1px solid #14141f' }}>
                        <td style={{ padding: '8px 12px', color: '#f0f0f5' }}>{s.name || '—'}</td>
                        <td style={{ padding: '8px 12px' }}>{s.antenna_type}</td>
                        <td style={{ padding: '8px 12px', textAlign: 'right' }}>{(s.frequency_hz / 1e6).toFixed(1)} MHz</td>
                        <td style={{ padding: '8px 12px', textAlign: 'right' }}>{s.result?.vswr ?? '—'}</td>
                        <td style={{ padding: '8px 12px', textAlign: 'right' }}>{s.result?.gain_dbi ? `${s.result.gain_dbi} dBi` : '—'}</td>
                        <td style={{ padding: '8px 12px', textAlign: 'right' }}>{s.result?.return_loss_db ? `${s.result.return_loss_db} dB` : '—'}</td>
                        <td style={{ padding: '8px 12px', textAlign: 'center' }}>
                          <span className={`tag ${s.status === 'completed' ? 'tag-green' : s.status === 'failed' ? 'tag-red' : 'tag-yellow'}`}>
                            {s.status}
                          </span>
                        </td>
                        <td style={{ padding: '8px 12px', textAlign: 'right', color: '#9ca3af', fontSize: 11 }}>
                          {new Date(s.created_at).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* ── Tab: Analytics (Step 20: KPI deep-dive) ── */}
        {activeTab === 'analytics' && (
          <div>
            <div style={{ marginBottom: 16 }}>
              <h2 style={{ fontSize: 15, fontWeight: 600, color: '#f0f0f5', marginBottom: 4 }}>KPI Dashboard (Step 20: Continuous Improvement)</h2>
              <p style={{ fontSize: 12, color: '#6b7280' }}>Review weekly. Act on one degraded metric each week.</p>
            </div>
            <div className="grid-2">
              <div className="card">
                <h3 style={{ fontSize: 14, fontWeight: 600, color: '#f0f0f5', marginBottom: 12 }}>Simulation Quality Metrics</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {[
                    { label: 'Total Simulations', value: String(sims.length), target: 'Grow MoM', status: sims.length > 0 ? 'tracking' : 'waiting' },
                    { label: 'Completed', value: String(completed.length), target: '>90%', status: sims.length > 0 && completed.length / sims.length > 0.9 ? 'good' : 'needs work' },
                    { label: 'Failed', value: String(failed.length), target: '<5%', status: sims.length > 0 && failed.length / sims.length < 0.05 ? 'good' : 'needs work' },
                    { label: 'Avg VSWR (completed)', value: completed.length > 0 ? (completed.reduce((a, s) => a + (s.result?.vswr || 0), 0) / completed.length).toFixed(2) : '—', target: '1.0-2.0', status: 'info' },
                    { label: 'Avg Gain (completed)', value: completed.length > 0 ? (completed.reduce((a, s) => a + (s.result?.gain_dbi || 0), 0) / completed.length).toFixed(1) + ' dBi' : '—', target: 'Depends on type', status: 'info' },
                  ].map((m, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', background: '#1a1a2e', borderRadius: 6 }}>
                      <div>
                        <div style={{ fontSize: 12, color: '#d1d5db' }}>{m.label}</div>
                        <div style={{ fontSize: 10, color: '#6b7280' }}>{m.target}</div>
                      </div>
                      <div style={{ fontSize: 16, fontWeight: 700, color: m.status === 'good' ? '#34d399' : m.status === 'needs work' ? '#f87171' : '#9ca3af' }}>{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card">
                <h3 style={{ fontSize: 14, fontWeight: 600, color: '#f0f0f5', marginBottom: 12 }}>Business Metrics</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {[
                    { label: 'Plan', value: user.plan, target: 'Upsell path: Starter > Pro > Team' },
                    { label: 'Sims Remaining', value: String(user.simulations_remaining), target: 'Refill: plan renewal' },
                    { label: 'Account Age', value: `${Math.floor((Date.now() - new Date(user.created_at).getTime()) / 86400000)} days`, target: 'Retention >30 days' },
                    { label: 'Avg Sims/Day', value: sims.length > 0 ? (sims.length / Math.max(1, Math.floor((Date.now() - new Date(user.created_at).getTime()) / 86400000))).toFixed(1) : '—', target: 'Growing' },
                    { label: 'Churn Risk', value: thisWeek.length === 0 && sims.length > 0 ? 'Inactive' : 'Active', target: 'Active = 1+ sim/week' },
                  ].map((m, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', background: '#1a1a2e', borderRadius: 6 }}>
                      <div>
                        <div style={{ fontSize: 12, color: '#d1d5db' }}>{m.label}</div>
                        <div style={{ fontSize: 10, color: '#6b7280' }}>{m.target}</div>
                      </div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: m.value === 'Inactive' ? '#f87171' : m.value === 'Active' ? '#34d399' : '#9ca3af' }}>{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
