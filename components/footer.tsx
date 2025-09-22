import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#232428] text-white p-5 mt-10 flex gap-10">
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
          industry. Lorem Ipsum has been the industry's standard.
        </p>
        <div>
          <p className="text-gray-400">+263 9xx xxx xxx</p>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <h1 className="font-bold text-lg">Monthly</h1>
        <div className="flex gap-2">
          <Image
            src="https://res.cloudinary.com/dvqhcm07a/image/upload/v1756887695/glassss_3_ga6ncw.png"
            alt="glasslogo"
            width={100}
            height={20}
            className="object-cover rounded-full"
          />
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
          <Image
            src="https://res.cloudinary.com/dvqhcm07a/image/upload/v1756887695/glassss_3_ga6ncw.png"
            alt="glasslogo"
            width={100}
            height={20}
            className="object-cover rounded-full"
          />
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
    </div>
  );
};

export default Footer;
