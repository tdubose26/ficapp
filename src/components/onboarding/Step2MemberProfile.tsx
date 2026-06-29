'use client'

import { ChevronRight } from 'lucide-react'
import { WizardData } from './OnboardingWizard'

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
const INPUT_CLASS = "bg-white border-2 border-secondary text-secondary rounded-lg w-full placeholder:text-secondary/50"
const INPUT_STYLE: React.CSSProperties = { padding: '0.75rem 1rem', fontSize: '1rem' }

export default function Step2MemberProfile({ data, updateData, next }: Props) {
  const canProceed = data.ministry_status.trim().length > 0

  return (
    <div>
      <div style={{ marginBottom: '1rem' }}>
        <label className="text-secondary" style={FIELD_LABEL_STYLE}>Ministry Status *</label>
        <select
          value={data.ministry_status}
          onChange={(e) => updateData({ ministry_status: e.target.value })}
          className={INPUT_CLASS}
          style={INPUT_STYLE}
        >
          <option value="">Select one...</option>
          <option value="visitor">First-Time Visitor</option>
          <option value="regular_attender">Regular Attender</option>
          <option value="member">Member</option>
          <option value="leader">Ministry Leader</option>
        </select>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label className="text-secondary" style={FIELD_LABEL_STYLE}>Household Type (optional)</label>
        <select
          value={data.household_type}
          onChange={(e) => updateData({ household_type: e.target.value })}
          className={INPUT_CLASS}
          style={INPUT_STYLE}
        >
          <option value="">Prefer not to say</option>
          <option value="single_adult">Single Adult</option>
          <option value="married_no_kids">Married, no kids</option>
          <option value="married_with_kids">Married, with kids</option>
          <option value="single_parent">Single Parent</option>
          <option value="empty_nesters">Empty Nesters</option>
          <option value="multi_generational">Multi-generational</option>
        </select>
      </div>

      <div style={{ marginBottom: '0.5rem' }}>
        <label className="text-secondary" style={FIELD_LABEL_STYLE}>Children/Youth Connected to FIC (optional)</label>
        <input
          type="text"
          value={data.children_youth}
          onChange={(e) => updateData({ children_youth: e.target.value })}
          placeholder="e.g., 2 kids in FLOW Kids"
          className={INPUT_CLASS}
          style={INPUT_STYLE}
        />
      </div>

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
