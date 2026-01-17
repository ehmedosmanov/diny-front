"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function RegisterForm() {
  const [rememberMe, setRememberMe] = useState(true);

  return (
    <div className="bg-white rounded-lg p-8 w-full max-w-md shadow-lg xl:w-[450px] ">
      {/* Header */}
      <h2 className="text-2xl font-semibold text-center mb-6">Register with</h2>

      {/* Social Login Buttons */}
      <div className="flex gap-4 mb-6 justify-center">
        <button className="  text-black w-fit border border-[#E2E8F0] p-6 rounded-lg transition-colors">
          <svg className="w-6 h-6 " fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </button>
        <button className=" text-black w-fit border border-[#E2E8F0] p-6 rounded-lg transition-colors">
          <svg
            className="w-6 h-6 mx-auto"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
          </svg>
        </button>
        <button className=" text-black w-fit border border-[#E2E8F0] p-6 rounded-lg transition-colors">
          <svg
            className="w-6 h-6 mx-auto"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
        </button>
      </div>

      {/* Divider */}
      <div className="text-center text-[#A0AEC0] text-sm mb-6">or</div>

      {/* Form Fields */}
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            placeholder="Your full name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            placeholder="Your email address"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            placeholder="Your password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>

        {/* Remember Me Toggle */}
        <div className="flex items-center gap-3 py-2">
          <button
            type="button"
            onClick={() => setRememberMe(!rememberMe)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              rememberMe ? "bg-blue-500" : "bg-gray-300"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                rememberMe ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
          <span className="text-gray-700 text-sm font-medium">Remember me</span>
        </div>

        {/* Sign Up Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg uppercase tracking-wide transition-colors mt-6"
        >
          SIGN UP
        </button>
      </form>

      {/* Sign In Link */}
      <div className="text-center mt-6">
        <span className="text-gray-500 text-sm">Already have an account? </span>
        <Link
          href="/en/login"
          className="text-gray-800 font-bold text-sm hover:underline"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
}
