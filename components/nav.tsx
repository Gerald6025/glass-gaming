"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  
  let hoverColor = "hover:text-[#0000FF]"; 
  if (pathname === "/") hoverColor = "hover:text-[#0000FF]";
  else if (pathname.startsWith("/xbox")) hoverColor = "hover:text-[#008B8B]";
  else if (pathname.startsWith("/news")) hoverColor = "hover:text-[#3D55EF]";
  else if (pathname.startsWith("/games")) hoverColor = "hover:text-[#9932CC]";
  else if (pathname.startsWith("/random")) hoverColor = "hover:text-[#0000FF]";
  else if (pathname.startsWith("/play")) hoverColor = "hover:text-[#0000FF]";
  else if (pathname.startsWith("/signUp")) hoverColor = "hover:text-[#0000FF]";

  return (
    <div className="justify-between items-center flex px-5 gap-20 absolute text-white top-8 bg-[#232428] w-[80%] right-[10%] left-[10%] z-10 md:py-1 py-5 rounded-md">
      <div className="gap-10 flex font-[poppins] font-medium text-[14px]">
        <ul className="flex gap-6 items-center">
          <li>
            <Link href="/" className={hoverColor}>
              <Image
                src="/four-circle.png"
                alt="fourcircle"
                width={30}
                height={20}
                className="w-180 object-cover md:w-8"
              />
            </Link>
          </li>
          <li>
            <Link href="/">
              <Image
                src="https://res.cloudinary.com/dvqhcm07a/image/upload/v1756887695/glassss_3_ga6ncw.png"
                alt="glasslogo"
                width={100}
                height={20}
               className="md:w-25 w-1000 object-cover"
               />
            </Link>
          </li>
          <li>
            <Link href="/xbox" className={`${hoverColor} hidden md:block`}>
              Xbox
            </Link>
          </li>
          <li>
            <Link href="/news" className={`${hoverColor} hidden md:block`}>
              News
            </Link>
          </li>
          <li>
            <Link href="/games" className={`${hoverColor} hidden md:block`}>
              Games
            </Link>
          </li>
          <li>
            <Link href="/random" className={`${hoverColor} hidden md:block`}>
              Random
            </Link>
          </li>
          <li>
            <Link href="/play" className={`${hoverColor} hidden md:block`}>
              Play Station
            </Link>
          </li>
          <li>
            <Link href="/signUp" className={`${hoverColor} hidden md:block`}>
              Create Post
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex items-center">
        <Link href="/">
          <Image
            src="https://res.cloudinary.com/dvqhcm07a/image/upload/v1756890225/searchy_rsctz5.png"
            alt="search"
            width={20}
            height={20}
          />
        </Link>
      </div>
    </div>
  );
}
