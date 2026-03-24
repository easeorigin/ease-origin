import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { BlogPost } from "@/models/BlogPost";
import slugify from "slugify";

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user || session.user.role !== "admin") {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    await connectDB();

    const body = await req.json();

    if (!body.title || !body.content || !body.author || !body.imageUrl) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const slug = slugify(body.title, {
      lower: true,
      strict: true,
    });

    const plainText = body.content.replace(/<[^>]*>?/gm, " ");

    const excerpt =
      plainText.substring(0, 150).trim() +
      (plainText.length > 150 ? "..." : "");

    const blog = await BlogPost.create({
      ...body,
      slug,
      excerpt,
    });

    return NextResponse.json(blog, { status: 201 });
  } catch (error) {
    console.error("POST /blogs error:", error);

    return NextResponse.json(
      {
        message: "Error creating blog",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user || session.user.role !== "admin") {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    await connectDB();

    const blogs = await BlogPost.find().sort({ createdAt: -1 });

    return NextResponse.json(blogs);
  } catch (error) {
    console.error("GET /blogs error:", error);

    return NextResponse.json(
      {
        message: "Error fetching blogs",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}