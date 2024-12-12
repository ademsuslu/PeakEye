import React from 'react'
import Logo from './logo'
import Navlinks from './nav-links'
import NavbarRight from './navbar-right'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>
        <Logo />
        <Navlinks />
        <NavbarRight />
    </div>
  )
}

export default Navbar