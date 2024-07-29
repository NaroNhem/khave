'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import clsx from 'clsx'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { PanelLeftDashed, Settings, SquarePen } from 'lucide-react'
import Create from '../create/create'

type Props = {}

const MenuOptions = (props: Props) => {
  const pathName = usePathname()
  const [hidden, setHidden] = useState(false)
  const onClickCloseSideBar = () => setHidden(!hidden)

  return (
    <div>
    <nav className ={
        !hidden ?  "dark:bg-black h-screen overflow-y-scroll justify-between md:flex items-center flex-col  gap-10 py-2 px-2 w-[15vw] hidden " : "hidden"}>
      <div className="flex justify-between gap-8 w-full">
        {/* <Link
          className="flex font-bold flex-row "
          href="/"
        >
          KhaveAI
        </Link> */}
            <Button onClick={() => onClickCloseSideBar()}className='w-14 bg-inherit hover:bg-slate-900'> 
                <PanelLeftDashed className='h-8 w-8 dark:text-white'/>
            </Button>
        {/* <Separator /> */}
          <Create />
      </div>  
      <div className='flex w-full'>
        <Button className='w-14 bg-inherit hover:bg-slate-900'><Settings className='h-8 w-8 dark:text-white' /></Button>
      </div>
    </nav>
    {/* Code for when sidebar is minimized. */}
      <div className='py-2 px-2 '>
      <Button onClick={() => onClickCloseSideBar()}className=' w-14 bg-inherit hover:bg-slate-900 '> 
          <PanelLeftDashed className='h-8 w-8 dark:text-white'/>
      </Button>
      </div>
    </div>
  )
}

export default MenuOptions