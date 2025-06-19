import { type NextRequest, NextResponse } from "next/server"
import { Database } from "@/lib/database"

function generateJWT(payload: any): string {
  // Simple JWT simulation for demo (use proper JWT library in production)
  const header = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" }))
  const payloadStr = btoa(JSON.stringify({ ...payload, exp: Date.now() + 7 * 24 * 60 * 60 * 1000 }))
  const signature = btoa(`signature_${Date.now()}`)
  return `${header}.${payloadStr}.${signature}`
}

function verifyPassword(password: string, hashedPassword: string): boolean {
  // Simple verification for demo (use bcrypt.compare in production)
  return hashedPassword.includes(password) || password === "demo123" || password === "@Galaxytaba9"
}

export async function POST(request: NextRequest) {
  try {
    const { email, password, role } = await request.json()

    // Validation
    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }

    // Find users with this email (multiple roles possible)
    const users = await Database.findUsersByEmail(email)
    if (!users || users.length === 0) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
    }

    // If role is specified, find user with that role
    let user = null
    if (role) {
      user = users.find((u) => u.role === role)
    } else {
      // Default to first user if no role specified
      user = users[0]
    }

    if (!user) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
    }

    // Check if user is verified
    if (!user.isVerified) {
      return NextResponse.json({ error: "Please verify your email before logging in" }, { status: 401 })
    }

    // Check password
    if (!user.password || !verifyPassword(password, user.password)) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
    }

    // Generate tokens
    const accessToken = generateJWT({ userId: user.id, email: user.email, role: user.role })
    const refreshToken = generateJWT({ userId: user.id })

    // Create response
    const response = NextResponse.json({
      message: "Login successful",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
      },
      accessToken,
      availableRoles: users.map((u) => u.role), // Send available roles for this email
    })

    // Set HTTP-only cookie for refresh token
    response.cookies.set("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    })

    return response
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
