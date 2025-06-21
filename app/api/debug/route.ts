import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    environment: process.env.NODE_ENV,
    databaseConnected: Boolean(process.env.DATABASE_URL),
    nextAuthUrl: process.env.NEXTAUTH_URL,
    nextAuthSecretSet: Boolean(process.env.NEXTAUTH_SECRET),
    googleOAuthConfigured: Boolean(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET),
    timestamp: new Date().toISOString(),
  })
}
