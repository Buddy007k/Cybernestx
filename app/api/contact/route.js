import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    const { firstName, lastName, email, phone, service, message } = body;

    // 🔥 BASIC VALIDATION
    if (!firstName || !email || !service) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // 🔥 FOR NOW: just log (later DB/email)
    console.log("📩 New Lead:", body);

    return NextResponse.json(
      { success: true, message: "Form submitted successfully" },
      { status: 200 }
    );

  } catch (err) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}