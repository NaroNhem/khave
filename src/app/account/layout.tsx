import React from 'react'
import Sidebar from '@/app/components/sidebar'

type Props = { children: React.ReactNode }

const Layout = (props: Props) => {
  return (
    <div className="flex overflow-hidden h-screen">
      <div>
        <Sidebar/>
        </div>
      <div className='w-full z-0'>
        {props.children}
        </div>
    </div>
  )
}

export default Layout