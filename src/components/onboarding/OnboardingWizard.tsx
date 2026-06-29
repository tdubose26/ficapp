'use client'

import { useState } from 'react'
import Step1Welcome from './Step1Welcome'
import Step2MemberProfile from './Step2MemberProfile'
import Step4ServeTeams from './Step4ServeTeams'
import Step5Notifications from './Step5Notifications'
import Step6Complete from './Step6Complete'
import { saveOnboarding } from '@/app/onboarding/actions'

export type WizardData = {
  full_name: string
  preferred_name: string
  phone: string
  ministry_status: string
  household_type: string
  children_youth: string
  serves: boolean
  preferred_serve_team: string
  sms_permission: boolean
  email_permission: boolean
  push_permission: boolean
}

const TOTAL_STEPS = 5
const STEP_HEADERS = [
  { title: 'Set Up Your Profile', subtitle: "Let's start by getting to know you." },
  { title: 'Tell Us About You', subtitle: 'Tell us a bit about your connection to FIC.' },
  { title: 'How Do You Want to Serve?', subtitle: 'Are you currently serving on a team at FIC?' },
  { title: 'Stay Connected', subtitle: 'How would you like to hear from us?' },
  { title: 'Welcome to The FLOW!', subtitle: 'Your profile is set up. An admin will review and approve your account shortly.' },
]

export default function OnboardingWizard({ userId }: { userId: string }) {
  const [step, setStep] = useState(1)
  const [data, setData] = useState<WizardData>({
    full_name: '',
    preferred_name: '',
    phone: '',
    ministry_status: '',
    household_type: '',
    children_youth: '',
    serves: false,
    preferred_serve_team: '',
    sms_permission: false,
    email_permission: false,
    push_permission: false,
  })

  const updateData = (updates: Partial<WizardData>) => {
    setData((prev) => ({ ...prev, ...updates }))
  }

  const next = () => setStep((s) => s + 1)
  const back = () => setStep((s) => s - 1)

  const handleFinish = async () => {
    await saveOnboarding(data)
  }

  const header = STEP_HEADERS[step - 1]
  const showBack = step > 1 && step < TOTAL_STEPS

  return (
    <div
      className="text-foreground"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2.5rem 1.5rem 3rem',
        backgroundImage:
          'radial-gradient(ellipse at top, var(--secondary) 0%, var(--primary) 55%, var(--secondary) 100%)',
        backgroundColor: 'var(--secondary)',
      }}
    >
      {/* Logo placeholder */}
      <div
        aria-hidden
        style={{
          width: 100,
          height: 100,
          borderRadius: '9999px',
          backgroundImage:
            'radial-gradient(circle at 30% 25%, var(--primary) 0%, var(--primary) 35%, var(--secondary) 100%)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.35)',
        }}
      />

      {/* Wordmark */}
      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <p
          className="font-serif text-[#F7F4ED] tracking-widest"
          style={{ fontSize: '0.85rem', lineHeight: 1.1 }}
        >
          FLOWING IN CHRIST
        </p>
        <p
          className="font-serif text-[#F7F4ED] tracking-widest"
          style={{ fontSize: '0.65rem', marginTop: '0.2rem' }}
        >
          MINISTRIES
        </p>
      </div>

      {/* Step header */}
      <div style={{ textAlign: 'center', marginTop: '1.5rem', maxWidth: 520 }}>
        <h1 className="font-serif text-[#F7F4ED] text-4xl">{header.title}</h1>
        <p
          className="text-[#F7F4ED]"
          style={{ marginTop: '0.5rem', fontSize: '0.95rem' }}
        >
          {header.subtitle}
        </p>
        <p
          className="text-[#F7F4ED]"
          style={{ marginTop: '0.85rem', fontSize: '0.8rem', opacity: 0.9 }}
        >
          Step {step} of {TOTAL_STEPS}
        </p>
      </div>

      {/* Progress dots */}
      <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem' }}>
        {Array.from({ length: TOTAL_STEPS }, (_, i) => {
          const n = i + 1
          if (n === step) {
            return (
              <span
                key={n}
                className="bg-primary"
                style={{ width: 10, height: 10, borderRadius: '9999px' }}
              />
            )
          }
          if (n < step) {
            return (
              <span
                key={n}
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: '9999px',
                  backgroundColor: '#F7F4ED',
                }}
              />
            )
          }
          return (
            <span
              key={n}
              style={{
                width: 10,
                height: 10,
                borderRadius: '9999px',
                border: '2px solid #F7F4ED',
                boxSizing: 'border-box',
              }}
            />
          )
        })}
      </div>

      {/* Card */}
      <div
        className="bg-white/95 text-secondary"
        style={{
          width: '100%',
          maxWidth: 520,
          marginTop: '1.5rem',
          padding: '1.5rem',
          borderRadius: '1rem',
          boxShadow: '0 12px 32px rgba(0,0,0,0.25)',
        }}
      >
        {step === 1 && <Step1Welcome data={data} updateData={updateData} next={next} />}
        {step === 2 && <Step2MemberProfile data={data} updateData={updateData} next={next} back={back} />}
        {step === 3 && <Step4ServeTeams data={data} updateData={updateData} next={next} back={back} />}
        {step === 4 && <Step5Notifications data={data} updateData={updateData} next={next} back={back} />}
        {step === 5 && <Step6Complete onFinish={handleFinish} />}
      </div>

      {/* Back link */}
      {showBack && (
        <button
          onClick={back}
          className="text-[#F7F4ED]"
          style={{
            marginTop: '1.25rem',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            fontSize: '0.95rem',
            textDecoration: 'underline',
          }}
        >
          Back
        </button>
      )}
    </div>
  )
}
