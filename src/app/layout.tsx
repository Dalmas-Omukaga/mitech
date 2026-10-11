import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mitech Home Solutions",
  description: "Examine, evaluate and determine the challenges faced at home for better living.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col relative bg-white text-gray-900`}>
        
        {/* Global Faint Watermark Logo Background */}
        <div className="fixed inset-0 pointer-events-none flex items-center justify-center z-0 overflow-hidden">
          <div className="relative w-125 h-125 sm:w-175 sm:h-175 opacity-[0.03] select-none">
            <Image
              src="/images/logo.png"
              alt="Mitech Watermark Background"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Navbar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="grow relative z-10">
          {children}
        </main>

        {/* Footer */}
        <Footer />
        
      </body>
    </html>
  );
}