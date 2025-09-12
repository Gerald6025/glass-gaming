import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface Comment {
  id: number;
  title: string;
  description: string;
  imageurl: string;
}

export const getData = async (): Promise<Comment[] | { posts: Comment[] }> => {
  const res = await fetch("http://localhost:3000/api/comment", {
    cache: "no-store",
  });
  if (!res.ok) return notFound();
  return res.json();
};

const Com = async () => {
  const data = await getData();
  const comments: Comment[] = Array.isArray(data) ? data : data.comments || [];

  return <div className="w-[100%]  mt-10 bg-[#232428] rounded-md">
    <h1 className="text-white  font-[poppins] text-[20px] pl-2 pt-2">Comments</h1>
    {comments.length > 0 ? (
      comments.map((comment: Comment) => (
        <div key={comment.id} className="p-4  flex gap-2">
          <div>
            <Image src={comment.imageurl} alt={comment.title} width={50} height={20}
            className="rounded-full"
            
            />
          </div>
        <div>
          <h3 className="text-lg font-semibold text-white hover:text-[#0000FF]"><Link href="/">{comment.title}</Link></h3>
          <p className="text-gray-400">{comment.description}</p>
          </div>
        </div>
      ))
    ) : (
      <p className="p-4">No comments available</p>
    )}
  </div>;
};

export default Com;
