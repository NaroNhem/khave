import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default async function PrivatePage() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    console.log('hello')
    redirect('/login')
  }

  return <div>
        <p>Hello {data.user.email}</p>
        <Link href='/account/logout'><Button>logout</Button></Link>
    </div>
}