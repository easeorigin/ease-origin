import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Newsletter from "@/models/Newsletter";
import { sendSubscriptionEmail } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { email } = data;

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    await connectDB();

    // Check if already subscribed
    const existing = await Newsletter.findOne({ email });
    if (existing) {
      return NextResponse.json(
        { error: "Email is already subscribed" },
        { status: 400 }
      );
    }

    // Save email to DB
    const newSubscriber = new Newsletter({ email });
    await newSubscriber.save();

    //Send mail to user
    await sendSubscriptionEmail(email);

    return NextResponse.json(
      { message: "Subscribed successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}