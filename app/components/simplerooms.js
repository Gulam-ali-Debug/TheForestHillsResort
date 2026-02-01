'use client';

import { useState } from 'react';
import Link from 'next/link';

const SimpleRoomsSection = () => {
  const [activeRoom, setActiveRoom] = useState(null);

  const rooms = [
    {
      id: 1,
      title: "LUXURY SUITE",
      description: "Experience unparalleled comfort with panoramic city views",
      price: "From $399/night",
      imageUrl: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["King Size Bed", "Private Balcony", "City View", "Jacuzzi"]
    },
    {
      id: 2,
      title: "EXECUTIVE ROOM",
      description: "Perfect blend of productivity and relaxation",
      price: "From $299/night",
      imageUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Work Desk", "High-Speed WiFi", "Coffee Station", "Room Service"]
    },
    {
      id: 3,
      title: "DELUXE DOUBLE",
      description: "Spacious comfort for romantic getaways",
      price: "From $349/night",
      imageUrl: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Double Bed", "Mountain View", "Minibar", "Bathrobes"]
    },
    {
      id: 4,
      title: "PRESIDENTIAL SUITE",
      description: "The ultimate in luxury and privacy",
      price: "From $899/night",
      imageUrl: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Separate Living", "Private Pool", "Butler Service", "Panoramic Views"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER - Big and Simple */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            OUR ROOMS
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience luxury redefined in our meticulously designed accommodations.
            Each room offers a unique blend of comfort, elegance, and breathtaking views.
          </p>
        </div>

        {/* ROOMS GRID - Image with Text Overlay */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {rooms.map((room) => (
            <div 
              key={room.id}
              className="relative group overflow-hidden rounded-lg cursor-pointer"
              onMouseEnter={() => setActiveRoom(room.id)}
              onMouseLeave={() => setActiveRoom(null)}
            >
              {/* Room Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={room.imageUrl}
                  alt={room.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Dark Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                
                {/* Text Overlay */}
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                  
                  {/* Room Title */}
                  <h3 className="text-3xl md:text-4xl font-bold mb-3">
                    {room.title}
                  </h3>
                  
                  {/* Room Description */}
                  <p className="text-lg text-gray-200 mb-4 max-w-md">
                    {room.description}
                  </p>
                  
                  {/* Price */}
                  <div className="text-xl font-semibold mb-6">
                    {room.price}
                  </div>
                  
                  {/* Features (Appear on hover) */}
                  <div className={`space-y-2 transition-all duration-500 ${
                    activeRoom === room.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}>
                    <div className="flex flex-wrap gap-3">
                      {room.features.map((feature, index) => (
                        <span 
                          key={index}
                          className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    {/* Book Button */}
                    <Link href="/contact">
                      <span className="mt-4 bg-white text-black px-6 py-3 font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-block cursor-pointer">
                        BOOK NOW
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER TEXT */}
        <div className="mt-20 text-center">
          <div className="border-t border-white/20 pt-12">
            <h3 className="text-3xl font-bold mb-6">
              ALL ROOMS INCLUDE
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-lg text-gray-300">
              <div className="p-4">
                <div className="text-2xl mb-2">🛏️</div>
                Premium Bedding
              </div>
              <div className="p-4">
                <div className="text-2xl mb-2">📶</div>
                High-Speed WiFi
              </div>
              <div className="p-4">
                <div className="text-2xl mb-2">📺</div>
                Smart TV & Entertainment
              </div>
              <div className="p-4">
                <div className="text-2xl mb-2">☕</div>
                24/7 Room Service
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SimpleRoomsSection;