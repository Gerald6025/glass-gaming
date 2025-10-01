import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedinIn, FaPinterest, FaTelegram, FaPlus } from 'react-icons/fa'
import Link from 'next/link'
const insider = () => {
  return (
    <div>
      
      <div className='flex flex-col text-white gap-8 z-40 bg-[#0000001c] p-4 rounded-lg sticky top-5'>
      <Link href={"/"}><FaFacebook className='hover:text-[#1877F2]' /></Link>
      <Link href={"/"}><FaTwitter  className='hover:text-[#1877F2]' /></Link>
      <Link href={"/"}><FaLinkedinIn  className='hover:text-[#1877F2]'/></Link>
      <Link href={"/"}><FaPinterest className='hover:text-[#1877F2]' /></Link>
      <Link href={"/"}><FaTelegram className='hover:text-[#1877F2]' /></Link>
      <Link href={"/"}><FaPlus className='hover:text-[#1877F2]' /></Link>
      </div>
    </div>
  )
}



export default insider
