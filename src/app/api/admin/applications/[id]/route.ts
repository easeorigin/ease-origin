import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { ApplicationModel } from "@/models/Application";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const VALID_STATUSES = [
  "pending",
  "interview",
  "reviewing",
  "hired",
  "rejected",
];

export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const session = await getServerSession(authOptions);

  // 🔐 Auth guard (same pattern you used earlier)
  if (!session?.user || session.user.role !== "admin") {
    return NextResponse.json(
      { message: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    await connectDB();

    const body = await req.json();
    const { status } = body;

    // ✅ Validate status
    if (!status || !VALID_STATUSES.includes(status)) {
      return NextResponse.json(
        { error: "Invalid status value" },
        { status: 400 }
      );
    }

    // 🔍 Find application
    const application = await ApplicationModel.findById(id);

    if (!application) {
      return NextResponse.json(
        { error: "Application not found" },
        { status: 404 }
      );
    }

    // ⚠️ Optional: prevent reverting from final states
    const FINAL_STATES = ["hired", "rejected"];
    if (FINAL_STATES.includes(application.status)) {
      return NextResponse.json(
        { error: `Cannot update a ${application.status} application` },
        { status: 400 }
      );
    }

    // ✏️ Update status
    application.status = status;
    await application.save();

    return NextResponse.json(
      {
        success: true,
        data: application,
        message: `Application status updated to ${status}`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating application:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}