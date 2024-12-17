import Link from 'next/link'
import React from 'react'
import Logo from './logo'

const Footer = () => {
  return (
    <div className="flex flex-col px-2 md:px-8 lg:px-32 py-16 bg-[#141624]">

      <div className=" !w-full grid grid-cols-1 lg:grid-cols-3 gap-4 ">
        <div className="flex flex-col">
          <div className='flex flex-col'>
            <h1 className='mb-3 font-bold'>
              About
            </h1>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</span>
          </div>
          <div className='flex flex-col mt-6 space-y-1'>
            <Link href="mailto:info@jstemplate.net">
              <span className='font-bold mr-1'>
                Email:
              </span> info@jstemplate.net
            </Link>
            <Link href="tel:+880123456789">
              <span className='font-bold mr-1'>
                Phone:

              </span>
              880 123 456 789
            </Link>
          </div>
        </div>
        {/* <div className="...">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus deserunt laboriosam dolor ex fugit quas ad magni ducimus dolorem quis, explicabo, cum voluptatibus voluptates velit consectetur sequi perferendis, recusandae molestiae?
          </div>
        <div className="...">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus deserunt laboriosam dolor ex fugit quas ad magni ducimus dolorem quis, explicabo, cum voluptatibus voluptates velit consectetur sequi perferendis, recusandae molestiae?
          </div> */}
      </div>
      <div className='mt-16'>
        <hr />
        <div className='flex flex-col md:flex-row justify-between items-center mt-8'>
          <Logo />
          <div className='flex gap-3 text-[#BABABF]'>

            <Link href="/">Terms of Use</Link>
            <div className='w-[2px] bg-[#242535]' />
            <Link href="/">Privacy Policy</Link>
            <div className='w-[2px] bg-[#242535]' />
            <Link href="/">Cookie Policy</Link>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer