import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const { firstName, lastName, email, phone, service, message } = body;

    // 🔥 transporter (use your Gmail or SMTP)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // App password (NOT your real password)
      },
    });

    // 🔥 email content
    const mailOptions = {
      from: `"CyberNestX Lead" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO, // your receiving email
      subject: `🚀 New Service Inquiry - ${service}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false, error: "Email failed" }, { status: 500 });
  }
}