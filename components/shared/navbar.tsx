
import React from 'react'
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

const Navbar = () => {
  return (
    <div className='flex justify-between items-center text-end  w-full  m-auto h-[100px] px-4 max-w-[992px]  gap-28'>
      <Logo />
        <Navlinks />
        <NavbarRight />
      <div className='flex items-center justify-center md:hidden p-0 m-0'>
        <Sheet>
          <SheetTrigger>
            <GiHamburgerMenu className='w-6 h-6 ' />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}

export default Navbar