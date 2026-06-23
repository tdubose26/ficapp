'use client'

import { useState } from 'react'

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
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ fontSize: '2rem', color: '#D0A334', marginBottom: '1.5rem' }}>You're in The FLOW.</h2>
      <p style={{ marginBottom: '2.5rem', opacity: 0.8, fontSize: '1.05rem' }}>Your profile is set up. An admin will review and approve your account shortly.</p>
      <button onClick={handleClick} disabled={saving} style={{ padding: '0.875rem 2rem', backgroundColor: '#7F1519', color: '#fff', border: 'none', borderRadius: '0.5rem', fontSize: '1rem', cursor: saving ? 'wait' : 'pointer' }}>
        {saving ? 'Saving...' : 'Go to Dashboard'}
      </button>
    </div>
  )
}
