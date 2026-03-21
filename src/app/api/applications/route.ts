import { NextResponse, NextRequest } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { ApplicationModel } from "@/models/Application";
import { NotificationService } from "@/services/notification.service";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();
    const {
      jobTitle,
      fullName,
      email,
      phone,
      resumeUrl,
      coverLetterUrl,
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
      !resumeUrl ||
      !coverLetterUrl ||
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

    console.log("Checking for pending application:", { email, status: "pending" });

    const pendingApplication = await ApplicationModel.findOne({
      email,
      status: "pending",
    });

    const allApps = await ApplicationModel.find({});
console.log("All applications in DB:", allApps);

    if (pendingApplication) {
      return NextResponse.json(
        { message: "You already have a pending application" },
        { status: 409 },
      );
    }

    const applicant = await ApplicationModel.create({
      jobTitle,
      fullName,
      email,
      phone,
      resumeUrl,
      coverLetterUrl,
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

    await applicant.save();

    await NotificationService.sendJobApplicationEmail({
      name: applicant.fullName,
      jobTitle: applicant.jobTitle || "Unknown Position",
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

export async function GET() {
  return NextResponse.json({ message: "GET works" });
}


