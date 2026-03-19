import { authOptions } from "@/lib/auth";
import { connectDB } from "@/lib/mongodb";
import Newsletter from "@/models/Newsletter";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user || session.user.role !== "admin") {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Subscriber ID is required" }, { status: 400 });
    }

    await connectDB();
    await Newsletter.findByIdAndDelete(id);

    return NextResponse.json({ message: "Subscriber removed" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting subscriber:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}