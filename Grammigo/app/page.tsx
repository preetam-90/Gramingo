"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tractor, MapPin, ArrowRight, Smartphone, Shield, Clock, TrendingUp, Zap } from "lucide-react"
import { SignedIn, SignedOut, useUser } from "@clerk/nextjs"

export default function Home() {
  const { user } = useUser();
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = [
    {
      icon: <Tractor className="h-8 w-8" />,
      title: "Wide Equipment Range",
      description: "Access tractors, harvesters, pumps, tillers, sprayers and more",
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Real-time Tracking",
      description: "Track equipment location and operator in real-time",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile-First Design",
      description: "Optimized for mobile devices with responsive design",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure Payments",
      description: "Safe and secure payment processing with multiple options",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "24/7 Availability",
      description: "Book equipment anytime, anywhere with instant confirmation",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Maximize Earnings",
      description: "Equipment owners can optimize asset utilization",
    },
  ]

  const stats = [
    { number: "500+", label: "Equipment Available" },
    { number: "1000+", label: "Happy Farmers" },
    { number: "50+", label: "Districts Covered" },
    { number: "4.8", label: "Average Rating" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-green-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Revolutionizing Agricultural Equipment Sharing
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Connect farmers with equipment owners to increase efficiency and reduce costs through our innovative sharing platform.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <SignedIn>
                    <div className="flex gap-4">
                      <Button asChild>
                        <Link href="/farmer">Farmer Dashboard</Link>
                      </Button>
                      <Button asChild variant="outline">
                        <Link href="/owner">Owner Dashboard</Link>
                      </Button>
                    </div>
                  </SignedIn>
                  
                  <SignedOut>
                    <div className="flex gap-4">
                      <Button asChild>
                        <Link href="/sign-in">Sign In</Link>
                      </Button>
                      <Button asChild variant="outline">
                        <Link href="/sign-up">Sign Up</Link>
                      </Button>
                    </div>
                  </SignedOut>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Badge variant="secondary" className="rounded-sm px-1 font-normal">
                      New
                    </Badge>
                    <span className="text-gray-500">Mobile app coming soon</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  alt="Hero"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  height="550"
                  src="/placeholder.jpg"
                  width="550"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Simplifying Equipment Sharing</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform makes it easy to find, book, and share agricultural equipment with farmers in your area.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-start space-y-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                  <Tractor className="h-5 w-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Equipment Listings</h3>
                  <p className="text-gray-500">
                    Browse through a wide variety of agricultural equipment available for rent in your area.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Location Tracking</h3>
                  <p className="text-gray-500">
                    Find equipment near you with our advanced location tracking and filtering system.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                  <Smartphone className="h-5 w-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Easy Booking</h3>
                  <p className="text-gray-500">
                    Book equipment with just a few clicks and manage your rentals through our intuitive interface.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                  <Shield className="h-5 w-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Secure Payments</h3>
                  <p className="text-gray-500">
                    Our secure payment system ensures safe transactions between farmers and equipment owners.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Flexible Scheduling</h3>
                  <p className="text-gray-500">
                    Set your own availability and rental durations to fit your farming schedule.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Usage Analytics</h3>
                  <p className="text-gray-500">
                    Track equipment usage and earnings with detailed analytics and reports.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Get Started?</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join our growing community of farmers and equipment owners today.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <SignedOut>
                  <div className="flex gap-4">
                    <Button asChild>
                      <Link href="/sign-up">Sign Up Now</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="/demo">Try Demo</Link>
                    </Button>
                  </div>
                </SignedOut>
                <SignedIn>
                  <Button asChild>
                    <Link href={user?.publicMetadata?.role === "owner" ? "/owner" : "/farmer"}>
                      Go to Dashboard <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </SignedIn>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-4 text-center md:flex-row md:justify-between">
            <div className="text-sm text-gray-500">© 2024 Gramigo. All rights reserved.</div>
            <div className="flex gap-4">
              <Link className="text-sm text-gray-500 hover:underline" href="#">
                Terms
              </Link>
              <Link className="text-sm text-gray-500 hover:underline" href="#">
                Privacy
              </Link>
              <Link className="text-sm text-gray-500 hover:underline" href="#">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
