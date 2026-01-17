'use client';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select';
import {
  Calendar,
  Clock,
  Users,
  ChevronRight,
  Gift,
  UtensilsCrossed,
  Star,
  MapPin,
  Armchair,
} from 'lucide-react';
import { useState } from 'react';

export default function FilterBar() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [persons, setPersons] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [neighborhood, setNeighborhood] = useState('');

  return (
    <div className="w-full py-6 overflow-x-auto">
      <div className="flex items-center gap-3 min-w-max px-4 sm:px-0">
        {/* Date, Time, Persons Group */}
        <div className="flex items-center gap-2 border border-[#E5E5E5] rounded-full px-3 py-2 bg-white">
          <Select value={date} onValueChange={setDate}>
            <SelectTrigger className="border-none shadow-none h-auto p-0 gap-1.5 focus:ring-0 w-auto">
              <Calendar className="h-4 w-4 text-gray-600" />
              <span className="text-sm text-gray-700">Date</span>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="tomorrow">Tomorrow</SelectItem>
                <SelectItem value="this-week">This Week</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <div className="h-4 w-px bg-gray-300" />

          <Select value={time} onValueChange={setTime}>
            <SelectTrigger className="border-none shadow-none h-auto p-0 gap-1.5 focus:ring-0 w-auto">
              <Clock className="h-4 w-4 text-gray-600" />
              <span className="text-sm text-gray-700">Time</span>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="lunch">Lunch</SelectItem>
                <SelectItem value="dinner">Dinner</SelectItem>
                <SelectItem value="evening">Evening</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <div className="h-4 w-px bg-gray-300" />

          <Select value={persons} onValueChange={setPersons}>
            <SelectTrigger className="border-none shadow-none h-auto p-0 gap-1.5 focus:ring-0 w-auto">
              <Users className="h-4 w-4 text-gray-600" />
              <span className="text-sm text-gray-700">Pers.</span>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="1">1 Person</SelectItem>
                <SelectItem value="2">2 People</SelectItem>
                <SelectItem value="3">3 People</SelectItem>
                <SelectItem value="4">4 People</SelectItem>
                <SelectItem value="5">5+ People</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <Button
          variant="outline"
          className="rounded-full border-[#E5E5E5] text-sm text-gray-700 hover:bg-gray-50 h-auto py-2 px-4 gap-2 bg-transparent">
          <Gift className="h-4 w-4" />
          Special offers
        </Button>

        <Button
          variant="outline"
          className="rounded-full border-[#E5E5E5] text-sm text-gray-700 hover:bg-gray-50 h-auto py-2 px-4 gap-2 bg-transparent">
          <UtensilsCrossed className="h-4 w-4" />
          Dinner today
        </Button>

        <Button
          variant="outline"
          className="rounded-full border-[#E5E5E5] text-sm text-gray-700 hover:bg-gray-50 h-auto py-2 px-4 gap-2 bg-transparent">
          <Star className="h-4 w-4" />
          Best rated
        </Button>

        <Select value={cuisine} onValueChange={setCuisine}>
          <SelectTrigger className="rounded-full border-[#E5E5E5] text-sm text-gray-700 hover:bg-gray-50 h-auto py-2 px-4 gap-2 w-auto">
            <UtensilsCrossed className="h-4 w-4" />
            <span>Cuisine</span>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="italian">Italian</SelectItem>
              <SelectItem value="chinese">Chinese</SelectItem>
              <SelectItem value="japanese">Japanese</SelectItem>
              <SelectItem value="mexican">Mexican</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select value={neighborhood} onValueChange={setNeighborhood}>
          <SelectTrigger className="rounded-full border-[#E5E5E5] text-sm text-gray-700 hover:bg-gray-50 h-auto py-2 px-4 gap-2 w-auto">
            <MapPin className="h-4 w-4" />
            <span>Neighborhood</span>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="downtown">Downtown</SelectItem>
              <SelectItem value="uptown">Uptown</SelectItem>
              <SelectItem value="suburbs">Suburbs</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Button
          variant="outline"
          className="rounded-full border-[#E5E5E5] text-sm text-gray-700 hover:bg-gray-50 h-auto py-2 px-4 gap-2 bg-transparent">
          <Armchair className="h-4 w-4" />
          Seating
        </Button>

        <Button
          variant="outline"
          className="rounded-full border-[#E5E5E5] text-sm text-gray-700 hover:bg-gray-50 h-auto py-2 px-4 bg-transparent">
          Neighborhood
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="rounded-full h-9 w-9 text-gray-600 hover:bg-gray-100">
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
