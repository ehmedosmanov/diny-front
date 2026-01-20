'use client';

import { useState, useRef } from 'react';
import {
  ChevronRight,
  ChevronLeft,
  Clock,
  Heart
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';
import Image from 'next/image';
import PlaceImage from '@/assets/images/place-img.jpg';
import PlacesCategories from './PlacesCategories';
// Sample data for places
const places = [
  {
    id: 1,
    name: 'Dinehall Restaurant',
    image: PlaceImage,
    rating: 4,
    comments: 12,
    category: 'Lunch',
    cuisine: 'India',
    time: '20-30min',
    distance: '4.5KM',
    isFavorite: false,
  },
  {
    id: 2,
    name: 'Dinehall Restaurant',
    image: PlaceImage,
    rating: 4,
    comments: 12,
    category: 'Lunch',
    cuisine: 'India',
    time: '20-30min',
    distance: '4.5KM',
    isFavorite: false,
  },
  {
    id: 3,
    name: 'Dinehall Restaurant',
    image: PlaceImage,
    rating: 4,
    comments: 12,
    category: 'Lunch',
    cuisine: 'India',
    time: '20-30min',
    distance: '4.5KM',
    isFavorite: false,
  },
  {
    id: 4,
    name: 'Sweet Treats',
    image: PlaceImage,
    rating: 4,
    comments: 8,
    category: 'Desserts',
    cuisine: 'India',
    time: '15-25min',
    distance: '3.2KM',
    isFavorite: false,
  },
  {
    id: 5,
    name: 'Juice Bar',
    image: PlaceImage,
    rating: 4,
    comments: 15,
    category: 'Drinks',
    cuisine: 'India',
    time: '10-20min',
    distance: '2.8KM',
    isFavorite: false,
  },
  {
    id: 6,
    name: 'Burger Joint',
    image: PlaceImage,
    rating: 4,
    comments: 20,
    category: 'Fastfood',
    cuisine: 'India',
    time: '15-25min',
    distance: '3.5KM',
    isFavorite: false,
  },
];

const PopularPlaces = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [favorites, setFavorites] = useState<number[]>([]);
  const swiperRef = useRef<SwiperType | null>(null);

  // Filter places based on active category
  const filteredPlaces =
    activeCategory === 'All'
      ? places
      : places.filter((place) => place.category === activeCategory);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  // Generate star rating
  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${
            i < rating ? 'text-yellow-400' : 'text-gray-300'
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor">
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
          />
        </svg>
      ));
  };

  return (
    <section className="py-8 md:py-12">
      <div className="wrapper">
        <div className="mb-6 flex items-start justify-between">
          <h2 className="text-black text-[19px] md:text-[24px] lg:text-[38px] font-semibold">
            Popular Places
          </h2>
          <Link
            href="/all-places"
            className="hidden md:flex items-center text-orange-500 hover:text-orange-600 transition-colors">
            View all <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>

        <PlacesCategories
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        <div className="relative">
          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={1.2}
            spaceBetween={16}
            modules={[Navigation, Pagination]}
            pagination={{
              el: '.places-swiper-pagination',
              clickable: true,
              renderBullet: (index, className) =>
                `<span class="${className}"></span>`,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="places-swiper !py-[45x]">
            {filteredPlaces.map((place) => (
              <SwiperSlide key={place.id}>
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={place.image}
                      alt={place.name}
                      fill
                      className="object-cover"
                    />
                    <button
                      onClick={() => toggleFavorite(place.id)}
                      className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md z-10">
                      <Heart
                        className={`h-5 w-5 ${
                          favorites.includes(place.id)
                            ? 'fill-red-500 text-red-500'
                            : 'text-gray-500'
                        }`}
                      />
                    </button>
                    <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium text-lg text-olive-700">
                        {place.name}
                      </h3>
                      <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                    </div>

                    <div className="flex items-center mt-1">
                      <div className="flex items-center">
                        {renderStars(place.rating)}
                      </div>
                      <span className="ml-2 text-sm text-gray-400">
                        ({place.comments} comments)
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        {place.cuisine}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        {place.category}
                      </span>
                    </div>

                    <div className="flex justify-between items-center mt-3 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{place.time}</span>
                      </div>
                      <span>{place.distance}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex items-center justify-center md:justify-end mt-8 gap-4">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100">
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="places-swiper-pagination flex items-center gap-1"></div>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-6 text-center md:hidden">
          <Link
            href="/all-places"
            className="inline-flex items-center text-orange-500 hover:text-orange-600 transition-colors">
            View all <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularPlaces;
