'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function approveMember(memberId: string) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) return { error: 'Not authenticated' }

  const { data: myProfile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .single()

  if (myProfile?.role !== 'admin' && myProfile?.role !== 'pastor') {
    return { error: 'Not authorized' }
  }

  const { error } = await supabase
    .from('profiles')
    .update({ approval_status: 'approved', updated_at: new Date().toISOString() })
    .eq('id', memberId)

  if (error) return { error: error.message }

  revalidatePath('/admin/approvals')
  return { success: true }
}

export async function rejectMember(memberId: string) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) return { error: 'Not authenticated' }

  const { data: myProfile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .single()

  if (myProfile?.role !== 'admin' && myProfile?.role !== 'pastor') {
    return { error: 'Not authorized' }
  }

  const { error } = await supabase
    .from('profiles')
    .update({ approval_status: 'rejected', updated_at: new Date().toISOString() })
    .eq('id', memberId)

  if (error) return { error: error.message }

  revalidatePath('/admin/approvals')
  return { success: true }
}
