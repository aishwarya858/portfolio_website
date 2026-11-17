import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Validates contact-form submissions on the server.
// NOTE: this does not send an email yet. To deliver messages, plug in a
// service such as Resend, Formspree or Nodemailer where marked below.
export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const subject = String(body.subject || "").trim();
  const message = String(body.message || "").trim();

  if (name.length < 2 || !EMAIL_RE.test(email) || !subject || message.length < 10) {
    return NextResponse.json({ error: "Please fill in all fields correctly." }, { status: 422 });
  }
  if (name.length > 100 || subject.length > 200 || message.length > 5000) {
    return NextResponse.json({ error: "Your message is too long." }, { status: 422 });
  }

  // ── Send the email here ──────────────────────────────────────
  console.log("New contact message:", { name, email, subject, message });

  return NextResponse.json({
    message: `Thanks, ${name}! Your message has been received. I'll get back to you soon.`,
  });
}
