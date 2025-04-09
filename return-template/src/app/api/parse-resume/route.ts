// src/app/api/parse-resume/route.ts
import { parseResumeRoute } from "@/backend/parseResumeRoute";

export async function POST(request: Request) {
  return parseResumeRoute(request as any);
}
