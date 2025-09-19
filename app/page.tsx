import React from "react";
import Image from "next/image";
import Game from "@/components/game";
import Ban from "@/components/ban";
import History from "@/components/history";
import Ps from "./ps/page";
import CreatePostPage from "./create/page";
import PostList from "@/components/PostList";


export default function Home() {
  return (
    <div className="bg-[#191B1F] h-[200vh] relative  ">
      <Game />
      <Ban />
      <History />
      <Ps />
      <div className="flex">
      <CreatePostPage />
      <PostList />
    </div>
    </div>
  );
}
