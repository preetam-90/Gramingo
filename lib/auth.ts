// Client-side auth utilities
export interface User {
  id: string
  name: string
  email: string
  isVerified: boolean
  provider: "email" | "google"
  googleId?: string
  avatar?: string
  role: "farmer" | "owner" | "admin"
  createdAt: Date
}

export interface AuthTokens {
  accessToken: string
  refreshToken: string
}

export class AuthClient {
  static getStoredUser(): User | null {
    if (typeof window === "undefined") return null

    try {
      const userStr = localStorage.getItem("user")
      return userStr ? JSON.parse(userStr) : null
    } catch {
      return null
    }
  }

  static getStoredToken(): string | null {
    if (typeof window === "undefined") return null
    return localStorage.getItem("accessToken")
  }

  static setAuth(user: User, token: string) {
    if (typeof window === "undefined") return

    localStorage.setItem("user", JSON.stringify(user))
    localStorage.setItem("accessToken", token)
  }

  static clearAuth() {
    if (typeof window === "undefined") return

    localStorage.removeItem("user")
    localStorage.removeItem("accessToken")
  }

  static isAuthenticated(): boolean {
    return !!this.getStoredToken() && !!this.getStoredUser()
  }
}

import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth-options"

export async function getServerAuthSession() {
  return await getServerSession(authOptions)
}

export async function currentUser() {
  const session = await getServerAuthSession()
  return session?.user ?? null
}
