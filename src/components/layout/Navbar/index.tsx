'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import NavLink from './NavLink';
import { navbarData } from '@/data/navbarData';
import LogoImg from '@/assets/images/logo.png';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);

      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out bg-white border-b border-gray-200',
        visible ? 'translate-y-0' : '-translate-y-full',
        isScrolled ? 'shadow-md' : ''
      )}>
      <div className=" px-[10px] xl:px-[72px] lg:px-[42px] mx-auto  py-[20px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[36px]">
            <Link href="/" className="flex-shrink-0">
              <div className="w-[72px]">
                <Image
                  alt="Logo"
                  className="w-full h-full object-cover"
                  src={LogoImg}
                  priority
                />
              </div>
            </Link>

            <nav className="hidden md:flex items-center space-x-4 xl:space-x-8">
              {navbarData.map((item) => (
                <NavLink key={item.link} href={item.link}>
                  {item.text}
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center cursor-pointer">
              <div className="flex items-center space-x-1">
                <LanguageSwitcher />
              </div>
            </div>

            <button className="hidden md:flex text-red-500">
              <Heart fill="currentColor" size={24} />
            </button>

            <Link
              href="/register"
              className="hidden md:block text-gray-700 hover:text-gray-900 xl:text-base text-[14px] font-medium">
              Register my restaurant
            </Link>

            <Link
              href="/login"
              className="hidden md:flex bg-[#F57D0D] xl:text-base text-[14px] items-center justify-center text-white px-6 py-2  rounded-md font-medium hover:bg-opacity-90 transition-colors">
              Log in
            </Link>

            <button
              className="md:hidden text-gray-700 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <Link
              href="/login"
              className="md:hidden bg-[#F57D0D] inline-flex items-center justify-center text-white px-4 py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors">
              Log in
            </Link>
          </div>
        </div>
      </div>

      {/* <div
        className={cn(
          'fixed inset-0 bg-white z-40 pt-[80px] transition-transform duration-300 ease-in-out md:hidden',
          mobileMenuOpen ? 'translate-y-0' : 'translate-y-full'
        )}>
        <div className="container mx-auto px-4 py-6 flex flex-col h-full">
          <nav className="flex flex-col space-y-6">
            {navbarData.map((item) => (
              <Link
                key={item.link}
                href={item.link}
                className="text-lg font-medium text-gray-800 hover:text-[#F57D0D] transition-colors"
                onClick={() => setMobileMenuOpen(false)}>
                {item.text}
              </Link>
            ))}
          </nav>

          <div className="mt-8 flex flex-col space-y-6">
            <div className="flex items-center">
              <LanguageSwitcher />
            </div>

            <button className="flex items-center text-red-500 space-x-2">
              <Heart fill="currentColor" size={24} />
              <span>Favorites</span>
            </button>

            <Link
              href="/register"
              className="text-gray-700 hover:text-gray-900 font-medium"
              onClick={() => setMobileMenuOpen(false)}>
              Register my restaurant
            </Link>
          </div>

          <div className="mt-auto pb-8">
            <p className="text-gray-500 text-sm">© 2025 Your Restaurant App</p>
          </div>
        </div>
      </div> */}
    </header>
  );
}
