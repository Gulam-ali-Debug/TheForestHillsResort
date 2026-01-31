'use client';

import { useState } from 'react';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaWhatsapp, 
  FaPaperPlane 
} from 'react-icons/fa';
import Link from 'next/link';


const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribed with email:', email);
    setEmail('');
    // You can add your API call here
  };

  return (
    <footer className="bg-black text-white pt-16 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* About Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6">The Forest Hills Resort</h2>
            <p className="text-gray-300 leading-relaxed">
              Experience luxury and nature at our award-winning resort located
              in the beautiful city of Udaipur. With breathtaking views of the
              Aravalli Hills and world-class amenities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-300">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-gray-300 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="hover:text-gray-300 transition">
                  Rooms & Suites
                </Link>
              </li>
              <li>
                <Link href="/dining" className="hover:text-gray-300 transition">
                  Dining
                </Link>
              </li>
              <li>
                <Link href="/explore-udaipur" className="hover:text-gray-300 transition">
                  Explore Udaipur
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-300">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start hover:text-gray-400 cursor-pointer">
                <FaMapMarkerAlt className="mr-4 text-gray-300 mt-1 flex-shrink-0" />
                <span>Kewda khurd eklingpura, Near Kalam Gaati Tehsil Girwa, Udaipur, Rajasthan 313901</span>
              </li>
              <li className="flex items-center hover:text-gray-400 cursor-pointer">
                <FaPhone className="mr-4 text-gray-300 flex-shrink-0" />
                <span>+91 63779 42494</span>
              </li>
              <li className="flex items-center hover:text-gray-400  cursor-pointer">
                <FaEnvelope className="mr-4 text-gray-300 flex-shrink-0" />
                <span>info@theforesthillsresort.com</span>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-300">
              Connect With Us
            </h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/15551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for special offers.
            </p>
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-3 rounded-l-lg text-gray-800 w-full bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 px-5 py-3 rounded-r-lg transition"
              >
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; 2026 The Forest Hills Resort. All rights reserved. |
            <Link href="/privacy-policy" className="hover:text-white underline mx-1">
              Privacy Policy
            </Link>
            |
            <Link href="/terms" className="hover:text-white underline mx-1">
              Terms & Conditions
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;