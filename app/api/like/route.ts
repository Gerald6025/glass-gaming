import { NextResponse } from "next/server";
import connect from "@/db";
import likes from "@/models/likes";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const postId = searchParams.get('postId');
    await connect();
    const likeDoc = await likes.findOne({ postId });
    const count = likeDoc ? likeDoc.count : 0;
    return new NextResponse(JSON.stringify({ likes: count }), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: "Database Error" + error }), { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { postId } = await request.json();
    await connect();
    const likeDoc = await likes.findOneAndUpdate(
      { postId },
      { $inc: { count: 1 } },
      { new: true, upsert: true }
    );
    return new NextResponse(JSON.stringify({ likes: likeDoc.count }), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: "Database Error" + error }), { status: 500 });
  }
}