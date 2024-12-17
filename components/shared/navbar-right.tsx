
import React from 'react'
import Search from './Search'
import { ModeToggle } from './ModeToggle'

const NavbarRight = () => {
  return (
    <div className='hidden lg:flex  lg:space-x-6 '>
      <Search  />
      <ModeToggle/>
    </div>
  )
}

export default NavbarRight