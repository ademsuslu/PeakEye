"use client"

import { useTheme } from "next-themes"
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from "react"
const Logo = () => {
  const [firstTheme,setFirstTheme]= useState<string | undefined>("")
  const { theme } = useTheme()
  useEffect(() => {
    setFirstTheme(theme) // Get initial theme on first render
  }, [theme])

  return (
    <div>
      {firstTheme === "dark" ?
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