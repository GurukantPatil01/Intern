'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50 border-b-2 border-[#D4D0C8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <div className="bg-[#2C3E50] text-white px-4 py-2 font-bold text-xl">
                CONSULT
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <Link href="/" className="text-[#2C3E50] hover:bg-[#2C3E50] hover:text-white px-4 py-2 font-medium transition-all duration-300 border-2 border-transparent hover:border-[#2C3E50]">
              Home
            </Link>
            <Link href="/about" className="text-[#2C3E50] hover:bg-[#2C3E50] hover:text-white px-4 py-2 font-medium transition-all duration-300 border-2 border-transparent hover:border-[#2C3E50]">
              About Us
            </Link>
            <Link href="/blog" className="text-[#2C3E50] hover:bg-[#2C3E50] hover:text-white px-4 py-2 font-medium transition-all duration-300 border-2 border-transparent hover:border-[#2C3E50]">
              Blog
            </Link>
            <Link href="/contact" className="bg-[#2C3E50] text-white hover:bg-[#34495E] px-6 py-2 font-medium transition-all duration-300 border-2 border-[#2C3E50] hover:border-[#34495E]">
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-none text-[#2C3E50] hover:text-white hover:bg-[#2C3E50] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#2C3E50] border-2 border-transparent hover:border-[#2C3E50] transition-all duration-300"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg border-t-2 border-[#D4D0C8]">
            <Link href="/" className="text-[#2C3E50] hover:bg-[#2C3E50] hover:text-white block px-4 py-3 font-medium transition-all duration-300 border-2 border-transparent hover:border-[#2C3E50]">
              Home
            </Link>
            <Link href="/about" className="text-[#2C3E50] hover:bg-[#2C3E50] hover:text-white block px-4 py-3 font-medium transition-all duration-300 border-2 border-transparent hover:border-[#2C3E50]">
              About Us
            </Link>
            <Link href="/blog" className="text-[#2C3E50] hover:bg-[#2C3E50] hover:text-white block px-4 py-3 font-medium transition-all duration-300 border-2 border-transparent hover:border-[#2C3E50]">
              Blog
            </Link>
            <Link href="/contact" className="bg-[#2C3E50] text-white hover:bg-[#34495E] block px-4 py-3 font-medium transition-all duration-300 border-2 border-[#2C3E50] hover:border-[#34495E]">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 