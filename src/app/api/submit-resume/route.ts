import { NextResponse, NextRequest } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { SubmitResumeModel } from "@/models/SubmitResume";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();
    const { name, email, country, expertise, resumeUrl, message } = body;

    if (!name || !email || !country || !expertise || !resumeUrl || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const newSubmission = new SubmitResumeModel({
      name,
      email,
      country,
      expertise,
      resumeUrl,
      message,
    });

    await newSubmission.save();

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to submit resume" },
      { status: 500 },
    );
  }
};
