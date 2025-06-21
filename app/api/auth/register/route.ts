import { type NextRequest, NextResponse } from "next/server"
import { Database } from "@/lib/database"

// Simple hash function for demo (use bcrypt in production)
function simpleHash(password: string): string {
  return `hashed_${password}_${Date.now()}`
}

function generateToken(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

function generateJWT(payload: any): string {
  // Simple JWT simulation for demo (use proper JWT library in production)
  const header = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" }))
  const payloadStr = btoa(JSON.stringify({ ...payload, exp: Date.now() + 7 * 24 * 60 * 60 * 1000 }))
  const signature = btoa(`signature_${Date.now()}`)
  return `${header}.${payloadStr}.${signature}`
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, password, role = "farmer" } = await request.json()

    // Validation
    if (!name || !email || !password) {
      return NextResponse.json({ error: "Name, email, and password are required" }, { status: 400 })
    }

    if (password.length < 8) {
      return NextResponse.json({ error: "Password must be at least 8 characters long" }, { status: 400 })
    }

    // Check if user already exists
    const existingUser = await Database.findUserByEmail(email)
    if (existingUser) {
      return NextResponse.json({ error: "User with this email already exists" }, { status: 409 })
    }

    // Hash password
    const hashedPassword = simpleHash(password)

    // Create user
    const user = await Database.createUser({
      name,
      email,
      password: hashedPassword,
      role,
      provider: "email",
    })

    // Generate verification token
    const verificationToken = generateToken()
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours

    await Database.storeVerificationToken(verificationToken, user.id, expiresAt)

    // Simulate sending verification email
    console.log(`Verification email sent to ${email} with token: ${verificationToken}`)

    return NextResponse.json({
      message: "Registration successful! Please check your email to verify your account.",
      userId: user.id,
    })
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
