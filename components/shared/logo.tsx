"use client"
import React from 'react'
import { useTheme } from "next-themes"
import Link from 'next/link'
import Image from 'next/image'
const Logo = () => {
  const { theme } = useTheme()

  return (
    <div>
      {theme === "dark" ?
       <Link  href={"/"} >
           <Image width={158} height={38} src="/image.png" alt="Dark_logo" />
        </Link>
        :
       <Link href={"/"} >
         <Image width={158} height={38} src="/Light_image.png" alt="Light_logo" />
        </Link>
      }
    </div>
  )
}

export default Logo