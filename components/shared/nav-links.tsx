import React from 'react'
import { Navbardata } from "@/data/data"
const Navlinks = () => {
  return (
    <div className='hidden md:flex '>
      {
        Navbardata.map((item, index) => (
          <a href={item.href} key={index} className='px-4 py-2 hover:text-gray-900'>
            {item.name}
          </a>
        ))

      }

    </div>
  )
}

export default Navlinks