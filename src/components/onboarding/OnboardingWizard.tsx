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

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#000', color: '#fff', padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ maxWidth: '600px', width: '100%' }}>
        <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: '1.5rem', color: '#D0A334', marginBottom: '0.5rem' }}>The FLOW</h1>
          <p style={{ fontSize: '0.9rem', opacity: 0.6 }}>Step {step} of 5</p>
        </div>
        {step === 1 && <Step1Welcome data={data} updateData={updateData} next={next} />}
        {step === 2 && <Step2MemberProfile data={data} updateData={updateData} next={next} back={back} />}
        {step === 3 && <Step4ServeTeams data={data} updateData={updateData} next={next} back={back} />}
        {step === 4 && <Step5Notifications data={data} updateData={updateData} next={next} back={back} />}
        {step === 5 && <Step6Complete onFinish={handleFinish} />}
      </div>
    </div>
  )
}
