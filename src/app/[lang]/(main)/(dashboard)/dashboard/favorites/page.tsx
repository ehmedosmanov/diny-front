"use client";
import React from "react";
import DashboardHeader from "@/components/Dashboard/DashboardHeader";
import RestaurantCard from "@/components/Dashboard/RestaurantCard";

const mockRestaurants = [
  {
    id: "1",
    name: "Hotel Name Detail",
    cuisine: "Northern food",
    location: "New Italy",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=200",
  },
  {
    id: "2",
    name: "Hotel Name Detail",
    cuisine: "Northern food",
    location: "New Italy",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=200",
  },
  {
    id: "3",
    name: "Hotel Name Detail",
    cuisine: "Northern food",
    location: "New Italy",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=200",
  },
  {
    id: "4",
    name: "Hotel Name Detail",
    cuisine: "Northern food",
    location: "New Italy",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=200",
  },
  {
    id: "5",
    name: "Hotel Name Detail",
    cuisine: "Northern food",
    location: "New Italy",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=200",
  },
  {
    id: "6",
    name: "Hotel Name Detail",
    cuisine: "Northern food",
    location: "New Italy",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=200",
  },
  {
    id: "7",
    name: "Hotel Name Detail",
    cuisine: "Northern food",
    location: "New Italy",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=200",
  },
  {
    id: "8",
    name: "Hotel Name Detail",
    cuisine: "Northern food",
    location: "New Italy",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=200",
  },
];

export default function FavoritesPage() {
  const handleRemove = (id: string) => {
    console.log("Remove restaurant:", id);
    // Add logic to remove from favorites
  };

  return (
    <div>
      <DashboardHeader
        title="Saved Restaurants"
        searchPlaceholder="Search restaurant and cuisines..."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mockRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            {...restaurant}
            onRemove={handleRemove}
          />
        ))}
      </div>
    </div>
  );
}
