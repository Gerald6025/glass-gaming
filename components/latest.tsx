import React from "react";
import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    id: 1,
    title: "Play Station",
    description: "The new generation PlayStation 4 and PS5 consoles",
    image:
      "https://res.cloudinary.com/dvqhcm07a/image/upload/v1756975709/martin-katler-caNzzoxls8Q-unsplash_py26pk.jpg",
    sty1: "bg-[#0000FF] w-25 text-center px-1 rounded-sm py-1 mb-5 text-[12px] font-[poppins] font-semibold",
  },
  {
    id: 2,
    title: "Play Station",
    description: "Holding white and black game controller",
    image:
      "https://res.cloudinary.com/dvqhcm07a/image/upload/v1756975709/melanie-these-P_L0byMESQc-unsplash_zdcugi.jpg",
    sty1: "bg-[#0000FF] w-25 text-center px-1 rounded-sm py-1 mb-5 text-[12px] font-[poppins] font-semibold",
  },
];

const Latest: React.FC = () => {
  return (
    <div className="bg-[#232428] h-200 w-[52.5%] -mt-100  rounded-lg flex flex-col p-4 text-white ml-35">
      <h1 className="font-[poppins] text-xl">Latest</h1>
      <div className="flex">
        {cards.map((card) => (
          <div key={card.id} className="flex px-2">
            <Link href={`/inside/${card.id}`}>
              <div
                className="mt-10 bg-cover bg-center w-80 h-90 rounded-lg p-4 flex flex-col justify-end hover:scale-105 transition-transform duration-300 ease-in-out"
                style={{ backgroundImage: `url(${card.image})` }}
              >
                <h2 className={card.sty1}>{card.title}</h2>
                <p className="text-[16px] font-[poppins] font-semibold">
                  {card.description}
                </p>
                <div className="flex text-[12px] mt-2 mb-5 font-[poppins] font-normal items-center gap-1">
                  <p>IWI STUDIO</p>
                  <Image
                    src="https://res.cloudinary.com/dvqhcm07a/image/upload/v1756988867/dot_wgacsq.png"
                    alt="Studio Logo"
                    width={16}
                    height={16}
                  />
                  <p>4 years ago</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-x-10">
        <div className="mt-10 ">
          <div className="flex gap-3">
            <div>
              <Image
                src="https://res.cloudinary.com/dvqhcm07a/image/upload/v1756975709/mark-decile-WA84FtTi7NU-unsplash_m7rjtj.jpg"
                alt="images"
                width={120}
                height={0}
                className="rounded-lg h-25 object-cover ml-2"
              />
            </div>

            <div className="text-white font-[poppins] font-normal mt-2">
              <h1 className="text-md w-40">
                <Link href={"/"}>
                  A better plan is to practice aim training
                </Link>
              </h1>
              <div className="flex text-[12px] mt-2 mb-5 font-[poppins] font-normal items-center gap-1 text-gray-400">
                <p>IWI STUDIO</p>
                <Image
                  src="https://res.cloudinary.com/dvqhcm07a/image/upload/v1756988867/dot_wgacsq.png"
                  alt="Studio Logo"
                  width={16}
                  height={16}
                />
                <p>4 years ago</p>
              </div>
            </div>
          </div>

          
        </div>

        <div className="flex gap-3 mt-12">
            <div>
              <Image
                src="https://res.cloudinary.com/dvqhcm07a/image/upload/v1756978011/javier-martinez-hUD0PUczwJQ-unsplash_tuxggf.jpg"
                alt="images"
                width={120}
                height={0}
                className="rounded-lg h-25 object-cover ml-2"
              />
            </div>

            <div className="text-white font-[poppins] font-normal mt-2">
              <h1 className="text-md w-40">
                <Link href={"/"}>
                  History of the Xbox and some of its popular games
                </Link>
              </h1>
              <div className="flex text-[12px] mt-2 mb-5 font-[poppins] font-normal items-center gap-1 text-gray-400">
                <p>IWI STUDIO</p>
                <Image
                  src="https://res.cloudinary.com/dvqhcm07a/image/upload/v1756988867/dot_wgacsq.png"
                  alt="Studio Logo"
                  width={16}
                  height={16}
                />
                <p>4 years ago</p>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <div>
              <Image
                src="https://res.cloudinary.com/dvqhcm07a/image/upload/v1756975708/lorenzo-herrera-p0j-mE6mGo4-unsplash_1_fyab0s.jpg"
                alt="images"
                width={120}
                height={0}
                className="rounded-lg h-25 object-cover ml-2"
              />
            </div>

            <div className="text-white font-[poppins] font-normal mt-2">
              <h1 className="text-md w-40">
                <Link href={"/"}>
                  the best RPG games available on Mac
                </Link>
              </h1>
              <div className="flex text-[12px] mt-2 mb-5 font-[poppins] font-normal items-center gap-1 text-gray-400">
                <p>IWI STUDIO</p>
                <Image
                  src="https://res.cloudinary.com/dvqhcm07a/image/upload/v1756988867/dot_wgacsq.png"
                  alt="Studio Logo"
                  width={16}
                  height={16}
                />
                <p>4 years ago</p>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <div>
              <Image
                src="https://res.cloudinary.com/dvqhcm07a/image/upload/v1756991530/no-image_dt4lw9.png"
                alt="images"
                width={120}
                height={0}
                className="rounded-lg h-25 object-cover ml-2"
              />
            </div>

            <div className="text-white font-[poppins] font-normal mt-2">
              <h1 className="text-md w-40">
                <Link href={"/"}>
                  What Are NFT Games and How Do They Work?
                </Link>
              </h1>
              <div className="flex text-[12px] mt-2 mb-5 font-[poppins] font-normal items-center gap-1 text-gray-400">
                <p>IWI STUDIO</p>
                <Image
                  src="https://res.cloudinary.com/dvqhcm07a/image/upload/v1756988867/dot_wgacsq.png"
                  alt="Studio Logo"
                  width={16}
                  height={16}
                />
                <p>4 years ago</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Latest;
