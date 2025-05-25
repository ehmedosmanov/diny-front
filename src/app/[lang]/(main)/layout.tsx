import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import type React from 'react';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className=" min-h-screen  py-[80px]">
        <Navbar/>
      {children}
      <Footer/>
    </main>
  );
}
