"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tractor, User, Shield, Settings } from "lucide-react"
import Link from "next/link"

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-slate-800/50 backdrop-blur-md border-slate-700/50">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Tractor className="h-12 w-12 text-green-400 mr-3" />
            <span className="text-3xl font-bold text-white">GramiGo Demo</span>
          </div>
          <CardTitle className="text-white text-2xl">Skip Login - Direct Access</CardTitle>
          <CardDescription className="text-slate-300">
            Choose your role to access the dashboard directly without authentication
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            {/* Farmer Dashboard */}
            <Link href="/farmer?skip=true&role=farmer">
              <Card className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <Tractor className="h-12 w-12 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-white font-semibold text-lg mb-2">Farmer</h3>
                  <p className="text-slate-300 text-sm">Browse & book equipment</p>
                  <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">Access Farmer Dashboard</Button>
                </CardContent>
              </Card>
            </Link>

            {/* Owner Dashboard */}
            <Link href="/owner?skip=true&role=owner">
              <Card className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <User className="h-12 w-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-white font-semibold text-lg mb-2">Owner</h3>
                  <p className="text-slate-300 text-sm">Manage your equipment</p>
                  <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">Access Owner Dashboard</Button>
                </CardContent>
              </Card>
            </Link>

            {/* Admin Dashboard */}
            <Link href="/admin?skip=true&role=admin">
              <Card className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <Shield className="h-12 w-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-white font-semibold text-lg mb-2">Admin</h3>
                  <p className="text-slate-300 text-sm">Platform management</p>
                  <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700">Access Admin Dashboard</Button>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="border-t border-slate-600 pt-6">
            <h3 className="text-white font-semibold mb-4 text-center">Direct URLs (Copy & Use)</h3>
            <div className="space-y-3">
              <div className="bg-slate-700/30 p-3 rounded-lg">
                <p className="text-slate-300 text-sm font-medium mb-1">🚜 Farmer Dashboard:</p>
                <code className="text-green-400 text-xs break-all">
                  {typeof window !== "undefined" ? window.location.origin : ""}/farmer?skip=true
                </code>
              </div>
              <div className="bg-slate-700/30 p-3 rounded-lg">
                <p className="text-slate-300 text-sm font-medium mb-1">🏭 Owner Dashboard:</p>
                <code className="text-blue-400 text-xs break-all">
                  {typeof window !== "undefined" ? window.location.origin : ""}/owner?skip=true
                </code>
              </div>
              <div className="bg-slate-700/30 p-3 rounded-lg">
                <p className="text-slate-300 text-sm font-medium mb-1">👑 Admin Dashboard:</p>
                <code className="text-purple-400 text-xs break-all">
                  {typeof window !== "undefined" ? window.location.origin : ""}/admin?skip=true
                </code>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/">
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                <Settings className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
