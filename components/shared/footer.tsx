import { FootercategoryLinkData, FooterQuickLinkData } from '@/data/data'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='max-w-[992px] mx-auto my-2'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-32 content-center '>
        <div>
          <h1 className='font-bold'>About</h1>
          <p className='text-sm mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          <div className='flex flex-col mt-6'>
            <div>
              <span className='font-bold'>Email:</span> info@jstemplate.net
            </div>
            <div>
              <span className='font-bold'>Phone: </span>  880 123 456 789
            </div>
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
        <div>
          <h1 className='font-bold'>About</h1>
          <p className='text-sm mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          <div className='flex flex-col mt-6'>
            <div>
              <span className='font-bold'>Email:</span> info@jstemplate.net
            </div>
            <div>
              <span className='font-bold'>Phone: </span>  880 123 456 789
            </div>
          </div>
        </div>
      </div>


    </footer>
  )
}

export default Footer