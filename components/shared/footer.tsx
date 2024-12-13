import { FootercategoryLinkData, FooterQuickLinkData } from '@/data/data'
import Link from 'next/link'
import React from 'react'
import { SubsForm } from './subscribe-form'

const Footer = () => {
  return (
    <footer className='my-2 bg-[#E8E8EA] dark:bg-[#141624] p-16'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-32 content-center max-w-[992px] mx-auto '>
        <div>
          <h1 className='font-bold'>About</h1>
          <p className='text-sm mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          <div className='flex flex-col gap-1 mt-6'>
            <Link className='text-sm' href={"mailto:info@jstemplate.net"}>
              <span className='font-bold'>Email:</span> info@jstemplate.net
            </Link>
            <Link className='text-sm' href="tel:+880123456789">
              <span className='font-bold'>Phone: </span>  880 123 456 789
            </Link>
          </div>
        </div>
        <div className='flex justify-start md:justify-around items-center gap-20'>
          <div>

            <h1 className='font-bold'>Quick Link</h1>
            <div className='flex flex-col  mt-2'>

              {FooterQuickLinkData.map((item, index) => (
                <Link
                  href={item.href}
                  key={index}
                  className={`px-4 text-sm py-1`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div>

            <h1 className='font-bold'>Category</h1>
            <div className='flex flex-col  mt-2'>
              {FootercategoryLinkData.map((item, index) => (
                <Link
                  href={item.href}
                  key={index}
                  className={`px-4 text-sm py-1`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className=''> 

          <div className='bg-[#FFFFFF] dark:bg-[#242535] rounded-lg p-4 flex flex-col items-center justify-center min-w-[392px]'>
            <h1 className='font-bold'>Weekly Newsletter</h1>
            <p className='text-sm mt-1'>Get blog articles and offers via email</p>
            <div className='flex flex-col'>
              <div className='flex flex-col items-start justify-normal'>
              <SubsForm /> 
              </div>
            </div>
          </div>
        </div>
      </div>


    </footer>
  )
}

export default Footer