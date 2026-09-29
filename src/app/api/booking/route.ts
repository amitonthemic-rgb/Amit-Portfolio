import { NextResponse } from "next/server";
import { Resend } from "resend";

type BookingPayload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  eventType?: string;
  eventDate?: string;
  eventLocation?: string;
  audience?: string;
  hostingLanguage?: string;
  message?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: BookingPayload;

  try {
    body = (await request.json()) as BookingPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const message = body.message?.trim() ?? "";
  const eventType = body.eventType?.trim() ?? "";

  if (!name || !email || !phone || !message || !eventType) {
    return NextResponse.json(
      { ok: false, error: "Please complete all required fields." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: "Enter a valid email address." }, { status: 400 });
  }

  const summary = [
    `Name: ${name}`,
    `Company: ${body.company?.trim() || "—"}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Event type: ${eventType}`,
    `Event date: ${body.eventDate?.trim() || "—"}`,
    `Event location: ${body.eventLocation?.trim() || "—"}`,
    `Expected audience: ${body.audience?.trim() || "—"}`,
    `Hosting language: ${body.hostingLanguage?.trim() || "—"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.BOOKING_TO_EMAIL;
  const from = process.env.BOOKING_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    // Development-safe path: accept the enquiry without claiming delivery.
    console.info("[booking enquiry — email not configured]\n", summary);
    return NextResponse.json({
      ok: true,
      delivered: false,
      notice:
        "Enquiry accepted locally. Configure RESEND_API_KEY, BOOKING_TO_EMAIL and BOOKING_FROM_EMAIL to send email.",
    });
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Booking enquiry — ${eventType} — ${name}`,
      text: summary,
    });
    return NextResponse.json({ ok: true, delivered: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { ok: false, error: "Email delivery failed. Please try WhatsApp or phone." },
      { status: 502 },
    );
  }
}
