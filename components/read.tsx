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
      "data:image/jpeg;base64,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"

  },
];

interface Playstation {
  id: number;
  title: string;
  description: string;
  imageurl: string;
}

// export const getData = async (): Promise<
//   Playstation[] | { playstations: Playstation[] }
// > => {
//   const res = await fetch("http://localhost:3000/api/playstation", {
//     cache: "no-store",
//   });
//   if (!res.ok) return notFound();
//   return res.json();
// };

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

const Read = async () => {
  const data = await getData();
  const playstations: Playstation[] = Array.isArray(data)
    ? data
    : data.playstations || [];

  return (
    <div className="justify-center flex md:h-[250vh] h-[320vh] bg-[#191B1F] gap-5  w-full md:w-[130%] mx-auto flex-wrap  -z-30">
      {/* Left section with playstations */}
      <div className="bg-[#232428] w-full h-[332vh] md:h-[230vh] md:ml-34 ml-0 -mt-80 rounded-md z-10 md:mx-0">
        <div className="flex justify-between items-center mt-5 mr-10">
          <h1 className="font-[poppins] text-lg text-white pl-5">Read more</h1>
          <h1 className="font-[poppins] text-sm  text-gray-400 hover:text-[#0000FF]">
            <Link href="/">View all</Link>
          </h1>
        </div>
        <div className="p-5 flex flex-col gap-3 mt-3">
          {playstations.length > 0 ? (
            playstations.map((playstation: Playstation) => (
              <div key={playstation.id} className="w-full mb-3">
                <Link href={`/inside/${playstation.id}`} className="block">
                  <div className="rounded-md transition md:flex   gap-2">
                    <Image
                      src={playstation.imageurl}
                      alt={playstation.title}
                      width={250}
                      height={0}
                      className="rounded-md mb-2 object-cover h-70 "
                    />
                    <div className="flex flex-col gap-4">
                      <h3 className="bg-[#191B1F] w-20 text-center px-0 rounded-sm py-1 mb-5 text-[12px] text-[#3D55EF] font-[poppins] font-semibold">
                        {playstation.title}
                      </h3>
                      <p className="text-white font-[Poppins] md:text-2xl text-md  hover:text-[#0000FF] -mt-5 w-100">
                        {playstation.description}
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
                        <span className="font-[poppins] text-sm text-[#0000FF]">
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
          <button className="bg-[#0000FF] text-white py-2 w-30 px-4 rounded-md">
            More Posts
          </button>
        </div>
      </div>

      {/* Right section */}
     
         

         </div>
  );
};

export default Read;
