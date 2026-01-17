"use client";
import React from "react";
import Image from "next/image";
import BGImage from "@/assets/images/login_bg.png";
import LoginForm from "@/components/Login/LoginForm";

export default function LoginPageClient() {
  return (
    <div className="relative w-full h-full min-h-screen min-w-screen bg-white">
      <Image
        src={BGImage.src}
        alt="logo"
        width={1000}
        height={1000}
        className="w-[calc(100vw-32px)] h-[calc(100vh-32px)] object-cover absolute inset-0 top-0 left-4"
      />

      {/* Login Form */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <LoginForm />
      </div>
    </div>
  );
}
