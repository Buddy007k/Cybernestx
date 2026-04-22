import { connectDB } from "@/lib/db";
import Contact from "@/models/Contact";

export async function GET() {
  await connectDB();

  const messages = await Contact.find().sort({ createdAt: -1 });

  return Response.json(messages);
}