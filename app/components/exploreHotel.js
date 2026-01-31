'use client'
import React from 'react';

const ExploreOurHotel = () => {
  const attractions = [
    {
      id: 1,
      title: "Mountain Trails",
      distance: "50m",
      description: "Direct access to serene mountain trails with breathtaking views. Perfect for morning hikes and sunset walks through the pristine forest landscape.",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      link: "#",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Infinity Pool",
      distance: "On-site",
      description: "Our stunning infinity pool overlooking the forest valley. Experience the ultimate relaxation with panoramic views of the surrounding hills.",
      image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      link: "#",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Forest Spa",
      distance: "On-site",
      description: "A luxurious spa surrounded by ancient trees. Rejuvenate with organic treatments while listening to the gentle sounds of the forest.",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      link: "#",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Fine Dining",
      distance: "On-site",
      description: "Gourmet restaurant featuring locally sourced ingredients. Experience culinary excellence with menus inspired by the forest's bounty.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      link: "#",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Observation Deck",
      distance: "100m",
      description: "Elevated platform offering 360-degree views of the valley. Watch the sunset paint the mountains in golden hues every evening.",
      image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      link: "#",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      id: 6,
      title: "Meditation Garden",
      distance: "On-site",
      description: "Tranquil Japanese-inspired garden with water features. Find peace and mindfulness in this carefully curated natural sanctuary.",
      image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      link: "#",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-light text-white mb-6 tracking-tight">Explore Our Hotel</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto font-light leading-relaxed">
            The perfect starting point. From our hotel every sight worth seeing is close by.
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Main Content */}
          <div className="space-y-12">
            {/* Main Featured Image */}
            <div className="relative h-96 rounded-xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80"
                alt="Forest Hills Resort Main Building"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="inline-flex items-center gap-3 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="font-light tracking-wide">THE FOREST HILLS RESORT</span>
                </div>
                <h3 className="text-3xl font-light mb-2">Your Gateway to Nature</h3>
                <p className="text-gray-300 font-light max-w-lg">
                  Experience luxury seamlessly integrated with the natural beauty of Rajasthan's hills.
                </p>
              </div>
            </div>

            {/* First Two Attractions */}
            <div className="space-y-8">
              {attractions.slice(0, 2).map((attraction) => (
                <div key={attraction.id} className="flex gap-6 group cursor-pointer">
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                    {attraction.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-light">{attraction.title}</h4>
                      <span className="text-sm font-light text-gray-400 bg-white/10 px-3 py-1 rounded-full">
                        {attraction.distance}
                      </span>
                    </div>
                    <p className="text-gray-400 font-light leading-relaxed">
                      {attraction.description}
                    </p>
                    <a 
                      href={attraction.link}
                      className="inline-flex items-center gap-2 text-white mt-4 font-light hover:text-gray-300 transition-colors"
                    >
                      <span>Discover more</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - 4 Attractions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {attractions.slice(2, 6).map((attraction) => (
              <div 
                key={attraction.id} 
                className="group cursor-pointer"
              >
                <div className="relative h-64 rounded-xl overflow-hidden mb-4">
                  <img 
                    src={attraction.image}
                    alt={attraction.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <h5 className="text-xl font-light text-white">{attraction.title}</h5>
                      <span className="text-sm font-light text-white bg-black/50 px-3 py-1 rounded-full">
                        {attraction.distance}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 font-light mb-4 leading-relaxed">
                  {attraction.description}
                </p>
                <a 
                  href={attraction.link}
                  className="inline-flex items-center gap-2 text-white font-light hover:text-gray-300 transition-colors"
                >
                  <span>Learn more</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 pt-12 border-t border-gray-800">
          <div className="text-center">
            <p className="text-gray-400 text-lg font-light mb-8 max-w-2xl mx-auto">
              Discover more about the surrounding area and plan your perfect getaway
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="https://www.tourism.rajasthan.gov.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 text-sm font-light tracking-wider uppercase rounded-full"
              >
                <span>Read more at tourism.rajasthan.gov.in</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a 
                href="https://www.udaipurtourism.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 border border-gray-600 text-gray-400 hover:border-white hover:text-white transition-all duration-300 text-sm font-light tracking-wider uppercase rounded-full"
              >
                <span>Read more at udaipurtourism.com</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreOurHotel;