"use client"

import { useTheme } from "next-themes"
import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from "react"
const Logo = () => {
  const { theme } = useTheme()
  useEffect(() => {
  
  }, [theme])
  

  return (
    <div>
      {theme === "dark" ?
       <Link  href={"/"} >
           <Image width={158} className="!min-w-[158px]" height={36} src="/image.png" alt="Dark_logo" />
        </Link>
        :
       <Link href={"/"} >
         <Image width={158} height={36} className="!min-w-[158px]" src="/Light_image.png" alt="Light_logo" />
        </Link>
      }
    </div>
  )
}

export default Logo