import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

const PUBLIC_FOLDERS = ["easeorigin/posts"];
const ADMIN_FOLDERS = [
  "easeorigin/blogs"
];

export async function POST(req: Request) {
  const { folder } = await req.json();

  // 🚫 Unknown folder
  if (![...PUBLIC_FOLDERS, ...ADMIN_FOLDERS].includes(folder)) {
    return new Response("Invalid folder", { status: 400 });
  }

  // 🔐 Admin-only folders
  if (ADMIN_FOLDERS.includes(folder)) {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== "admin") {
      return new Response("Unauthorized", { status: 401 });
    }
  }

  const timestamp = Math.round(Date.now() / 1000);

  const signature = cloudinary.utils.api_sign_request(
    {
      timestamp,
      folder,
    },
    process.env.CLOUDINARY_API_SECRET!
  );

  return NextResponse.json({
    timestamp,
    signature,
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_API_KEY,
    folder,
  });
}