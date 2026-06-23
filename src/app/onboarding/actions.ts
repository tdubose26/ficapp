'use server'

import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export async function saveOnboarding(formData: {
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
}) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return { error: 'Not authenticated' }
  }

  const { error } = await supabase
    .from('profiles')
    .update({
      ...formData,
      onboarding_complete: true,
      updated_at: new Date().toISOString(),
    })
    .eq('id', user.id)

  if (error) {
    return { error: error.message }
  }

  redirect('/dashboard')
}
