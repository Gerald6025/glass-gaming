import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { ObjectId, MongoClient } from "mongodb";

export async function GET() {
  try {
    const client: MongoClient = await clientPromise();
    const db = client.db("Next15");
    const docs = await db.collection("created").find({}).toArray();

    const created = docs.map((doc) => ({
      _id: doc._id instanceof ObjectId ? doc._id.toHexString() : String(doc._id),
      title: doc.title,
      content: doc.content,
      createdAt: doc.createdAt,
    }));

    return NextResponse.json(created);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body?.title || !body?.content) {
      return NextResponse.json(
        { error: "Title and content are required" },
        { status: 400 }
      );
    }

    const client: MongoClient = await clientPromise();
    const db = client.db("Next15");

    const newDoc = {
      title: body.title,
      content: body.content,
      createdAt: new Date(),
    };

    const result = await db.collection("created").insertOne(newDoc);

    return NextResponse.json({
      acknowledged: result.acknowledged,
      insertedId: result.insertedId.toHexString(),
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
