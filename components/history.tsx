// import React from "react";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import Image from "next/image";
// import { JSX } from "react/jsx-runtime";


// interface Post {
//   id: number;
//   title: string;
//   description: string;
//   imageurl: string;
// }


// export const getData = async (): Promise<Post[] | { posts: Post[] }> => {
//   const baseUrl =
//     process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

//   const res = await fetch(`${baseUrl}/api/post`, {
//     cache: "no-store",
//   });

//   if (!res.ok) return notFound();
//   return res.json();
// };

// const History = async (): Promise<JSX.Element> => {
//   const data = await getData();
//   const posts: Post[] = Array.isArray(data) ? data : data.posts || [];

//   return (
//     <div className="w-full flex justify-center items-center gap-35 mt-15 flex-wrap">
//       <div>
//         <Link href="/inside/10">
//           <div
//             className="h-95 bg-[url(https://res.cloudinary.com/dvqhcm07a/image/upload/v1757489458/javier-martinez-hUD0PUczwJQ-unsplash_2_c5nwd2.jpg)] w-[122%] bg-cover bg-center rounded-lg px-8 pt-60 font-[poppins]"
            
//           >
//             <h2 className="bg-[#008B8B] w-11 text-center px-0 rounded-sm py-1 mb-5 text-[12px] font-[poppins] font-semibold text-white">
//               Xbox
//             </h2>
//             <p className="text-white font-bold text-[20px]">
//               History of the Xbox and some of its popular games
//             </p>
//             <p className="text-white pt-2 font-extralight">4 years ago</p>
//           </div>
//         </Link>
//       </div>

//       <div className="bg-[#232428] h-75 w-[25%] mb-19 rounded-lg flex flex-col justify-center items-center p-4 ">
//         <h1 className="pr-65 mb-5 text-white font-[poppins] ">Xbox</h1>
//         {posts.length > 0 ? (
//           posts.map((post: Post) => (
//             <Link
//               key={post.id}
//               href={`/inside/${post.id}`}
//               className="w-full mb-3"
//             >
//               <div className="rounded-md   transition flex gap-2 ">
//                 <Image
//                   src={post.imageurl}
//                   alt={post.title}
//                   width={120}
//                   height={0}
//                   className="rounded-md mb-2  h-24  "
//                 />
//                 <div>
//                   <h3 className="bg-[#191B1F] w-11 text-center px-0 rounded-sm py-1 mb-5 text-[12px] text-[#3D55EF] font-[poppins] font-semibold">
//                     {post.title}
//                   </h3>
//                   <p className="text-white font-[Poppins] text-sm  hover:text-[#0000FF] -mt-5 w-40">
//                     {post.description}
//                   </p>
//                 </div>
//               </div>
//             </Link>
//           ))
//         ) : (
//           <p className="text-gray-400 text-sm">No posts available</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default History;



import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { JSX } from "react/jsx-runtime";

interface Post {
  id: number;
  title: string;
  description: string;
  imageurl: string;
}

export const getData = async (): Promise<Post[] | { posts: Post[] }> => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/post`, {
    cache: "no-store",
  });

  if (!res.ok) return notFound();
  return res.json();
};

const History = async (): Promise<JSX.Element> => {
  const data = await getData();
  const posts: Post[] = Array.isArray(data) ? data : data.posts || [];

  return (
    <div className="w-full flex justify-center items-center gap-35 mt-15 md:p-10 p-0">
      {/* Static Hero Card */}
      <div>
        <Link href="/inside/10">
          <div
            className="h-95 bg-[url(https://res.cloudinary.com/dvqhcm07a/image/upload/v1757489458/javier-martinez-hUD0PUczwJQ-unsplash_2_c5nwd2.jpg)] md:w-[120%] w-[90%]  bg-cover  bg-center rounded-lg px-8 pt-60 md:ml-24 ml-4  font-[poppins]"
          >
            <h2 className="bg-[#008B8B] w-11 text-center px-0 rounded-sm py-1 mb-5 text-[12px] font-[poppins] font-semibold text-white">
              Xbox
            </h2>
            <p className="text-white font-bold text-[20px]">
              History of the Xbox and some of its popular games
            </p>
            <p className="text-white pt-2 font-extralight">4 years ago</p>
          </div>
        </Link>
      </div>

      
     
    </div>
  );
};

export default History;
