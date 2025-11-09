"use client";
import React, { useState, useEffect } from "react";
import DashboardHeader from "@/components/Dashboard/DashboardHeader";
import ReservationCard from "@/components/Dashboard/ReservationCard";
import ReservationDetailsDialog from "@/components/Dashboard/ReservationDetailsDialog";

const mockReservations = [
  {
    id: "1",
    hotelName: "Golden Tulip Hotel",
    location: "Riverside Mall, Gomti Nagar, Lucknow, Uttar Pradesh, 231217",
    date: "Sun, 07 Jan",
    time: "07:00 PM",
    guests: 2,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300",
    status: "confirmed" as const,
    reservationId: "173826",
  },
  {
    id: "2",
    hotelName: "The Grand Palace Hotel",
    location: "Park Street, Central Business District, New Delhi, 110001",
    date: "Mon, 15 Jan",
    time: "08:00 PM",
    guests: 4,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=300",
    status: "confirmed" as const,
    reservationId: "173827",
  },
];

export default function ReservationsPage() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedReservation, setSelectedReservation] = useState<
    (typeof mockReservations)[0] | null
  >(null);

  // Auto-open dialog with first reservation when page loads
  useEffect(() => {
    if (mockReservations.length > 0) {
      setSelectedReservation(mockReservations[0]);
      setDialogOpen(true);
    }
  }, []);

  const handleCheckDetails = (id: string) => {
    const reservation = mockReservations.find((r) => r.id === id);
    if (reservation) {
      setSelectedReservation(reservation);
      setDialogOpen(true);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <DashboardHeader
          title="Current Bookings"
          searchPlaceholder="Search reservations..."
        />
        <div className="space-y-4">
          {mockReservations.map((reservation) => (
            <ReservationCard
              key={reservation.id}
              {...reservation}
              onCheckDetails={handleCheckDetails}
            />
          ))}
        </div>
        <DashboardHeader
          title="Past Bookings"
          searchPlaceholder="Search reservations..."
        />
        <div className="space-y-4">
          {mockReservations.map((reservation) => (
            <ReservationCard
              key={reservation.id}
              {...reservation}
              onCheckDetails={handleCheckDetails}
            />
          ))}
        </div>
      </div>

      {/* Reservation Details Dialog */}
      <ReservationDetailsDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        reservation={selectedReservation}
      />
    </>
  );
}
