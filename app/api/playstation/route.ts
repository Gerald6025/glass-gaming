import { NextResponse } from "next/server";
import connect from "@/db";
import playstation from "@/models/playstation";   

export const GET = async () => {
  try {
    await connect();
    const playstations = await playstation.find()
    return new NextResponse(JSON.stringify(playstations), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error" + error, { status: 500 });
  }     

};