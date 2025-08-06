import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Professional Consultancy Services",
  description: "Expert consultancy solutions for your business needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interTight.variable} font-sans antialiased min-h-screen flex flex-col`}
        style={{ backgroundColor: '#EFECE6' }}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="bg-white border-t-2 border-[#D4D0C8] text-[#2C3E50] py-6 px-4 text-center text-sm">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
            <span>&copy; {new Date().getFullYear()} MGS Technologies Consultancy. All rights reserved.</span>
            <span>
              Encompassing various geographies and technologies. <a href="/contact" className="text-[#2C3E50] underline hover:text-[#34495E]">Contact Us</a>
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
