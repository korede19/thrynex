import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const data = await request.json();
  const { NEXT_PUBLIC_SMTP_EMAIL, NEXT_PUBLIC_SMTP_PASSWORD } = process.env;

  if (!NEXT_PUBLIC_SMTP_EMAIL || !NEXT_PUBLIC_SMTP_PASSWORD) {
    console.error("SMTP credentials are missing.");
    return new Response("Server misconfiguration", { status: 500 });
  }

  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: NEXT_PUBLIC_SMTP_EMAIL,
      pass: NEXT_PUBLIC_SMTP_PASSWORD,
    },
  });

  try {
    const testResult = await transport.verify();
    console.log("SMTP Connection Verified:", testResult);
  } catch (error) {
    console.error("SMTP verification failed:", error);
    return new Response("SMTP verification failed", { status: 500 });
  }

  try {
    const sendResult = await transport.sendMail({
      from: data?.from,
      to: NEXT_PUBLIC_SMTP_EMAIL,
      subject: data?.subject,
      html: data?.body,
      sender: data?.from,
      replyTo: data?.from,
    });
    console.log("Email sent:", sendResult);

    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Allow-Credentials": "false",
    };

    return new Response("Email Sent", {
      status: 200,
      headers: corsHeaders,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response("Email sending failed", { status: 500 });
  }
}

export async function OPTIONS() {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
    "Access-Control-Allow-Credentials": "false",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };
  return new Response(null, {
    status: 200,
    headers: corsHeaders,
  });
}
