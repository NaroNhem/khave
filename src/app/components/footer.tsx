import Link from 'next/link'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='flex justify-center md:h-[25vh] h-[50vh]'>
        <div className='md:flex w-[58rem] md:justify-between block h-1/2 p-4 '>
           <div className='text-[12px] pt-3 flex flex-col gap-4'>
              <p className='text-[#b4b4b4]'>Explore KhaveAI</p>
              <ul className='font-sm flex gap-4 flex-col'>
                  <li className='hover:bg-accent hover:text-accent-foreground '><Link href="#">Overview</Link></li>
                  <li className='hover:bg-accent hover:text-accent-foreground '><Link href="#">Starter</Link></li>
              </ul>
            </div>
            <div className='text-[12px] pt-3 flex flex-col gap-4'>
              <p className='text-[#b4b4b4]'>Our Research</p>
              <ul className='font-sm flex gap-4 flex-col'>
                <li className='hover:bg-accent hover:text-accent-foreground '><Link href="#">Overview</Link></li>
                <li className='hover:bg-accent hover:text-accent-foreground '><Link href="#">Safety</Link></li>
                <li className='hover:bg-accent hover:text-accent-foreground '><Link href="#">Highlights</Link></li>
              </ul>
            </div>
            <div className='text-[12px] pt-3 flex flex-col gap-4'>
              <p className='text-[#b4b4b4]'>Who we are</p>
              <ul className='font-sm flex gap-4 flex-col'>
                <li className='hover:bg-accent hover:text-accent-foreground'><Link href="#">Our story</Link></li>
                <li className='hover:bg-accent hover:text-accent-foreground'><Link href="#">Contact Us</Link></li>
              </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer