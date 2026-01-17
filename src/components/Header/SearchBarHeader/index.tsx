'use client';
import type React from 'react';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { MapPin, Search } from 'lucide-react';

const SearchBarHeader = () => {
  const [location, setLocation] = useState('');
  const [cuisine, setCuisine] = useState('');

  return (
    <div className="bg-white rounded-[14px] px-3 sm:px-[22px] py-[10px]">
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-[20px] w-full h-full">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-[18px] w-full h-full">
          <div className="col-span-1 relative mb-0 w-full">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10">
              <MapPin className="h-5 w-5" />
            </div>
            <Input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setLocation(e.target.value)
              }
              className="border border-[#ECECEC] placeholder:text-[#969696] shadow-none pl-10 h-12 focus-visible:ring-0 text-black focus-visible:ring-offset-0 rounded-[12px] w-full"
            />
          </div>

          <div className="col-span-1 sm:col-span-2 h-full w-full">
            <Select value={cuisine} onValueChange={setCuisine}>
              <SelectTrigger className="border border-[#ECECEC] shadow-none w-full !h-full focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-md">
                <div className="flex items-center overflow-hidden text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-5 w-5 text-gray-400">
                    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path>
                    <path d="M7 2v20"></path>
                    <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path>
                  </svg>
                  <SelectValue
                    className="text-[#969696]"
                    placeholder="Cuisine, restaurant & pub & cafe name"
                  />
                </div>
              </SelectTrigger>
              <SelectContent className="h-full placeholder:text-[#969696] text-black">
                <SelectGroup>
                  <SelectLabel>Cuisines</SelectLabel>
                  <SelectItem value="italian">Italian</SelectItem>
                  <SelectItem value="chinese">Chinese</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className=" md:ml-2 flex-shrink-0 w-full sm:w-auto flex justify-center sm:justify-start">
          <span className="h-[43px] cursor-pointer p-[14px] inline-flex items-center justify-center w-full sm:w-[43px] rounded-[14px] bg-[#2F4F4F] hover:bg-[#1e3535]">
            <Search className="h-[16px] w-[16px] text-white" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchBarHeader;
