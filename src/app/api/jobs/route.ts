import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { JobModel } from "@/models/Job";

export async function GET() {
  try {
    await connectDB();

    const jobs = await JobModel.find({ status: "published" })
      .sort({ createdAt: -1 })
      .select(
        "title slug category location workType employmentType shortDescription applicationDeadline"
      );

    return NextResponse.json(jobs);

  } catch (error) {
    console.error("Fetch public jobs error:", error);

    return NextResponse.json(
      { message: "Failed to fetch jobs" },
      { status: 500 }
    );
  }
}
