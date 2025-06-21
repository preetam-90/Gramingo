"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tractor, MapPin, Phone, MessageCircle, Navigation, User, Star, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function TrackingPage() {
  const [currentLocation, setCurrentLocation] = useState({ lat: 25.0961, lng: 85.3131 })
  const [estimatedArrival, setEstimatedArrival] = useState("15 mins")

  // Simulate real-time location updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLocation((prev) => ({
        lat: prev.lat + (Math.random() - 0.5) * 0.001,
        lng: prev.lng + (Math.random() - 0.5) * 0.001,
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const booking = {
    id: "BK001",
    equipment: "John Deere 5050D",
    operator: "Ramesh Kumar",
    operatorRating: 4.9,
    startTime: "09:00 AM",
    estimatedDuration: "6 hours",
    fieldLocation: "Punsia Village, Banka",
    status: "en_route",
  }

  const statusSteps = [
    { id: 1, title: "Booking Confirmed", completed: true, time: "08:30 AM" },
    { id: 2, title: "Operator Assigned", completed: true, time: "08:35 AM" },
    { id: 3, title: "En Route to Field", completed: false, time: estimatedArrival },
    { id: 4, title: "Work Started", completed: false, time: "Pending" },
    { id: 5, title: "Work Completed", completed: false, time: "Pending" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/farmer" className="flex items-center space-x-2 text-slate-300 hover:text-white">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Dashboard</span>
            </Link>
            <Link href="/" className="flex items-center space-x-2">
              <Tractor className="h-8 w-8 text-green-400" />
              <span className="text-2xl font-bold text-white">GramiGo</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Section */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-800/50 backdrop-blur-md border-slate-700/50 mb-6">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-white">Live Tracking</CardTitle>
                    <CardDescription className="text-slate-300">Booking ID: {booking.id}</CardDescription>
                  </div>
                  <Badge className="bg-blue-600">En Route</Badge>
                </div>
              </CardHeader>
              <CardContent>
                {/* Mock Map */}
                <div className="relative bg-slate-700 rounded-lg h-96 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-blue-900/20">
                    {/* Mock map with animated marker */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="relative">
                        <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                        <div className="absolute -top-8 -left-8 w-8 h-8 bg-green-400/30 rounded-full animate-ping"></div>
                      </div>
                    </div>

                    {/* Route line */}
                    <svg className="absolute inset-0 w-full h-full">
                      <path
                        d="M 100 300 Q 200 200 300 150"
                        stroke="#10b981"
                        strokeWidth="3"
                        strokeDasharray="10,5"
                        fill="none"
                        className="animate-pulse"
                      />
                    </svg>

                    {/* Destination marker */}
                    <div className="absolute top-20 right-20">
                      <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                        <MapPin className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Map overlay info */}
                  <div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-md rounded-lg p-3">
                    <div className="flex items-center space-x-2 text-white text-sm">
                      <Navigation className="h-4 w-4 text-green-400" />
                      <span>ETA: {estimatedArrival}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Status Timeline */}
            <Card className="bg-slate-800/50 backdrop-blur-md border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-white">Booking Status</CardTitle>
                <CardDescription className="text-slate-300">Track your booking progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {statusSteps.map((step, index) => (
                    <div key={step.id} className="flex items-center space-x-4">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          step.completed
                            ? "bg-green-600 text-white"
                            : index === 2
                              ? "bg-blue-600 text-white animate-pulse"
                              : "bg-slate-600 text-slate-400"
                        }`}
                      >
                        {step.completed ? "✓" : step.id}
                      </div>
                      <div className="flex-1">
                        <p
                          className={`font-medium ${
                            step.completed ? "text-white" : index === 2 ? "text-blue-400" : "text-slate-400"
                          }`}
                        >
                          {step.title}
                        </p>
                        <p className="text-slate-400 text-sm">{step.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Details Sidebar */}
          <div className="lg:col-span-1">
            {/* Equipment Details */}
            <Card className="bg-slate-800/50 backdrop-blur-md border-slate-700/50 mb-6">
              <CardHeader>
                <CardTitle className="text-white">Equipment Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Tractor className="h-8 w-8 text-green-400" />
                    <div>
                      <p className="text-white font-medium">{booking.equipment}</p>
                      <p className="text-slate-400 text-sm">Tractor</p>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Start Time</span>
                      <span className="text-white">{booking.startTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Duration</span>
                      <span className="text-white">{booking.estimatedDuration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Location</span>
                      <span className="text-white text-right">{booking.fieldLocation}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Operator Details */}
            <Card className="bg-slate-800/50 backdrop-blur-md border-slate-700/50 mb-6">
              <CardHeader>
                <CardTitle className="text-white">Operator Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarFallback className="bg-green-600 text-white">
                        <User className="h-5 w-5" />
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-white font-medium">{booking.operator}</p>
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        <span className="text-slate-300 text-sm">{booking.operatorRating}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700">
                      <Phone className="h-4 w-4 mr-2" />
                      Call
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 border-slate-600 text-slate-300">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Chat
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Live Updates */}
            <Card className="bg-slate-800/50 backdrop-blur-md border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-white">Live Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <div>
                      <p className="text-white text-sm">Operator started journey</p>
                      <p className="text-slate-400 text-xs">2 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    <div>
                      <p className="text-white text-sm">Equipment loaded and ready</p>
                      <p className="text-slate-400 text-xs">5 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <div>
                      <p className="text-white text-sm">Booking confirmed</p>
                      <p className="text-slate-400 text-xs">30 minutes ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="bg-red-900/20 backdrop-blur-md border-red-700/50">
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-red-400 font-medium mb-2">Need Help?</p>
                  <Button variant="outline" className="border-red-600 text-red-400 hover:bg-red-600/10">
                    Emergency Support
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
