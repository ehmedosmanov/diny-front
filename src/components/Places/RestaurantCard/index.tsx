'use client';
import { Heart, MapPin, MoreVertical, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import RestaurantImage from '@/assets/images/restaurant-image.jpg';
import Image from 'next/image';
import Link from 'next/link';

interface RestaurantCardProps {
  id: string;
  name: string;
  rating: number;
  cuisine: string;
  priceLevel: string;
  location: string;
  image: string;
  timeSlots: { time: string; room: string }[];
}

export default function RestaurantCard({
  id,
  name,
  rating,
  cuisine,
  priceLevel,
  location,
  image,
  timeSlots,
}: RestaurantCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="flex gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
      {/* Restaurant Image - Clickable */}
      <Link 
        href={`/places/${id}`} 
        className="relative w-44 h-48 flex-shrink-0 rounded-lg overflow-hidden cursor-pointer group"
      >
        <Image
          src={RestaurantImage || image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </Link>

      {/* Restaurant Details */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between mb-2">
            <div>
              {/* Restaurant Name - Clickable */}
              <Link href={`/places/${id}`}>
                <h3 className="text-xl font-semibold text-gray-900 hover:text-[#CD7F4E] transition-colors cursor-pointer">
                  {name}
                </h3>
              </Link>
              
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-orange-500 text-orange-500" />
                  <span className="text-sm font-medium text-gray-700">
                    {rating}
                  </span>
                </div>
                <span className="text-sm text-gray-500">{cuisine}</span>
                <span className="text-sm text-gray-500">{priceLevel}</span>
              </div>
              
              <div className="flex items-center gap-1 mt-1">
                <MapPin className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-600">{location}</span>
              </div>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-gray-400 hover:text-red-500"
              onClick={(e) => {
                e.preventDefault();
                setIsFavorite(!isFavorite);
              }}>
              <Heart
                className={cn(
                  'h-5 w-5',
                  isFavorite && 'fill-red-500 text-red-500'
                )}
              />
            </Button>
          </div>
        </div>

        {/* Time Slots */}
        <div className="flex items-center gap-2 flex-wrap">
          {timeSlots.map((slot, index) => (
            <Button
              key={index}
              variant="outline"
              onClick={(e) => {
                e.preventDefault();
                // Handle time slot selection
              }}
              className="h-auto py-2 px-4 rounded-md bg-[#2F4F4F] text-white hover:bg-[#1e3535] hover:text-white border-none">
              <div className="flex flex-col items-center">
                <span className="text-sm font-medium">{slot.time}</span>
                <span className="text-xs opacity-90">{slot.room}</span>
              </div>
            </Button>
          ))}
          <Button
            variant="outline"
            size="icon"
            onClick={(e) => {
              e.preventDefault();
              // Handle more options
            }}
            className="h-10 w-10 rounded-md border-gray-300 bg-transparent">
            <MoreVertical className="h-4 w-4 text-gray-600" />
          </Button>
        </div>
      </div>
    </div>
  );
}