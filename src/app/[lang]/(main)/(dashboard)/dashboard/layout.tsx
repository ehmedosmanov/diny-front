import React from "react";
import Sidebar from "@/components/Dashboard/Sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export default async function DashboardLayout({
  children,
  params,
}: DashboardLayoutProps) {
  const { lang } = await params;

  return (
    <div className="flex min-h-screen bg-gray-50 h-full">
      <Sidebar lang={lang} />
      <main className="flex-1 px-[28px] pt-[46px]">{children}</main>
    </div>
  );
}
