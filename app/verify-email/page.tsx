"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tractor, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import Link from "next/link"

export default function VerifyEmailPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading")
  const [message, setMessage] = useState("")

  useEffect(() => {
    const token = searchParams.get("token")

    if (!token) {
      setStatus("error")
      setMessage("Invalid verification link")
      return
    }

    verifyEmail(token)
  }, [searchParams])

  const verifyEmail = async (token: string) => {
    try {
      const response = await fetch("/api/auth/verify-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus("success")
        setMessage(data.message)
      } else {
        setStatus("error")
        setMessage(data.error || "Verification failed")
      }
    } catch (error) {
      setStatus("error")
      setMessage("Network error. Please try again.")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-slate-800/50 backdrop-blur-md border-slate-700/50">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Tractor className="h-10 w-10 text-green-400 mr-2" />
            <span className="text-2xl font-bold text-white">GramiGo</span>
          </div>
          <CardTitle className="text-white text-2xl">Email Verification</CardTitle>
          <CardDescription className="text-slate-300">Verifying your email address</CardDescription>
        </CardHeader>

        <CardContent className="space-y-6 text-center">
          {status === "loading" && (
            <div className="space-y-4">
              <Loader2 className="h-12 w-12 text-green-400 animate-spin mx-auto" />
              <p className="text-slate-300">Verifying your email...</p>
            </div>
          )}

          {status === "success" && (
            <div className="space-y-4">
              <CheckCircle className="h-12 w-12 text-green-400 mx-auto" />
              <Alert className="border-green-600 bg-green-900/20">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <AlertDescription className="text-green-400">{message}</AlertDescription>
              </Alert>
              <Link href="/auth/login">
                <Button className="w-full bg-green-600 hover:bg-green-700">Continue to Login</Button>
              </Link>
            </div>
          )}

          {status === "error" && (
            <div className="space-y-4">
              <AlertCircle className="h-12 w-12 text-red-400 mx-auto" />
              <Alert className="border-red-600 bg-red-900/20">
                <AlertCircle className="h-4 w-4 text-red-400" />
                <AlertDescription className="text-red-400">{message}</AlertDescription>
              </Alert>
              <div className="space-y-2">
                <Link href="/auth/register">
                  <Button variant="outline" className="w-full border-slate-600 text-slate-300">
                    Try Again
                  </Button>
                </Link>
                <Link href="/auth/login">
                  <Button variant="ghost" className="w-full text-slate-400">
                    Back to Login
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
