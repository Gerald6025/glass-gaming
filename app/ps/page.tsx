import Image from "next/image";
import Mininav from "@/components/mininav";
import Link from "next/link";

import Com from "@/components/comment";

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

  if (!res.ok) return [];
  return res.json();
};


export default async function Ps() {
  const data = await getData();
  const playstations: Playstation[] = Array.isArray(data)
    ? data
    : data.playstations || [];
  return (
    <div className=" md:flex md:items-center md:justify-center h-[230vh] md:h-[150vh] gap-5  w-full md:w-[128git%] mx-auto flex-wrap -z-30">
      <div className="bg-[#232428]  ml-0 md:ml-34 md:w-[108%] w-full pl-5 md:h-[90vh] h-[170vh] mt-10 md:-mt-80  rounded-md z-40  ">
        <Mininav />
        <div className="md:flex gap-4">
          <div>
            <Link href={`/inside/1`}>
              <div
                className="mt-5 bg-cover bg-center  md:w-95 w-80  h-85 rounded-lg p-4 flex flex-col justify-end hover:scale-105 transition-transform duration-300 ease-in-out"
                style={{
                  backgroundImage: "url('https://res.cloudinary.com/dvqhcm07a/image/upload/v1756975709/martin-katler-caNzzoxls8Q-unsplash_py26pk.jpg')",
                }}
              >
                <h2 className="bg-[#0000FF] w-25 text-center px-1 rounded-sm py-1 mb-5  text-white text-[12px] font-[poppins] font-semibold">
                  PlayStation
                </h2>
                <p className="text-[16px] font-[poppins] font-semibold text-white">
                  The new generation PlayStation 4 and PS5 consoles
                </p>
                <div className="flex text-[12px] mt-2 mb-5 font-[poppins] font-normal items-center gap-1">
                  <p className="text-white">IWI STUDIO</p>
                  <Image
                    src="https://res.cloudinary.com/dvqhcm07a/image/upload/v1756988867/dot_wgacsq.png"
                    alt="Studio Logo"
                    width={16}
                    height={16}
                  />
                  <p className="text-white">4 years ago</p>
                </div>
              </div>
            </Link>

            <Link href={`/inside/`} className="w-full mb-3">
              <div className="rounded-md   transition flex gap-2 mt-5 ">
                <Image
                  src="https://res.cloudinary.com/dvqhcm07a/image/upload/v1757490034/mahdi-chaghari-RqO_02KT36w-unsplash_wjyswb.jpg"
                  alt="Hello"
                  width={100}
                  height={0}
                  className="rounded-md mb-2  h-24  "
                />
                <div>
                  <h3 className="bg-[#191B1F] w-23 text-center px-0 rounded-sm py-1 mb-5 text-[12px] text-[#3D55EF] font-[poppins] font-semibold">
                    PlayStation
                  </h3>
                  <p className="text-white font-[Poppins] text-lg  hover:text-[#0000FF] -mt-2">
                    Holding black PS4 Controller
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="mt-5 flex flex-col gap-1">
            {playstations.length > 0 ? (
              playstations.map((playstation: Playstation) => (
                <Link
                  key={playstation.id}
                  href={`/inside/${playstation.id}`}
                  className="w-full mb-3"
                >
                  <div className="rounded-md   transition flex gap-2 ">
                    <Image
                      src={playstation.imageurl}
                      alt={playstation.title}
                      width={100}
                      height={0}
                      className="rounded-md mb-2  h-24  "
                    />
                    <div>
                      <h3 className="bg-[#191B1F] w-20 text-center px-0 rounded-sm py-1 mb-5 text-[12px] text-[#3D55EF] font-[poppins] font-semibold">
                        {playstation.title}
                      </h3>
                      <p className="text-white font-[Poppins] text-md  hover:text-[#0000FF] -mt-5 w-30">
                        {playstation.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-gray-400 text-sm">No posts available</p>
            )}
          </div>
        </div>
      </div>

    
    </div>
  );
}
