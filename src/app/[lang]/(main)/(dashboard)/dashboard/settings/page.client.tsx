"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import SettingsForm from "@/components/Dashboard/SettingsForm";

export default function SettingsPageClient() {
  return (
    <div className="">
      {/* Title */}
      <h1 className="text-[28px] text-[#004225] mb-6">Profile Settings</h1>
      <div className="flex justify-between items-center gap-2 mb-8">
        <p className="text-base text-[#475569]">
          Please update your profile settings here
        </p>
        <Button
          size="lg"
          className="h-[42px] bg-[#1C5858] text-white hover:bg-[#1c5858b9] rounded-lg"
        >
          Register my restaurant <Star className="w-5 h-5" />
        </Button>
      </div>

      {/* Settings Form Component */}
      <SettingsForm />
    </div>
  );
}
