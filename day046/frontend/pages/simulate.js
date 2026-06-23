import { useState, useEffect } from 'react'
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts'

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'
const ANTENNA_TYPES = ['dipole', 'patch', 'helical', 'monopole', 'yagi', 'loop']

const DEFAULT_PARAMS = {
  dipole: { length_m: 0.5, diameter_m: 0.0025 },
  patch: { width_m: 0.1, length_m: 0.08, substrate_er: 4.4, substrate_height_m: 0.0016 },
  helical: { turns: 10, spacing_m: 0.05, diameter_m: 0.05 },
  monopole: { height_m: 1.0 },
  yagi: { elements: 5, boom_length_m: 1.0 },
  loop: { radius_m: 0.1, turns: 1 },
}

const PARAM_LABELS = {
  length_m: 'Length (m)', diameter_m: 'Diameter (m)',
  width_m: 'Width (m)', substrate_er: 'Substrate εr', substrate_height_m: 'Substrate Height (m)',
  turns: 'Turns', spacing_m: 'Spacing (m)', height_m: 'Height (m)',
  elements: 'Elements', boom_length_m: 'Boom Length (m)', radius_m: 'Radius (m)',
}

const ANTENNA_DESCRIPTIONS = {
  dipole: 'Half-wave dipole. Simple, omnidirectional. Common baseline reference antenna.',
  patch: 'Microstrip patch. Low profile, directional. Used in PCBs and IoT devices.',
  helical: 'Helical/helix. Circular polarization. Used for satellite and GPS.',
  monopole: 'Quarter-wave monopole. Omnidirectional with ground plane. Common in mobile/vehicle.',
  yagi: 'Yagi-Uda array. High gain, directional. Used for TV reception and point-to-point links.',
  loop: 'Small loop. Compact, low profile. Used for NFC, RFID, and direction finding.',
}

// Step 12: Explicit feature scope
const SCOPE = {
  in_scope: ['6 antenna types', 'S-parameter sweep', 'VSWR/Return Loss/Gain/Impedance/BW/Efficiency', 'Touchstone export', 'Team sharing via link', 'REST API', 'Cloud scheduler'],
  future: ['3D far-field patterns', 'Optimization engine', 'Real-world VNA feedback loop', 'Custom antenna builder', 'AI-assisted design', 'EM simulation (FEM/FDTD)'],
  never: ['Mobile app', 'Native desktop app', 'Antenna marketplace', 'Custom solver engine'],
}

export default function Simulate() {
  const [token, setToken] = useState(null)
  const [type, setType] = useState('dipole')
  const [freqMHz, setFreqMHz] = useState(300)
  const [params, setParams] = useState(DEFAULT_PARAMS.dipole)
  const [result, setResult] = useState(null)
  const [sweepData, setSweepData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [sweepLoading, setSweepLoading] = useState(false)
  const [error, setError] = useState('')
  const [showScope, setShowScope] = useState(false)

  useEffect(() => {
    const t = localStorage.getItem('af_token')
    if (!t) { window.location.href = '/login'; return }
    setToken(t)
  }, [])

  const handleTypeChange = (newType) => {
    setType(newType)
    setParams(DEFAULT_PARAMS[newType])
    setResult(null)
    setSweepData(null)
    setError('')
  }

  const updateParam = (key) => (e) => setParams({ ...params, [key]: parseFloat(e.target.value) || 0 })

  const runSimulation = async () => {
    if (!token) return
    setLoading(true)
    setError('')
    setResult(null)
    setSweepData(null)
    try {
      const res = await fetch(`${API}/simulate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ antenna_type: type, frequency_hz: freqMHz * 1e6, parameters: params }),
      })
      if (!res.ok) { const err = await res.json(); throw new Error(err.detail || 'Simulation failed') }
      const data = await res.json()
      setResult(data.result)
    } catch (err) { setError(err.message) }
    finally { setLoading(false) }
  }

  const runSweep = async () => {
    if (!token) return
    setSweepLoading(true)
    try {
      const res = await fetch(`${API}/simulations/sweep?points=201`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ antenna_type: type, frequency_hz: freqMHz * 1e6, parameters: params }),
      })
      if (!res.ok) throw new Error('Sweep failed')
      const data = await res.json()
      setSweepData(data.frequencies_hz.map((f, i) => ({ freq: (f / 1e6).toFixed(1), s11: data.s11_db[i] })))
    } catch (err) { setError(err.message) }
    finally { setSweepLoading(false) }
  }

  return (
    <div style={{ minHeight: '100vh' }}>
      <nav style={{ borderBottom: '1px solid #1f2937', padding: '12px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#0a0a0f' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <a href="/dashboard" style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700, fontSize: 16, color: '#f0f0f5', textDecoration: 'none' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2"><circle cx="12" cy="12" r="7"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/></svg>
            AntennaForge
          </a>
          <a href="/dashboard" style={{ color: '#9ca3af', fontSize: 13 }}>Dashboard</a>
          <a href="/simulate" style={{ color: '#60a5fa', fontSize: 13, fontWeight: 500 }}>Simulate</a>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={() => setShowScope(!showScope)} className="btn btn-ghost" style={{ fontSize: 11, padding: '4px 12px' }}>
            {showScope ? 'Hide' : 'Show'} Feature Scope
          </button>
          <a href="/dashboard" className="btn btn-ghost" style={{ fontSize: 12, padding: '4px 12px' }}>← Back</a>
        </div>
      </nav>

      {/* ── Step 12: Feature Scope Banner ── */}
      {showScope && (
        <div style={{ background: '#1e3a5f', borderBottom: '1px solid #3b82f6', padding: '12px 24px' }}>
          <div className="container" style={{ maxWidth: 1400, margin: '0 auto', display: 'flex', gap: 32, fontSize: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <div>
              <span style={{ color: '#34d399', fontWeight: 600 }}>✓ In MVP Scope</span>
              <ul style={{ marginTop: 4, color: '#9ca3af', listStyle: 'none' }}>
                {SCOPE.in_scope.map(s => <li key={s}>• {s}</li>)}
              </ul>
            </div>
            <div>
              <span style={{ color: '#fbbf24', fontWeight: 600 }}>⟳ Future</span>
              <ul style={{ marginTop: 4, color: '#9ca3af', listStyle: 'none' }}>
                {SCOPE.future.map(s => <li key={s}>• {s}</li>)}
              </ul>
            </div>
            <div>
              <span style={{ color: '#f87171', fontWeight: 600 }}>✗ Never Build</span>
              <ul style={{ marginTop: 4, color: '#9ca3af', listStyle: 'none' }}>
                {SCOPE.never.map(s => <li key={s}>• {s}</li>)}
              </ul>
            </div>
          </div>
        </div>
      )}

      <div style={{ padding: 24, display: 'grid', gridTemplateColumns: '360px 1fr', gap: 24, maxWidth: 1400, margin: '0 auto' }}>
        {/* ── Configuration Panel ── */}
        <div className="card" style={{ height: 'fit-content' }}>
          <h2 style={{ fontSize: 15, fontWeight: 600, color: '#f0f0f5', marginBottom: 4 }}>Antenna Configuration</h2>
          <p style={{ fontSize: 11, color: '#6b7280', marginBottom: 16 }}>Step 7: MVP — 6 antenna types, <strong>only essential parameters</strong></p>

          <div style={{ marginBottom: 16 }}>
            <label className="label">Antenna Type</label>
            <select className="input" value={type} onChange={e => handleTypeChange(e.target.value)}>
              {ANTENNA_TYPES.map(t => <option key={t} value={t}>{t.charAt(0).toUpperCase() + t.slice(1)}</option>)}
            </select>
            <p style={{ fontSize: 11, color: '#6b7280', marginTop: 4 }}>{ANTENNA_DESCRIPTIONS[type]}</p>
          </div>

          <div style={{ marginBottom: 16 }}>
            <label className="label">Center Frequency (MHz)</label>
            <input className="input" type="number" value={freqMHz} onChange={e => setFreqMHz(parseFloat(e.target.value) || 0)} min={1} />
          </div>

          <div style={{ borderTop: '1px solid #1f2937', paddingTop: 16 }}>
            <label className="label" style={{ marginBottom: 12, fontWeight: 600, color: '#d1d5db' }}>Geometric Parameters</label>
            {Object.entries(params).map(([key, val]) => (
              <div key={key} style={{ marginBottom: 12 }}>
                <label className="label">{PARAM_LABELS[key] || key}</label>
                <input className="input" type="number" step="any" value={val} onChange={updateParam(key)} />
              </div>
            ))}
          </div>

          {error && <div style={{ background: '#7f1d1d', color: '#fca5a5', padding: '8px 12px', borderRadius: 8, marginBottom: 16, fontSize: 13 }}>{error}</div>}

          {/* Step 8: Action tied to North Star */}
          <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginBottom: 8 }} onClick={runSimulation} disabled={loading}>
            {loading ? 'Simulating...' : '⭐ Run Simulation'}
          </button>
          <button className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }} onClick={runSweep} disabled={sweepLoading}>
            {sweepLoading ? 'Sweeping...' : '📈 S-Parameter Sweep'}
          </button>
          <p style={{ fontSize: 10, color: '#6b7280', textAlign: 'center', marginTop: 8 }}>
            Each successful simulation counts toward your North Star Metric
          </p>
        </div>

        {/* ── Results Panel ── */}
        <div>
          {result && (
            <div className="card" style={{ marginBottom: 24 }}>
              <h2 style={{ fontSize: 15, fontWeight: 600, color: '#f0f0f5', marginBottom: 16 }}>📊 Simulation Results</h2>
              <div className="grid-3">
                {[
                  { label: 'VSWR', value: result.vswr, color: result.vswr < 2 ? '#34d399' : result.vswr < 3 ? '#fbbf24' : '#f87171' },
                  { label: 'Return Loss (S11)', value: `${result.return_loss_db} dB`, color: result.return_loss_db < -10 ? '#34d399' : '#fbbf24' },
                  { label: 'Gain', value: `${result.gain_dbi} dBi`, color: '#a78bfa' },
                  { label: 'Input Impedance', value: `${result.input_impedance_real}${result.input_impedance_imag >= 0 ? '+' : ''}${result.input_impedance_imag.toFixed(1)}j Ω`, color: '#f472b6' },
                  { label: 'Bandwidth', value: `${(result.bandwidth_hz / 1e6).toFixed(1)} MHz`, color: '#34d399' },
                  { label: 'Efficiency', value: `${(result.efficiency * 100).toFixed(1)}%`, color: '#fbbf24' },
                ].map((m, i) => (
                  <div key={i} style={{ padding: 12, background: '#1a1a2e', borderRadius: 8, textAlign: 'center' }}>
                    <div style={{ fontSize: 11, color: '#9ca3af', marginBottom: 4 }}>{m.label}</div>
                    <div style={{ fontSize: 18, fontWeight: 700, color: m.color }}>{m.value}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 16, padding: '10px 14px', background: '#1a1a2e', borderRadius: 8, fontSize: 12, color: '#9ca3af' }}>
                <strong>Interpretation:</strong> VSWR {'<'} 2.0 is good. Return loss {'<'} -10 dB means {'>'}90% power delivered.
                {result.vswr > 2 && ' Your antenna needs impedance matching.'}
              </div>
            </div>
          )}

          {sweepData && (
            <div className="card" style={{ marginBottom: 24 }}>
              <h2 style={{ fontSize: 15, fontWeight: 600, color: '#f0f0f5', marginBottom: 16 }}>📈 S-Parameter Sweep (S11 vs Frequency)</h2>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={sweepData}>
                  <XAxis dataKey="freq" tick={{ fontSize: 10, fill: '#9ca3af' }} label={{ value: 'Frequency (MHz)', position: 'bottom', fill: '#9ca3af', fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 10, fill: '#9ca3af' }} label={{ value: 'S11 (dB)', angle: -90, position: 'insideLeft', fill: '#9ca3af', fontSize: 11 }} domain={[-40, 0]} />
                  <Tooltip contentStyle={{ background: '#1f2937', border: '1px solid #374151', borderRadius: 8, fontSize: 12 }} />
                  <Line type="monotone" dataKey="s11" stroke="#60a5fa" strokeWidth={2} dot={false} name="S11" />
                </LineChart>
              </ResponsiveContainer>
              <p style={{ fontSize: 11, color: '#6b7280', marginTop: 8 }}>
                The minimum point is the resonant frequency. The -10 dB bandwidth is where S11 {'<'} -10 dB.
              </p>
            </div>
          )}

          {!result && !sweepData && (
            <div className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 400, flexDirection: 'column', gap: 16 }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.5">
                <circle cx="12" cy="12" r="7"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>
              </svg>
              <div style={{ textAlign: 'center' }}>
                <p style={{ color: '#6b7280', fontSize: 14 }}>Configure your antenna on the left.</p>
                <p style={{ color: '#6b7280', fontSize: 12, marginTop: 4 }}>Then click <strong style={{ color: '#60a5fa' }}>Run Simulation</strong> to see results here.</p>
              </div>
              <div style={{ display: 'flex', gap: 12, fontSize: 11, color: '#9ca3af' }}>
                <span>⚡ Cloud solver</span>
                <span>📊 Instant plots</span>
                <span>🔗 Share results</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
