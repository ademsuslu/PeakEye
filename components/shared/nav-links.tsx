
import React from 'react'
import { Navbardata } from "@/data/data"
import Link from 'next/link'
const Navlinks = () => {
  return (
    <div className='hidden md:flex justify-center items-center '>
      {
        Navbardata.map((item, index) => (
          <Link href={item.href} key={index} className='px-4 text-sm  py-2 whitespace-nowrap	'>
            {item.name}
          </Link>
        ))

      }

    </div>
  )
}

export default Navlinks