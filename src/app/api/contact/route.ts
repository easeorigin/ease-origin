import { ContactModel } from "@/models/Contact";
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { sendContactEmail } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, email, subject, message, company } = data;

    if (!name || !email || !subject || !message || !company) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    await connectDB();

    const newContact = new ContactModel({
      name,
      email,
      subject,
      message,
      company,
    });

    await newContact.save();

    // ✅ Don't fail request if email fails
    try {
      await sendContactEmail(newContact);
    } catch (err) {
      console.error("Email failed:", err);
    }

    return NextResponse.json(
      { message: "Contact form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form submission error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}