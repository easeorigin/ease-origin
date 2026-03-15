import { NextResponse, NextRequest } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { CaseStudyModel } from "@/models/CaseStudy";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    const { slug } = await params;
    await connectDB();
    const caseStudy = await CaseStudyModel.findOne({
      slug: slug,
    }).lean();

    if (!caseStudy) {
      return NextResponse.json(
        { error: "Case study not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(caseStudy);
    
  } catch (error) {
    console.error("Error fetching case study:", error);
    return NextResponse.json(
      { error: "Failed to fetch case study" },
      { status: 500 },
    );
  }
}
