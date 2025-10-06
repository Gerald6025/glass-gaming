import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "News",
    description: "the best RPG games available on Mac",
    imageurl:
      "https://res.cloudinary.com/dvqhcm07a/image/upload/v1756975708/lorenzo-herrera-p0j-mE6mGo4-unsplash_1_fyab0s.jpg",
  },
  {
    id: 2,
    title: "News",
    description: "What Are NFT Games and How Do They Work?",
    imageurl:
      "https://res.cloudinary.com/dvqhcm07a/image/upload/v1756991530/no-image_dt4lw9.png",
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

const Rand = async () => {
  const data = await getData();
  const playstations: Playstation[] = Array.isArray(data)
    ? data
    : data.playstations || [];

  return (
    <>
    
    <div className="justify-center   md:h-[301vh] h-[60vh] relative top-55 -z-40 bg-[#191B1F]  gap-5  w-full md:w-[100%] mx-auto flex-wrap  ">
      
      
      <div className="bg-[#232428] w-full md:w-[100%] h-[20vh] md:h-[20vh] md:ml-30 ml-0 md:sticky top-10   rounded-md z-10 md:mx-0">
        <div className="flex justify-between items-center mt-5 mr-10">
          <h1 className="font-[poppins] text-lg text-white pl-5 pt-5">Random</h1>
          <h1 className="font-[poppins] text-sm  text-gray-400 hover:text-[#0000FF]">
            <Link href="/"></Link>
          </h1>
        </div>
        <h1 className="font-[poppins] text-lg text-white pl-5 pt-5">No results found</h1>
      </div>

      {/* Right section */}
     
         

         </div>
         </>
  );
};

export default Rand