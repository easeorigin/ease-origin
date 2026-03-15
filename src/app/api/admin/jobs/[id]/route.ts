import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { JobModel } from "@/models/Job";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import slugify from "slugify";

export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {

  const { id } = await context.params;

  const session = await getServerSession(authOptions);

  if (!session?.user || session.user.role !== "admin") {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectDB();

    const body = await req.json();

    if (body.title) {
      body.slug = slugify(body.title, { lower: true, strict: true });
    }

    const updatedJob = await JobModel.findByIdAndUpdate(
      id,
      body,
      { new: true }
    );

    if (!updatedJob) {
      return NextResponse.json(
        { message: "Job not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedJob);

  } catch (error) {
    console.error("Update job error:", error);

    return NextResponse.json(
      { message: "Failed to update job" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const session = await getServerSession(authOptions);

  if (!session?.user || session.user.role !== "admin") {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectDB();

    const deletedJob = await JobModel.findByIdAndDelete(id);

    if (!deletedJob) {
      return NextResponse.json(
        { message: "Job not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Job deleted successfully" });

  } catch (error) {
    console.error("Delete job error:", error);

    return NextResponse.json(
      { message: "Failed to delete job" },
      { status: 500 }
    );
  }
}