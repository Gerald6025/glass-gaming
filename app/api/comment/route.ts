import { NextResponse } from "next/server";
import connect from "@/db";
import comment from "@/models/comment"; 

export const GET = async (request: Request) => {
  try {
    await connect();
    const comments = await comment.find()
    return new NextResponse(JSON.stringify(comments), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error" + error, { status: 500 });
  }     

};