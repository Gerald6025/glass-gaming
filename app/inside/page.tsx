import { notFound } from "next/navigation";
import React from "react";

interface Post {
  id: number;
  title: string;
  description: string;
  imageurl: string;
}

export const getData = async (): Promise<Post[] | { posts: Post[] }> => {
  const res = await fetch("/api/post", {
    cache: "no-store",
  });
  if (!res.ok) return notFound();
  return res.json();
};

export default async function Inside() {
  const data = await getData();

  
  const posts: Post[] = Array.isArray(data) ? data : data.posts || [];

  return (
    <div className="p-6 space-y-4">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div
            key={post.id}
            className="p-4 border rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-white">{post.description}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No posts available</p>
      )}
    </div>
  );
}
