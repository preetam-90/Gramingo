import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  // For demo purposes, simulate Google OAuth
  const demoGoogleAuthUrl = `/auth/login?demo=google`

  return NextResponse.redirect(new URL(demoGoogleAuthUrl, request.url))
}
