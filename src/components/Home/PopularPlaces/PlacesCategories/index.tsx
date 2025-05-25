'use client';

import { useRef } from 'react';
import {
  Coffee,
  UtensilsCrossed,
  GlassWater,
  IceCream2,
  Pizza,
  LayoutGrid,
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';

const places = [
  {
    id: 1,
    name: 'Dinehall Restaurant',
    category: 'Lunch',
  },
  {
    id: 2,
    name: 'Dinehall Restaurant',
    category: 'Lunch',
  },
  {
    id: 3,
    name: 'Dinehall Restaurant',
    category: 'Lunch',
  },
  {
    id: 4,
    name: 'Sweet Treats',
    category: 'Desserts',
  },
  {
    id: 5,
    name: 'Juice Bar',
    category: 'Drinks',
  },
  {
    id: 6,
    name: 'Burger Joint',
    category: 'Fastfood',
  },
];

const categories = [
  { name: 'All', count: places.length, icon: LayoutGrid },
  { name: 'Breakfast', count: 23, icon: Coffee },
  { name: 'Lunch', count: 23, icon: UtensilsCrossed },
  { name: 'Drinks', count: 23, icon: GlassWater },
  { name: 'Desserts', count: 23, icon: IceCream2 },
  { name: 'Fastfood', count: 23, icon: Pizza },
  { name: 'qwd', count: 23, icon: Pizza },
  { name: 'qwdqw', count: 23, icon: Pizza },
  { name: 'qwdqwdqw', count: 23, icon: Pizza },
];

interface PlacesCategoriesProps {
  activeCategory?: string;
  setActiveCategory?: (category: string) => void;
}

const PlacesCategories = ({
  activeCategory = 'All',
  setActiveCategory = () => {},
}: PlacesCategoriesProps) => {
  const categoriesSwiperRef = useRef<SwiperType | null>(null);

  return (
    <>
      <div className="mb-8 overflow-hidden relative">
        <div className="categories-container relative">
          <Swiper
            onBeforeInit={(swiper) => {
              categoriesSwiperRef.current = swiper;
            }}
            slidesPerView="auto"
            spaceBetween={10}
            className="categories-swiper pr-16">
            {categories.map((category) => (
              <SwiperSlide key={category.name} className="!w-auto">
                <button
                  onClick={() => setActiveCategory(category.name)}
                  className={`whitespace-nowrap px-8 py-2.5 flex items-center gap-2 rounded-full font-semibold font-raleway text-sm md:text-base transition-colors ${
                    activeCategory === category.name
                      ? 'bg-[#F57D0D] text-white'
                      : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}>
                  <category.icon className="h-4 w-4" />
                  {category.name === 'All' ? (
                    'All'
                  ) : (
                    <>
                      {category.name}{' '}
                      <span
                        className={`${
                          activeCategory === category.name
                            ? 'text-white/70'
                            : 'text-gray-400'
                        }`}>
                        ({category.count})
                      </span>
                    </>
                  )}
                </button>
              </SwiperSlide>
            ))}
          </Swiper>

     
        </div>
      </div>
    </>
  );
};

export default PlacesCategories;
