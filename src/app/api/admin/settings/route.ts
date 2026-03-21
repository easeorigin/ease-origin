import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { getSettings } from "@/lib/settings";
import { deepMerge } from "@/lib/deep-merge";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export async function PATCH(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user || session.user.role !== "admin") {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    await connectDB();

    const body = await req.json();

    const settings = await getSettings();

    // merge incoming updates into existing settings
    const updated = deepMerge(settings.toObject(), body);

    // save updated document
    Object.assign(settings, updated);
    await settings.save();

    return NextResponse.json(settings);
  } catch (error) {
    console.error("Failed to update settings:", error);
    return NextResponse.json(
      { message: "Failed to update settings" },
      { status: 500 }
    );
  }
}