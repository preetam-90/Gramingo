"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tractor, MapPin, ArrowRight, Smartphone, Shield, Clock, TrendingUp, Zap } from "lucide-react"

export default function LandingPage() {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Tractor className="h-8 w-8 text-green-400" />
            <span className="text-2xl font-bold text-white">GramiGo</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-slate-300 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-slate-300 hover:text-white transition-colors">
              How it Works
            </Link>
            <Link href="#contact" className="text-slate-300 hover:text-white transition-colors">
              Contact
            </Link>
          </div>
          <div className="flex items-center space-x-3">
            <Link href="/demo">
              <Button variant="ghost" className="text-green-400 hover:text-green-300">
                <Zap className="h-4 w-4 mr-2" />
                Skip Login
              </Button>
            </Link>
            <Button variant="ghost" className="text-slate-300 hover:text-white">
              Login
            </Button>
            <Button className="bg-green-600 hover:bg-green-700">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Badge className="mb-6 bg-green-600/20 text-green-400 border-green-600/30">
              🚀 Revolutionizing Agriculture Equipment Access
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Book Agriculture
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Equipment
              </span>
              <br />
              Like Booking a Ride
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Connect with equipment owners and operators instantly. Get tractors, harvesters, and more delivered to
              your field with real-time tracking and transparent pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/farmer?skip=true">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-6 group">
                  I'm a Farmer
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/owner?skip=true">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 text-lg px-8 py-6"
                >
                  I Own Equipment
                </Button>
              </Link>
              <Link href="/demo">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-600 text-green-400 hover:bg-green-600/10 text-lg px-8 py-6"
                >
                  <Zap className="h-5 w-5 mr-2" />
                  Demo Access
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">{stat.number}</div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why Choose GramiGo?</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Modern technology meets traditional farming with our comprehensive platform
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 backdrop-blur-md border-slate-700/50 hover:bg-slate-800/70 transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="text-green-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-300 text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">How GramiGo Works</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">Simple steps to get the equipment you need</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Browse & Select</h3>
              <p className="text-slate-300">Browse available equipment in your area and select what you need</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Book & Track</h3>
              <p className="text-slate-300">Book instantly and track the equipment's real-time location</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Pay & Rate</h3>
              <p className="text-slate-300">Secure payment after service completion and rate your experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Card className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-md border-green-600/30 max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Farming?</h2>
              <p className="text-xl text-slate-300 mb-8">
                Join thousands of farmers and equipment owners already using GramiGo
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/farmer?skip=true">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-6">
                    Start as Farmer
                  </Button>
                </Link>
                <Link href="/owner?skip=true">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-green-600 text-green-400 hover:bg-green-600/10 text-lg px-8 py-6"
                  >
                    List Your Equipment
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-slate-700/50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Tractor className="h-6 w-6 text-green-400" />
              <span className="text-xl font-bold text-white">GramiGo</span>
            </div>
            <div className="text-slate-400 text-center md:text-right">
              <p>© 2024 GramiGo. Empowering farmers across India.</p>
              <p className="text-sm mt-1">Built with ❤️ for Indian Agriculture</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
