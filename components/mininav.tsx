import React from 'react'
import Link from 'next/link'

const Mininav = () => {
  return (
    <div className=' mt-5 flex md:gap-5  gap-2.5 '>
    <h1 className='text-white text-xl font-bold'>Picked</h1>
     <Link href={"/ps"}> <h1 className='text-[#0000FF] border-[1px] border-[#0000FF] w-25 text-center rounded-sm' >PlayStation</h1></Link>
      <Link href={"/"}> <h1 className=' text-gray-500 border-[1px] border-gray-500 w-15 text-center ' >Xbox</h1></Link>
    <Link href={"/"}> <h1 className=' text-gray-500 border-[1px] border-gray-500 w-15 text-center ' >News</h1></Link>
    </div>
  )
}

export default Mininav
