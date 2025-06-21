"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Users,
  Tractor,
  IndianRupee,
  TrendingUp,
  Calendar,
  Search,
  Filter,
  MoreVertical,
  Eye,
  Edit,
  Shield,
  AlertTriangle,
} from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000)
  }, [])

  const stats = [
    {
      title: "Total Users",
      value: "2,847",
      change: "+12%",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Active Equipment",
      value: "1,234",
      change: "+8%",
      icon: <Tractor className="h-6 w-6" />,
    },
    {
      title: "Total Revenue",
      value: "₹12.5L",
      change: "+15%",
      icon: <IndianRupee className="h-6 w-6" />,
    },
    {
      title: "Active Bookings",
      value: "156",
      change: "+5%",
      icon: <Calendar className="h-6 w-6" />,
    },
  ]

  const recentUsers = [
    {
      id: 1,
      name: "Preetam Kumar Singh",
      email: "preetam@example.com",
      type: "Farmer",
      location: "Punsia, Banka",
      joinDate: "2024-01-15",
      status: "active",
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      email: "rajesh@example.com",
      type: "Owner",
      location: "Banka Sadar",
      joinDate: "2024-01-14",
      status: "active",
    },
    {
      id: 3,
      name: "Suresh Singh",
      email: "suresh@example.com",
      type: "Farmer",
      location: "Chandan",
      joinDate: "2024-01-13",
      status: "pending",
    },
  ]

  const recentBookings = [
    {
      id: "BK001",
      farmer: "Preetam Kumar Singh",
      owner: "Rajesh Kumar",
      equipment: "John Deere 5050D",
      amount: 1600,
      date: "2024-01-15",
      status: "completed",
    },
    {
      id: "BK002",
      farmer: "Amit Yadav",
      owner: "Suresh Singh",
      equipment: "Water Pump",
      amount: 300,
      date: "2024-01-14",
      status: "ongoing",
    },
    {
      id: "BK003",
      farmer: "Prakash Jha",
      owner: "Rajesh Kumar",
      equipment: "Mahindra 575 DI",
      amount: 2250,
      date: "2024-01-13",
      status: "pending",
    },
  ]

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <Shield className="h-16 w-16 text-green-400 animate-pulse mx-auto mb-4" />
          <p className="text-white text-xl">Loading admin dashboard...</p>
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
              <Badge className="bg-red-600 text-xs">Admin</Badge>
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-slate-300">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Reports
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-300">
                Settings
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
          <p className="text-slate-300">Monitor and manage the GramiGo platform</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-slate-800/50 backdrop-blur-md border-slate-700/50">
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

        <div className="grid lg:grid-cols-2 gap-8">
          {/* User Management */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Recent Users</h2>
              <Button variant="outline" className="border-slate-600 text-slate-300">
                View All Users
              </Button>
            </div>

            <Card className="bg-slate-800/50 backdrop-blur-md border-slate-700/50">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                    <Input
                      placeholder="Search users..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 bg-slate-700/50 border-slate-600 text-white"
                    />
                  </div>
                  <Button variant="outline" size="sm" className="border-slate-600 text-slate-300">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentUsers.map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="text-white font-medium">{user.name}</h4>
                          <Badge className={user.type === "Farmer" ? "bg-blue-600" : "bg-purple-600"}>
                            {user.type}
                          </Badge>
                          <Badge className={user.status === "active" ? "bg-green-600" : "bg-orange-600"}>
                            {user.status}
                          </Badge>
                        </div>
                        <p className="text-slate-400 text-sm">{user.email}</p>
                        <p className="text-slate-400 text-sm">
                          {user.location} • Joined {user.joinDate}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm" className="text-slate-400">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-slate-400">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-slate-400">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Management */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Recent Bookings</h2>
              <Button variant="outline" className="border-slate-600 text-slate-300">
                View All Bookings
              </Button>
            </div>

            <Card className="bg-slate-800/50 backdrop-blur-md border-slate-700/50">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {recentBookings.map((booking) => (
                    <div key={booking.id} className="p-4 bg-slate-700/30 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <span className="text-white font-medium">#{booking.id}</span>
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
                        <span className="text-green-400 font-semibold">₹{booking.amount}</span>
                      </div>
                      <div className="space-y-1 text-sm text-slate-300">
                        <p>
                          <span className="text-slate-400">Equipment:</span> {booking.equipment}
                        </p>
                        <p>
                          <span className="text-slate-400">Farmer:</span> {booking.farmer}
                        </p>
                        <p>
                          <span className="text-slate-400">Owner:</span> {booking.owner}
                        </p>
                        <p>
                          <span className="text-slate-400">Date:</span> {booking.date}
                        </p>
                      </div>
                      <div className="flex items-center justify-end space-x-2 mt-3">
                        <Button variant="ghost" size="sm" className="text-slate-400">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button variant="ghost" size="sm" className="text-slate-400">
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-slate-800/50 backdrop-blur-md border-slate-700/50 mt-6">
              <CardHeader>
                <CardTitle className="text-white">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start border-slate-600 text-slate-300 hover:bg-slate-700"
                >
                  <Users className="h-4 w-4 mr-2" />
                  Manage Users
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-slate-600 text-slate-300 hover:bg-slate-700"
                >
                  <Tractor className="h-4 w-4 mr-2" />
                  Equipment Approval
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-slate-600 text-slate-300 hover:bg-slate-700"
                >
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Analytics Report
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-slate-600 text-slate-300 hover:bg-slate-700"
                >
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Dispute Resolution
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
