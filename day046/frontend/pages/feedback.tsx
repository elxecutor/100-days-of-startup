import { useState } from 'react'
import type { ChangeEvent } from 'react'

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

interface Question {
  id: string
  q: string
  placeholder: string
}

const QUESTIONS: Question[] = [
  { id: 'frustration', q: 'What is the most frustrating part of your current antenna design workflow?', placeholder: 'e.g., waiting for simulations, expensive licenses, sharing designs...' },
  { id: 'feature', q: 'If you could wave a magic wand, what ONE feature would our tool have?', placeholder: 'e.g., AI optimization, real-time collaboration, VNA data import...' },
  { id: 'missing', q: 'What is AntennaForge missing that would make you use it daily?', placeholder: 'e.g., more antenna types, better plots, API docs...' },
  { id: 'price', q: 'What would you change about our pricing?', placeholder: 'e.g., too expensive, need a cheaper tier, want usage-based...' },
  { id: 'other', q: 'Anything else? (Bug reports, suggestions, love letters)', placeholder: 'Tell us anything...' },
]

export default function Feedback() {
  const [selected, setSelected] = useState<string | null>(null)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [showFeedback, setShowFeedback] = useState(true)

  const updateAnswer = (id: string) => (e: ChangeEvent<HTMLTextAreaElement>) => setAnswers({ ...answers, [id]: e.target.value })

  const handleSubmit = () => {
    setSubmitted(true)
    setTimeout(() => {
      setSelected(null)
      setAnswers({})
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div style={{ minHeight: '100vh' }}>
      <nav style={{ borderBottom: '1px solid #1f2937', padding: '14px 0', background: '#0a0a0f' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/" style={{ fontWeight: 700, fontSize: 16, color: '#f0f0f5', textDecoration: 'none' }}>AntennaForge</a>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <a href="/" style={{ color: '#9ca3af', fontSize: 13 }}>Home</a>
            <a href="/feedback" style={{ color: '#60a5fa', fontSize: 13, fontWeight: 500 }}>Feedback</a>
            <a href="/login" className="btn btn-ghost" style={{ fontSize: 12, padding: '6px 14px' }}>Sign In</a>
          </div>
        </div>
      </nav>

      <section style={{ padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: 700 }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h1 style={{ fontSize: 28, fontWeight: 800, color: '#f0f0f5', marginBottom: 8 }}>
              Help Us Improve
            </h1>
            <p style={{ color: '#9ca3af', fontSize: 14, lineHeight: 1.6 }}>
              <strong>Step 10:</strong> Customer feedback loop. We run weekly build-&gt;measure-&gt;learn cycles.
              <br />Your answers go directly into our product backlog.
            </p>
          </div>

          {/* The Feedback Loop cycle */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 32, fontSize: 12, color: '#9ca3af' }}>
            <div style={{ textAlign: 'center' }}>
              <div>Build</div>
            </div>
            <div style={{ fontSize: 24, color: '#374151' }}>-</div>
            <div style={{ textAlign: 'center' }}>
              <div>Measure</div>
            </div>
            <div style={{ fontSize: 24, color: '#374151' }}>-</div>
            <div style={{ textAlign: 'center' }}>
              <div>Learn</div>
            </div>
            <div style={{ fontSize: 24, color: '#374151' }}>-</div>
            <div style={{ textAlign: 'center' }}>
              <div>Build</div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {QUESTIONS.map((q, i) => (
              <div key={q.id} className="card card-hover" style={{ cursor: 'pointer', borderColor: selected === q.id ? '#2563eb' : '#1f2937' }}
                onClick={() => { setSelected(q.id); setShowFeedback(true) }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
                  <div style={{ fontSize: 14, color: '#d1d5db', flex: 1 }}>
                    <span style={{ color: '#60a5fa', fontWeight: 600, marginRight: 8 }}>Q{i + 1}:</span>
                    {q.q}
                  </div>
                  {answers[q.id] && <span style={{ color: '#34d399', fontSize: 16 }}>Answered</span>}
                </div>

                {selected === q.id && showFeedback && (
                  <div style={{ marginTop: 12 }} onClick={e => e.stopPropagation()}>
                    <textarea className="input" rows={3}
                      placeholder={q.placeholder}
                      value={answers[q.id] || ''}
                      onChange={updateAnswer(q.id)}
                      style={{ resize: 'vertical' }} />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 24 }}>
            <button className="btn btn-primary" onClick={handleSubmit} disabled={submitted || Object.keys(answers).length === 0}
              style={{ opacity: Object.keys(answers).length === 0 ? 0.5 : 1 }}>
              {submitted ? 'Submitted - Thank you!' : 'Submit Feedback'}
            </button>
            <p style={{ fontSize: 11, color: '#6b7280', marginTop: 8 }}>
              {Object.keys(answers).length} of {QUESTIONS.length} answered
            </p>
          </div>

          {/* Step 10 detail */}
          <div style={{ marginTop: 32, padding: 16, background: '#14141f', borderRadius: 8, border: '1px solid #1f2937', fontSize: 12, color: '#9ca3af', lineHeight: 1.6 }}>
            <strong style={{ color: '#d1d5db' }}>How we process feedback (Step 10):</strong>
            <ul style={{ marginTop: 6, listStyle: 'none' }}>
              <li>• Weekly triage: Every Monday, we review all feedback from the past week.</li>
              <li>• Score by impact: Each request gets a score (1-5) for frequency x urgency.</li>
              <li>• Top 1 goes into next sprint: We ship one improvement per week.</li>
              <li>• Close the loop: If you leave your email, we reply when your feature ships.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
