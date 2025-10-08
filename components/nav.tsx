"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar(): JSX.Element {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Set hover color based on the current route
  let hoverColor = "hover:text-[#0000FF]";
  if (pathname.startsWith("/xbox")) hoverColor = "hover:text-[#008B8B]";
  else if (pathname.startsWith("/news")) hoverColor = "hover:text-[#3D55EF]";
  else if (pathname.startsWith("/games")) hoverColor = "hover:text-[#9932CC]";
  else if (pathname.startsWith("/random")) hoverColor = "hover:text-[#0000FF]";
  else if (pathname.startsWith("/play")) hoverColor = "hover:text-[#0000FF]";
  else if (pathname.startsWith("/signUp")) hoverColor = "hover:text-[#0000FF]";

  return (
    <>
      {/* Navbar */}
      <div className="flex justify-between items-center px-5 gap-20 absolute top-8 bg-[#232428] text-white w-[80%] right-[10%] left-[10%] z-20 md:py-1 py-2 rounded-md">
        {/* Left side navigation */}
        <div className="flex gap-10 font-[poppins] font-medium text-[14px]">
          <ul className="flex md:gap-6 gap-2 items-center">
            {/* Circle logo - toggles sidebar */}
            <li>
              <button
                onClick={() => setIsSidebarOpen(true)}
                className={`${hoverColor} focus:outline-none`}
              >
                <Image
                  src="/four-circle.png"
                  alt="Four Circle Logo"
                  width={30}
                  height={20}
                  className="object-cover md:w-8"
                  priority
                />
              </button>
            </li>

            {/* Glass logo */}
            <li>
              <Link href="/">
                <Image
                  src="https://res.cloudinary.com/dvqhcm07a/image/upload/v1756887695/glassss_3_ga6ncw.png"
                  alt="Glass Logo"
                  width={100}
                  height={20}
                  className="object-cover md:w-25 w-20"
                  priority
                />
              </Link>
            </li>

            {/* Navigation links */}
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

        {/* Right side search icon */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="https://res.cloudinary.com/dvqhcm07a/image/upload/v1756890225/searchy_rsctz5.png"
              alt="Search Icon"
              width={20}
              height={20}
              className="object-cover"
              priority
            />
          </Link>
        </div>
      </div>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-10"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#232428] text-white z-30 p-5 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="text-gray-400 hover:text-white text-2xl"
          >
            &times;
          </button>
        </div>

        <ul className="flex flex-col gap-4 font-[poppins]">
          <li>
            <Link href="/xbox" onClick={() => setIsSidebarOpen(false)}>
              Xbox
            </Link>
          </li>
          <li>
            <Link href="/news" onClick={() => setIsSidebarOpen(false)}>
              News
            </Link>
          </li>
          <li>
            <Link href="/games" onClick={() => setIsSidebarOpen(false)}>
              Games
            </Link>
          </li>
          <li>
            <Link href="/random" onClick={() => setIsSidebarOpen(false)}>
              Random
            </Link>
          </li>
          <li>
            <Link href="/play" onClick={() => setIsSidebarOpen(false)}>
              Play Station
            </Link>
          </li>
          <li>
            <Link href="/signUp" onClick={() => setIsSidebarOpen(false)}>
              Create Post
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
