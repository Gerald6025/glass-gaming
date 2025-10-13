"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Insider from "@/components/insider";
import { FaGreaterThan, FaThumbsUp, FaPaperPlane, FaComment } from "react-icons/fa";
import Footer from "@/components/footer";

const cards = [
  {
    id: 1,
    title: "Play Station",
    title2: "Play Station",
    description: "Holding white and black game controller",
    image:
      "https://res.cloudinary.com/dvqhcm07a/image/upload/v1756975709/melanie-these-P_L0byMESQc-unsplash_zdcugi.jpg",
    sty1: "bg-[#0000FF] w-25 text-center px-1 rounded-sm py-1 text-[12px] font-[poppins] font-semibold text-white",
  },
  {
    id: 2,
    title: "Games",
    title2: "Games",
    description: "A better plan is to practice aim training",
    image:
      "https://res.cloudinary.com/dvqhcm07a/image/upload/v1756975709/mark-decile-WA84FtTi7NU-unsplash_m7rjtj.jpg",
    sty1: "bg-[#9932CC] w-15 text-center px-0 rounded-sm py-1 text-[12px] font-[poppins] font-semibold text-white",
  },
  {
    id: 3,
    title: "Xbox",
    title2: "Xbox",
    description: "History of the Xbox and some of its popular games",
    image:
      "https://res.cloudinary.com/dvqhcm07a/image/upload/v1756978011/javier-martinez-hUD0PUczwJQ-unsplash_tuxggf.jpg",
    sty1: "bg-[#008B8B] w-11 text-center px-0 rounded-sm py-1 text-[12px] font-[poppins] font-semibold text-white",
  },
  {
    id: 4,
    title: "News",
    title2: "News",
    description: "the best RPG games available on Mac",
    image:
      "https://res.cloudinary.com/dvqhcm07a/image/upload/v1756975708/lorenzo-herrera-p0j-mE6mGo4-unsplash_1_fyab0s.jpg",
    sty1: "bg-[#191B1F] w-11 text-center px-0 rounded-sm py-1 text-[12px] text-[#3D55EF] font-[poppins] text-white font-semibold",
  },
  {
    id: 5,
    title: "News",
    title2: "News",
    description: "What Are NFT Games and How Do They Work?",
    image:
      "https://res.cloudinary.com/dvqhcm07a/image/upload/v1756991530/no-image_dt4lw9.png",
    sty1: "bg-[#191B1F] w-11 text-center px-0 rounded-sm py-1 text-[12px] text-[#3D55EF] text-white font-[poppins] font-semibold",
  },
  {
    id: 6,
    title: "Games",
    title2: "Games",
    description: "The best sports games on the PlayStation 5",
    image:
      "https://res.cloudinary.com/dvqhcm07a/image/upload/v1756975708/guglielmo-basile-FOT822IZaY0-unsplash_gjtqay.jpg",
    sty1: "bg-[#9932CC] w-15 text-center px-0 rounded-sm py-1 text-[12px] font-[poppins] font-semibold text-white",
  },
  {
    id: 7,
    title: "Play Station",
    title2: "Play Station",
    description: "Master Control with these expert tips",
    image:
      "https://res.cloudinary.com/dvqhcm07a/image/upload/v1756975709/luis-villasmil-ITFwHdPEED0-unsplash_1_gru0fg.jpg",
    sty1: "bg-[#0000FF] w-25 text-center px-1 rounded-sm py-1 text-[12px] font-[poppins] font-semibold text-white",
  },
  {
    id: 8,
    title: "Video",
    title2: "Video",
    description: "White xbox one console on white table",
    image:
      "https://res.cloudinary.com/dvqhcm07a/image/upload/v1756975708/louis-philippe-poitras-WMMh6BtmTMo-unsplash_cvhpaq.jpg",
    sty1: "bg-[#191B1F] w-11 text-center px-0 rounded-sm py-1 text-white text-[12px] text-[#3D55EF] font-[poppins] font-semibold",
  },
  {
    id: 9,
    title: "Games",
    title2: "Games",
    description: "Super Mario statue given out by Nintendo",
    image:
      "https://res.cloudinary.com/dvqhcm07a/image/upload/v1756975709/mika-baumeister-HUyICL8qbEE-unsplash_oia36q.jpg",
    sty1: "bg-[#9932CC] w-15 text-center px-0 rounded-sm py-1 text-[12px] font-[poppins] font-semibold text-white",
  },
];

const toSlug = (text: string) => text.toLowerCase().replace(/\s+/g, "-");

interface Comment {
  _id: string;
  postId: string;
  author: string;
  text: string;
  createdAt: string;
}


const Page = () => {
  const { id } = useParams();
  const post = cards.find((card) => card.id === parseInt(id as string));

  const [comments, setComments] = useState<Comment[]>([]);
  const [commentText, setCommentText] = useState('');
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    fetchComments();
    fetchLikes();
  }, [id]);

  useEffect(() => {
    const logScreenWidth = () => console.log('Screen width:', window.innerWidth);
    logScreenWidth();
    window.addEventListener('resize', logScreenWidth);
    return () => window.removeEventListener('resize', logScreenWidth);
  }, []);

  const fetchComments = async () => {
    try {
      const res = await fetch('/api/comment2');
      if (res.ok) {
        const data = await res.json();
        const postComments = data.filter((c: Comment) => c.postId === id);
        setComments(postComments);
      } else {
        console.error('Failed to fetch comments');
        setComments([]);
      }
    } catch (error) {
      console.error('Error fetching comments:', error);
      setComments([]);
    }
  };

  const fetchLikes = async () => {
    try {
      const res = await fetch(`/api/like?postId=${id}`);
      const data = await res.json();
      setLikes(data.likes || 0);
    } catch (error) {
      console.error('Error fetching likes:', error);
    }
  };

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    try {
      const res = await fetch('/api/comment2', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ postId: id, author: 'Anonymous', text: commentText })
      });
      if (res.ok) {
        setCommentText('');
        fetchComments();
      } else {
        const errorText = await res.text();
        console.error('Failed to post comment:', errorText);
      }
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  const handleLike = async () => {
    try {
      const res = await fetch('/api/like', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ postId: id })
      });
      if (res.ok) {
        const data = await res.json();
        setLikes(data.likes);
      } else {
        const errorText = await res.text();
        console.error('Error liking post:', errorText);
      }
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  if (!post) {
    return (
      <div className="text-center text-white mt-20">
        <h1 className="text-3xl font-bold">Post not found</h1>
      </div>
    );
  }

  const linkPath = `/${toSlug(post.title)}`;

  return (
    <div className="bg-[#191B1F] min-h-screen relative z-0  ">
      <div className="flex flex-col md:flex-row gap-7">
        <div className="md:w-[65%] w-full flex flex-col">
          <div className="bg-[#232428] ml-0 md:ml-34 md:w-[83%] w-full md:h-[320vh] h-[450vh] relative top-40 rounded-md z-40 mx-auto md:mx-0">
            <div
              className=" bg-cover bg-center md:w-full w-full h-85 rounded-t-lg p-4 flex flex-col justify-end"
              style={{ backgroundImage: `url(${post.image})` }}
            >
              <p className="text-[30px] font-[poppins] font-semibold text-white">
                {post.description}
              </p>

              <div className="flex items-center gap-4 mt-4">
                <button onClick={handleLike} className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  <FaThumbsUp />
                  {likes}
                </button>
              </div>

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
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy
                    text used in laying out print, graphic or web designs. The
                    passage is attributed to an unknown typesetter in the 15th
                    century who is thought to have scrambled parts of Ciceros De
                    Finibus Bonorum et Malorum for use in a type specimen book.
                    It usually begins with:
                  </p>

                  <p className="w-[95%] text-[15px] mt-10">
                    The purpose of lorem ipsum is to create a natural looking
                    block of text (sentence, paragraph, page, etc.) that doesn’t
                    distract from the layout. A practice not without
                    controversy, laying out pages with meaningless filler text
                    can be very useful when the focus is meant to be on design,
                    not content.
                  </p>

                  <p className="w-[95%] text-[15px] mt-10 bg-[#0000008c] px-6 py-5">
                    Lorem ipsum dolor sitt amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>

                  <p className="w-[97%] text-[15px] mt-10">
                    The passage experienced a surge in popularity during the
                    1960s when Letraset used it on their dry-transfer sheets,
                    and again during the 90s as desktop publishers bundled the
                    text with their software. Today it’s seen all around the
                    web; on templates, websites, and stock designs. Use our
                    generator to get your own, or read on for the authoritative
                    history of lorem ipsum.
                  </p>

                  <p className="w-[97%] text-[26px] font-bold mt-10">
                    Origins and Discovery
                  </p>

                  <p className="w-[97%] text-[15px] mt-10">
                    Until recently, the prevailing view assumed lorem ipsum was
                    born as a nonsense text. It’s not Latin, though it looks
                    like it, and it actually says nothing. Before & After
                    magazine answered a curious reader, “Its ‘words’ loosely
                    approximate the frequency with which letters occur in
                    English, which is why at a glance it looks pretty real.”
                  </p>

                  <p className="w-[97%] text-[15px] mt-10">
                    Richard McClintock, a Latin scholar from Hampden-Sydney
                    College, is credited with discovering the source behind the
                    ubiquitous filler text. In seeing a sample of lorem ipsum,
                    his interest was piqued by “consectetur” — a genuine, albeit
                    rare, Latin word. Consulting a Latin dictionary led
                    McClintock to a passage from
                    <i> De Finibus Bonorum et Malorum</i> (“On the Extremes of
                    Good and Evil”), a first-century B.C. text from the Roman
                    philosopher Cicero.
                  </p>

                  <p className="w-[95%] text-[15px] mt-10 bg-[#0000008c] px-6 py-5">
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit, sed quia non numquam eius
                    modi tempora incidunt ut labore et dolore magnam aliquam
                    quaerat voluptatem.
                  </p>

                  <p className="w-[97%] text-[15px] mt-10">
                    McClintock’s eye for detail certainly helped narrow the
                    whereabouts of lorem ipsum’s origin. However, the “how and
                    when” still remain something of a mystery, with competing
                    theories and timelines.
                  </p>

                  <p className="w-[95%] text-[26px] font-bold mt-10">
                    Meaning of Lorem Ipsum
                  </p>

                  <p className="w-[97%] text-[15px] mt-10">
                    Don’t bother typing lorem ipsum into Google Translate. If
                    you already tried, you may have gotten anything from “NATO”
                    to “China,” depending on how you capitalized the letters.
                    The bizarre translation was fodder for conspiracy theories,
                    but Google has since updated its “lorem ipsum” translation
                    to, boringly enough, “lorem ipsum”.
                  </p>

                  <p className="text-white border-[1px] border-white mt-5 w-30 flex justify-center">
                    <Link href={linkPath}>{post.title2}</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-50 md:ml-34 ml-0 flex gap-4 mx-auto md:mx-0">
            <div>
              <Image
                src="/author.png"
                alt="auth"
                width={100}
                height={100}
                className="rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-white text-md">IWI STUDIO</h1>
              <h1 className="text-sm text-gray-500 w-[90%]">
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs.
              </h1>
            </div>
          </div>

          <div className="sm:ml-4 md:ml-34 lg:ml-40 ml-0 mt-10 sm:p-4 p-6 lg:p-8 bg-[#232428] rounded-md mx-auto md:mx-0 sm:w-[90%] md:w-[55%] lg:w-[50%] w-full">
            <h2 className="text-white text-xl font-bold mb-4">Comments</h2>

            <form
              onSubmit={handleCommentSubmit}
              className="mb-6 p-4 bg-[#191B1F] rounded-md"
            >
              <div className="flex gap-2">
                <input
                  type="text"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Write a comment..."
                  className="flex-1 p-2 bg-transparent border border-gray-500 text-white rounded-md outline-none"
                />
                <button
                  type="submit"
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                  title="Post comment"
                >
                  <FaComment />
                </button>
              </div>
            </form>

            <div className="space-y-4">
              {comments.map((comment: Comment) => (
                <div key={comment._id} className="p-4 bg-[#191B1F] rounded-md">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-white font-semibold">
                      {comment.author}
                    </h3>
                    <p className="text-gray-500 text-sm">{new Date(comment.createdAt).toLocaleDateString()}</p>
                  </div>
                  <p className="text-white">{comment.text}</p>
                </div>
              ))}
              {comments.length === 0 && (
                <p className="text-gray-500">
                  No comments yet. Be the first to comment!
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="md:w-[30%] w-full bg-[#232428] md:h-110 rounded-lg  h-96 mt-40 md:mt-40 flex flex-col  px-3 py-1rounded-md md:ml-0 mr-0 md:mr-35 sticky top-7">
          <h3 className="text-white text-lg font-bold mb-4">Popular</h3>
          <div className="text-white  flex flex-col gap-5">
            <div className="flex gap-6">
              <div className="w-[80px] h-[80px] rounded-full overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dvqhcm07a/image/upload/v1756978011/javier-martinez-hUD0PUczwJQ-unsplash_tuxggf.jpg"
                  alt="glasslogo"
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>

              <div>
                <p className="w-50 font-[poppins] font-bold text-sm hover:text-[#0000FF]">
                  <Link href={"/"}>
                    History of the Xbox and some of its popular games
                  </Link>
                </p>
                <p className="text-gray-400 ">4 years ago</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-[80px] h-[80px] rounded-full">
                <Image
                  src="https://res.cloudinary.com/dvqhcm07a/image/upload/v1756975709/martin-katler-caNzzoxls8Q-unsplash_py26pk.jpg"
                  alt="glasslogo"
                  width={80}
                  height={80}
                  className="object-cover rounded-full"
                />
              </div>
              <div>
                <p className="w-50 font-[poppins] font-bold text-sm hover:text-[#0000FF]">
                  <Link href={"/"}>Master Control with these expert tips</Link>
                </p>
                <p className="text-gray-400">4 years ago</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-[80px] h-[80px] rounded-full">
                <Image
                  src="https://res.cloudinary.com/dvqhcm07a/image/upload/v1756975709/martin-katler-caNzzoxls8Q-unsplash_py26pk.jpg"
                  alt="glasslogo"
                  width={80}
                  height={80}
                  className="object-cover rounded-full"
                />
              </div>
              <div>
                <p className="w-50 font-[poppins] font-bold text-sm hover:text-[#0000FF]">
                  <Link href={"/"}>
                    The new generation PlayStation 4 and PS5 consoles
                  </Link>
                </p>
                <p className="text-gray-400">4 years ago</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-[80px] h-[80px] rounded-full overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dvqhcm07a/image/upload/v1756978011/javier-martinez-hUD0PUczwJQ-unsplash_tuxggf.jpg"
                  alt="glasslogo"
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>

              <div>
                <p className="w-50 font-[poppins] font-bold text-sm hover:text-[#0000FF]">
                  <Link href={"/"}>
                    History of the Xbox and some of its popular games
                  </Link>
                </p>
                <p className="text-gray-400">4 years ago</p>
              </div>
            </div>
          </div>
          {/* You can add more components or content here, e.g., related articles or widgets */}
        </div>
      </div>

      <div className="mt-20 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Page;
