import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default async function PrivatePage() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    console.log('hello')
    redirect('/login')
  }

  return <div className='flex items-end h-full w-full bg-gray-50 dark:bg-gray-950 z-10'>
        {/* <p>Hello {data.user.email}</p>
        <Link href='/account/logout'><Button>logout</Button></Link> */}
        <div className='flex justify-center w-full'>
          <Input placeholder='Your idea...'className='rounded-2xl w-1/2 mb-5 bg-gray-200 dark:bg-gray-900 focus-visible:ring-0' />
        </div>
    </div>
}