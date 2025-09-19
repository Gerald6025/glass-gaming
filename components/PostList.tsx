"use client";


import { useEffect, useState } from "react";


interface Post {
_id: string;
title: string;
content: string;
createdAt: string;
}


export default function PostList() {
const [posts, setPosts] = useState<Post[]>([]);
const [loading, setLoading] = useState<boolean>(true);


useEffect(() => {
async function fetchPosts() {
const res = await fetch("/api/Post2");
const data: Post[] = await res.json();
setPosts(data);
setLoading(false);
}
fetchPosts();
}, []);


if (loading) return <p>Loading posts...</p>;


return (
<div className="space-y-4">
{posts.map((post) => (
<div key={post._id} className="p-4 border rounded-lg">
<h2 className="text-xl font-bold">{post.title}</h2>
<p>{post.content}</p>
<small className="text-gray-500">
{new Date(post.createdAt).toLocaleString()}
</small>
</div>
))}
</div>
);
}