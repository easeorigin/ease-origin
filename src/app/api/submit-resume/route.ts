import { NextResponse, NextRequest } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { SubmitResumeModel } from "@/models/SubmitResume";
import { NotificationService } from "@/services/notification.service";


export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();
console.log("REQUEST BODY:", body);
    const { name, email, country, expertise, resumeUrl, message, resumeKey } = body;

    if (!name || !email || !country || !expertise || !resumeUrl || !message || !resumeKey) {
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
      resumeKey,
    });

    await newSubmission.save();

    await NotificationService.sendResumeUploadEmail({
      name,
      resumeUrl,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to submit resume" },
      { status: 500 },
    );
  }
};
