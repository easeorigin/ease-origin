/* eslint-disable @typescript-eslint/no-unused-vars */

import { NextResponse, NextRequest } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { ApplicationModel } from "@/models/Application";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user || session.user.role !== "admin") {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectDB();

    const applicants = await ApplicationModel.find().sort({ createdAt: -1 });
    return NextResponse.json({ data: applicants });
  } catch (error) {
    console.error("Error fetching applications:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
