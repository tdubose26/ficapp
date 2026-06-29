'use client'

import { ChevronRight } from 'lucide-react'
import { WizardData } from './OnboardingWizard'

type Props = {
  data: WizardData
  updateData: (updates: Partial<WizardData>) => void
  next: () => void
  back: () => void
}

const LABEL_STYLE: React.CSSProperties = {
  display: 'block',
  marginBottom: '0.5rem',
  fontSize: '0.7rem',
  fontWeight: 700,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
}

function YesNoToggle({ label, value, onChange }: { label: string; value: boolean; onChange: (v: boolean) => void }) {
  const base: React.CSSProperties = {
    flex: 1,
    padding: '0.7rem',
    borderRadius: '0.75rem',
    fontSize: '0.95rem',
    fontWeight: 600,
    cursor: 'pointer',
  }
  return (
    <div style={{ marginBottom: '1.25rem' }}>
      <label className="text-secondary" style={LABEL_STYLE}>{label}</label>
      <div style={{ display: 'flex', gap: '0.75rem' }}>
        <button
          onClick={() => onChange(true)}
          className={value ? 'bg-secondary text-white border-2 border-primary' : 'bg-white text-secondary border-2 border-secondary'}
          style={base}
        >
          Yes
        </button>
        <button
          onClick={() => onChange(false)}
          className={!value ? 'bg-secondary text-white border-2 border-primary' : 'bg-white text-secondary border-2 border-secondary'}
          style={base}
        >
          No
        </button>
      </div>
    </div>
  )
}

export default function Step5Notifications({ data, updateData, next }: Props) {
  return (
    <div>
      <YesNoToggle label="SMS / Text Messages" value={data.sms_permission} onChange={(v) => updateData({ sms_permission: v })} />
      <YesNoToggle label="Email" value={data.email_permission} onChange={(v) => updateData({ email_permission: v })} />
      <YesNoToggle label="Push Notifications (coming soon)" value={data.push_permission} onChange={(v) => updateData({ push_permission: v })} />

      <button
        onClick={next}
        className="bg-secondary text-white border-2 border-primary"
        style={{
          width: '100%',
          marginTop: '0.5rem',
          padding: '0.9rem 1.25rem',
          borderRadius: '9999px',
          fontSize: '1rem',
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          cursor: 'pointer',
          boxShadow: '0 6px 18px rgba(0,0,0,0.2)',
        }}
      >
        <span style={{ width: 20 }} />
        <span style={{ flex: 1, textAlign: 'center' }}>Continue</span>
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  )
}
