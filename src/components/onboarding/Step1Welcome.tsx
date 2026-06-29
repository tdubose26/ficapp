'use client'

import { ChevronRight, User, Camera } from 'lucide-react'
import { WizardData } from './OnboardingWizard'

type Props = {
  data: WizardData
  updateData: (updates: Partial<WizardData>) => void
  next: () => void
}

const FIELD_LABEL = "text-secondary"
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

export default function Step1Welcome({ data, updateData, next }: Props) {
  const canProceed = data.full_name.trim().length > 0 && data.phone.trim().length >= 10

  return (
    <div>
      {/* Avatar + upload (decorative) */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1.25rem' }}>
        <div
          aria-hidden
          className="bg-muted text-muted-foreground"
          style={{
            width: 80,
            height: 80,
            borderRadius: '9999px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <User className="h-9 w-9" />
        </div>
        <button
          type="button"
          className="text-secondary"
          style={{
            marginTop: '0.6rem',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontSize: '0.85rem',
            fontWeight: 600,
          }}
        >
          <Camera className="h-4 w-4" /> Upload Photo
        </button>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label className={FIELD_LABEL} style={FIELD_LABEL_STYLE}>Full Name *</label>
        <input
          type="text"
          value={data.full_name}
          onChange={(e) => updateData({ full_name: e.target.value })}
          className={INPUT_CLASS}
          style={INPUT_STYLE}
        />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label className={FIELD_LABEL} style={FIELD_LABEL_STYLE}>Preferred Name</label>
        <input
          type="text"
          value={data.preferred_name}
          onChange={(e) => updateData({ preferred_name: e.target.value })}
          placeholder="What should we call you?"
          className={INPUT_CLASS}
          style={INPUT_STYLE}
        />
      </div>

      <div style={{ marginBottom: '0.5rem' }}>
        <label className={FIELD_LABEL} style={FIELD_LABEL_STYLE}>Phone Number *</label>
        <input
          type="tel"
          value={data.phone}
          onChange={(e) => updateData({ phone: e.target.value })}
          placeholder="555-555-5555"
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
