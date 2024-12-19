import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

export default function SinglePost() {
  return (
    <div>
      <div className='flex  flex-col m-10'>
        <div className='flex  flex-col max-w-[720px]'>
          <div className="mb-4">
            <Button className="text-white">Technology</Button>
          </div>
          <h1 className="text-dark dark:text-white text-[36px] font-bold hidden md:block leading-tight	">
            The Impact of Technology on the Workplace: How Technology is Changing
          </h1>
          <div className="flex items-center mt-6">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>TW</AvatarFallback>
            </Avatar>
            <span className="ml-3 text-dark dark:text-white ">Tracey Wilson</span>
            <span className="ml-4 text-dark dark:text-white">August 20, 2022</span>

          </div>
        </div>
        <div className="relative  my-8">
          <Image src="/blog.png" className="w-full h-full" width={800} height={462} alt="blog-png" loading="lazy" />
        </div>
        <div>
          <span>
            Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don&apos;t plan and prepare adequately. In this blog article, we&apos;ll explore tips and tricks for a memorable journey and how to make the most of your travels.
            <br /><br /><br />
            One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.
          </span>
        </div>
        <div className='my-8'>
          <h1 className='text-[24px] font-bold mb-4'>Research Your Destination</h1>
          <span>
            Before embarking on your journey, take the time to research your destination. This includes understanding the local culture, customs, and laws, as well as identifying top attractions, restaurants, and accommodations. Doing so will help you navigate your destination with confidence and avoid any cultural faux pas.
            <br /><br /><br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Viverra adipiscing at in tellus.

          </span>
        </div>
        <div className='my-8'>
          <h1 className='text-[24px] font-bold mb-4'>Plan Your Itinerary</h1>
          <span>
            While it&apos;s essential to leave room for spontaneity and unexpected adventures, having a rough itinerary can help you make the most of your time and budget. Identify the must-see sights and experiences and prioritize them according to your interests and preferences. This will help you avoid overscheduling and ensure that you have time to relax and enjoy your journey.
            <br /><br /><br />
            Vitae sapien pellentesque habitant morbi tristique. Luctus venenatis lectus magna fringilla. Nec ullamcorper sit amet risus nullam eget felis. Tincidunt arcu non sodales neque sodales ut etiam sit amet.
          </span>
        </div>
        <Card className='w-full max-h-[128px] flex items-center justify-center p-8 bg-[#F6F6F7] dark:bg-[#242535] border-l-4   border-l-[#242535] dark:border-l-[#F6F6F7]'>
          <CardContent>
          “ Traveling can expose you to new environments and potential health risks, so it&apos;s crucial to take precautions to stay safe and healthy. ”
          </CardContent>
        </Card>
        <div className="relative  my-8">
          <Image src="/blog.png" className="w-full h-full" width={800} height={462} alt="blog-png" loading="lazy" />
        </div>
      </div>
    </div>
  )
}
