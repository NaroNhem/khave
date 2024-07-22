'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = createClient()
  
  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }
  const { error } = await supabase.auth.signInWithPassword(data)
  console.log('heyho')
  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/account/dashboard')
}

export async function signup(formData: FormData) {
  console.log('Signup function called')
  const supabase = createClient()
  
  // Type-casting here for convenience
  // In practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    console.error('Error during sign-up:', error)
    redirect('/error')
    return
  }

  console.log('User signed up successfully')

  // Revalidate path and then redirect
  revalidatePath('/', 'layout')
  console.log('Revalidated path, redirecting to notification page')
  redirect('/notification')
}