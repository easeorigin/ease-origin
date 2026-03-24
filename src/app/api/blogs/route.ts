import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { BlogPost } from "@/models/BlogPost";

export async function GET() {
  try {
    await connectDB();

    const posts = await BlogPost.find().sort({ createdAt: -1 });

    return NextResponse.json(posts);
  } catch (error) {
    console.error("Fetch blogs error:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog posts" },
      { status: 500 }
    );
  }
}