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
  
type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='flex justify-between border-2 radius-xl relative py-4 px-60 dark:bg-black/40 backdrop-blur-lg'>
        <h1 className=' font-bold text-2xl'>kahve.</h1>
        <div>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className=''>Coffee</NavigationMenuTrigger>
                            <NavigationMenuContent className='p-4 md:w-[300px] lg:w-[400px] '>
                                <NavigationMenuLink><ul className='flex justify-evenly font-sm'>
                                        <li className='p-6 hover:bg-accent hover:text-accent-foreground w-full rounded-lg'><Link href="#">Order</Link></li>
                                        <li className='p-6 hover:bg-accent hover:text-accent-foreground w-full rounded-lg'><Link href="#">Roats</Link></li>
                                        <li className='p-6 hover:bg-accent hover:text-accent-foreground w-full rounded-lg'><Link href="#">Techniques</Link></li>
                                    </ul></NavigationMenuLink>
                            </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                    <NavigationMenuTrigger>Accessories</NavigationMenuTrigger>
                        <NavigationMenuContent className=' md:w-[300px] lg:w-[400px]'>
                            <NavigationMenuLink>
                                <ul className='flex justify-between'>
                                    <li className='p-6 hover:bg-accent hover:text-accent-foreground w-full'><Link href="#">Grinders</Link></li>
                                    <li className='p-6 hover:bg-accent hover:text-accent-foreground w-full'><Link href="#">Mugs</Link></li>
                                    <li className='p-6 hover:bg-accent hover:text-accent-foreground w-full'><Link href="#">All Items</Link></li>
                                </ul></NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>About</NavigationMenuTrigger>
                            <NavigationMenuContent className=' md:w-[300px] lg:w-[400px]'>
                                <NavigationMenuLink>
                                    <ul className='flex justify-between'>
                                    <li className='p-6 hover:bg-accent hover:text-accent-foreground w-full'><Link href="#">Our Story</Link></li>
                                    <li className='p-6 hover:bg-accent hover:text-accent-foreground w-full'><Link href="#">Sustainability</Link></li>
                                    <li className='p-6 hover:bg-accent hover:text-accent-foreground w-full'><Link href="#">Our Sources</Link></li>
                                </ul>
                                </NavigationMenuLink>
                            </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
        <div>
            <p>stuff</p>
        </div>
    </div>
  )
}

export default Navbar