/* eslint-disable @typescript-eslint/no-unused-vars */

import { NextResponse, NextRequest } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { JobModel } from "@/models/Job";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import slugify from "slugify";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user || session.user.role !== "admin") {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectDB();

    const body = await req.json();

    const slug = slugify(body.title, { lower: true, strict: true });

    const job = await JobModel.create({
      ...body,
      slug,
    });

    return NextResponse.json(job, { status: 201 });

  } catch (error) {
    console.error("Create job error:", error);

    return NextResponse.json(
      { message: "Failed to create job" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user || session.user.role !== "admin") {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectDB();

    const jobs = await JobModel.find().sort({ createdAt: -1 });

    return NextResponse.json(jobs);

  } catch (error) {
    console.error("Fetch jobs error:", error);

    return NextResponse.json(
      { message: "Failed to fetch jobs" },
      { status: 500 }
    );
  }
}