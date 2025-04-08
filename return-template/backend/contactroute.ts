import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "@/backend/contact";

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 }
    );
  }

  const result = await sendContactEmail(name, email, message);

  if (result.success) {
    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}
