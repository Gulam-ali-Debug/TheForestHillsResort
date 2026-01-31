'use client';

import { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';

const TopContactBar = () => {
  const [showBar, setShowBar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if we're at the top of the page (with a small threshold)
      const isAtTop = currentScrollY <= 5;
      
      // If we're at the top AND user tries to scroll up (overscroll/touch bounce)
      if (isAtTop && currentScrollY < lastScrollY) {
        setShowBar(true);
      } 
      // If user scrolls down from top position
      else if (isAtTop && currentScrollY > lastScrollY) {
        setShowBar(false);
      }
      // If we're not at the top anymore, hide the bar
      else if (!isAtTop) {
        setShowBar(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div 
      className={`bg-gray-900 text-white py-2 px-4 transition-all duration-300 ease-in-out ${
        showBar ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        width: '100%'
      }}
    >
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center space-y-1 sm:space-y-0">
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
          <div className="flex items-center space-x-1">
            <FaPhone className="text-gray-300 mr-1" />
            <span className="text-gray-300">+91 63779 42494</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaEnvelope className="text-gray-300 mr-1" />
            <span className="text-gray-300">info@theforesthillsresort.com</span>
          </div>
        </div>

        <div className="flex space-x-4 mt-2 sm:mt-0">
          <a
            href="tel:+91 63779 42494"
            className="text-gray-300 hover:text-white transition"
            aria-label="Call us"
          >
            <FaPhone />
          </a>
          <a
            href="mailto:info@theforesthillsresort.com"
            className="text-gray-300 hover:text-white transition"
            aria-label="Email us"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=916377942494&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.facebook.com/people/The-Forest-Hills-Resort/100086491230140/#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/theforesthillsresort/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopContactBar;