'use client'

import { ChevronRight } from 'lucide-react'
import { WizardData } from './OnboardingWizard'

const SERVE_TEAMS = [
  'Praise and Worship',
  'Minister',
  'Intercessor',
  'Ushers',
  'Greeters',
  'Altar Worker',
  "Men's Ministry",
  'Audio/Visual',
  'Media',
  "Children's Ministry",
  'Drama Team',
  'Choir',
  'Dance Ministry',
  'Mothers Board',
  'Security',
  'Outreach',
]

type Props = {
  data: WizardData
  updateData: (updates: Partial<WizardData>) => void
  next: () => void
  back: () => void
}

const FIELD_LABEL_STYLE: React.CSSProperties = {
  display: 'block',
  marginBottom: '0.4rem',
  fontSize: '0.7rem',
  fontWeight: 700,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
}
const INPUT_CLASS = "bg-white border-2 border-secondary text-secondary rounded-lg w-full"
const INPUT_STYLE: React.CSSProperties = { padding: '0.75rem 1rem', fontSize: '1rem' }

export default function Step4ServeTeams({ data, updateData, next }: Props) {
  const canProceed = !data.serves || (data.serves && data.preferred_serve_team.length > 0)

  const toggleBase: React.CSSProperties = {
    flex: 1,
    padding: '0.85rem',
    borderRadius: '0.75rem',
    fontSize: '0.95rem',
    fontWeight: 600,
    cursor: 'pointer',
  }

  return (
    <div>
      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.25rem' }}>
        <button
          onClick={() => updateData({ serves: true })}
          className={data.serves ? 'bg-secondary text-white border-2 border-primary' : 'bg-white text-secondary border-2 border-secondary'}
          style={toggleBase}
        >
          Yes, I&apos;m Serving
        </button>
        <button
          onClick={() => updateData({ serves: false, preferred_serve_team: '' })}
          className={!data.serves ? 'bg-secondary text-white border-2 border-primary' : 'bg-white text-secondary border-2 border-secondary'}
          style={toggleBase}
        >
          Not Right Now
        </button>
      </div>

      {data.serves && (
        <div style={{ marginBottom: '0.5rem' }}>
          <label className="text-secondary" style={FIELD_LABEL_STYLE}>Which team do you serve on? *</label>
          <select
            value={data.preferred_serve_team}
            onChange={(e) => updateData({ preferred_serve_team: e.target.value })}
            className={INPUT_CLASS}
            style={INPUT_STYLE}
          >
            <option value="">Select your team...</option>
            {SERVE_TEAMS.map((team) => <option key={team} value={team}>{team}</option>)}
          </select>
        </div>
      )}

      <button
        onClick={next}
        disabled={!canProceed}
        className="bg-secondary text-white border-2 border-primary"
        style={{
          width: '100%',
          marginTop: '1.25rem',
          padding: '0.9rem 1.25rem',
          borderRadius: '9999px',
          fontSize: '1rem',
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          cursor: canProceed ? 'pointer' : 'not-allowed',
          opacity: canProceed ? 1 : 0.55,
          boxShadow: canProceed ? '0 6px 18px rgba(0,0,0,0.2)' : 'none',
        }}
      >
        <span style={{ width: 20 }} />
        <span style={{ flex: 1, textAlign: 'center' }}>Continue</span>
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  )
}
