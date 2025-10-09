"use client";

import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Insider from "@/components/insider";
import { FaGreaterThan } from "react-icons/fa";
import Footer from "@/components/footer";

const cards = [
  {
    id: 1,
    title: "Play Station",
    title2: "Play Station",
    description: "Holding white and black game controller",
    image:
      "https://res.cloudinary.com/dvqhcm07a/image/upload/v1756975709/melanie-these-P_L0byMESQc-unsplash_zdcugi.jpg",
    sty1:
      "bg-[#0000FF] w-25 text-center px-1 rounded-sm py-1 text-[12px] font-[poppins] font-semibold text-white",
  },
  {
    id: 2,
    title: "Games",
    title2: "Games",
    description: "A better plan is to practice aim training",
    image:
      "https://res.cloudinary.com/dvqhcm07a/image/upload/v1756975709/mark-decile-WA84FtTi7NU-unsplash_m7rjtj.jpg",
    sty1:
      "bg-[#9932CC] w-15 text-center px-0 rounded-sm py-1 text-[12px] font-[poppins] font-semibold text-white",
  },
  {
    id: 3,
    title: "Xbox",
    title2: "Xbox",
    description: "History of the Xbox and some of its popular games",
    image:
      "https://res.cloudinary.com/dvqhcm07a/image/upload/v1756978011/javier-martinez-hUD0PUczwJQ-unsplash_tuxggf.jpg",
    sty1:
      "bg-[#008B8B] w-11 text-center px-0 rounded-sm py-1 text-[12px] font-[poppins] font-semibold text-white",
  },
  {
    id: 4,
    title: "News",
    title2: "News",
    description: "the best RPG games available on Mac",
    image:
      "https://res.cloudinary.com/dvqhcm07a/image/upload/v1756975708/lorenzo-herrera-p0j-mE6mGo4-unsplash_1_fyab0s.jpg",
    sty1:
      "bg-[#191B1F] w-11 text-center px-0 rounded-sm py-1 text-[12px] text-[#3D55EF] font-[poppins] text-white font-semibold",
  },
  {
    id: 5,
    title: "News",
    title2: "News",
    description: "What Are NFT Games and How Do They Work?",
    image:
      "https://res.cloudinary.com/dvqhcm07a/image/upload/v1756991530/no-image_dt4lw9.png",
    sty1:
      "bg-[#191B1F] w-11 text-center px-0 rounded-sm py-1 text-[12px] text-[#3D55EF] text-white font-[poppins] font-semibold",
  },
  {
    id: 6,
    title: "Games",
    title2: "Games",
    description: "The best sports games on the PlayStation 5",
    image:
      "https://res.cloudinary.com/dvqhcm07a/image/upload/v1756975708/guglielmo-basile-FOT822IZaY0-unsplash_gjtqay.jpg",
    sty1:
      "bg-[#9932CC] w-15 text-center px-0 rounded-sm py-1 text-[12px] font-[poppins] font-semibold text-white",
  },
  {
    id: 7,
    title: "Play Station",
    title2: "Play Station",
    description: "Master Control with these expert tips",
    image:
      "https://res.cloudinary.com/dvqhcm07a/image/upload/v1756975709/luis-villasmil-ITFwHdPEED0-unsplash_1_gru0fg.jpg",
    sty1:
      "bg-[#0000FF] w-25 text-center px-1 rounded-sm py-1 text-[12px] font-[poppins] font-semibold text-white",
  },
  {
    id: 8,
    title: "Video",
    title2: "Video",
    description: "White xbox one console on white table",
    image:
      "https://res.cloudinary.com/dvqhcm07a/image/upload/v1756975708/louis-philippe-poitras-WMMh6BtmTMo-unsplash_cvhpaq.jpg",
    sty1:
      "bg-[#191B1F] w-11 text-center px-0 rounded-sm py-1 text-white text-[12px] text-[#3D55EF] font-[poppins] font-semibold",
  },
  {
    id: 9,
    title: "Games",
    title2: "Games",
    description: "Super Mario statue given out by Nintendo",
    image:
      "https://res.cloudinary.com/dvqhcm07a/image/upload/v1756975709/mika-baumeister-HUyICL8qbEE-unsplash_oia36q.jpg",
    sty1:
      "bg-[#9932CC] w-15 text-center px-0 rounded-sm py-1 text-[12px] font-[poppins] font-semibold text-white",
  },
];


const toSlug = (text: string) => text.toLowerCase().replace(/\s+/g, "-");

const Page = () => {
  const { id } = useParams();
  const post = cards.find((card) => card.id === parseInt(id as string));

  if (!post) {
    return (
      <div className="text-center text-white mt-20">
        <h1 className="text-3xl font-bold">Post not found</h1>
      </div>
    );
  }

  const linkPath = `/${toSlug(post.title)}`;

  return (
    <div className="bg-[#191B1F] md:h-[800vh] h-[870vh] bottom-5 relative  z-0 ">
      <div className="bg-[#232428] ml-0 md:ml-34 md:w-[55%] w-full md:h-[300vh] h-[170vh] relative top-40 rounded-md z-40">
        
        <div
          className="mt-5 bg-cover bg-center md:w-full w-80 h-85 rounded-t-lg p-4 flex flex-col justify-end"
          style={{ backgroundImage: `url(${post.image})` }}
        >
          <p className="text-[30px] font-[poppins] font-semibold text-white">
            {post.description}
          </p>

          <div className="flex text-[12px] mt-2 mb-5 font-[poppins] items-center gap-2">
            <h2 className={post.sty1}>
              <Link href={linkPath}>{post.title}</Link>
            </h2>
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

        
        <div className="flex gap-4">
          <div className="ml-5 mt-5 h-200">
            <Insider />
          </div>

          <div className="flex flex-col gap-2">
          
            <div className="mt-5 flex gap-2 items-center">
              <h1 className="text-[14px] text-gray-500">
                <Link href="/">Home</Link>
              </h1>
              <FaGreaterThan className="text-gray-500 text-[10px]" />
              <h1 className="text-[14px] text-gray-500">
                <Link href={linkPath}>{post.title}</Link>
              </h1>
            </div>

            
            <div className="text-white flex flex-col">
              <p className="w-[95%] text-[15px]">
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century who is
                thought to have scrambled parts of Ciceros De Finibus Bonorum et
                Malorum for use in a type specimen book. It usually begins with:
              </p>

              <p className="w-[95%] text-[15px] mt-10">
                The purpose of lorem ipsum is to create a natural looking block
                of text (sentence, paragraph, page, etc.) that doesn’t distract
                from the layout. A practice not without controversy, laying out
                pages with meaningless filler text can be very useful when the
                focus is meant to be on design, not content.
              </p>

              <p className="w-[95%] text-[15px] mt-10 bg-[#0000008c] px-6 py-5">
                Lorem ipsum dolor sitt amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <p className="w-[97%] text-[15px] mt-10">
                The passage experienced a surge in popularity during the 1960s
                when Letraset used it on their dry-transfer sheets, and again
                during the 90s as desktop publishers bundled the text with their
                software. Today it’s seen all around the web; on templates,
                websites, and stock designs. Use our generator to get your own,
                or read on for the authoritative history of lorem ipsum.
              </p>

              <p className="w-[97%] text-[26px] font-bold mt-10">
                Origins and Discovery
              </p>

              <p className="w-[97%] text-[15px] mt-10">
                Until recently, the prevailing view assumed lorem ipsum was born
                as a nonsense text. It’s not Latin, though it looks like it, and
                it actually says nothing. Before & After magazine answered a
                curious reader, “Its ‘words’ loosely approximate the frequency
                with which letters occur in English, which is why at a glance it
                looks pretty real.”
              </p>

              <p className="w-[97%] text-[15px] mt-10">
                Richard McClintock, a Latin scholar from Hampden-Sydney College,
                is credited with discovering the source behind the ubiquitous
                filler text. In seeing a sample of lorem ipsum, his interest was
                piqued by “consectetur” — a genuine, albeit rare, Latin word.
                Consulting a Latin dictionary led McClintock to a passage from
                <i> De Finibus Bonorum et Malorum</i> (“On the Extremes of Good
                and Evil”), a first-century B.C. text from the Roman philosopher
                Cicero.
              </p>

              <p className="w-[95%] text-[15px] mt-10 bg-[#0000008c] px-6 py-5">
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed quia non numquam eius modi
                tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem.
              </p>

              <p className="w-[97%] text-[15px] mt-10">
                McClintock’s eye for detail certainly helped narrow the
                whereabouts of lorem ipsum’s origin. However, the “how and when”
                still remain something of a mystery, with competing theories and
                timelines.
              </p>

              <p className="w-[95%] text-[26px] font-bold mt-10">
                Meaning of Lorem Ipsum
              </p>

              <p className="w-[97%] text-[15px] mt-10">
                Don’t bother typing lorem ipsum into Google Translate. If you
                already tried, you may have gotten anything from “NATO” to
                “China,” depending on how you capitalized the letters. The
                bizarre translation was fodder for conspiracy theories, but
                Google has since updated its “lorem ipsum” translation to,
                boringly enough, “lorem ipsum”.
              </p>

              <p className="text-white border-[1px] border-white mt-5 w-30 flex justify-center">
                <Link href={linkPath}>{post.title2}</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-200">
      <Footer/>
      </div>
    </div>
  );
};

export default Page;
