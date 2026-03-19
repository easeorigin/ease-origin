/* eslint-disable @typescript-eslint/no-unused-vars */

import { NextResponse, NextRequest } from "next/server";
import { ApplicationModel } from "@/models/Application";
import { JobModel } from "@/models/Job";
import { CaseStudyModel } from "@/models/CaseStudy";
import { ContactModel } from "@/models/Contact";
import Newsletter from "@/models/Newsletter";
import { SubmitResumeModel } from "@/models/SubmitResume";
import { connectDB } from "@/lib/mongodb";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user || session.user.role !== "admin") {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectDB();

    const [
      totalApplications,
      totalJobs,
      totalCaseStudies,
      totalContacts,
      totalSubscribers,
      totalResumeSubmissions,
      recentApplications,
      recentContacts,
      recentSubscribers,
    ] = await Promise.all([
      ApplicationModel.countDocuments(),
      JobModel.countDocuments(),
      CaseStudyModel.countDocuments(),
      ContactModel.countDocuments(),
      Newsletter.countDocuments(),
      SubmitResumeModel.countDocuments(),

      ApplicationModel.find()
        .sort({ createdAt: -1 })
        .limit(5)
        .select("fullName email jobTitle createdAt status"),

      ContactModel.find()
        .sort({ createdAt: -1 })
        .limit(5)
        .select("name email subject createdAt status"),

      Newsletter.find()
        .sort({ createdAt: -1 })
        .limit(5)
        .select("email createdAt"),
    ]);

    return NextResponse.json({
      totalApplications,
      totalJobs,
      totalCaseStudies,
      totalContacts,
      totalSubscribers,
      totalResumeSubmissions,
      recentApplications,
      recentContacts,
      recentSubscribers,
    });

  } catch (error) {
    console.error("Admin stats error:", error);

    return NextResponse.json(
      { message: "Failed to fetch stats" },
      { status: 500 }
    );
  }
}