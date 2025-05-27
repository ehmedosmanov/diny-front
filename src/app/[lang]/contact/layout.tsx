import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import type React from "react";

export default function Contactayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen pt-[80px]">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
