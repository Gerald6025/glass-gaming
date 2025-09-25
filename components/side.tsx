import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Com from './comment'



const pots = [
  {
    id: 1,
    title: "Games",
    description: "A better plan is to practice aim training",
    imageurl:
      "https://res.cloudinary.com/dvqhcm07a/image/upload/v1756975709/mark-decile-WA84FtTi7NU-unsplash_m7rjtj.jpg",
  },
  {
    id: 2,
    title: "Games",
    description: "The best sports games on the PlayStation 5",
    imageurl:
      "https://res.cloudinary.com/dvqhcm07a/image/upload/v1756975708/guglielmo-basile-FOT822IZaY0-unsplash_gjtqay.jpg",
  },
  {
    id: 3,
    title: "Games",
    description: "Super Mario statue given out by Nintendo",
    imageurl:
      "https://res.cloudinary.com/dvqhcm07a/image/upload/v1756975709/mika-baumeister-HUyICL8qbEE-unsplash_oia36q.jpg",
  },
  {
    id: 4,
    title: "Games",
    description: "Nintendo Switch neon green controller",
    imageurl:
      "data:image/jpeg;base64,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"

  },
];










interface Post {
  id: number;
  title: string;
  description: string;
  imageurl: string;
}

export const getData = async (): Promise<Post[] | { posts: Post[] }> => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/post`, {
    cache: "no-store",
  });

  if (!res.ok) return notFound();
  return res.json();
};






const Side = async () => {

     const data = await getData();
      const posts: Post[] = Array.isArray(data) ? data : data.posts || [];
  return (
    <div className='mt-25  ml-50'>
       <div className="bg-[#232428] h-75 w-[75%] mb-19 rounded-lg flex flex-col justify-center items-center p-4">
        <h1 className="pr-65 mb-5 text-white font-[poppins]">Xbox</h1>

{posts.map((post: Post, index) => (
  <div key={post.id ? `post-${post.id}` : `post-${index}`} className="w-full mb-3">
    <Link href={`/inside/${post.id ?? index}`} className="block">
      <div className="rounded-md transition flex gap-2">
        <Image
          src={post.imageurl}
          alt={post.title}
          width={120}
          height={96}
          className="rounded-md mb-2 h-24 object-cover"
        />
        <div>
          <h3 className="bg-[#191B1F] w-11 text-center px-0 rounded-sm py-1 mb-5 text-[12px] text-[#3D55EF] font-[poppins] font-semibold">
            {post.title}
          </h3>
          <p className="text-white font-[Poppins] text-sm hover:text-[#0000FF] -mt-5 w-40">
            {post.description}
          </p>
        </div>
      </div>
    </Link>
  </div>
))}




      </div>

       <div className="mt-20   ">
        <h1 className="pb-5 text-white  font-[poppins] text-[20px]">Label</h1>
        <div className="flex flex-col gap-5">
          <div
            className=" bg-cover bg-center  bg-[#9932cc] bg-blend-overlay  w-85 h-22 rounded-lg p-4 flex  justify-start items-center hover:scale-105 transition-transform duration-300 ease-in-out"
            style={{
              backgroundImage: `url(https://res.cloudinary.com/dvqhcm07a/image/upload/v1757506725/mark-decile-WA84FtTi7NU-unsplash_1_vluzkr.jpg)`,
            }}
          >
            <div className="flex gap-50 ">
              <h1 className="text-white font-[poppins] font-bold text-lg ">
                <Link href="/">Games</Link>
              </h1>
              <h1 className="text-white font-[poppins] font-bold bg-gray-400 w-7 text-center rounded-md">
                4
              </h1>
            </div>
          </div>

          <div
            className=" bg-cover bg-center  bg-[#3d55efb0] bg-blend-overlay  w-85 h-22 rounded-lg p-4 flex  justify-start items-center hover:scale-105 transition-transform duration-300 ease-in-out"
            style={{
              backgroundImage: `url(https://res.cloudinary.com/dvqhcm07a/image/upload/v1757506725/mark-decile-WA84FtTi7NU-unsplash_1_vluzkr.jpg)`,
            }}
          >
            <div className="flex gap-52 ">
              <h1 className="text-white font-[poppins] font-bold text-lg ">
                <Link href="/">Video</Link>
              </h1>
              <h1 className="text-white font-[poppins] font-bold bg-gray-400 w-7 text-center rounded-md">
                5
              </h1>
            </div>
          </div>

          <div
            className=" bg-cover bg-center  bg-[#008B8B] bg-blend-overlay w-85 h-22 rounded-lg p-4 flex  justify-start items-center hover:scale-105 transition-transform duration-300 ease-in-out"
            style={{
              backgroundImage: `url(https://res.cloudinary.com/dvqhcm07a/image/upload/v1756978011/javier-martinez-hUD0PUczwJQ-unsplash_tuxggf.jpg)`,
            }}
          >
            <div className="flex gap-53  ">
              <h1 className="text-white font-[poppins] font-bold text-lg ">
                <Link href="/">Xbox</Link>
              </h1>
              <h1 className="text-white font-[poppins] font-bold bg-gray-400 w-7 text-center   rounded-md">
                3
              </h1>
           
            </div>
         
          </div>
          <Com/>
        </div>
      
      
      
      </div>

        <div className="mt-20 flex-col flex gap-4">
        <h1 className="font-[poppins] text-white text-lg">Join us</h1>
        <div className="flex gap-4 flex-wrap">
          <Link href={"/"}>
            <div className="flex gap-2 items-center bg-[#0000FF] p-1 py-2 w-40 rounded-md">
              <Image src="/faceboo.png" alt="face" width={30} height={20} />
              <h1 className="text-white font-[poppins]">facebook</h1>
            </div>
          </Link>

          <Link href={"/"}>
            <div className="flex gap-2 items-center bg-[#008B8B] p-1 py-2 w-40 rounded-md">
              <Image src="/twit.png" alt="twitter" width={33} height={20} />
              <h1 className="text-white font-[poppins]">twitter</h1>
            </div>
          </Link>
        </div>

        <Link href={"/"}>
          <div className="flex gap-2 items-center bg-[#9932cc] p-1 py-2 w-40 rounded-md">
            <Image src="/twitch.webp" alt="twitter" width={30} height={20} />
            <h1 className="text-white font-[poppins]">twitch</h1>
          </div>
        </Link>

        <div className="bg-[#232428] h-130 w-[75%] mb-19 rounded-lg flex flex-col p-4">
          <h1 className="mb-5 text-white font-[poppins]">Games</h1>
          {pots.length > 0 ? (
            pots.map((pot) => (
              <Link key={pot.id} href={`/inside/${pot.id}`} className="w-full mb-3">
                <div className="rounded-md transition flex gap-2">
                  <Image
                    src={pot.imageurl}
                    alt={pot.title}
                    width={100}
                    height={0}
                    className="rounded-md mb-2 h-24 object-cover"
                  />
                  <div>
                    <h3 className="bg-[#191B1F] w-15 text-center px-0 rounded-sm py-1 mb-5 text-[12px] text-[#9932cc] font-[poppins] font-semibold">
                      {pot.title}
                    </h3>
                    <p className="text-white font-[Poppins] text-sm hover:text-[#0000FF] -mt-5 w-40">
                      {pot.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-gray-400 text-sm">No posts available</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Side


