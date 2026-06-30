'use client'

import { useState } from 'react'
import { Shield, Bell } from 'lucide-react'
import BottomNav from '@/components/BottomNav'
import Image from 'next/image'

const LABEL_STYLE: React.CSSProperties = {
  display: 'block',
  marginBottom: '0.4rem',
  marginTop: '1rem',
  fontSize: '0.7rem',
  fontWeight: 700,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
}
const INPUT_CLASS = "bg-white border border-secondary text-secondary rounded-lg w-full placeholder:text-secondary/50"
const INPUT_STYLE: React.CSSProperties = { padding: '0.75rem 1rem', fontSize: '1rem' }

export default function WellspringPage() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [request, setRequest] = useState('')
  const [urgency, setUrgency] = useState<'standard' | 'urgent'>('standard')
  const [contactPermission, setContactPermission] = useState(false)

  const handleSubmit = () => {
    console.log('Prayer request:', { name, phone, request, urgency, contactPermission })
  }

  const toggleBase: React.CSSProperties = {
    flex: 1,
    padding: '0.75rem',
    borderRadius: '9999px',
    fontSize: '0.95rem',
    fontWeight: 600,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
  }

  return (
    <div
      className="text-foreground"
      style={{
        minHeight: '100vh',
        backgroundImage:
          'radial-gradient(ellipse at top, var(--secondary) 0%, var(--primary) 55%, var(--secondary) 100%)',
        backgroundColor: 'var(--secondary)',
        padding: '2.5rem 1.5rem 100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Logo */}
      <Image src="/Flowlogoofficial.svg" alt="Flowing In Christ Ministries" width={60} height={60} priority />

      {/* Heading */}
      <div style={{ textAlign: 'center', marginTop: '1.25rem' }}>
        <h1 className="font-serif text-[#F7F4ED] text-4xl">Prayer Request</h1>
        <p
          className="text-[#F7F4ED]"
          style={{ marginTop: '0.5rem', fontSize: '0.95rem', fontStyle: 'italic', opacity: 0.8 }}
        >
          You are not carrying this alone.
        </p>
      </div>

      {/* Form card */}
      <div
        className="text-secondary"
        style={{
          width: '100%',
          maxWidth: 520,
          marginTop: '1.5rem',
          padding: '1.75rem',
          borderRadius: '1.5rem',
          backgroundColor: 'rgba(247,244,237,0.96)',
          boxShadow: '0 16px 36px rgba(0,0,0,0.25)',
        }}
      >
        <label className="text-secondary" style={{ ...LABEL_STYLE, marginTop: 0 }}>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your full name"
          className={INPUT_CLASS}
          style={INPUT_STYLE}
        />

        <label className="text-secondary" style={LABEL_STYLE}>Phone</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter your phone number"
          className={INPUT_CLASS}
          style={INPUT_STYLE}
        />

        <label className="text-secondary" style={LABEL_STYLE}>Prayer Request</label>
        <textarea
          value={request}
          onChange={(e) => setRequest(e.target.value)}
          placeholder="Share your request, and let us pray with you."
          rows={5}
          className={INPUT_CLASS}
          style={{ ...INPUT_STYLE, resize: 'vertical' }}
        />

        <label className="text-secondary" style={LABEL_STYLE}>Urgency</label>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button
            type="button"
            onClick={() => setUrgency('standard')}
            className={
              urgency === 'standard'
                ? 'bg-secondary text-white border-2 border-primary'
                : 'bg-white text-secondary border-2 border-secondary'
            }
            style={toggleBase}
          >
            <Shield className="text-primary h-4 w-4" /> Standard
          </button>
          <button
            type="button"
            onClick={() => setUrgency('urgent')}
            className={
              urgency === 'urgent'
                ? 'bg-secondary text-white border-2 border-primary'
                : 'bg-white text-secondary border-2 border-secondary'
            }
            style={toggleBase}
          >
            <Bell className="text-primary h-4 w-4" /> Urgent
          </button>
        </div>

        {/* Contact permission */}
        <label
          className="text-secondary"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            marginTop: '1.25rem',
            fontSize: '0.9rem',
            cursor: 'pointer',
          }}
        >
          <input
            type="checkbox"
            checked={contactPermission}
            onChange={(e) => setContactPermission(e.target.checked)}
            className="accent-primary"
            style={{ width: 18, height: 18 }}
          />
          Permission to contact me
        </label>
      </div>

      {/* Submit */}
      <button
        type="button"
        onClick={handleSubmit}
        className="bg-secondary border-2 border-primary"
        style={{
          width: '100%',
          maxWidth: 520,
          marginTop: '1.5rem',
          padding: '1rem 1.5rem',
          borderRadius: '9999px',
          color: '#fff',
          fontSize: '1.05rem',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
        }}
      >
        <span aria-hidden>🙏</span>
        <span className="font-serif">Submit Request</span>
      </button>

      <BottomNav />
    </div>
  )
}
