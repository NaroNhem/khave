'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import clsx from 'clsx'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { CircleUserRound, PanelLeftDashed, Settings, SquarePen } from 'lucide-react'
import { ScrollArea } from '@/components/ui/scroll-area'
import Create from '../create/create'
import ModeToggle from '../navbar/mode-toggle'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


type Props = {}

const MenuOptions = (props: Props) => {
  const pathName = usePathname()
  const [hidden, setHidden] = useState(false)
  const onClickCloseSideBar = () => setHidden(!hidden)

  return (
    <ScrollArea>
    <nav className ={
        !hidden ?  "bg-gray-200 dark:bg-gray-900 h-screen justify-between md:flex items-center flex-col  gap-10 py-2 px-2 w-[15vw] rounded-xl hidden z-10" : "hidden"}>
      <div className="flex justify-between gap-8 w-full">
            <Button onClick={() => onClickCloseSideBar()} variant='outline' className='w-14 bg-inherit'> 
                <PanelLeftDashed className='h-8 w-8 dark:text-white'/>
            </Button>
          <Create />
      </div>
      <Separator />   
      <div className='h-full'>

      </div>
      <Separator /> 
      <div className='flex justify-between w-full p-2'>
        <Popover>
          <PopoverTrigger>
            <CircleUserRound className='dark:text-white' />
          </PopoverTrigger>
          <PopoverContent className='flex flex-col gap-1'>
            <Button variant='outline' className='w-full bg-inherit border-none'>Account</Button>
            <Button variant='outline' className='w-full bg-inherit border-none'>Settings</Button>
            <Link href='../auth/logout'><Button variant='outline' className='w-full bg-inherit border-none'>Logout</Button></Link>
          </PopoverContent>
        </Popover>
        <ModeToggle />
      </div>
    </nav>
    {/* Code for when sidebar is minimized. */}
      <div className={
          !hidden ? 'hidden ' : 'py-2 px-2 bg-gray-50 dark:bg-gray-950 h-screen'}>
      <Button variant='outline'onClick={() => onClickCloseSideBar()}className=' w-14  bg-inherit border-none'> 
          <PanelLeftDashed className='h-8 w-8 dark:text-white'/>
      </Button>
      </div>
    </ScrollArea>
  )
}

export default MenuOptions