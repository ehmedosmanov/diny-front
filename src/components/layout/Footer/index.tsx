import Image from 'next/image';
import React from 'react';
import LogoImg from '@/assets/images/logo.png';
import { navbarData } from '@/data/navbarData';
import NavLink from '../Navbar/NavLink';
import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="pt-[100px] pb-[15px]">
      <div className="wrapper">
        <div className="rounded-[30px] bg-[#1C5858] min-h-[200px] h-full px-[58px] py-[25px]">
          <div className="flex items-center justify-between  min-h-[200px] h-full">
            <div className="flex flex-col items-center lg:items-start gap-[18px]">
              <h2 className="text-white text-2xl lg:text-3xl font-semibold">
                {"Let's get started"}
              </h2>
              <button className="bg-[#F57D0D] cursor-pointer hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Register my restaurant
              </button>
            </div>
            <div className="flex flex-col items-center justify-center gap-[31px] text-white">
              <div className="w-[72px]">
                <Image
                  alt="Logo"
                  className="w-full h-full object-cover"
                  src={LogoImg}
                  priority
                />
              </div>
              <div className="flex items-center gap-[30px] ">
                {navbarData.map((item) => (
                  <Link
                    className="font-medium text-[14px] text-white"
                    key={item.link}
                    href={item.link}>
                    {item.text}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="w-10 h-10 border border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#1C5858] transition-colors">
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#1C5858] transition-colors">
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#1C5858] transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          <div>
            <p className='text-[#152E2E] flex items-center justify-center text-center text-[12px] font-poppins'>Copyright © 2020. LogoIpsum. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
