// backend/parseResumeRoute.ts
import { NextRequest, NextResponse } from "next/server";
import { parseResume } from "./parseResume";

export async function parseResumeRoute(request: NextRequest) {
  if (request.method !== "POST") {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }

  const { resume } = await request.json();
  if (!resume) {
    return NextResponse.json({ error: "Missing resume text." }, { status: 400 });
  }

  const data = await parseResume(resume);
  return NextResponse.json({ data }, { status: 200 });
}
