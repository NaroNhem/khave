'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

const supabase = createClient()

export default async function signOut() {
const { error } = await supabase.auth.signOut({ scope: 'global' })

if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

