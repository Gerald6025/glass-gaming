"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";


const cards = [
  {
    id: 1,
    title: "Play Station",
    description: "Holding white and black game controller",
    image:
      "https://res.cloudinary.com/dvqhcm07a/image/upload/v1756975709/melanie-these-P_L0byMESQc-unsplash_zdcugi.jpg",
    sty1:
      "bg-[#0000FF] w-25 text-center px-1 rounded-sm py-1 mb-5 text-[12px] font-[poppins] font-semibold",
  },
  {
    id: 2,
    title: "Games",
    description: "A better plan is to practice aim training",
    image:
      "https://res.cloudinary.com/dvqhcm07a/image/upload/v1756975709/mark-decile-WA84FtTi7NU-unsplash_m7rjtj.jpg",
    sty1:
      "bg-[#9932CC] w-15 text-center px-0 rounded-sm py-1 mb-5 text-[12px] font-[poppins] font-semibold",
  },
  {
    id: 3,
    title: "Xbox",
    description: "History of the Xbox and some of its popular games",
    image:
      "https://res.cloudinary.com/dvqhcm07a/image/upload/v1756978011/javier-martinez-hUD0PUczwJQ-unsplash_tuxggf.jpg",
    sty1:
      "bg-[#008B8B] w-11 text-center px-0 rounded-sm py-1 mb-5 text-[12px] font-[poppins] font-semibold",
  },
  {
    id: 4,
    title: "News",
    description: "the best RPG games available on Mac",
    image:
      "https://res.cloudinary.com/dvqhcm07a/image/upload/v1756975708/lorenzo-herrera-p0j-mE6mGo4-unsplash_1_fyab0s.jpg",
    sty1:
      "bg-[#191B1F] w-11 text-center px-0 rounded-sm py-1 mb-5 text-[12px] text-[#3D55EF] font-[poppins] font-semibold",
  },
  {
    id: 5,
    title: "News",
    description: "What Are NFT Games and How Do They Work?",
    image:
      "https://res.cloudinary.com/dvqhcm07a/image/upload/v1756991530/no-image_dt4lw9.png",
    sty1:
      "bg-[#191B1F] w-11 text-center px-0 rounded-sm py-1 mb-5 text-[12px] text-[#3D55EF] font-[poppins] font-semibold",
  },
  {
    id: 6,
    title: "Games",
    description: " The best sports games on the PlayStation 5",
    image:
      "https://res.cloudinary.com/dvqhcm07a/image/upload/v1756975708/guglielmo-basile-FOT822IZaY0-unsplash_gjtqay.jpg",
    sty1:
      "bg-[#9932CC] w-15 text-center px-0 rounded-sm py-1 mb-5 text-[12px] font-[poppins] font-semibold",
  },
  {
    id: 7,
    title: "Play Station",
    description: "Master Control with these expert tips",
    image:
      "https://res.cloudinary.com/dvqhcm07a/image/upload/v1756975709/luis-villasmil-ITFwHdPEED0-unsplash_1_gru0fg.jpg",
    sty1:
      "bg-[#0000FF] w-25 text-center px-1 rounded-sm py-1 mb-5 text-[12px] font-[poppins] font-semibold",
  },
  {
    id: 8,
    title: "Video",
    description: "White xbox one console on white table",
    image:
      "https://res.cloudinary.com/dvqhcm07a/image/upload/v1756975708/louis-philippe-poitras-WMMh6BtmTMo-unsplash_cvhpaq.jpg",
    sty1:
      "bg-[#191B1F] w-11 text-center px-0 rounded-sm py-1 mb-5 text-[12px] text-[#3D55EF] font-[poppins] font-semibold",
  },

  {
    id: 9,
    title: "Games",
    description: " Super Mario statue given out by Nintendo",
    image:
      "https://res.cloudinary.com/dvqhcm07a/image/upload/v1756975709/mika-baumeister-HUyICL8qbEE-unsplash_oia36q.jpg",
    sty1:
      "bg-[#9932CC] w-15 text-center px-0 rounded-sm py-1 mb-5 text-[12px] font-[poppins] font-semibold",
  },
];

const Game = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true , slidesToScroll: 1, align: "center" },
    [Autoplay({ delay: 8000, stopOnInteraction: false })]
  );

  return (
    <div className="overflow-hidden p-10 text-white  w-[79%]  mx-auto" ref={emblaRef} >
      <div className="flex  ">
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex-[0_0_24%] px-2 "
          >
            <Link href={`/inside/${card.id}`}>
            <div
              className="mt-30 bg-cover bg-center  w-61 h-105 rounded-lg p-4 flex flex-col justify-end hover:scale-105 transition-transform duration-300 ease-in-out"
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
    </div>
  );
};

export default Game;
