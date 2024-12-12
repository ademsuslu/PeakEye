import React from 'react'
import { Navbardata } from "@/data/data"
import Link from 'next/link'
const Navlinks = () => {
  return (
    <div className='hidden md:flex '>
      {
        Navbardata.map((item, index) => (
          <Link href={item.href} key={index} className='px-4 py-2'>
            {item.name}
          </Link>
        ))

      }

    </div>
  )
}

export default Navlinks