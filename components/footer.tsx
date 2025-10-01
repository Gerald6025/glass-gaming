import React from "react";
import Image from "next/image";
import Link from "next/link";
import {  FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
    <div className="bg-[#232428] text-white p-5 mt-10 md:flex gap-10 md:w-[80%] w-[90%] mx-auto justify-between rounded-2xl">
      <div className="flex flex-col gap-2">
        <Link href="/">
          <Image
            src="https://res.cloudinary.com/dvqhcm07a/image/upload/v1756887695/glassss_3_ga6ncw.png"
            alt="glasslogo"
            width={100}
            height={20}
          />{" "}
        </Link>
        <p className="w-55">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard.
        </p>
        <div>
          <p className="text-gray-400">+263 9xx xxx xxx</p>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <h1 className="font-bold text-lg">Monthly</h1>
        <div className="flex gap-2">
            <div className="w-[100px] h-[100px] rounded-full">
          <Image
            src="https://res.cloudinary.com/dvqhcm07a/image/upload/v1756975709/martin-katler-caNzzoxls8Q-unsplash_py26pk.jpg"
            alt="glasslogo"
            width={100}
            height={100}
            className="object-cover rounded-full"
          />
          </div>
          <div>
            <p className="w-50 font-[poppins] font-bold text-sm hover:text-[#0000FF]">
              <Link href={"/"}>
                The new generation PlayStation 4 and PS5 consoles
              </Link>
            </p>
            <p className="text-gray-400">4 years ago</p>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
  <Image
    src="https://res.cloudinary.com/dvqhcm07a/image/upload/v1756978011/javier-martinez-hUD0PUczwJQ-unsplash_tuxggf.jpg"
    alt="glasslogo"
    width={100}
    height={100}
    className="object-cover"
  />
</div>

          <div>
            <p className="w-40 font-[poppins] font-bold text-sm hover:text-[#0000FF]">
              <Link href={"/"}>
                History of the Xbox and some of its popular games
              </Link>
            </p>
            <p className="text-gray-400">4 years ago</p>
          </div>
        </div>
      </div>

       <div className="flex flex-col gap-5">
        <h1 className="font-bold text-lg">Weekly</h1>
        <div className="flex gap-2">
            <div className="w-[100px] h-[100px] rounded-full">
          <Image
            src="https://res.cloudinary.com/dvqhcm07a/image/upload/v1756975709/martin-katler-caNzzoxls8Q-unsplash_py26pk.jpg"
            alt="glasslogo"
            width={100}
            height={100}
            className="object-cover rounded-full"
          />
          </div>
          <div>
            <p className="w-40 font-[poppins] font-bold text-sm hover:text-[#0000FF]">
              <Link href={"/"}>
                Master Control with these expert tips
              </Link>
            </p>
            <p className="text-gray-400">4 years ago</p>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
  <Image
    src="https://res.cloudinary.com/dvqhcm07a/image/upload/v1756978011/javier-martinez-hUD0PUczwJQ-unsplash_tuxggf.jpg"
    alt="glasslogo"
    width={100}
    height={100}
    className="object-cover"
  />
</div>

          <div>
            <p className="w-40 font-[poppins] font-bold text-sm hover:text-[#0000FF]">
              <Link href={"/"}>
                History of the Xbox and some of its popular games
              </Link>
            </p>
            <p className="text-gray-400">4 years ago</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 ">
        <h1 className="font-bold text-lg">Pages</h1>
        <h1 className="hover:text-[#0000FF]"><Link href={"/"}>Home</Link></h1>
        <h1 className="hover:text-[#0000FF]"><Link href={"/"}>Tipography</Link></h1>
        <h1 className="hover:text-[#0000FF]"><Link href={"/"}>Contact Us</Link></h1>

      </div>
    </div>
    <div className="flex justify-between md:ml-35 ml-10  mr-35 mt-6 ">
        <div>
            <h1 className="text-white ">All Rights Reserved by Glass © 2025</h1>
        </div>

        <div className="flex gap-5 text-white ">
         <Link href={"/"} className="hover:text-[#0000FF]"><FaLinkedinIn></FaLinkedinIn></Link>
           <Link href={"/"} className="hover:text-[#0000FF]"><FaGithub></FaGithub></Link>
            <Link href={"/"} className="hover:text-[#0000FF]"><FaTwitter></FaTwitter></Link>
        <Link href={"/"} className="hover:text-[#0000FF]"><FaInstagram></FaInstagram></Link>
        </div>
    </div>
    </>
  );
};

export default Footer;
