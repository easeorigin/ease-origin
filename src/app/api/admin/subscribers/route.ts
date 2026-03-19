/* eslint-disable @typescript-eslint/no-unused-vars */


import { NextResponse, NextRequest } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Newsletter from "@/models/Newsletter";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user || session.user.role !== "admin") {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectDB();

    const subscribers = await Newsletter.find({})
      .sort({ subscribedAt: -1 })
      .select("email subscribedAt"); // optional: limit fields

    return NextResponse.json({ subscribers }, { status: 200 });
  } catch (error) {
    console.error("Error fetching subscribers:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
