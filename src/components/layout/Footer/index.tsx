import Image from 'next/image';
import React from 'react';
import LogoImg from '@/assets/images/logo.png';
import { navbarData } from '@/data/navbarData';
import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="pt-[100px] pb-[15px]">
      <div className="wrapper">
       <div className="rounded-[30px] bg-[#1C5858] min-h-[200px] h-full px-4 sm:px-8 lg:px-[58px] py-[25px]">
          <div className="flex flex-col lg:flex-row items-center justify-between min-h-[200px] h-full gap-8 lg:gap-4">
            <div className="flex flex-col items-center lg:items-start gap-[18px] text-center lg:text-left">
              <h2 className="text-white text-2xl lg:text-3xl font-semibold">{"Let's get started"}</h2>
              <button className="bg-[#F57D0D] cursor-pointer hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Register my restaurant
              </button>
            </div>

            {/* Center Section - Logo and Navigation */}
            <div className="flex flex-col items-center justify-center gap-[31px] text-white order-first lg:order-none">
              <div className="w-[72px]">
                <Image
                  alt="Logo"
                  className="w-full h-full object-cover"
                  src={LogoImg || "/placeholder.svg"}
                  width={72}
                  height={72}
                  priority
                />
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-[30px]">
                {navbarData.map((item) => (
                  <Link
                    className="font-medium text-[14px] text-white hover:text-orange-300 transition-colors"
                    key={item.link}
                    href={item.link}
                  >
                    {item.text}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Section - Social Media */}
            <div className="flex flex-row lg:flex-col gap-3 lg:gap-3">
              <a
                href="#"
                className="w-10 h-10 border border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#1C5858] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#1C5858] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#1C5858] transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-white/20">
            <p className="text-white/70 flex items-center justify-center text-center text-[12px] font-poppins">
              Copyright © 2020. LogoIpsum. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
