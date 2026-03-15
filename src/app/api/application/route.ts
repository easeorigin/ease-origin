import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { ApplicationModel } from "@/models/Application";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();
    const {
      fullName,
      email,
      phone,
      resumeFile,
      coverLetterFile,
      country,
      currentLocation,
      willingToRelocate,
      summary,
      skills,
      noticePeriod,
      experiences,
      education,
      workAuthorization,
      clearance,
      linkedin,
      github,
      portfolio,
    } = body;

    if (
      !fullName ||
      !email ||
      !phone ||
      !resumeFile ||
      !coverLetterFile ||
      !country ||
      !currentLocation ||
      !willingToRelocate ||
      !summary ||
      !skills ||
      !noticePeriod ||
      !experiences ||
      !education ||
      !workAuthorization ||
      !clearance
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const pendingApplication = await ApplicationModel.findOne({
      email,
      status: "pending",
    });

    if (pendingApplication) {
      return NextResponse.json(
        { message: "You already have a pending application" },
        { status: 409 },
      );
    }

    const applicant = await ApplicationModel.create({
      fullName,
      email,
      phone,
      resumeFile,
      coverLetterFile,
      country,
      currentLocation,
      willingToRelocate,
      summary,
      skills,
      noticePeriod,
      experiences,
      education,
      workAuthorization,
      clearance,
      linkedin,
      github,
      portfolio,
      status: "pending",
    });
    return NextResponse.json(
      {
        success: true,
        data: applicant,
        message: "Application sent Successfully",
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error creating application:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
