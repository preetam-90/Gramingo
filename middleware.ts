import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Define protected routes
const protectedRoutes = ["/farmer", "/owner", "/admin", "/track"]
const authRoutes = ["/auth/login", "/auth/register"]

function verifySimpleJWT(token: string): any {
  try {
    const parts = token.split(".")
    if (parts.length !== 3) return null

    const payload = JSON.parse(atob(parts[1]))

    // Check if token is expired
    if (payload.exp && payload.exp < Date.now()) {
      return null
    }

    return payload
  } catch {
    return null
  }
}

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl

  // Check for demo mode or skip auth
  const skipAuth = searchParams.get("skip") === "true" || searchParams.get("demo") === "true"
  const demoRole = searchParams.get("role") || "farmer"

  // Get token from localStorage via cookie or header
  const token =
    request.cookies.get("accessToken")?.value ||
    request.headers.get("authorization")?.replace("Bearer ", "") ||
    request.cookies.get("refreshToken")?.value

  // Check if route is protected
  const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route))
  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route))

  if (isProtectedRoute) {
    // Skip authentication if demo mode is enabled
    if (skipAuth) {
      console.log("Demo mode enabled, skipping authentication")
      const response = NextResponse.next()
      response.headers.set("x-user-id", "demo-user")
      response.headers.set("x-user-role", demoRole)
      response.headers.set("x-demo-mode", "true")
      return response
    }

    if (!token) {
      // Redirect to login if no token
      console.log("No token found, redirecting to login")
      return NextResponse.redirect(new URL("/auth/login", request.url))
    }

    const decoded = verifySimpleJWT(token)
    if (!decoded) {
      // Invalid token, redirect to login
      console.log("Invalid token, redirecting to login")
      return NextResponse.redirect(new URL("/auth/login", request.url))
    }

    // Check if user is accessing correct role dashboard
    const userRole = decoded.role
    if (pathname.startsWith("/farmer") && userRole !== "farmer") {
      return NextResponse.redirect(new URL(`/${userRole}`, request.url))
    }
    if (pathname.startsWith("/owner") && userRole !== "owner") {
      return NextResponse.redirect(new URL(`/${userRole}`, request.url))
    }
    if (pathname.startsWith("/admin") && userRole !== "admin") {
      return NextResponse.redirect(new URL(`/${userRole}`, request.url))
    }

    // Add user info to headers for API routes
    const response = NextResponse.next()
    response.headers.set("x-user-id", decoded.userId)
    response.headers.set("x-user-role", decoded.role)

    return response
  }

  if (isAuthRoute && token) {
    const decoded = verifySimpleJWT(token)
    if (decoded) {
      // If user is already authenticated, redirect to appropriate dashboard
      const redirectPath = decoded.role === "admin" ? "/admin" : decoded.role === "owner" ? "/owner" : "/farmer"

      return NextResponse.redirect(new URL(redirectPath, request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|vehicles).*)"],
}
