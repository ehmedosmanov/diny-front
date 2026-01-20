'use client';

import SearchBarHeader from '@/components/Header/SearchBarHeader';
import FilterBar from '@/components/Places/FilterBar';
import RestaurantCard from '@/components/Places/RestaurantCard';
import MapboxMap from '@/components/Places/MapboxMap';
import { Home, ChevronRight, Map as MapIcon } from 'lucide-react';
import PlaceBanner from '@/assets/images/places-banner.jpg';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function PlacesPage() {
  const [showMobileMap, setShowMobileMap] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState<string | null>(
    null,
  );

  const restaurants = [
    {
      id: '1',
      name: 'LIVUP',
      rating: 5.0,
      cuisine: 'International',
      priceLevel: '$',
      location: 'Kuwait city',
      lat: 41.3879,
      lng: 2.1699,
      image: '/modern-restaurant-interior.png',
      timeSlots: [
        { time: '5:15 PM', room: 'Dining Room' },
        { time: '5:30 PM', room: 'Dining Room' },
        { time: '5:45 PM', room: 'Dining Room' },
        { time: '6:00 PM', room: 'Dining Room' },
      ],
    },
    {
      id: '2',
      name: 'El Gourmet',
      rating: 4.8,
      cuisine: 'Mediterranean',
      priceLevel: '$$',
      location: 'Barcelona',
      lat: 41.3851,
      lng: 2.1734,
      image: '/modern-restaurant-interior.png',
      timeSlots: [
        { time: '5:15 PM', room: 'Terrace' },
        { time: '5:30 PM', room: 'Terrace' },
        { time: '5:45 PM', room: 'Main Hall' },
        { time: '6:00 PM', room: 'Main Hall' },
      ],
    },
    {
      id: '3',
      name: 'La Tasca',
      rating: 4.6,
      cuisine: 'Spanish',
      priceLevel: '$',
      location: 'Gothic Quarter',
      lat: 41.3812,
      lng: 2.1649,
      image: '/modern-restaurant-interior.png',
      timeSlots: [
        { time: '5:15 PM', room: 'Bar Area' },
        { time: '5:30 PM', room: 'Bar Area' },
        { time: '5:45 PM', room: 'Dining Room' },
        { time: '6:00 PM', room: 'Dining Room' },
      ],
    },
    {
      id: '4',
      name: 'Sushi Bar',
      rating: 4.9,
      cuisine: 'Japanese',
      priceLevel: '$$$',
      location: 'Eixample',
      lat: 41.3925,
      lng: 2.1569,
      image: '/modern-restaurant-interior.png',
      timeSlots: [
        { time: '5:15 PM', room: 'Counter' },
        { time: '5:30 PM', room: 'Counter' },
        { time: '5:45 PM', room: 'Private Room' },
        { time: '6:00 PM', room: 'Main Area' },
      ],
    },
    {
      id: '5',
      name: 'Bistro Modern',
      rating: 4.7,
      cuisine: 'French',
      priceLevel: '$$',
      location: 'Born',
      lat: 41.3845,
      lng: 2.1809,
      image: '/modern-restaurant-interior.png',
      timeSlots: [
        { time: '5:15 PM', room: 'Garden' },
        { time: '5:30 PM', room: 'Garden' },
        { time: '5:45 PM', room: 'Indoor' },
        { time: '6:00 PM', room: 'Indoor' },
      ],
    },
  ];

  const mapLocations = restaurants.map((restaurant) => ({
    id: restaurant.id,
    name: restaurant.name,
    lat: restaurant.lat,
    lng: restaurant.lng,
    rating: restaurant.rating,
  }));

  const handleMarkerClick = (location: { id: string }) => {
    setSelectedRestaurant(location.id);

    // On mobile, close the map and scroll to restaurant
    if (showMobileMap) {
      setShowMobileMap(false);
    }

    // Scroll to the restaurant card
    setTimeout(() => {
      const element = document.getElementById(`restaurant-${location.id}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-gradient-to-r from-[#CD7F4E] via-[#CD7F4E] to-[#CD7F4E] pt-8 pb-12 px-4">
        <div className="absolute inset-0 overflow-hidden opacity-40">
          <Image
            src={PlaceBanner}
            alt="Food banner"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative max-w-4xl mx-auto">
          <SearchBarHeader />
        </div>
      </div>

      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <FilterBar />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Side - Restaurant List */}
          <div className="space-y-6">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Home className="h-4 w-4" />
              <ChevronRight className="h-4 w-4" />
              <span className="hidden sm:inline">
                The 10 Best Restaurants in Barcelona
              </span>
              <span className="sm:hidden">Top Restaurants</span>
            </div>

            {/* Title and Count */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                The 10 Best Restaurants in Barcelona
              </h1>
              <span className="text-sm text-gray-500">1,163 restaurants</span>
            </div>

            {/* Mobile Map Toggle Button */}
            <Button
              onClick={() => setShowMobileMap(!showMobileMap)}
              className="lg:hidden w-full bg-[#CD7F4E] hover:bg-[#B86F3E] text-white">
              <MapIcon className="h-4 w-4 mr-2" />
              {showMobileMap ? 'Show List' : 'Show Map'}
            </Button>

            {/* Restaurant Cards - Hidden on mobile when map is shown */}
            <div
              className={`space-y-4 ${showMobileMap ? 'hidden lg:block' : 'block'}`}>
              {restaurants.map((restaurant, index) => (
                <div
                  key={index}
                  id={`restaurant-${restaurant.id}`}
                  className={`transition-all duration-300 ${
                    selectedRestaurant === restaurant.id
                      ? 'ring-2 ring-[#CD7F4E] rounded-lg shadow-lg'
                      : ''
                  }`}>
                  <RestaurantCard {...restaurant} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Map (Desktop) */}
          <div className="hidden lg:block lg:sticky lg:top-6 h-[600px]">
            <MapboxMap
              locations={mapLocations}
              onMarkerClick={handleMarkerClick}
              style="mapbox://styles/mapbox/dark-v11" // Dark theme
              // Try other styles:
              // "mapbox://styles/mapbox/streets-v12" - Light theme
              // "mapbox://styles/mapbox/light-v11" - Clean light
              // "mapbox://styles/mapbox/navigation-night-v1" - Dark navigation
            />
          </div>

          {/* Mobile Map - Shows when toggle is active */}
          {showMobileMap && (
            <div className="lg:hidden fixed inset-0 z-50 bg-white">
              <div className="h-full flex flex-col">
                <div className="p-4 border-b border-gray-200 bg-white">
                  <Button
                    onClick={() => setShowMobileMap(false)}
                    variant="outline"
                    className="w-full">
                    Close Map
                  </Button>
                </div>
                <div className="flex-1">
                  <MapboxMap
                    locations={mapLocations}
                    onMarkerClick={handleMarkerClick}
                    style="mapbox://styles/mapbox/dark-v11"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
