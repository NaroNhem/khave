import { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from '@/utils/supabase/server'

export async function googleLogin() {
    const supabase = createClient()
    
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `http://localhost:3000`,
      },
    })
    
  
    if (error) {
      console.log('Error during Google login:', error)
      // Handle error appropriately, e.g., show an error message to the user
    }
    
  }