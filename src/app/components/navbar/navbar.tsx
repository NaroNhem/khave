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
import { BookPlus, Coffee, MenuIcon, ShoppingBasket, X } from 'lucide-react'
import { useState } from 'react'

type Props = {}

const Navbar = (props: Props) => {
    const [hidden, setHidden] = useState(false)
    const handleOnclick = () => setHidden(!hidden)
  return (
    <div className='flex justify-evenly items-center radius-xl relative py-4 px-12 dark:bg-black/40 backdrop-blur-lg md:justify-between w-screen'>
        <h1 className=' font-bold text-2xl'>kahveAI</h1>
        <div className='hidden md:block'>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className=''>Coffee</NavigationMenuTrigger>
                            <NavigationMenuContent className='md:w-[300px] lg:w-[400px] font-[12px]'>
                                <NavigationMenuLink>
                                    <div className='text-[12px] pt-3 pl-5'>
                                        <p>Coffee your way</p>
                                    </div>
                                    <ul className='flex justify-evenly items-center font-sm p-2'>
                                        <li className='p-6 hover:bg-accent hover:text-accent-foreground w-full flex '><Link href="#">Order</Link></li>
                                        <li className='p-6 hover:bg-accent hover:text-accent-foreground w-full flex '><Link href="#">Roats</Link></li>
                                        <li className='p-6 hover:bg-accent hover:text-accent-foreground w-full flex '><Link href="#">Techniques</Link></li>
                                    </ul></NavigationMenuLink>
                            </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                    <NavigationMenuTrigger>Accessories</NavigationMenuTrigger>
                        <NavigationMenuContent className=' md:w-[300px] lg:w-[400px]'>
                            <NavigationMenuLink>
                            <div className='text-[12px] pt-3 pl-5'>
                                        <p>Browse our high selection</p>
                                    </div>
                                <ul className='flex justify-between items-center p-2'>
                                    <li className='p-6 hover:bg-accent hover:text-accent-foreground w-full flex'><Link href="#">Grinders</Link></li>
                                    <li className='p-6 hover:bg-accent hover:text-accent-foreground w-full flex'><Link href="#">Mugs</Link></li>
                                    <li className='p-6 hover:bg-accent hover:text-accent-foreground w-full flex'><Link href="#">All Items</Link></li>
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
                                    <ul className='flex justify-between items-center p-2'>
                                    <li className='p-6 hover:bg-accent hover:text-accent-foreground w-full flex justify-center'><Link href="#">Our story</Link></li>
                                    <li className='p-6 hover:bg-accent hover:text-accent-foreground w-full flex justify-center'><Link href="#">Sustainability</Link></li>
                                    <li className='p-6 hover:bg-accent hover:text-accent-foreground w-full flex justify-center'><Link href="#">Sources</Link></li>
                                </ul>
                                </NavigationMenuLink>
                            </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
        <div className='flex gap-3 hidden md:flex'>
            <button className="px-4 py-2 rounded-md border text-sm dark:hover:shadow-[4px_4px_4px_0px_rgba(255,255,255)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
                Login
            </button>
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
                <p className='px-8 text-xs flex gap-5 items-end sm:p-3 font-bold'><Coffee /> Coffee</p>
                <li className='p-6 hover:bg-accent hover:text-accent-foreground w-full flex '><Link href="#">Order</Link></li>
                <li className='p-6 hover:bg-accent hover:text-accent-foreground w-full flex '><Link href="#">Roats</Link></li>
                <li className='p-6 hover:bg-accent hover:text-accent-foreground w-full flex '><Link href="#">Techniques</Link></li>
            </ul>
            <ul>
                <p className='px-8 text-xs flex gap-5 items-end sm:p-3 font-bold'> <ShoppingBasket />Accessories</p>
                    <li className='p-6 hover:bg-accent hover:text-accent-foreground w-full flex'><Link href="#">Grinders</Link></li>
                    <li className='p-6 hover:bg-accent hover:text-accent-foreground w-full flex'><Link href="#">Mugs</Link></li>
                    <li className='p-6 hover:bg-accent hover:text-accent-foreground w-full flex'><Link href="#">All Items</Link></li>
            </ul>
            <ul>
                <p className='px-8 text-xs flex gap-5 items-end sm:p-3 font-bold'> <BookPlus />About</p>
                <li className='p-6 hover:bg-accent hover:text-accent-foreground w-full flex'><Link href="#">Our Story</Link></li>
                    <li className='p-6 hover:bg-accent hover:text-accent-foreground w-full flex'><Link href="#">Sustainability</Link></li>
                    <li className='p-6 hover:bg-accent hover:text-accent-foreground w-full flex'><Link href="#">Sources</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar