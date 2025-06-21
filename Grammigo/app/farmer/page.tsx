"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tractor, MapPin, Star, Filter, Search, IndianRupee, Phone, MessageCircle, Calendar, User } from "lucide-react"
import Link from "next/link"

export default function FarmerDashboard() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1000)
  }, [])

  const categories = [
    { id: "all", name: "All Equipment", icon: "🚜" },
    { id: "tractor", name: "Tractors", icon: "🚜" },
    { id: "harvester", name: "Harvesters", icon: "🌾" },
    { id: "pump", name: "Water Pumps", icon: "💧" },
    { id: "tiller", name: "Tillers", icon: "🔧" },
    { id: "sprayer", name: "Sprayers", icon: "💨" },
  ]

  const equipment = [
    {
      id: 1,
      name: "John Deere 5050D",
      type: "Tractor",
      owner: "Rajesh Kumar",
      rating: 4.8,
      reviews: 124,
      price: 800,
      location: "Punsia, Banka",
      distance: "2.5 km",
      available: true,
      image: "/vehicles/tractor-john-deere.png",
      features: ["50 HP", "Power Steering", "Hydraulic Lift"],
    },
    {
      id: 2,
      name: "Mahindra 575 DI",
      type: "Tractor",
      owner: "Suresh Singh",
      rating: 4.6,
      reviews: 89,
      price: 750,
      location: "Banka Sadar",
      distance: "5.2 km",
      available: true,
      image: "/vehicles/tractor-mahindra.png",
      features: ["47 HP", "4WD", "Multi-Speed PTO"],
    },
    {
      id: 3,
      name: "Combine Harvester",
      type: "Harvester",
      owner: "Amit Yadav",
      rating: 4.9,
      reviews: 67,
      price: 2500,
      location: "Chandan",
      distance: "8.1 km",
      available: false,
      image: "/vehicles/harvester-combine.png",
      features: ["Self-Propelled", "Grain Tank", "Cutting Width 12ft"],
    },
    {
      id: 4,
      name: "Submersible Pump",
      type: "Water Pump",
      owner: "Prakash Jha",
      rating: 4.7,
      reviews: 156,
      price: 300,
      location: "Katoria",
      distance: "3.8 km",
      available: true,
      image: "/vehicles/water-pump.png",
      features: ["5 HP", "Stainless Steel", "High Efficiency"],
    },
  ]

  const recentBookings = [
    {
      id: 1,
      equipment: "Mahindra 575 DI",
      date: "2024-01-15",
      status: "completed",
      amount: 1500,
    },
    {
      id: 2,
      equipment: "Water Pump",
      date: "2024-01-10",
      status: "completed",
      amount: 600,
    },
  ]

  const filteredEquipment = equipment.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.type.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || item.type.toLowerCase().includes(selectedCategory)
    return matchesSearch && matchesCategory
  })

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <Tractor className="h-16 w-16 text-green-400 animate-pulse mx-auto mb-4" />
          <p className="text-white text-xl">Loading your dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Tractor className="h-8 w-8 text-green-400" />
              <span className="text-2xl font-bold text-white">GramiGo</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-slate-300">
                <MessageCircle className="h-4 w-4 mr-2" />
                Messages
              </Button>
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback className="bg-green-600 text-white">
                  <User className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-slate-800/50 backdrop-blur-md border-slate-700/50 mb-6">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <User className="h-5 w-5 mr-2 text-green-400" />
                  Welcome Back!
                </CardTitle>
                <CardDescription className="text-slate-300">Preetam Kumar Singh</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Total Bookings</span>
                    <span className="text-white font-semibold">24</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">This Month</span>
                    <span className="text-green-400 font-semibold">8</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Saved Amount</span>
                    <span className="text-green-400 font-semibold">₹12,500</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Bookings */}
            <Card className="bg-slate-800/50 backdrop-blur-md border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-white text-lg">Recent Bookings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentBookings.map((booking) => (
                    <div key={booking.id} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                      <div>
                        <p className="text-white text-sm font-medium">{booking.equipment}</p>
                        <p className="text-slate-400 text-xs">{booking.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-green-400 text-sm font-semibold">₹{booking.amount}</p>
                        <Badge variant="secondary" className="text-xs">
                          {booking.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Filters */}
            <div className="mb-8">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                  <Input
                    placeholder="Search equipment..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-slate-800/50 border-slate-700 text-white placeholder-slate-400"
                  />
                </div>
                <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className={
                      selectedCategory === category.id
                        ? "bg-green-600 hover:bg-green-700"
                        : "border-slate-700 text-slate-300 hover:bg-slate-800"
                    }
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>

            {/* Equipment Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {filteredEquipment.map((item) => (
                <Card
                  key={item.id}
                  className="bg-slate-800/50 backdrop-blur-md border-slate-700/50 hover:bg-slate-800/70 transition-all duration-300 group"
                >
                  <div className="relative">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className={item.available ? "bg-green-600" : "bg-red-600"}>
                        {item.available ? "Available" : "Busy"}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-white text-lg">{item.name}</CardTitle>
                        <CardDescription className="text-slate-300">
                          {item.type} • {item.owner}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-yellow-400 mb-1">
                          <Star className="h-4 w-4 fill-current" />
                          <span className="ml-1 text-sm font-semibold">{item.rating}</span>
                        </div>
                        <p className="text-xs text-slate-400">({item.reviews} reviews)</p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center text-slate-300 text-sm">
                        <MapPin className="h-4 w-4 mr-2 text-green-400" />
                        {item.location} • {item.distance} away
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {item.features.map((feature, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-green-400">
                          <IndianRupee className="h-4 w-4" />
                          <span className="text-xl font-bold">{item.price}</span>
                          <span className="text-slate-400 text-sm ml-1">/day</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-slate-600 text-slate-300 hover:bg-slate-700"
                          >
                            <Phone className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-slate-600 text-slate-300 hover:bg-slate-700"
                          >
                            <MessageCircle className="h-4 w-4" />
                          </Button>
                          <Link href={`/farmer/book/${item.id}`}>
                            <Button size="sm" className="bg-green-600 hover:bg-green-700" disabled={!item.available}>
                              <Calendar className="h-4 w-4 mr-2" />
                              Book Now
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredEquipment.length === 0 && (
              <div className="text-center py-12">
                <Tractor className="h-16 w-16 text-slate-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No equipment found</h3>
                <p className="text-slate-400">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
