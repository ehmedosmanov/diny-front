'use client';

import { Button } from '@/components/ui/button';
import React, { useCallback, useEffect, useState } from 'react';
import { blogSlides } from '@/data/blogSlides';
import BlogSliderPagination from '../BlogSliderPagination';
const BlogSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentSlideData = blogSlides[currentSlide] || blogSlides[0];
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % blogSlides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  const handleSlideChange = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 3000);
  };

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <>
      <section>
        <div className="wrapper">
          <h2 className="pb-[24px] font-semibold text-[35px] lg:text-[38px]">
            Latest Blog
          </h2>
          <div
            className="grid grid-cols-1 lg:grid-cols-12 lg:h-[392px]"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <div className="lg:col-span-4">
              <div className="h-full bg-[#1C5858] flex-col justify-between  rounded-tl-[8px] lg:rounded-bl-[8px] lg:rounded-tr-none rounded-tr-[8px] text-white pl-[20px] md:pl-[40px] pr-[30px] md:pr-[60px] py-[20px] md:py-[45px] flex items-center">
                <div className="flex flex-col gap-[17px]">
                  <h3 className="text-[24px] md:text-[30px] lg:text-[34px] font-semibold leading-tight">
                    {currentSlideData.title}
                  </h3>
                  <p className="text-white text-[15px] leading-relaxed">
                    {currentSlideData.description}
                  </p>
                </div>
                <BlogSliderPagination
                  totalSlides={blogSlides.length}
                  currentSlide={currentSlide}
                  onSlideChange={handleSlideChange}
                  className="mt-8"
                />
              </div>
            </div>

            <div
              className="lg:col-span-8 h-[250px] lg:h-full rounded-b-[8px] lg:rounded-bl-none lg:rounded-tr-[8px] rounded-tr-none relative bg-cover bg-center flex items-center justify-start"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${currentSlideData.backgroundImage.src})`,
              }}>
              <div className="text-left text-white px-6 md:px-10 max-w-2xl">
                <h2 className="text-[20px] md:text-[26px] lg:text-[34px] font-semibold mb-4 leading-tight">
                  {currentSlideData.rightTitle}
                </h2>
                <Button className="bg-[#F57D0D] px-[65px] cursor-pointer h-[49px] hover:bg-orange-600  text-white py-[15px] text-[14px] rounded-md transition-colors">
                  Read More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSlider;
