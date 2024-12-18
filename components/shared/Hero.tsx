import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import React from 'react'
import { Button } from '../ui/button'

const Hero = () => {
    return (
        <div className='hero min-h-[450px] flex  items-end'>
            <div className='flex  flex-col max-w-[720px] m-10'>
                <div className="mb-4">
                    <Button  className="text-white">Technology</Button>
                </div>
                <h1 className="text-[36px] font-bold hidden md:block leading-tight	">
                    The Impact of Technology on the Workplace: How Technology is Changing
                </h1>
                <div className="flex items-center mt-6">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>TW</AvatarFallback>
                    </Avatar>
                    <span className="ml-3 whitespace-nowrap">Tracey Wilson</span>
                    <span className="ml-4 whitespace-nowrap">August 20, 2022</span>
                    
                </div>
            </div>
        </div>
    )
}

export default Hero