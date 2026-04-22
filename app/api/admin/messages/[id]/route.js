import { connectDB } from "@/lib/db";
import Contact from "@/models/contact";

export async function DELETE(req, { params }) {
  await connectDB();

  await Contact.findByIdAndDelete(params.id);

  return Response.json({ success: true });
}