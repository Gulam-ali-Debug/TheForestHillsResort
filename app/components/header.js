'use client';

import { useState } from 'react';
import Link from 'next/link';

const playwriteFontStyle = {
  fontFamily: '"Festive", cursive',
  fontWeight: 400,
  fontStyle: 'normal',
  fontSize: '1.5rem'
};

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-black/87 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4">
        {/* Main Header Content - Increased Height */}
        <div className="flex justify-between items-center py-5">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              The Forest Hills Resort
            </h1>
            <p className="text-sm md:text-base text-gray-300 mt-1">
              Udaipur's Premier Luxury Destination
            </p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link
                  href="/"
                  className="text-gray-200 hover:text-white transition border-b-2 border-transparent hover:border-white pb-1"
                  style={playwriteFontStyle}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/rooms"
                  className="text-gray-200 hover:text-white transition border-b-2 border-transparent hover:border-white pb-1"
                  style={playwriteFontStyle}
                >
                  Rooms
                </Link>
              </li>
              <li>
                <Link
                  href="/amenties"
                  className="text-gray-200 hover:text-white transition border-b-2 border-transparent hover:border-white pb-1"
                  style={playwriteFontStyle}
                >
                  Amenities
                </Link>
              </li>
              <li>
                <Link
                  href="/dining"
                  className="text-gray-200 hover:text-white transition border-b-2 border-transparent hover:border-white pb-1"
                  style={playwriteFontStyle}
                >
                  Dining
                </Link>
              </li>
              <li>
                <Link
                  href="/explore-udaipur"
                  className="text-gray-200 hover:text-white transition border-b-2 border-transparent hover:border-white pb-1"
                  style={playwriteFontStyle}
                >
                  Explore Udaipur
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-200 hover:text-white transition border-b-2 border-transparent hover:border-white pb-1"
                  style={playwriteFontStyle}
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
          <ul className="space-y-0 bg-black/95 backdrop-blur-sm rounded-b-lg shadow-lg">
            <li>
              <Link
                href="/"
                className="block text-gray-200 hover:text-white hover:bg-gray-800/50 transition py-4 px-6 border-b border-gray-700"
                style={playwriteFontStyle}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/rooms"
                className="block text-gray-200 hover:text-white hover:bg-gray-800/50 transition py-4 px-6 border-b border-gray-700"
                style={playwriteFontStyle}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Rooms
              </Link>
            </li>
            <li>
              <Link
                href="/amenties"
                className="block text-gray-200 hover:text-white hover:bg-gray-800/50 transition py-4 px-6 border-b border-gray-700"
                style={playwriteFontStyle}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Amenities
              </Link>
            </li>
            <li>
              <Link
                href="/dining"
                className="block text-gray-200 hover:text-white hover:bg-gray-800/50 transition py-4 px-6 border-b border-gray-700"
                style={playwriteFontStyle}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Dining
              </Link>
            </li>
            <li>
              <Link
                href="/explore-udaipur"
                className="block text-gray-200 hover:text-white hover:bg-gray-800/50 transition py-4 px-6 border-b border-gray-700"
                style={playwriteFontStyle}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Explore Udaipur
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block text-gray-200 hover:text-white hover:bg-gray-800/50 transition py-4 px-6"
                style={playwriteFontStyle}
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