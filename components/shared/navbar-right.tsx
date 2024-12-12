import React from 'react'
import Search from './Search'
import { ModeToggle } from './ModeToggle'

const NavbarRight = () => {
  return (
    <div className='flex gap-2 p-2'>
      <Search />
    <ModeToggle/>
    </div>
  )
}

export default NavbarRight