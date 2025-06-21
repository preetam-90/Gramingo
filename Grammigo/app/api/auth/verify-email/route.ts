import { type NextRequest, NextResponse } from "next/server"
import { Database } from "@/lib/database"

export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json()

    if (!token) {
      return NextResponse.json({ error: "Verification token is required" }, { status: 400 })
    }

    // Get token data
    const tokenData = await Database.getVerificationToken(token)
    if (!tokenData) {
      return NextResponse.json({ error: "Invalid or expired verification token" }, { status: 400 })
    }

    // Check if token is expired
    if (new Date() > tokenData.expiresAt) {
      await Database.deleteVerificationToken(token)
      return NextResponse.json({ error: "Verification token has expired" }, { status: 400 })
    }

    // Update user as verified
    const user = await Database.updateUser(tokenData.userId, { isVerified: true })
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    // Delete the verification token
    await Database.deleteVerificationToken(token)

    return NextResponse.json({
      message: "Email verified successfully! You can now log in.",
    })
  } catch (error) {
    console.error("Email verification error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
