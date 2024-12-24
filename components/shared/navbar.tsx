"use client"

import React, { useEffect, useState } from 'react'
import Logo from './logo'
import Navlinks from './nav-links'
import NavbarRight from './navbar-right'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { GiHamburgerMenu } from "react-icons/gi";
import { Navbardata } from '@/data/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
   const path = usePathname();
   
  const [open, setOpen] = useState(false);
    const [active, setActive] = useState("");
  
    useEffect(() => {
      setActive(path); // Update active path on navigation
    }, [path]);
  return (
<header className='w-full'>
  <div className=" flex justify-between items-center py-6">
    <Logo />
    <Navlinks />
    <NavbarRight />
    <div className="flex lg:hidden items-center justify-center">
    <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <GiHamburgerMenu className="w-6 h-6 " />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle><Logo/></SheetTitle>
            <SheetDescription>
            <div className="flex flex-col lg:hidden justify-start items-start">
              {Navbardata.map((item, index) => (
                <Link
                onClick={()=>setOpen(false)}
                  href={item.href}
                  key={index}
                  className={`text-md py-2 whitespace-nowrap ${
                    active === item.href ? "text-blue-500 font-bold" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  </div>
</header>

  )
}

export default Navbar