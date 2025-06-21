"use client"

import { useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Loader2, Tractor } from "lucide-react"

export default function AuthSuccessPage() {
  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    const token = searchParams.get("token")

    if (token) {
      // Store the token
      localStorage.setItem("accessToken", token)

      // Decode token to get user info (in production, fetch from API)
      try {
        const payload = JSON.parse(atob(token.split(".")[1]))

        // Redirect based on role
        if (payload.role === "admin") {
          router.push("/admin")
        } else if (payload.role === "owner") {
          router.push("/owner")
        } else {
          router.push("/farmer")
        }
      } catch (error) {
        router.push("/auth/login")
      }
    } else {
      router.push("/auth/login")
    }
  }, [searchParams, router])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <Tractor className="h-10 w-10 text-green-400 mr-2" />
          <span className="text-2xl font-bold text-white">GramiGo</span>
        </div>
        <Loader2 className="h-8 w-8 text-green-400 animate-spin mx-auto mb-4" />
        <p className="text-white text-lg">Completing authentication...</p>
      </div>
    </div>
  )
}
