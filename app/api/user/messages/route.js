import { connectDB } from "@/lib/db";
import Contact from "@/models/Contact";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function GET() {
  await connectDB();

  const token = cookies().get("token")?.value;

  if (!token) {
    return Response.json([], { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const messages = await Contact.find({
      userId: decoded.id,
    }).sort({ createdAt: -1 });

    return Response.json(messages);
  } catch {
    return Response.json([], { status: 401 });
  }
}