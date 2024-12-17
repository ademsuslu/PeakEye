import React from 'react'
import { FaSearch  } from "react-icons/fa";


const Search = () => {
  return (
    <div className='flex flex-row items-center bg-[#F2F2F2] dark:bg-[#242535] rounded-md px-4 py-1 '>
        <input type="text" className='text-black dark:text-white bg-[#F2F2F2] max-w-[166px] dark:bg-[#242535]  border-0 outline-none  placeholder:text-[#A1A1AA]'  placeholder='Search' />
        <FaSearch  className='text-[#52525B] w-4 h-4 font-bold cursor-pointer' />
    </div>
  )
}

export default Search