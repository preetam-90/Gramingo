"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Tractor,
  Plus,
  IndianRupee,
  TrendingUp,
  Calendar,
  Star,
  User,
  Settings,
  Bell,
  Eye,
  Edit,
  MoreVertical,
  Phone,
  MessageCircle,
  MapPin,
  Trash2,
  Share2,
} from "lucide-react"
import Link from "next/link"

export default function OwnerDashboard() {
  const [isLoading, setIsLoading] = useState(true)
  const [selectedEquipment, setSelectedEquipment] = useState<any>(null)
  const [editingEquipment, setEditingEquipment] = useState<any>(null)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000)
  }, [])

  const stats = [
    {
      title: "Total Earnings",
      value: "₹45,600",
      change: "+12%",
      icon: <IndianRupee className="h-6 w-6" />,
    },
    {
      title: "Active Bookings",
      value: "8",
      change: "+3",
      icon: <Calendar className="h-6 w-6" />,
    },
    {
      title: "Equipment Listed",
      value: "5",
      change: "+1",
      icon: <Tractor className="h-6 w-6" />,
    },
    {
      title: "Average Rating",
      value: "4.8",
      change: "+0.2",
      icon: <Star className="h-6 w-6" />,
    },
  ]

  const equipment = [
    {
      id: 1,
      name: "John Deere 5050D",
      type: "Tractor",
      status: "active",
      availability: true,
      bookings: 24,
      earnings: 18500,
      rating: 4.8,
      reviews: 45,
      image: "/vehicles/tractor-john-deere.png",
      nextBooking: "2024-01-20",
      location: "Punsia, Banka",
      dailyRate: 800,
      features: ["50 HP", "Power Steering", "Hydraulic Lift"],
      description: "Well-maintained John Deere tractor perfect for plowing and field operations.",
    },
    {
      id: 2,
      name: "Mahindra 575 DI",
      type: "Tractor",
      status: "busy",
      availability: false,
      bookings: 18,
      earnings: 14200,
      rating: 4.6,
      reviews: 32,
      image: "/vehicles/tractor-mahindra.png",
      nextBooking: "Currently in use",
      location: "Banka Sadar",
      dailyRate: 750,
      features: ["47 HP", "4WD", "Multi-Speed PTO"],
      description: "Reliable Mahindra tractor with excellent fuel efficiency.",
    },
    {
      id: 3,
      name: "Submersible Pump",
      type: "Water Pump",
      status: "active",
      availability: true,
      bookings: 32,
      earnings: 9600,
      rating: 4.9,
      reviews: 67,
      image: "/vehicles/water-pump.png",
      nextBooking: "2024-01-18",
      location: "Katoria",
      dailyRate: 300,
      features: ["5 HP", "Stainless Steel", "High Efficiency"],
      description: "High-quality submersible pump for irrigation needs.",
    },
  ]

  const recentBookings = [
    {
      id: 1,
      equipment: "John Deere 5050D",
      farmer: "Preetam Kumar Singh",
      farmerPhone: "+91 98765 43210",
      date: "2024-01-15",
      duration: "2 days",
      amount: 1600,
      status: "completed",
      location: "Punsia Village",
    },
    {
      id: 2,
      equipment: "Water Pump",
      farmer: "Rajesh Kumar",
      farmerPhone: "+91 98765 43211",
      date: "2024-01-14",
      duration: "1 day",
      amount: 300,
      status: "completed",
      location: "Banka Sadar",
    },
    {
      id: 3,
      equipment: "Mahindra 575 DI",
      farmer: "Suresh Singh",
      farmerPhone: "+91 98765 43212",
      date: "2024-01-16",
      duration: "3 days",
      amount: 2250,
      status: "ongoing",
      location: "Chandan",
    },
  ]

  const handleToggleAvailability = (equipmentId: number) => {
    // Toggle availability logic
    console.log("Toggling availability for equipment:", equipmentId)
  }

  const handleDeleteEquipment = (equipmentId: number) => {
    // Delete equipment logic
    console.log("Deleting equipment:", equipmentId)
  }

  const handleContactFarmer = (phone: string) => {
    window.open(`tel:${phone}`)
  }

  const handleShareEquipment = (equipment: any) => {
    if (navigator.share) {
      navigator.share({
        title: equipment.name,
        text: `Check out this ${equipment.type} available for rent`,
        url: window.location.origin + `/equipment/${equipment.id}`,
      })
    } else {
      navigator.clipboard.writeText(window.location.origin + `/equipment/${equipment.id}`)
    }
  }

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
      <header className="glass-navbar sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Tractor className="h-8 w-8 text-green-400" />
              <span className="text-2xl font-bold text-white">GramiGo</span>
              <Badge className="bg-blue-600 text-xs">Owner</Badge>
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
                <Settings className="h-4 w-4 mr-2" />
                Settings
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
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Welcome back, Rajesh!</h1>
          <p className="text-slate-300">Manage your equipment and track your earnings</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="glass-card rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-400 text-sm font-medium">{stat.title}</p>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-green-400 text-sm font-medium">{stat.change} from last month</p>
                  </div>
                  <div className="text-green-400">{stat.icon}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Equipment Management */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Your Equipment</h2>
              <Link href="/owner/add-equipment">
                <Button className="glass-button text-white rounded-xl">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Equipment
                </Button>
              </Link>
            </div>

            <div className="space-y-6">
              {equipment.map((item) => (
                <Card key={item.id} className="glass-card rounded-2xl">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-xl"
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                            <p className="text-slate-400">{item.type}</p>
                            <div className="flex items-center space-x-2 mt-1">
                              <MapPin className="h-3 w-3 text-slate-400" />
                              <span className="text-slate-400 text-sm">{item.location}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge className={item.status === "active" ? "bg-green-600" : "bg-orange-600"}>
                              {item.status}
                            </Badge>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                                  <MoreVertical className="h-4 w-4" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="glass-modal rounded-2xl">
                                <DialogHeader>
                                  <DialogTitle className="text-white">Equipment Actions</DialogTitle>
                                  <DialogDescription className="text-slate-300">
                                    Choose an action for {item.name}
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="space-y-3">
                                  <Button
                                    onClick={() => setSelectedEquipment(item)}
                                    className="w-full justify-start glass-button text-white"
                                  >
                                    <Eye className="h-4 w-4 mr-2" />
                                    View Details
                                  </Button>
                                  <Button
                                    onClick={() => setEditingEquipment(item)}
                                    className="w-full justify-start glass-button text-white"
                                  >
                                    <Edit className="h-4 w-4 mr-2" />
                                    Edit Equipment
                                  </Button>
                                  <Button
                                    onClick={() => handleShareEquipment(item)}
                                    className="w-full justify-start glass-button text-white"
                                  >
                                    <Share2 className="h-4 w-4 mr-2" />
                                    Share Equipment
                                  </Button>
                                  <Button
                                    onClick={() => handleDeleteEquipment(item.id)}
                                    className="w-full justify-start bg-red-600/20 border-red-600/30 text-red-400 hover:bg-red-600/30"
                                  >
                                    <Trash2 className="h-4 w-4 mr-2" />
                                    Delete Equipment
                                  </Button>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          <div>
                            <p className="text-slate-400 text-xs">Total Bookings</p>
                            <p className="text-white font-semibold">{item.bookings}</p>
                          </div>
                          <div>
                            <p className="text-slate-400 text-xs">Earnings</p>
                            <p className="text-green-400 font-semibold">₹{item.earnings.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-slate-400 text-xs">Rating</p>
                            <div className="flex items-center">
                              <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
                              <span className="text-white font-semibold">{item.rating}</span>
                              <span className="text-slate-400 text-xs ml-1">({item.reviews})</span>
                            </div>
                          </div>
                          <div>
                            <p className="text-slate-400 text-xs">Daily Rate</p>
                            <p className="text-white text-sm">₹{item.dailyRate}</p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <span className="text-slate-300 text-sm">Available</span>
                            <Switch
                              checked={item.availability}
                              onCheckedChange={() => handleToggleAvailability(item.id)}
                              className="data-[state=checked]:bg-green-600"
                            />
                          </div>
                          <div className="flex space-x-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="glass-input border-slate-600 text-slate-300 hover:text-white"
                                >
                                  <Eye className="h-4 w-4 mr-2" />
                                  View
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="glass-modal rounded-2xl max-w-2xl">
                                <DialogHeader>
                                  <DialogTitle className="text-white">{item.name}</DialogTitle>
                                  <DialogDescription className="text-slate-300">{item.description}</DialogDescription>
                                </DialogHeader>
                                <div className="space-y-4">
                                  <img
                                    src={item.image || "/placeholder.svg"}
                                    alt={item.name}
                                    className="w-full h-48 object-cover rounded-xl"
                                  />
                                  <div className="grid grid-cols-2 gap-4">
                                    <div>
                                      <p className="text-slate-400 text-sm">Type</p>
                                      <p className="text-white">{item.type}</p>
                                    </div>
                                    <div>
                                      <p className="text-slate-400 text-sm">Location</p>
                                      <p className="text-white">{item.location}</p>
                                    </div>
                                    <div>
                                      <p className="text-slate-400 text-sm">Daily Rate</p>
                                      <p className="text-green-400 font-semibold">₹{item.dailyRate}</p>
                                    </div>
                                    <div>
                                      <p className="text-slate-400 text-sm">Next Booking</p>
                                      <p className="text-white">{item.nextBooking}</p>
                                    </div>
                                  </div>
                                  <div>
                                    <p className="text-slate-400 text-sm mb-2">Features</p>
                                    <div className="flex flex-wrap gap-2">
                                      {item.features.map((feature, index) => (
                                        <Badge
                                          key={index}
                                          className="bg-green-600/20 text-green-400 border-green-600/30"
                                        >
                                          {feature}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </DialogContent>
                            </Dialog>
                            <Button
                              variant="outline"
                              size="sm"
                              className="glass-input border-slate-600 text-slate-300 hover:text-white"
                              onClick={() => setEditingEquipment(item)}
                            >
                              <Edit className="h-4 w-4 mr-2" />
                              Edit
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Recent Bookings */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-6">Recent Bookings</h2>
            <div className="space-y-4">
              {recentBookings.map((booking) => (
                <Card key={booking.id} className="glass-card rounded-2xl">
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="text-white font-medium text-sm">{booking.equipment}</h4>
                        <Badge
                          className={
                            booking.status === "completed"
                              ? "bg-green-600"
                              : booking.status === "ongoing"
                                ? "bg-blue-600"
                                : "bg-orange-600"
                          }
                        >
                          {booking.status}
                        </Badge>
                      </div>
                      <div className="text-slate-300 text-sm space-y-1">
                        <p>
                          <strong>Farmer:</strong> {booking.farmer}
                        </p>
                        <p>
                          <strong>Location:</strong> {booking.location}
                        </p>
                        <p>
                          <strong>Date:</strong> {booking.date}
                        </p>
                        <p>
                          <strong>Duration:</strong> {booking.duration}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-green-400 font-semibold">₹{booking.amount}</span>
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            onClick={() => handleContactFarmer(booking.farmerPhone)}
                            className="glass-button text-white"
                          >
                            <Phone className="h-3 w-3" />
                          </Button>
                          <Button size="sm" className="glass-button text-white">
                            <MessageCircle className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <Card className="glass-card rounded-2xl mt-6">
              <CardHeader>
                <CardTitle className="text-white text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/owner/add-equipment">
                  <Button className="w-full justify-start glass-button text-white">
                    <Plus className="h-4 w-4 mr-2" />
                    Add New Equipment
                  </Button>
                </Link>
                <Button className="w-full justify-start glass-button text-white">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  View Analytics
                </Button>
                <Button className="w-full justify-start glass-button text-white">
                  <Settings className="h-4 w-4 mr-2" />
                  Account Settings
                </Button>
                <Button className="w-full justify-start glass-button text-white">
                  <Bell className="h-4 w-4 mr-2" />
                  Notification Settings
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Edit Equipment Modal */}
      {editingEquipment && (
        <Dialog open={!!editingEquipment} onOpenChange={() => setEditingEquipment(null)}>
          <DialogContent className="glass-modal rounded-2xl max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-white">Edit Equipment</DialogTitle>
              <DialogDescription className="text-slate-300">Update your equipment information</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-white">Equipment Name</Label>
                  <Input defaultValue={editingEquipment.name} className="glass-input text-white mt-2" />
                </div>
                <div>
                  <Label className="text-white">Daily Rate (₹)</Label>
                  <Input
                    type="number"
                    defaultValue={editingEquipment.dailyRate}
                    className="glass-input text-white mt-2"
                  />
                </div>
              </div>
              <div>
                <Label className="text-white">Description</Label>
                <Textarea
                  defaultValue={editingEquipment.description}
                  className="glass-input text-white mt-2"
                  rows={3}
                />
              </div>
              <div className="flex justify-end space-x-3">
                <Button
                  variant="outline"
                  onClick={() => setEditingEquipment(null)}
                  className="glass-input border-slate-600 text-slate-300"
                >
                  Cancel
                </Button>
                <Button onClick={() => setEditingEquipment(null)} className="glass-button text-white">
                  Save Changes
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
