import dbConnect from "@/lib/connect";
import Blog from "@/model/blog.model"
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();

  const blogs = await Blog.find({});
  return NextResponse.json(blogs)
}

export async function POST(request: Request) {
  await dbConnect();
  const body = await request.json();
  const data = await Blog.create(body)

  return NextResponse.json(data)
}
