import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { CaseStudyModel } from "@/models/CaseStudy";

export async function GET() {
    try {
        await connectDB();
        const caseStudies = await CaseStudyModel.find().sort({ createdAt: -1 });
        return NextResponse.json(caseStudies);
    } catch (error) {
        console.error("Error fetching case studies:", error);
        return NextResponse.json({ error: "Failed to fetch case studies" }, { status: 500 });
    }
}