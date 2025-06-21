"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Tractor,
  Calendar,
  MapPin,
  IndianRupee,
  Phone,
  MessageCircle,
  Navigation,
  Home,
} from "lucide-react"
import Link from "next/link"

export default function BookingSuccessPage() {
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 3000)
  }, [])

  const bookingDetails = {
    id: "BK001",
    equipment: "John Deere 5050D",
    operator: "Ramesh Kumar",
    date: "2024-01-20",
    duration: "1 day",
    location: "Punsia Village, Banka",
    amount: 850,
    estimatedArrival: "45 minutes",
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-green-400 rounded-full animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Header */}
      <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="flex items-center space-x-2">
            <Tractor className="h-8 w-8 text-green-400" />
            <span className="text-2xl font-bold text-white">GramiGo</span>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <CheckCircle className="h-24 w-24 text-green-400 mx-auto mb-4 animate-pulse" />
            <h1 className="text-4xl font-bold text-white mb-4">Booking Confirmed!</h1>
            <p className="text-xl text-slate-300">
              Your equipment has been successfully booked. The operator will arrive soon.
            </p>
          </div>

          {/* Booking Details Card */}
          <Card className="bg-slate-800/50 backdrop-blur-md border-slate-700/50 mb-8">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Booking Details</CardTitle>
              <CardDescription className="text-slate-300">Booking ID: {bookingDetails.id}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Tractor className="h-5 w-5 text-green-400" />
                    <div className="text-left">
                      <p className="text-white font-medium">{bookingDetails.equipment}</p>
                      <p className="text-slate-400 text-sm">Tractor</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-green-400" />
                    <div className="text-left">
                      <p className="text-white font-medium">{bookingDetails.date}</p>
                      <p className="text-slate-400 text-sm">{bookingDetails.duration}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-green-400" />
                    <div className="text-left">
                      <p className="text-white font-medium">Field Location</p>
                      <p className="text-slate-400 text-sm">{bookingDetails.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <IndianRupee className="h-5 w-5 text-green-400" />
                    <div className="text-left">
                      <p className="text-white font-medium">₹{bookingDetails.amount}</p>
                      <p className="text-slate-400 text-sm">Total Amount</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Operator Info */}
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <h3 className="text-white font-semibold mb-3">Operator Assigned</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">{bookingDetails.operator}</p>
                    <p className="text-slate-400 text-sm">ETA: {bookingDetails.estimatedArrival}</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      <Phone className="h-4 w-4 mr-2" />
                      Call
                    </Button>
                    <Button size="sm" variant="outline" className="border-slate-600 text-slate-300">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Chat
                    </Button>
                  </div>
                </div>
              </div>

              {/* Status Badge */}
              <div className="flex justify-center">
                <Badge className="bg-green-600 text-lg px-4 py-2">Operator En Route</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/track">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-6">
                <Navigation className="h-5 w-5 mr-2" />
                Track Live Location
              </Button>
            </Link>
            <Link href="/farmer">
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 text-lg px-8 py-6"
              >
                <Home className="h-5 w-5 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
          </div>

          {/* Next Steps */}
          <Card className="bg-slate-800/50 backdrop-blur-md border-slate-700/50 mt-8">
            <CardHeader>
              <CardTitle className="text-white">What's Next?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">
                    1
                  </div>
                  <div>
                    <p className="text-white font-medium">Track the operator's location</p>
                    <p className="text-slate-400 text-sm">Monitor real-time location and estimated arrival time</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">
                    2
                  </div>
                  <div>
                    <p className="text-white font-medium">Prepare your field</p>
                    <p className="text-slate-400 text-sm">Ensure clear access to your field for the equipment</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">
                    3
                  </div>
                  <div>
                    <p className="text-white font-medium">Rate your experience</p>
                    <p className="text-slate-400 text-sm">Help other farmers by rating the service after completion</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
