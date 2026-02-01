'use client';

import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    // Set header transparency on all device sizes (not just desktop) & increase transparency on both sides
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-black/60 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-4">
        {/* Decorative overlays for increased transparency left/right */}
        <div className="absolute inset-y-0 left-0 w-1/3 pointer-events-none z-[-1] bg-gradient-to-r from-black/30 via-transparent to-transparent"></div>
        <div className="absolute inset-y-0 right-0 w-1/3 pointer-events-none z-[-1] bg-gradient-to-l from-black/30 via-transparent to-transparent"></div>
        
        {/* Main Header Content - Increased Height */}
        <div className="flex justify-between items-center py-5 relative">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              The Forest Hills Resort
            </h1>
            <p className="text-sm md:text-base text-gray-300 mt-1 font-light">
              Udaipur's Premier Luxury Destination
            </p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link
                  href="/"
                  className="text-gray-200 hover:text-white transition border-b-2 border-transparent hover:border-white pb-1 font-light tracking-tight text-xl"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/rooms"
                  className="text-gray-200 hover:text-white transition border-b-2 border-transparent hover:border-white pb-1 font-light tracking-tight text-xl"
                >
                  Rooms
                </Link>
              </li>
              <li>
                <Link
                  href="/dining"
                  className="text-gray-200 hover:text-white transition border-b-2 border-transparent hover:border-white pb-1 font-light tracking-tight text-xl"
                >
                  Dining
                </Link>
              </li>
              <li>
                <Link
                  href="/explore-udaipur"
                  className="text-gray-200 hover:text-white transition border-b-2 border-transparent hover:border-white pb-1 font-light tracking-tight text-xl"
                >
                  Explore Udaipur
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-200 hover:text-white transition border-b-2 border-transparent hover:border-white pb-1 font-light tracking-tight text-xl"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden text-white focus:outline-none p-2"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 pb-3' : 'max-h-0 opacity-0'
          }`}
        >
          {/* Add same transparency to the mobile menu background */}
          <ul className="space-y-0 bg-black/40 backdrop-blur-[30%] rounded-b-lg shadow-lg">
            <li>
              <Link
                href="/"
                className="block text-gray-200 hover:text-white hover:bg-gray-800/40 transition py-4 px-6 border-b border-gray-700 font-light tracking-tight leading-relaxed text-xl"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/rooms"
                className="block text-gray-200 hover:text-white hover:bg-gray-800/40 transition py-4 px-6 border-b border-gray-700 font-light tracking-tight leading-relaxed text-xl"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Rooms
              </Link>
            </li>
            <li>
              <Link
                href="/dining"
                className="block text-gray-200 hover:text-white hover:bg-gray-800/40 transition py-4 px-6 border-b border-gray-700 font-light tracking-tight leading-relaxed text-xl"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Dining
              </Link>
            </li>
            <li>
              <Link
                href="/explore-udaipur"
                className="block text-gray-200 hover:text-white hover:bg-gray-800/40 transition py-4 px-6 border-b border-gray-700 font-light tracking-tight leading-relaxed text-xl"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Explore Udaipur
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block text-gray-200 hover:text-white hover:bg-gray-800/40 transition py-4 px-6 font-light tracking-tight leading-relaxed text-xl"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;