import dbConnect from "@/lib/connect";
import Blog from "@/model/blog.model";
import { NextResponse } from "next/server";

export async function GET(_request: Request, {
    params
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params;
    await dbConnect();

    const blog = await Blog.findById(id);
    return NextResponse.json(blog)
}