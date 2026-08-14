import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { from_name, reply_to, subject, message } = body;

    if (!from_name || !reply_to || !message) {
      return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
    }

    return NextResponse.json({
      ok: true,
      message: "Contact form received. Use EmailJS on the client for email delivery.",
      data: {
        from_name,
        reply_to,
        subject: subject || `New message from ${from_name}`,
      },
    });
  } catch (error) {
    console.error("Contact route error:", error);
    return NextResponse.json({ ok: false, error: "server_error" }, { status: 500 });
  }
}
