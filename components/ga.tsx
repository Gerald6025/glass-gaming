import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const posts = [
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
      "https://res.cloudinary.com/dvqhcm07a/image/upload/v1756975709/mark-decile-WA84FtTi7NU-unsplash_m7rjtj.jpg",
  },
 
 


];

interface Playstation {
  id: number;
  title: string;
  description: string;
  imageurl: string;
}


export const getData = async (): Promise<
  Playstation[] | { playstations: Playstation[] }
> => {
  const baseUrl =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/playstation`, {
    cache: "no-store",
  });

  if (!res.ok) return notFound();
  return res.json();
};

const Ga = async () => {
  const data = await getData();
  const playstations: Playstation[] = Array.isArray(data)
    ? data
    : data.playstations || [];

  return (
    <>
    
    <div className="justify-center   md:h-[301vh] h-[380vh] relative top-55 -z-40 bg-[#191B1F]  gap-5  w-full md:w-[100%] mx-auto flex-wrap  ">
      
      
      <div className="bg-[#232428] w-full md:w-[100%] h-[342vh] md:h-[220vh] md:ml-30 ml-0 md:sticky top-10   rounded-md z-10 md:mx-0">
        <div className="flex justify-between items-center mt-5 mr-10">
          <h1 className="font-[poppins] text-lg text-white pl-5 pt-5">Games</h1>
          <h1 className="font-[poppins] text-sm  text-gray-400 hover:text-[#0000FF]">
            <Link href="/"></Link>
          </h1>
        </div>
        <div className="p-5 flex flex-col gap-3 mt-3">
          {posts.length > 0 ? (
            posts.map((post) => (
              <div key={post.id} className="w-full mb-3">
                <Link href={`/inside/${post.id}`} className="block">
                  <div className="rounded-md transition md:flex   gap-10 ">
                    <Image
                      src={post.imageurl}
                      alt={post.title}
                      width={500}
                      height={0}
                      className="rounded-md mb-2 object-cover h-70  "
                    />
                    <div className="flex flex-col gap-4">
                      <h3 className="bg-[#191B1F] w-20 text-center px-0 rounded-sm py-1 mb-5 text-[12px] text-[#9932CC] font-[poppins] font-semibold">
                        {post.title}
                      </h3>
                      <p className="text-white font-[Poppins] md:text-2xl text-md w-80  hover:text-[#9932CC] -mt-5 md:w-80">
                        {post.description}
                      </p>
                      <p className="text-gray-400 text-sm">
                        L orem ipsum, or lipsum as it is sometimes known, is
                        dummy text used in laying out print, graphic or web
                        desi…
                      </p>
                      <div className="flex text-[12px] mt-2 mb-5 font-[poppins] font-normal items-center gap-1 text-gray-400">
                        <p>IWI STUDIO</p>
                        <Image
                          src="https://res.cloudinary.com/dvqhcm07a/image/upload/v1756988867/dot_wgacsq.png"
                          alt="Studio Logo"
                          width={16}
                          height={16}
                        />
                        <p>4 years ago</p>
                        <Image
                          src="https://res.cloudinary.com/dvqhcm07a/image/upload/v1756988867/dot_wgacsq.png"
                          alt="Studio Logo"
                          width={16}
                          height={16}
                        />
                        {/* No nested Link, just span */}
                        <span className="font-[poppins] text-sm text-[#9932CC]">
                          Read more
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-sm">No posts available</p>
          )}
           <button className="bg-[#9932CC] text-white py-2 w-30 px-4 rounded-md">
            More Posts
          </button>
        </div>
      </div>

      {/* Right section */}
     
         

         </div>
         </>
  );
};

export default Ga