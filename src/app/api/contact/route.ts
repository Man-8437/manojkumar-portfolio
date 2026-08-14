import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { from_name, reply_to, subject, message } = body;

    const host = process.env.SMTP_HOST;
    const port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : undefined;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const receiver = process.env.RECEIVER_EMAIL;

    if (!host || !port || !user || !pass || !receiver) {
      return NextResponse.json({ ok: false, error: "missing_server_env" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // true for 465, false for other ports
      auth: {
        user,
        pass,
      },
    });

    const mailOptions = {
      from: `${from_name} <${reply_to}>`,
      to: receiver,
      subject: subject || `New message from ${from_name}`,
      text: message,
      html: `<p>${message.replace(/\n/g, "<br />")}</p><p>Reply to: ${reply_to}</p>`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: "server_error" }, { status: 500 });
  }
}
