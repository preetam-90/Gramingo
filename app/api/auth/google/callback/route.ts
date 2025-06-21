import { type NextRequest, NextResponse } from "next/server"
import { Database } from "@/lib/database"

function generateJWT(payload: any): string {
  const header = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" }))
  const payloadStr = btoa(JSON.stringify({ ...payload, exp: Date.now() + 7 * 24 * 60 * 60 * 1000 }))
  const signature = btoa(`signature_${Date.now()}`)
  return `${header}.${payloadStr}.${signature}`
}

export async function GET(request: NextRequest) {
  try {
    // Simulate Google user data
    const googleUser = {
      id: "google_123",
      name: "Demo Google User",
      email: "demo@google.com",
      picture: "/placeholder.svg?height=32&width=32",
    }

    // Check if user exists
    let user = await Database.findUserByEmail(googleUser.email)

    if (!user) {
      // Create new user
      user = await Database.createUser({
        name: googleUser.name,
        email: googleUser.email,
        googleId: googleUser.id,
        avatar: googleUser.picture,
        provider: "google",
        role: "farmer", // Default role
        isVerified: true, // Google users are automatically verified
      })
    } else if (!user.googleId) {
      // Link existing email user with Google
      user = await Database.updateUser(user.id, {
        googleId: googleUser.id,
        avatar: googleUser.picture,
        isVerified: true,
      })
    }

    // Generate tokens
    const accessToken = generateJWT({
      userId: user.id,
      email: user.email,
      role: user.role,
    })
    const refreshToken = generateJWT({ userId: user.id })

    // Create response with redirect
    const response = NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/auth/success?token=${accessToken}`,
    )

    // Set HTTP-only cookie for refresh token
    response.cookies.set("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    })

    return response
  } catch (error) {
    console.error("Google OAuth error:", error)
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/auth/login?error=google_auth_failed`,
    )
  }
}
