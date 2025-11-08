"use client";
import React from "react";
import ReviewCard from "@/components/Dashboard/ReviewCard";

const mockReviews = [
  {
    id: "1",
    userName: "Name Surname",
    userAvatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
    rating: 4,
    reviewText:
      "If you wanna take a break from Varanasi you find a great location and hospitality in this rooftop in the heart of the town. Food is really tasty and staff really great!",
    images: [
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=200",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=200",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=200",
    ],
  },
  {
    id: "2",
    userName: "Name Surname",
    userAvatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
    rating: 4,
    reviewText:
      "If you wanna take a break from Varanasi you find a great location and hospitality in this rooftop in the heart of the town. Food is really tasty and staff really great!",
    images: [
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=200",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=200",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=200",
    ],
  },
  {
    id: "3",
    userName: "Name Surname",
    userAvatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
    rating: 4,
    reviewText:
      "If you wanna take a break from Varanasi you find a great location and hospitality in this rooftop in the heart of the town. Food is really tasty and staff really great!",
    images: [
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=200",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=200",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=200",
    ],
  },
  {
    id: "4",
    userName: "Name Surname",
    userAvatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
    rating: 4,
    reviewText:
      "If you wanna take a break from Varanasi you find a great location and hospitality in this rooftop in the heart of the town. Food is really tasty and staff really great!",
    images: [
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=200",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=200",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=200",
    ],
  },
];

export default function ReviewsPage() {
  const handleMenuClick = (id: string) => {
    console.log("Menu clicked for review:", id);
  };

  return (
    <div>
      {/* Title */}
      <h1 className="text-[28px] text-[#004225] mb-6">Reviews</h1>

      {/* Reviews Grid - 2x2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockReviews.map((review) => (
          <ReviewCard
            key={review.id}
            {...review}
            onMenuClick={handleMenuClick}
          />
        ))}
      </div>
    </div>
  );
}
