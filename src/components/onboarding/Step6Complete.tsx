'use client'

import { useState } from 'react'
import { ChevronRight } from 'lucide-react'

type Props = {
  onFinish: () => Promise<void>
}

export default function Step6Complete({ onFinish }: Props) {
  const [saving, setSaving] = useState(false)

  const handleClick = async () => {
    setSaving(true)
    await onFinish()
  }

  return (
    <div style={{ textAlign: 'center', padding: '0.5rem 0' }}>
      <p className="text-secondary" style={{ fontSize: '0.95rem', marginBottom: '1.5rem' }}>
        You&apos;re all set. Tap below to head to your dashboard.
      </p>
      <button
        onClick={handleClick}
        disabled={saving}
        className="bg-secondary text-white border-2 border-primary"
        style={{
          width: '100%',
          padding: '0.9rem 1.25rem',
          borderRadius: '9999px',
          fontSize: '1rem',
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          cursor: saving ? 'wait' : 'pointer',
          boxShadow: '0 6px 18px rgba(0,0,0,0.2)',
        }}
      >
        <span style={{ width: 20 }} />
        <span style={{ flex: 1, textAlign: 'center' }}>
          {saving ? 'Saving...' : 'Go to Dashboard'}
        </span>
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  )
}
