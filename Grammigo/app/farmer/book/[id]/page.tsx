"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  Tractor,
  MapPin,
  Star,
  CalendarIcon,
  Clock,
  User,
  Phone,
  MessageCircle,
  ArrowLeft,
  CreditCard,
  Shield,
} from "lucide-react"
import Link from "next/link"
import { format } from "date-fns"

export default function BookingPage() {
  const params = useParams()
  const router = useRouter()
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [duration, setDuration] = useState("1")
  const [fieldLocation, setFieldLocation] = useState("")
  const [specialRequirements, setSpecialRequirements] = useState("")
  const [isBooking, setIsBooking] = useState(false)

  // Mock equipment data (in real app, fetch by ID)
  const equipment = {
    id: 1,
    name: "John Deere 5050D",
    type: "Tractor",
    owner: "Rajesh Kumar",
    rating: 4.8,
    reviews: 124,
    price: 800,
    location: "Punsia, Banka",
    distance: "2.5 km",
    image: "/vehicles/tractor-john-deere.png",
    features: ["50 HP", "Power Steering", "Hydraulic Lift"],
    description:
      "Well-maintained John Deere tractor perfect for plowing, tilling, and other field operations. Comes with experienced operator.",
    operatorName: "Ramesh Kumar",
    operatorRating: 4.9,
    operatorExperience: "8 years",
  }

  const handleBooking = async () => {
    if (!selectedDate || !fieldLocation) {
      alert("Please fill all required fields")
      return
    }

    setIsBooking(true)

    // Simulate booking process
    setTimeout(() => {
      setIsBooking(false)
      router.push("/farmer/booking-success")
    }, 2000)
  }

  const totalCost = equipment.price * Number.parseInt(duration)
  const serviceFee = Math.round(totalCost * 0.05)
  const finalAmount = totalCost + serviceFee

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
          {/* Equipment Details */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-800/50 backdrop-blur-md border-slate-700/50 mb-8">
              <div className="relative">
                <img
                  src={equipment.image || "/placeholder.svg"}
                  alt={equipment.name}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <Badge className="absolute top-4 right-4 bg-green-600">Available</Badge>
              </div>

              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-white text-2xl">{equipment.name}</CardTitle>
                    <CardDescription className="text-slate-300 text-lg">
                      {equipment.type} • Owned by {equipment.owner}
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-yellow-400 mb-1">
                      <Star className="h-5 w-5 fill-current" />
                      <span className="ml-1 text-lg font-semibold">{equipment.rating}</span>
                    </div>
                    <p className="text-sm text-slate-400">({equipment.reviews} reviews)</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center text-slate-300">
                    <MapPin className="h-5 w-5 mr-2 text-green-400" />
                    {equipment.location} • {equipment.distance} away
                  </div>

                  <div>
                    <h3 className="text-white font-semibold mb-3">Features</h3>
                    <div className="flex flex-wrap gap-2">
                      {equipment.features.map((feature, index) => (
                        <Badge key={index} variant="secondary">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-white font-semibold mb-3">Description</h3>
                    <p className="text-slate-300">{equipment.description}</p>
                  </div>

                  <div className="bg-slate-700/30 p-4 rounded-lg">
                    <h3 className="text-white font-semibold mb-3">Operator Details</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                          <User className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="text-white font-medium">{equipment.operatorName}</p>
                          <p className="text-slate-400 text-sm">{equipment.operatorExperience} experience</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center text-yellow-400">
                          <Star className="h-4 w-4 fill-current" />
                          <span className="ml-1 font-semibold">{equipment.operatorRating}</span>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline" className="border-slate-600 text-slate-300">
                            <Phone className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="border-slate-600 text-slate-300">
                            <MessageCircle className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-1">
            <Card className="bg-slate-800/50 backdrop-blur-md border-slate-700/50 sticky top-24">
              <CardHeader>
                <CardTitle className="text-white">Book This Equipment</CardTitle>
                <CardDescription className="text-slate-300">
                  Fill in the details to confirm your booking
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Date Selection */}
                <div>
                  <Label className="text-white">Select Date *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal border-slate-700 text-slate-300 hover:bg-slate-800 mt-2"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-slate-800 border-slate-700">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) => date < new Date()}
                        initialFocus
                        className="text-white"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Duration */}
                <div>
                  <Label className="text-white">Duration (Days) *</Label>
                  <Input
                    type="number"
                    min="1"
                    max="30"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="bg-slate-700/50 border-slate-600 text-white mt-2"
                  />
                </div>

                {/* Field Location */}
                <div>
                  <Label className="text-white">Field Location *</Label>
                  <Input
                    placeholder="Enter your field address"
                    value={fieldLocation}
                    onChange={(e) => setFieldLocation(e.target.value)}
                    className="bg-slate-700/50 border-slate-600 text-white mt-2"
                  />
                </div>

                {/* Special Requirements */}
                <div>
                  <Label className="text-white">Special Requirements</Label>
                  <Textarea
                    placeholder="Any specific requirements or instructions..."
                    value={specialRequirements}
                    onChange={(e) => setSpecialRequirements(e.target.value)}
                    className="bg-slate-700/50 border-slate-600 text-white mt-2"
                    rows={3}
                  />
                </div>

                {/* Cost Breakdown */}
                <div className="bg-slate-700/30 p-4 rounded-lg space-y-3">
                  <h3 className="text-white font-semibold">Cost Breakdown</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-slate-300">
                      <span>Equipment cost ({duration} days)</span>
                      <span>₹{totalCost}</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Service fee</span>
                      <span>₹{serviceFee}</span>
                    </div>
                    <div className="border-t border-slate-600 pt-2 flex justify-between text-white font-semibold">
                      <span>Total Amount</span>
                      <span>₹{finalAmount}</span>
                    </div>
                  </div>
                </div>

                {/* Security Info */}
                <div className="flex items-center space-x-2 text-sm text-slate-400">
                  <Shield className="h-4 w-4 text-green-400" />
                  <span>Secure payment • Money-back guarantee</span>
                </div>

                {/* Book Button */}
                <Button
                  onClick={handleBooking}
                  disabled={isBooking || !selectedDate || !fieldLocation}
                  className="w-full bg-green-600 hover:bg-green-700 text-lg py-6"
                >
                  {isBooking ? (
                    <>
                      <Clock className="h-4 w-4 mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <CreditCard className="h-4 w-4 mr-2" />
                      Book & Pay ₹{finalAmount}
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
