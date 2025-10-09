"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const Navbar: React.FC = () => {
  const rawPathname = usePathname();
  const pathname = rawPathname ?? "";
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  
  let hoverColor = "hover:text-[#0000FF]";
  if (pathname.startsWith("/xbox")) hoverColor = "hover:text-[#008B8B]";
  else if (pathname.startsWith("/news")) hoverColor = "hover:text-[#3D55EF]";
  else if (pathname.startsWith("/games")) hoverColor = "hover:text-[#9932CC]";
  else if (pathname.startsWith("/random")) hoverColor = "hover:text-[#0000FF]";
  else if (pathname.startsWith("/play")) hoverColor = "hover:text-[#0000FF]";
  else if (pathname.startsWith("/signUp")) hoverColor = "hover:text-[#0000FF]";

  const navItems = [
    { href: "/xbox", label: "Xbox" },
    { href: "/news", label: "News" },
    { href: "/games", label: "Games" },
    { href: "/random", label: "Random" },
    { href: "/play", label: "Play Station" },
    { href: "/signUp", label: "Create Post" },
  ];

  return (
    <>
      
      <div className="flex justify-between items-center px-5 gap-20 absolute top-8 bg-[#232428] text-white w-[80%] right-[10%] left-[10%] z-20 md:py-1 py-2 rounded-md">
        
        <div className="flex gap-10 font-[poppins] font-medium text-[14px]">
          <ul className="flex md:gap-6 gap-2 items-center">
            
            <li>
              <button
                onClick={() => setIsSidebarOpen(true)}
                className={`${hoverColor} focus:outline-none`}
                aria-label="Open sidebar"
              >
                <Image
                  src="/four-circle.png"
                  alt="Four Circle Logo"
                  width={30}
                  height={20}
                  className="object-cover md:w-8"
                  priority={true}
                />
              </button>
            </li>

            
            <li>
              <Link href="/">
                <Image
                  src="https://res.cloudinary.com/dvqhcm07a/image/upload/v1756887695/glassss_3_ga6ncw.png"
                  alt="Glass Logo"
                  width={100}
                  height={20}
                  className="object-cover md:w-25 w-20"
                  priority={true}
                />
              </Link>
            </li>

            
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={`${hoverColor} hidden md:block`}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="https://res.cloudinary.com/dvqhcm07a/image/upload/v1756890225/searchy_rsctz5.png"
              alt="Search Icon"
              width={20}
              height={20}
              className="object-cover"
              priority={true}
            />
          </Link>
        </div>
      </div>

  
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-10"
          onClick={() => setIsSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      
      <div
        role="dialog"
        aria-modal="true"
        className={`fixed top-0 left-0 h-full w-64 bg-[#232428] text-white z-30 p-5 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="text-gray-400 hover:text-white text-2xl"
            aria-label="Close sidebar"
          >
            &times;
          </button>
        </div>

        
        <ul className="flex flex-col gap-4 font-[poppins]">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => {
                  setIsSidebarOpen(false);
                  router.push(item.href);
                }}
                className="text-left w-full"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
