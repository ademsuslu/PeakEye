import Link from 'next/link'
import React from 'react'
import Logo from './logo'
import { FootercategoryLinkData, FooterQuickLinkData } from '@/data/data'
import { SubsForm } from './subscribe-form'

const Footer = () => {
  return (
    <div className="flex flex-col px-2 md:px-8 lg:px-32 py-16 bg-[#F6F6F7] dark:bg-[#141624]  gap-y-8 md:!gap-y-8">

      <div className=" !w-full grid grid-cols-1 lg:grid-cols-3 gap-4 ">
        <div className="flex flex-col">
          <div className='flex flex-col'>
            <h1 className='mb-3 text-lg font-bold text-[#181A2A] dark:text-white  '>
              About
            </h1>
            <span className='text-[#97989F]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</span>
          </div>
          <div className='flex flex-col mt-6 space-y-1'>
            <Link className='text-[#97989F]' href="mailto:info@jstemplate.net">
              <span className='font-bold  text-md mr-1 text-[#181A2A] dark:text-white '>
                Email:
              </span> info@jstemplate.net
            </Link>
            <Link className='text-[#97989F]' href="tel:+880123456789">
              <span className='font-bold text-md mr-1 text-[#181A2A] dark:text-white  '>
                Phone:

              </span>
              880 123 456 789
            </Link>
          </div>
        </div>

        <div className="flex  lg:justify-around items-start lg:items-center">
          <div className='p-0 m-0'>
          <div className='flex flex-col p-0 m-0'>
              <h1 className='mb-3 text-lg font-bold'>
                Quick Link
              </h1>
            </div>
            <div className='flex flex-col  space-y-1'>
             {
              FooterQuickLinkData.map((data,index) =>{
                return  <Link key={index} className='text-[#97989F]' href={data.href}>
              {data.name}
              </Link>
              })
            }
            
             
            </div>
          </div>
          <div className=''>
            <div className='flex flex-col p-0 m-0'>
              <h1 className='mb-3 text-lg font-bold'>
              Category
              </h1>
            </div>
            <div className='flex flex-col  space-y-1'>
             {
              FootercategoryLinkData.map((data,index) =>{
                return  <Link key={index} className='text-[#97989F]' href={data.href}>
              {data.name}
              </Link>
              })
            }
            
             
            </div>
          </div>
         
        </div>

        <div className="flex flex-col bg-[#FFFFFF] dark:bg-[#242535] rounded-md p-8">
          <div className='flex flex-col justify-center items-center mb-8'>
            <h1 className='mb-1 text-lg font-bold'>
            Weekly Newsletter
            </h1>
            <span className='text-[#97989F]'>Get blog articles and offers via email</span>
          </div>
          <SubsForm/>
        </div>

      </div>

      {/* bottom footer */}
      <div className='mt-16'>
        <hr />
        <div className='flex flex-col md:flex-row justify-between items-center mt-8 gap-y-6 md:!gap-0'>
          <Logo />
          <div className='flex gap-3 text-[#BABABF]'>

            <Link href="/">Terms of Use</Link>
            <div className='w-[1px] bg-[#242535] dark:bg-[#E8E8EA]' />
            <Link href="/">Privacy Policy</Link>
            <div className='w-[1px] bg-[#242535] dark:bg-[#E8E8EA]' />
            <Link href="/">Cookie Policy</Link>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer