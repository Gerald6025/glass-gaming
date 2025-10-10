import { NextResponse } from "next/server";
import mongoose from "mongoose";
import connect from "@/db";
import comment2 from "@/models/comment2";

// Clear model cache to ensure schema updates
delete mongoose.models.comment2;
delete mongoose.models.Comment2;

export const GET = async () => {
  try {
    await connect();
    const comments2 = await comment2.find()
    return new NextResponse(JSON.stringify(comments2), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: "Database Error" + error }), { status: 500 });
  }

};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    await connect();
    const newComment = new comment2(body);
    await newComment.save();
    return new NextResponse(JSON.stringify(newComment), { status: 201 });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: "Database Error" + error }), { status: 500 });
  }
}