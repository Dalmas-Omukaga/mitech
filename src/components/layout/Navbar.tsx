'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo with Image */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <Image 
                src="/images/logo.png" 
                alt="Mitech Home Solutions Logo" 
                width={40} 
                height={40} 
                className="object-contain"
              />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-gray-900 group-hover:text-blue-600 transition-colors">
              MITECH <span className="text-blue-600">HOME SOLUTIONS</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold text-gray-800">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <Link href="/services" className="hover:text-blue-600 transition-colors">Services</Link>
            <Link href="/about" className="hover:text-blue-600 transition-colors">About Us</Link>
            <Link href="/locations" className="hover:text-blue-600 transition-colors">Counties</Link>
            <Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-6 py-3 rounded-full shadow-md transition-all duration-200"
            >
              Get Evaluation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-gray-900 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-3 shadow-lg">
          <Link 
            href="/" 
            onClick={() => setIsOpen(false)} 
            className="block text-gray-800 hover:text-blue-600 font-semibold py-2"
          >
            Home
          </Link>
          <Link 
            href="/services" 
            onClick={() => setIsOpen(false)} 
            className="block text-gray-800 hover:text-blue-600 font-semibold py-2"
          >
            Services
          </Link>
          <Link 
            href="/about" 
            onClick={() => setIsOpen(false)} 
            className="block text-gray-800 hover:text-blue-600 font-semibold py-2"
          >
            About Us
          </Link>
          <Link 
            href="/locations" 
            onClick={() => setIsOpen(false)} 
            className="block text-gray-800 hover:text-blue-600 font-semibold py-2"
          >
            Counties
          </Link>
          <Link 
            href="/contact" 
            onClick={() => setIsOpen(false)} 
            className="block text-gray-800 hover:text-blue-600 font-semibold py-2"
          >
            Contact
          </Link>
          <div className="pt-2">
            <Link 
              href="/contact" 
              onClick={() => setIsOpen(false)} 
              className="block text-center bg-blue-600 text-white font-bold py-3 rounded-full shadow-md"
            >
              Get Evaluation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}