import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { JobModel } from "@/models/Job";

export async function GET() {
  try {
    await connectDB();
    const jobs = await JobModel.find().sort({ createdAt: -1 });
    return NextResponse.json(jobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return NextResponse.json(
      { error: "Failed to fetch jobs" },
      { status: 500 },
    );
  }
}
