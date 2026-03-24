import { NextResponse, NextRequest } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { JobModel } from "@/models/Job";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    const { slug } = await params;

    await connectDB();

    const job = await JobModel.findOne({
      slug: slug,
    }).lean();

    if (!job) {
      return NextResponse.json(
        { error: "Job not found not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(job);
  } catch (error) {
    console.error("Error fetching case study:", error);
    return NextResponse.json(
      { error: "Failed to fetch case study" },
      { status: 500 },
    );
  }
}
