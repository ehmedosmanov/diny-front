"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Settings,
  Calendar,
  Heart,
  MessageSquare,
  LogOut,
  Moon,
  Sun,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  lang?: string;
}

const menuItems = [
  {
    id: "settings",
    label: "Profile settings",
    icon: Settings,
    href: "/dashboard/settings",
  },
  {
    id: "reservations",
    label: "Reservations",
    icon: Calendar,
    href: "/dashboard/reservations",
  },
  {
    id: "favorites",
    label: "Favorites",
    icon: Heart,
    href: "/dashboard/favorites",
  },
  {
    id: "reviews",
    label: "Reviews",
    icon: MessageSquare,
    href: "/dashboard/reviews",
  },
];

export default function Sidebar({ lang = "en" }: SidebarProps) {
  const pathname = usePathname();
  const [isDarkMode, setIsDarkMode] = useState(true);

  const isActive = (href: string) => {
    return pathname.includes(href);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Add theme toggle logic here
    console.log("Theme toggled:", !isDarkMode ? "dark" : "light");
  };

  return (
    <aside className="w-64 bg-white border-r min-h-[calc(100vh-80px)] min-w-[300px] justify-between border-gray-200 h-full flex flex-col">
      {/* Menu Items */}
      <nav className="flex-1 p-4 space-y-2 mt-[30px]">
        <div className="flex items-start gap-4 mb-6">
          {/* Vertical Theme Toggle */}
          <div className="relative">
            <button
              onClick={toggleTheme}
              className="w-10 h-20 bg-gray-200 rounded-full flex flex-col items-center justify-between p-1 relative"
            >
              {/* Dark Mode Button (Top) */}
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
                  isDarkMode ? "bg-gray-700" : "bg-transparent"
                )}
              >
                <Moon
                  className={cn(
                    "w-4 h-4 transition-colors",
                    isDarkMode ? "text-white" : "text-gray-400"
                  )}
                />
              </div>
              {/* Light Mode Button (Bottom) */}
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
                  !isDarkMode ? "bg-white shadow-md" : "bg-transparent"
                )}
              >
                <Sun
                  className={cn(
                    "w-4 h-4 transition-colors",
                    !isDarkMode ? "text-gray-600" : "text-gray-400"
                  )}
                />
              </div>
            </button>
          </div>

          {/* Menu Items List */}
          <div className="flex-1 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);

              return (
                <Link
                  key={item.id}
                  href={`/${lang}${item.href}`}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors group",
                    active
                      ? "bg-orange-500 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  )}
                >
                  <Icon
                    className={cn(
                      "w-5 h-5",
                      active
                        ? "text-white"
                        : "text-gray-700 group-hover:text-gray-900"
                    )}
                  />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={() => {
            // Add logout logic here
            console.log("Logout clicked");
          }}
          className="flex items-center gap-3 justify-center px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors w-full"
        >
          <LogOut className="w-5 h-5 text-gray-700" />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
}
