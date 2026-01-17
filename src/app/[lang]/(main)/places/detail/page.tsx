"use client"

import { useState } from "react"
import {
  Home,
  ChevronRight,
  ChevronLeft,
  Star,
  MapPin,
  Clock,
  DollarSign,
  Navigation,
  Info,
  Plus,
  Minus,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function RestaurantDetailPage() {
  const [selectedDate, setSelectedDate] = useState<number>(1)
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("7:00 AM")
  const [mealType, setMealType] = useState<"BREAKFAST" | "LUNCH" | "DINNER">("LUNCH")
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [foodItems, setFoodItems] = useState([
    { id: 1, name: "Garden Vegetable Salad", description: "Crisp & refreshing from garden", price: 30, quantity: 1 },
    { id: 2, name: "Garden Vegetable Salad", description: "Crisp & refreshing from garden", price: 30, quantity: 1 },
    { id: 3, name: "Garden Vegetable Salad", description: "Crisp & refreshing from garden", price: 30, quantity: 1 },
    { id: 4, name: "Garden Vegetable Salad", description: "Crisp & refreshing from garden", price: 30, quantity: 1 },
  ])

  const images = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RjE5tTdc5UBFOoYUITd6pQlsZG7EI6.png",
    "/modern-restaurant-interior.png",
    "/modern-restaurant-interior.png",
  ]

  const timeSlots = {
    BREAKFAST: ["7:00 AM", "7:00 AM", "7:00 AM", "7:00 AM", "7:00 AM", "7:00 AM", "7:00 AM", "7:00 AM"],
    LUNCH: ["7:00 AM", "7:00 AM", "7:00 AM", "7:00 AM", "7:00 AM", "7:00 AM", "7:00 AM", "7:00 AM"],
    DINNER: ["7:00 AM", "7:00 AM", "7:00 AM", "7:00 AM"],
  }

  const menuImages = [
    "/food-menu-burger.jpg",
    "/food-menu-burger.jpg",
    "/food-menu-burger.jpg",
    "/food-menu-burger.jpg",
  ]

  const reviews = [
    {
      name: "Name Surname",
      avatar: "/diverse-person-avatars.png",
      rating: 4.5,
      reviewCount: 45,
      text: "If you wanna take a break from Varanasi you find a great location and hospitality in this rooftop in the heart of the town. Food is really tasty and staff really great!",
    },
    {
      name: "Name Surname",
      avatar: "/diverse-person-avatars.png",
      rating: 4.5,
      reviewCount: 45,
      text: "If you wanna take a break from Varanasi you find a great location and hospitality in this rooftop in the heart of the town. Food is really tasty and staff really great!",
    },
    {
      name: "Name Surname",
      avatar: "/diverse-person-avatars.png",
      rating: 4.5,
      reviewCount: 45,
      text: "If you wanna take a break from Varanasi you find a great location and hospitality in this rooftop in the heart of the town. Food is really tasty and staff really great!",
    },
    {
      name: "Name Surname",
      avatar: "/diverse-person-avatars.png",
      rating: 4.5,
      reviewCount: 45,
      text: "If you wanna take a break from Varanasi you find a great location and hospitality in this rooftop in the heart of the town. Food is really tasty and staff really great!",
    },
  ]

  const daysInMonth = 31
  const totalCost = foodItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const updateQuantity = (id: number, change: number) => {
    setFoodItems((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item)),
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Home className="h-4 w-4" />
            <ChevronRight className="h-4 w-4" />
            <span>The 10 Best Restaurants in Barcelona</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Image Gallery */}
            <div className="relative bg-white rounded-lg overflow-hidden">
              <div className="relative h-[400px]">
                <img
                  src={images[currentImageIndex] || "/placeholder.svg"}
                  alt="Restaurant"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setCurrentImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Restaurant Info */}
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <h1 className="text-3xl font-bold text-gray-900">Hotel Ultra Max</h1>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-orange-400 text-orange-400" />
                  <span className="font-semibold">4.5 Stars</span>
                  <span className="text-blue-600">| 450 Reviews</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-gray-400" />
                  <span>₹ 2,000 for 2 | North Italy</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  <span>Connaught Place, Central Delhi</span>
                </div>
                <div className="flex items-center gap-2">
                  <Navigation className="h-5 w-5 text-gray-400" />
                  <span>0.7 km from Banaras Ghats</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-gray-400" />
                  <span className="text-green-600">Open from</span>
                  <span>10:00 AM - 11:00 PM</span>
                  <Info className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Available Offers */}
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Available Offers</h2>
              <div className="space-y-3">
                {[1, 2, 3].map((offer) => (
                  <div
                    key={offer}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-gray-300"
                  >
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-gray-500" />
                      <div>
                        <p className="font-medium text-gray-900">Sun, 06:00 PM - 09:30 PM</p>
                        <p className="text-sm text-gray-500">Offer availed 100 times</p>
                      </div>
                    </div>
                    <Button className="bg-teal-700 hover:bg-teal-800 text-white">Avail Offer</Button>
                  </div>
                ))}
              </div>
              <button className="text-blue-600 text-sm mt-4 hover:underline">See all offers(+10 more)</button>
            </div>

            {/* Restaurant Menus */}
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Restaurant Menus</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {menuImages.map((menu, index) => (
                  <div key={index} className="relative rounded-lg overflow-hidden group cursor-pointer">
                    <img
                      src={menu || "/placeholder.svg"}
                      alt={`Food Menu ${index + 1}`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-3">
                      <span className="text-white text-sm font-medium">Food Menu (2 Pages)</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews and Ratings */}
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Reviews and Ratings</h2>

              <div className="flex flex-col md:flex-row gap-8 mb-8">
                {/* Overall Rating */}
                <div className="text-center md:text-left">
                  <p className="text-sm text-gray-600 mb-2">Overall Rating & Reviews</p>
                  <div className="text-5xl font-bold text-gray-900 mb-2">4.5</div>
                  <div className="flex items-center gap-1 mb-2">
                    {[1, 2, 3, 4].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-orange-400 text-orange-400" />
                    ))}
                    <Star className="h-5 w-5 text-gray-300" />
                  </div>
                  <p className="text-sm text-gray-600">
                    Based on 200 reviews <button className="text-green-600 hover:underline">Rate now</button>
                  </p>
                </div>

                {/* Rating Bars */}
                <div className="flex-1 space-y-2">
                  {[1, 2, 3, 4].map((bar) => (
                    <div key={bar} className="flex items-center gap-3">
                      <span className="text-sm text-gray-600 w-16">Dinning</span>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4].map((star) => (
                          <Star key={star} className="h-4 w-4 fill-orange-400 text-orange-400" />
                        ))}
                      </div>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "85%" }} />
                      </div>
                      <span className="text-sm text-gray-600 w-8">53</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Individual Reviews */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {reviews.map((review, index) => (
                  <Card key={index} className="p-4 border border-gray-200">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={review.avatar || "/placeholder.svg"} />
                          <AvatarFallback>NS</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-gray-900">{review.name}</p>
                          <p className="text-xs text-gray-500">Reviewed {review.reviewCount} restaurants</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="font-semibold text-sm">{review.rating}</span>
                        <Star className="h-4 w-4 fill-orange-400 text-orange-400" />
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">{review.text}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Date Picker */}
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Choose date</h3>
              <div className="mb-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-700">January 2022</span>
                  <div className="flex gap-2">
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2">
                  {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((day) => (
                    <div key={day} className="text-gray-600 font-medium py-1">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => (
                    <button
                      key={day}
                      onClick={() => setSelectedDate(day)}
                      className={`p-2 text-sm rounded-full hover:bg-gray-100 ${
                        selectedDate === day ? "bg-teal-700 text-white hover:bg-teal-800" : "text-gray-700"
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>
            </Card>

            {/* Time Slot Picker */}
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Choose time slot</h3>
              <div className="flex border-b border-gray-200 mb-4">
                {(["BREAKFAST", "LUNCH", "DINNER"] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setMealType(type)}
                    className={`flex-1 pb-3 text-sm font-medium ${
                      mealType === type
                        ? "text-green-600 border-b-2 border-green-600"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-2">
                {timeSlots[mealType].map((time, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedTimeSlot(time)}
                    className={`p-2 text-sm rounded border ${
                      selectedTimeSlot === time && index === 3
                        ? "border-red-500 text-red-600 bg-red-50"
                        : selectedTimeSlot === time && index === 7
                          ? "border-blue-500 text-blue-600 bg-blue-50"
                          : "border-gray-300 text-gray-700 hover:border-gray-400"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </Card>

            {/* Food Chosen */}
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Food Choosen</h3>
              <div className="space-y-4 mb-6">
                {foodItems.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <img src="/colorful-vegetable-salad.png" alt={item.name} className="w-16 h-16 rounded object-cover" />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 text-sm">{item.name}</h4>
                      <p className="text-xs text-gray-500 mb-1">{item.description}</p>
                      <p className="text-green-600 font-semibold">${item.price}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-1 border border-gray-300 rounded hover:bg-gray-100"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-1 border border-gray-300 rounded hover:bg-gray-100"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-semibold text-gray-900">Total Cost:</span>
                  <span className="text-2xl font-bold text-gray-900">${totalCost}</span>
                </div>
              </div>

              <h3 className="font-semibold text-gray-900 mb-4">Booking details</h3>
              <div className="space-y-4">
                <div>
                  <Label className="text-sm text-gray-700 mb-2 block">Choose number of guest:</Label>
                  <Select defaultValue="2">
                    <SelectTrigger>
                      <SelectValue placeholder="Select guests" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 person</SelectItem>
                      <SelectItem value="2">2 person</SelectItem>
                      <SelectItem value="3">3 person</SelectItem>
                      <SelectItem value="4">4 person</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-sm text-gray-700 mb-2 block">Enter guest name:</Label>
                  <Input placeholder="Name for person who is booking" />
                </div>

                <div>
                  <Label className="text-sm text-gray-700 mb-2 block">Enter phone detail:</Label>
                  <Input placeholder="Mobile number" type="tel" />
                </div>

                <button className="flex items-center gap-2 text-green-600 text-sm hover:underline">
                  <Plus className="h-4 w-4" />
                  Add any special request (Optional)
                </button>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-3 mt-4 flex items-center gap-2 text-green-700 text-sm">
                <Clock className="h-5 w-5" />
                <span>20% Discount offer availed currently</span>
              </div>

              <Button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white py-6 text-lg">
                Book a table
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
