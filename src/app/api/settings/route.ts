import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { getSettings } from "@/lib/settings";

export async function GET() {
  try {
    await connectDB();

    const settings = await getSettings();

    return NextResponse.json(settings);
  } catch (error) {
    console.error("Failed to fetch settings:", error);
    return NextResponse.json(
      { message: "Failed to fetch settings" },
      { status: 500 }
    );
  }
}