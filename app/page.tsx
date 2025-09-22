import React from "react";
import Image from "next/image";
import Game from "@/components/game";
import Ban from "@/components/ban";
import History from "@/components/history";
import Ps from "./ps/page";
import CreatePostPage from "./create/page";
import PostList from "@/components/PostList";
import Read from "@/components/read";
import Latest from "@/components/latest";
import Gamz from "@/components/gamz";
import Footer from "@/components/footer";



export default function Home() {
  return (
    <div className="bg-[#191B1F] h-[900vh] relative  ">
      <Game />
      <Ban />
      <History />
      <Ps />
      <Read />
      <Latest />
      <Gamz/>
      <Footer />
      
      <div className="bg-[#191B1F] text-white p-8">
        <h1 className="text-5xl font-bold text-center">Dashboard</h1>
      <div className="flex border-2 border-gray-600 rounded-lg p-4 m-4">
      <CreatePostPage />
      <PostList />
    </div>
    </div>
    </div>
  );
}
