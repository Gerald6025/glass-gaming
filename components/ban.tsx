import React from 'react'
import Image from 'next/image'

const Ban = () => {
  return (
    <div  className='flex justify-center items-center w-[90%] md:w-full mx-auto '>
     <Image src='https://res.cloudinary.com/dvqhcm07a/image/upload/v1757405232/adbanner-9_oix4oq.png' alt='banner' width={700} height={500}
     className='rounded-xl'
     /> 
    </div>
  )
}

export default Ban
   