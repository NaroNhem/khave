'use client'
import React from 'react'
import Link from "next/link"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
import ModeToggle from './mode-toggle'
import { BookOpenText, BookPlus, Brain, Coffee, MenuIcon, ShoppingBasket, X } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

type Props = {}

const Navbar = (props: Props) => {
    const [hidden, setHidden] = useState(false)
    const handleOnclick = () => setHidden(!hidden)
    const [session, setSession] = useState(false)
  return (
    <div className='flex justify-between items-center radius-xl sticky top-0 py-4 px-10 dark:bg-black/40 backdrop-blur-xl w-full z-10 m-0'>
        <h1 className=' font-bold text-2xl'>kahveAI</h1>
        <div className='hidden md:block'>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className=''>Products</NavigationMenuTrigger>
                            <NavigationMenuContent className='md:w-[300px] lg:w-[400px] font-[12px]  '>
                                <NavigationMenuLink>
                                    <div className='text-[12px] pt-3 pl-5'>
                                        <p>Explore KhaveAI</p>
                                    </div>
                                    <ul className='flex justify-evenly items-center font-sm p-2'>
                                        <li className='p-6 hover:bg-accent hover:text-accent-foreground w-full flex '><Link href="#">Overview</Link></li>
                                        <li className='p-6 hover:bg-accent hover:text-accent-foreground w-full flex '><Link href="#">Starter</Link></li>
                                    </ul></NavigationMenuLink>
                            </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                    <NavigationMenuTrigger>Research</NavigationMenuTrigger>
                        <NavigationMenuContent className=' md:w-[300px] lg:w-[400px]'>
                            <NavigationMenuLink>
                            <div className='text-[12px] pt-3 pl-5'>
                                        <p>Our Research</p>
                                    </div>
                                <ul className='flex justify-between items-center p-2'>
                                    <li className='p-6 hover:bg-accent hover:text-accent-foreground w-full flex'><Link href="#">Overview</Link></li>
                                    <li className='p-6 hover:bg-accent hover:text-accent-foreground w-full flex'><Link href="#">Safety</Link></li>
                                    <li className='p-6 hover:bg-accent hover:text-accent-foreground w-full flex'><Link href="#">Highlights</Link></li>
                                </ul></NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>About</NavigationMenuTrigger>
                            <NavigationMenuContent className=' md:w-[300px] lg:w-[400px]'>
                                <NavigationMenuLink>
                                <div className='text-[12px] pt-3 pl-5'>
                                        <p>Who we are</p>
                                    </div>
                                    <ul className='flex justify-evenly items-center p-2'>
                                    <li className='p-6 hover:bg-accent hover:text-accent-foreground w-full flex'><Link href="#">Our story</Link></li>
                                    <li className='p-6 hover:bg-accent hover:text-accent-foreground w-full flex'><Link href="#">Contact Us</Link></li>
                                </ul>
                                </NavigationMenuLink>
                            </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
        <div className='gap-3 hidden md:flex'>
            {!session ? <Link href='/login'><Button variant="outline" className="px-4 py-2 rounded-md border text-sm transition duration-200">
                Login
            </Button></Link> : 
            <Link href='/logout'>
            <Button variant="outline" className="px-4 py-2 rounded-md border text-sm transition duration-200">
            Logout
            </Button>
            </Link>}
            
            <ModeToggle/>
        </div>
            <button onClick={handleOnclick} className='md:hidden block'>
                {!hidden && <MenuIcon className='md:hidden block'/>}
                
            </button>
        <div className={
            !hidden ? "hidden" : "absolute top-0 right-0 w-screen h-screen border-2 z-[100] md:hidden sm:w-1/2 bg-white dark:bg-black overflow-scroll"
        }> 
            <div className='text-xl flex justify-end w-full pr-7 pt-5 '>
                <button onClick={handleOnclick}>
                    <X/>
                </button>
            </div>
            <ul>
                <p className='px-8 text-xs flex gap-5 items-end sm:p-3 font-bold'><Brain /> Explore KhaveAI</p>
                <li className='p-6 hover:bg-accent hover:text-accent-foreground w-full flex '><Link href="#">Overview</Link></li>
                <li className='p-6 hover:bg-accent hover:text-accent-foreground w-full flex '><Link href="#">Starter</Link></li>
            </ul>
            <ul>
                <p className='px-8 text-xs flex gap-5 items-end sm:p-3 font-bold'> <BookOpenText />Our Research</p>
                <li className='p-6 hover:bg-accent hover:text-accent-foreground w-full flex'><Link href="#">Overview</Link></li>
                <li className='p-6 hover:bg-accent hover:text-accent-foreground w-full flex'><Link href="#">Safety</Link></li>
                <li className='p-6 hover:bg-accent hover:text-accent-foreground w-full flex'><Link href="#">Highlights</Link></li>
            </ul>
            <ul>
                <p className='px-8 text-xs flex gap-5 items-end sm:p-3 font-bold'> <BookPlus />Who we are</p>
                <li className='p-6 hover:bg-accent hover:text-accent-foreground w-full flex'><Link href="#">Our story</Link></li>
                <li className='p-6 hover:bg-accent hover:text-accent-foreground w-full flex'><Link href="#">Contact Us</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar