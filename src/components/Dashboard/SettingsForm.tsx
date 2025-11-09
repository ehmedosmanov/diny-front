"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import { HelpCircle, Check, X } from "lucide-react";

export default function SettingsForm() {
  const [username, setUsername] = useState("X-AE-A-19");
  const [phoneNumber, setPhoneNumber] = useState("+44 (158) 008-9987");
  const [notifications, setNotifications] = useState({
    email: false,
    sound: true,
    subscription: false,
  });

  const handleSave = () => {
    console.log("Settings saved");
  };

  const handleCancel = () => {
    console.log("Settings cancelled");
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 w-full">
      {/* Settings Form */}
      <div className="space-y-8">
        {/* Username */}
        <div className="flex items-center gap-8">
          <label className="w-40 text-base font-medium text-gray-900">
            Username
          </label>
          <div className="flex-1 max-w-[520px] flex items-center gap-2">
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="flex-1 h-12 border-gray-300"
            />
            <HelpCircle className="w-5 h-5 text-gray-400 shrink-0" />
          </div>
        </div>
        <div className="border-t border-[#E2E8F0] w-full"></div>

        {/* Phone Number */}
        <div className="flex items-center gap-8">
          <label className="w-40 text-base font-medium text-gray-900">
            Phone Number
          </label>
          <div className="flex-1 max-w-[520px]">
            <PhoneInput
              value={phoneNumber}
              onChange={setPhoneNumber}
              defaultCountry="+44"
              placeholder="(158) 008-9987"
            />
          </div>
        </div>
        <div className="border-t border-[#E2E8F0] w-full"></div>

        {/* Profile Picture */}
        <div className="flex items-start gap-8">
          <label className="w-40 text-base font-medium text-gray-900 pt-2">
            Profile Picture
          </label>
          <div className="flex-1 flex items-center gap-4">
            <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200 shrink-0">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <Button
              variant="outline"
              className="border-[#F57D0D]  text-[#f57d0db9] hover:text-[#f57d0db9]  h-10"
            >
              Edit
            </Button>
            <Button
              variant="outline"
              className="border-[#FF0000] text-[#FF0000] hover:text-[#FF0000] h-10"
            >
              Delete
            </Button>
          </div>
        </div>
        <div className="border-t border-[#E2E8F0] w-full"></div>

        {/* Notifications */}
        <div className="flex items-start gap-8">
          <label className="w-40 text-base font-medium text-gray-900 pt-1">
            Notifications
          </label>
          <div className="flex-1 space-y-4">
            {/* Email Notification */}
            <div className="flex items-start gap-3">
              <button
                onClick={() =>
                  setNotifications({
                    ...notifications,
                    email: !notifications.email,
                  })
                }
                className={`w-5 h-5 shrink-0 mt-0.5 rounded border-2 flex items-center justify-center transition-colors ${
                  notifications.email
                    ? "bg-[#1C5858] border-[#1C5858]"
                    : "border-gray-300"
                }`}
              >
                {notifications.email && (
                  <Check className="w-4 h-4 text-white" />
                )}
              </button>
              <div>
                <p className="font-medium text-gray-900 mb-1">
                  Email Notification
                </p>
                <p className="text-sm text-gray-500">
                  You will be notified when a new email arrives.
                </p>
              </div>
            </div>

            {/* Sound Notification */}
            <div className="flex items-start gap-3">
              <button
                onClick={() =>
                  setNotifications({
                    ...notifications,
                    sound: !notifications.sound,
                  })
                }
                className={`w-5 h-5 shrink-0 mt-0.5 rounded border-2 flex items-center justify-center transition-colors ${
                  notifications.sound
                    ? "bg-[#1C5858] border-[#1C5858]"
                    : "border-gray-300"
                }`}
              >
                {notifications.sound && (
                  <Check className="w-4 h-4 text-white" />
                )}
              </button>
              <div>
                <p className="font-medium text-gray-900 mb-1">
                  Sound Notification
                </p>
                <p className="text-sm text-gray-500">
                  You will be notified with sound when someone messages you.
                </p>
              </div>
            </div>

            {/* Subscription */}
            <div className="flex items-start gap-3">
              <button
                onClick={() =>
                  setNotifications({
                    ...notifications,
                    subscription: !notifications.subscription,
                  })
                }
                className={`w-5 h-5 shrink-0 mt-0.5 rounded border-2 flex items-center justify-center transition-colors ${
                  notifications.subscription
                    ? "bg-[#1C5858] border-[#1C5858]"
                    : "border-gray-300"
                }`}
              >
                {notifications.subscription && (
                  <Check className="w-4 h-4 text-white" />
                )}
              </button>
              <div>
                <p className="font-medium text-gray-900 mb-1">Subscription</p>
                <p className="text-sm text-gray-500">
                  You will be notified when you subscribe to an account.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 pt-6 border-t border-gray-200">
          <Button
            variant="outline"
            onClick={handleCancel}
            className="h-10 px-6 rounded-[12px] border-[#CBD5E1] text-[#475569] "
          >
            Cancel
            <X className="w-4 h-4 mr-2" />
          </Button>
          <Button
            onClick={handleSave}
            className="h-10 px-6 rounded-[12px] bg-[#F57D0D] hover:bg-[#f57d0db9] text-white"
          >
            Save
            <Check className="w-4 h-4 mr-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
