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
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QAqRXhpZgAASUkqAAgAAAABADEBAgAHAAAAGgAAAAAAAABHb29nbGUAAP/bAIQAAwICCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggIBwgJCQkICAsNCggOCAgKCAEDBAQGBQYKBgYKDg0LDQ4PDQ4PDw0NDw0NDQ0PDw4NDQ0PEA0NDg0NDQ8NDg0NDQ0NDQ0NDQ8NDQ0NDQ0NDQ4N/8AAEQgAZABpAwERAAIRAQMRAf/EAB0AAAEFAQEBAQAAAAAAAAAAAAAEBQYHCAMCAQn/xAA1EAACAQIEBQEFBwQDAAAAAAABAgMAEQQFEiEGBxMxQWEIFCJRcSMyQoGRobFDUnLBJDNj/8QAHAEBAAEFAQEAAAAAAAAAAAAAAAIBAwQFBgcI/8QAOBEAAgECBAQCCAQFBQAAAAAAAAECAxEEBSExBhJBURNhIkJxgZGx0fAUMqHBFSMzUuFDcoKy8f/aAAwDAQACEQMRAD8A/...",
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
  const res = await fetch("http://localhost:3000/api/playstation", {
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
    <div className="justify-center flex h-[250vh] bg-[#191B1F] gap-5 w-[100%] mx-auto flex-wrap">
      {/* Left section with playstations */}
      <div className="bg-[#232428] w-[52.5%] pl-5 h-[230vh] -mt-80 rounded-md">
        <div className="flex justify-between items-center mt-5 mr-10">
          <h1 className="font-[poppins] text-lg text-white">Read more</h1>
          <h1 className="font-[poppins] text-sm text-gray-400 hover:text-[#0000FF]">
            <Link href="/">View all</Link>
          </h1>
        </div>
        <div className="p-5 flex flex-col gap-3 mt-3">
          {playstations.length > 0 ? (
            playstations.map((playstation: Playstation) => (
              <div key={playstation.id} className="w-full mb-3">
                <Link href={`/inside/${playstation.id}`} className="block">
                  <div className="rounded-md transition flex gap-2">
                    <Image
                      src={playstation.imageurl}
                      alt={playstation.title}
                      width={250}
                      height={0}
                      className="rounded-md mb-2 object-cover h-70"
                    />
                    <div className="flex flex-col gap-4">
                      <h3 className="bg-[#191B1F] w-20 text-center px-0 rounded-sm py-1 mb-5 text-[12px] text-[#3D55EF] font-[poppins] font-semibold">
                        {playstation.title}
                      </h3>
                      <p className="text-white font-[Poppins] text-2xl hover:text-[#0000FF] -mt-5 w-100">
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
      <div className="-mt-45 flex-col flex gap-4">
        <h1 className="font-[poppins] text-white text-lg">Join us</h1>
        <div className="flex gap-4 flex-wrap">
          <Link href={"/"}>
            <div className="flex gap-2 items-center bg-[#0000FF] p-1 py-2 w-40 rounded-md">
              <Image src="/faceboo.png" alt="face" width={30} height={20} />
              <h1 className="text-white font-[poppins]">facebook</h1>
            </div>
          </Link>

          <Link href={"/"}>
            <div className="flex gap-2 items-center bg-[#008B8B] p-1 py-2 w-40 rounded-md">
              <Image src="/twit.png" alt="twitter" width={33} height={20} />
              <h1 className="text-white font-[poppins]">twitter</h1>
            </div>
          </Link>
        </div>

        <Link href={"/"}>
          <div className="flex gap-2 items-center bg-[#9932cc] p-1 py-2 w-40 rounded-md">
            <Image src="/twitch.webp" alt="twitter" width={30} height={20} />
            <h1 className="text-white font-[poppins]">twitch</h1>
          </div>
        </Link>

        <div className="bg-[#232428] h-130 w-[100%] mb-19 rounded-lg flex flex-col p-4">
          <h1 className="mb-5 text-white font-[poppins]">Games</h1>
          {posts.length > 0 ? (
            posts.map((post) => (
              <Link key={post.id} href={`/inside/${post.id}`} className="w-full mb-3">
                <div className="rounded-md transition flex gap-2">
                  <Image
                    src={post.imageurl}
                    alt={post.title}
                    width={100}
                    height={0}
                    className="rounded-md mb-2 h-24 object-cover"
                  />
                  <div>
                    <h3 className="bg-[#191B1F] w-15 text-center px-0 rounded-sm py-1 mb-5 text-[12px] text-[#9932cc] font-[poppins] font-semibold">
                      {post.title}
                    </h3>
                    <p className="text-white font-[Poppins] text-sm hover:text-[#0000FF] -mt-5 w-40">
                      {post.description}
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
  );
};

export default Read;
