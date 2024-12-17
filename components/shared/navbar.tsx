
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
    // <div className='flex justify-between items-center text-end    m-auto h-[100px]  mx-auto'>
    //   <Logo />
    //     <Navlinks />
    //     <NavbarRight />
    //   <div className='flex items-center justify-center md:hidden '>
    //     <Sheet>
    //       <SheetTrigger>
    //         <GiHamburgerMenu className='w-6 h-6 ' />
    //       </SheetTrigger>
    //       <SheetContent>
    //         <SheetHeader>
    //           <SheetTitle>Are you absolutely sure?</SheetTitle>
    //           <SheetDescription>
    //             This action cannot be undone. This will permanently delete your account
    //             and remove your data from our servers.
    //           </SheetDescription>
    //         </SheetHeader>
    //       </SheetContent>
    //     </Sheet>
    //   </div>
    // </div>

<header>
  <div className="container mx-auto flex justify-between items-center p-6">
    <Logo />
    <Navlinks />
    <NavbarRight />
    <div className="flex md:hidden items-center justify-center">
      <Sheet>
        <SheetTrigger>
          <GiHamburgerMenu className="w-6 h-6 " />
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
</header>

  )
}

export default Navbar