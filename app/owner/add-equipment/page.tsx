"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import {
  Tractor,
  ArrowLeft,
  Upload,
  MapPin,
  IndianRupee,
  Calendar,
  Settings,
  CheckCircle,
  AlertCircle,
  Plus,
  X,
} from "lucide-react"
import Link from "next/link"

export default function AddEquipmentPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")
  const [features, setFeatures] = useState<string[]>([])
  const [newFeature, setNewFeature] = useState("")

  const [formData, setFormData] = useState({
    name: "",
    type: "",
    category: "",
    description: "",
    hourlyRate: "",
    dailyRate: "",
    location: "",
    specifications: "",
    availability: "available",
    minBookingHours: "1",
    maxBookingDays: "30",
    operatorIncluded: "yes",
    operatorName: "",
    operatorExperience: "",
  })

  const equipmentTypes = [
    { value: "tractor", label: "Tractor", icon: "🚜" },
    { value: "harvester", label: "Harvester", icon: "🌾" },
    { value: "pump", label: "Water Pump", icon: "💧" },
    { value: "tiller", label: "Tiller", icon: "🔧" },
    { value: "sprayer", label: "Sprayer", icon: "💨" },
    { value: "seeder", label: "Seeder", icon: "🌱" },
    { value: "cultivator", label: "Cultivator", icon: "⚡" },
    { value: "thresher", label: "Thresher", icon: "🌾" },
  ]

  const addFeature = () => {
    if (newFeature.trim() && !features.includes(newFeature.trim())) {
      setFeatures([...features, newFeature.trim()])
      setNewFeature("")
    }
  }

  const removeFeature = (feature: string) => {
    setFeatures(features.filter((f) => f !== feature))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")
    setSuccess("")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setSuccess("Equipment added successfully! It will be reviewed and listed within 24 hours.")

      // Redirect after success
      setTimeout(() => {
        router.push("/owner")
      }, 3000)
    } catch (error) {
      setError("Failed to add equipment. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="glass-navbar sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/owner" className="flex items-center space-x-2 text-slate-300 hover:text-white">
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
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Add New Equipment</h1>
            <p className="text-slate-300">List your agricultural equipment and start earning</p>
          </div>

          {/* Success/Error Messages */}
          {success && (
            <Alert className="mb-6 border-green-600 bg-green-900/20">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <AlertDescription className="text-green-400">{success}</AlertDescription>
            </Alert>
          )}

          {error && (
            <Alert className="mb-6 border-red-600 bg-red-900/20">
              <AlertCircle className="h-4 w-4 text-red-400" />
              <AlertDescription className="text-red-400">{error}</AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Form */}
              <div className="lg:col-span-2 space-y-6">
                {/* Basic Information */}
                <Card className="glass-card rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Settings className="h-5 w-5 mr-2 text-green-400" />
                      Basic Information
                    </CardTitle>
                    <CardDescription className="text-slate-300">
                      Provide basic details about your equipment
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-white">Equipment Name *</Label>
                        <Input
                          placeholder="e.g., John Deere 5050D"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="glass-input text-white placeholder-slate-400 mt-2"
                          required
                        />
                      </div>
                      <div>
                        <Label className="text-white">Equipment Type *</Label>
                        <Select
                          value={formData.type}
                          onValueChange={(value) => setFormData({ ...formData, type: value })}
                        >
                          <SelectTrigger className="glass-input text-white mt-2">
                            <SelectValue placeholder="Select equipment type" />
                          </SelectTrigger>
                          <SelectContent className="glass-modal border-slate-700">
                            {equipmentTypes.map((type) => (
                              <SelectItem key={type.value} value={type.value} className="text-white">
                                <span className="mr-2">{type.icon}</span>
                                {type.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label className="text-white">Description *</Label>
                      <Textarea
                        placeholder="Describe your equipment, its condition, and any special features..."
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        className="glass-input text-white placeholder-slate-400 mt-2"
                        rows={4}
                        required
                      />
                    </div>

                    <div>
                      <Label className="text-white">Location *</Label>
                      <div className="relative mt-2">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                        <Input
                          placeholder="Enter your location (Village, District, State)"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="glass-input text-white placeholder-slate-400 pl-10"
                          required
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Pricing */}
                <Card className="glass-card rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <IndianRupee className="h-5 w-5 mr-2 text-green-400" />
                      Pricing
                    </CardTitle>
                    <CardDescription className="text-slate-300">Set your rental rates</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-white">Hourly Rate (₹)</Label>
                        <Input
                          type="number"
                          placeholder="150"
                          value={formData.hourlyRate}
                          onChange={(e) => setFormData({ ...formData, hourlyRate: e.target.value })}
                          className="glass-input text-white placeholder-slate-400 mt-2"
                        />
                      </div>
                      <div>
                        <Label className="text-white">Daily Rate (₹) *</Label>
                        <Input
                          type="number"
                          placeholder="800"
                          value={formData.dailyRate}
                          onChange={(e) => setFormData({ ...formData, dailyRate: e.target.value })}
                          className="glass-input text-white placeholder-slate-400 mt-2"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-white">Minimum Booking (Hours)</Label>
                        <Input
                          type="number"
                          placeholder="1"
                          value={formData.minBookingHours}
                          onChange={(e) => setFormData({ ...formData, minBookingHours: e.target.value })}
                          className="glass-input text-white placeholder-slate-400 mt-2"
                        />
                      </div>
                      <div>
                        <Label className="text-white">Maximum Booking (Days)</Label>
                        <Input
                          type="number"
                          placeholder="30"
                          value={formData.maxBookingDays}
                          onChange={(e) => setFormData({ ...formData, maxBookingDays: e.target.value })}
                          className="glass-input text-white placeholder-slate-400 mt-2"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Features */}
                <Card className="glass-card rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-white">Features & Specifications</CardTitle>
                    <CardDescription className="text-slate-300">
                      Add key features that make your equipment stand out
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex space-x-2">
                      <Input
                        placeholder="e.g., 50 HP, Power Steering, 4WD"
                        value={newFeature}
                        onChange={(e) => setNewFeature(e.target.value)}
                        className="glass-input text-white placeholder-slate-400"
                        onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addFeature())}
                      />
                      <Button type="button" onClick={addFeature} className="glass-button text-white">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>

                    {features.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {features.map((feature, index) => (
                          <Badge key={index} className="bg-green-600/20 text-green-400 border-green-600/30 px-3 py-1">
                            {feature}
                            <button
                              type="button"
                              onClick={() => removeFeature(feature)}
                              className="ml-2 hover:text-red-400"
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </Badge>
                        ))}
                      </div>
                    )}

                    <div>
                      <Label className="text-white">Technical Specifications</Label>
                      <Textarea
                        placeholder="Engine power, fuel type, dimensions, weight, etc."
                        value={formData.specifications}
                        onChange={(e) => setFormData({ ...formData, specifications: e.target.value })}
                        className="glass-input text-white placeholder-slate-400 mt-2"
                        rows={3}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Operator Information */}
                <Card className="glass-card rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-white">Operator Information</CardTitle>
                    <CardDescription className="text-slate-300">
                      Provide details about the equipment operator
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label className="text-white">Operator Included *</Label>
                      <Select
                        value={formData.operatorIncluded}
                        onValueChange={(value) => setFormData({ ...formData, operatorIncluded: value })}
                      >
                        <SelectTrigger className="glass-input text-white mt-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="glass-modal border-slate-700">
                          <SelectItem value="yes" className="text-white">
                            Yes, operator included
                          </SelectItem>
                          <SelectItem value="no" className="text-white">
                            No, equipment only
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {formData.operatorIncluded === "yes" && (
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label className="text-white">Operator Name</Label>
                          <Input
                            placeholder="Enter operator name"
                            value={formData.operatorName}
                            onChange={(e) => setFormData({ ...formData, operatorName: e.target.value })}
                            className="glass-input text-white placeholder-slate-400 mt-2"
                          />
                        </div>
                        <div>
                          <Label className="text-white">Experience (Years)</Label>
                          <Input
                            type="number"
                            placeholder="5"
                            value={formData.operatorExperience}
                            onChange={(e) => setFormData({ ...formData, operatorExperience: e.target.value })}
                            className="glass-input text-white placeholder-slate-400 mt-2"
                          />
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Image Upload */}
                <Card className="glass-card rounded-2xl mb-6">
                  <CardHeader>
                    <CardTitle className="text-white">Equipment Photos</CardTitle>
                    <CardDescription className="text-slate-300">Upload clear photos of your equipment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="border-2 border-dashed border-slate-600 rounded-xl p-8 text-center hover:border-green-400 transition-colors">
                      <Upload className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                      <p className="text-slate-300 mb-2">Click to upload photos</p>
                      <p className="text-slate-500 text-sm">PNG, JPG up to 10MB each</p>
                      <Button type="button" className="glass-button text-white mt-4">
                        Choose Files
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Availability */}
                <Card className="glass-card rounded-2xl mb-6">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-green-400" />
                      Availability
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Select
                      value={formData.availability}
                      onValueChange={(value) => setFormData({ ...formData, availability: value })}
                    >
                      <SelectTrigger className="glass-input text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="glass-modal border-slate-700">
                        <SelectItem value="available" className="text-white">
                          ✅ Available Now
                        </SelectItem>
                        <SelectItem value="busy" className="text-white">
                          🔄 Currently Busy
                        </SelectItem>
                        <SelectItem value="maintenance" className="text-white">
                          🔧 Under Maintenance
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </CardContent>
                </Card>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full glass-button text-white text-lg py-6 rounded-xl"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Adding Equipment...
                    </>
                  ) : (
                    <>
                      <Plus className="h-5 w-5 mr-2" />
                      Add Equipment
                    </>
                  )}
                </Button>

                <p className="text-slate-400 text-sm text-center mt-4">
                  Your equipment will be reviewed and listed within 24 hours
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
