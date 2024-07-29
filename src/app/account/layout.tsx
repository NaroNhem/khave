import React from 'react'
import Sidebar from '@/app/components/sidebar'

type Props = { children: React.ReactNode }

const Layout = (props: Props) => {
  return (
    <div className="flex overflow-hidden h-screen">
      <Sidebar />
    </div>
  )
}

export default Layout