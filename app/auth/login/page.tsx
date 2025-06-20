"use client"

import type React from "react"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tractor, Eye, EyeOff, Mail, Lock, AlertCircle } from "lucide-react"
import { signIn } from "next-auth/react"

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  // Check for demo mode
  const isDemo = searchParams.get("demo") === "google"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const result = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
        callbackUrl: "/",
      })

      if (result?.error) {
        setError(result.error ?? "Invalid credentials")
      } else {
        router.push("/")
      }
    } catch (err) {
      console.error(err)
      setError("Something went wrong")
    } finally {
      setIsLoading(false)
    }
  }

  const handleQuickLogin = (role: string) => {
    setFormData({
      email: "preetamkumar8873@gmail.com",
      password: "@Galaxytaba9",
      role: role,
    })
  }

  const handleGoogleLogin = () => {
    signIn("google", { callbackUrl: "/" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-slate-800/50 backdrop-blur-md border-slate-700/50">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Tractor className="h-10 w-10 text-green-400 mr-2" />
            <span className="text-2xl font-bold text-white">GramiGo</span>
          </div>
          <CardTitle className="text-white text-2xl">Welcome Back</CardTitle>
          <CardDescription className="text-slate-300">Sign in to your account to continue</CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {error && (
            <Alert className="border-red-600 bg-red-900/20">
              <AlertCircle className="h-4 w-4 text-red-400" />
              <AlertDescription className="text-red-400">{error}</AlertDescription>
            </Alert>
          )}

          {/* Quick Login Buttons */}
          <div className="space-y-3">
            <p className="text-slate-300 text-sm text-center">Quick Login (Your Credentials):</p>
            <div className="grid grid-cols-3 gap-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => handleQuickLogin("farmer")}
                className="border-green-600 text-green-400 hover:bg-green-600/10"
              >
                Farmer
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => handleQuickLogin("owner")}
                className="border-blue-600 text-blue-400 hover:bg-blue-600/10"
              >
                Owner
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => handleQuickLogin("admin")}
                className="border-purple-600 text-purple-400 hover:bg-purple-600/10"
              >
                Admin
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-slate-600" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-slate-800 px-2 text-slate-400">Or login manually</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="pl-10 bg-slate-700/50 border-slate-600 text-white placeholder-slate-400"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-white">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="pl-10 pr-10 bg-slate-700/50 border-slate-600 text-white placeholder-slate-400"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="role" className="text-white">
                Login as
              </Label>
              <Select value={formData.role} onValueChange={(value) => setFormData({ ...formData, role: value })}>
                <SelectTrigger className="bg-slate-700/50 border-slate-600 text-white">
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700">
                  <SelectItem value="farmer" className="text-white">
                    🚜 Farmer
                  </SelectItem>
                  <SelectItem value="owner" className="text-white">
                    🏭 Equipment Owner
                  </SelectItem>
                  <SelectItem value="admin" className="text-white">
                    👑 Admin
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between">
              <Link href="/auth/forgot-password" className="text-sm text-green-400 hover:text-green-300">
                Forgot password?
              </Link>
            </div>

            <Button type="submit" disabled={isLoading} className="w-full bg-green-600 hover:bg-green-700 text-white">
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-slate-600" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-slate-800 px-2 text-slate-400">Or continue with</span>
            </div>
          </div>

          <Button
            type="button"
            variant="outline"
            onClick={handleGoogleLogin}
            className="w-full border-slate-600 text-slate-300 hover:bg-slate-700"
          >
            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google (Demo)
          </Button>

          <div className="text-center">
            <span className="text-slate-400">Don't have an account? </span>
            <Link href="/auth/register" className="text-green-400 hover:text-green-300 font-medium">
              Sign up
            </Link>
          </div>

          {/* Demo Info */}
          <Alert className="border-blue-600 bg-blue-900/20">
            <AlertCircle className="h-4 w-4 text-blue-400" />
            <AlertDescription className="text-blue-400 text-xs">
              <strong>Your Credentials:</strong> preetamkumar8873@gmail.com / @Galaxytaba9
              <br />
              <strong>Demo:</strong> preetam@example.com / demo123
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  )
}
