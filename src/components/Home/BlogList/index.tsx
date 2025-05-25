'use client';
import { useState, useRef } from 'react';
import {
  ChevronRight,
  ChevronLeft,
  Clock,
  Heart,
  Coffee,
  UtensilsCrossed,
  GlassWater,
  IceCream2,
  Pizza,
  LayoutGrid,
  Eye,
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';
import Image from 'next/image';
import { blogData } from '@/data/blogData';
import { Card } from '@/components/ui/card';

const BlogList = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="pt-[70px]">
      <div className="wrapper">
        <div className="flex flex-col gap-[6px]">
          <h3 className="text-[38px] font-semibold text-black">Blogs</h3>
          <p className="text-[18px] font-medium font-raleway">
            Lorem Ipsum dolor sit ament
          </p>
        </div>
        <div className="relative pt-[32px]">
          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={1.2}
            spaceBetween={16}
            modules={[Navigation, Pagination]}
            pagination={{
              el: '.blog-swiper-pagination',
              clickable: true,
              renderBullet: (index, className) =>
                `<span class="${className}"></span>`,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="blog-swiper !py-[45x]">
            {blogData.map((blog) => (
              <SwiperSlide key={blog.id}>
                <Card className="w-full max-w-md overflow-hidden pt-0 bg-white gap-0 pb-0">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={blog.image.src}
                      alt={blog.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="pt-[18px] px-[13px] pb-[8px]">
                    <h2 className="text-xl font-bold text-gray-900 leading-tight mb-8">
                      Discover Dubai's Top Off-Plan Beachfront Projects for 2024
                    </h2>

                    <div className="flex items-center justify-between text-sm text-black border-t border-t-[#ECECECEE] py-[18px]">
                      <span>Published on July 30, 2023</span>
                      <div className="flex items-center gap-1">
                        <span className="font-medium">120</span>
                        <Eye className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex items-center justify-center md:justify-end mt-8 gap-4">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100">
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="blog-swiper-pagination flex items-center gap-1"></div>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogList;
