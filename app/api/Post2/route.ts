import  connectToDatabase  from "@/lib/mongodb";
import Post2, { IPost2 } from "@/models/Post2";


export async function POST(req: Request): Promise<Response> {
try {
await connectToDatabase();
const { title, content }: { title: string; content: string } = await req.json();


const newPost: IPost2 = await Post2.create({ title, content });
return new Response(JSON.stringify(newPost), { status: 201 });
} catch (error) {
const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
return new Response(JSON.stringify({ error: errorMessage }), { status: 500 });
}
}


export async function GET(): Promise<Response> {
try {
await connectToDatabase();
const posts: IPost2[] = await Post2.find({}).sort({ createdAt: -1 });
return new Response(JSON.stringify(posts), { status: 200 });
} catch (error: unknown) {
	let errorMessage = "An unknown error occurred";
	if (error instanceof Error) {
		errorMessage = error.message;
	}
	return new Response(JSON.stringify({ error: errorMessage }), { status: 500 });
}
}