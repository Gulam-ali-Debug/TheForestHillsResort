'use client';

const DiningSection = () => {
  const restaurants = [
    {
      id: 1,
      title: "SOYA",
      subtitle: "CHINESE RESTAURANT",
      description: "Regarded by critics as one of the best Chinese restaurants. Authentic Dim Sum and modern Asian cuisine in an elegant setting.",
      image: "https://images.unsplash.com/photo-1554679665-f5537f187268?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80",
      hours: "07:00 - 22:00",
    },
    {
      id: 2,
      title: "ARIA",
      subtitle: "FINE DINING",
      description: "Michelin-starred European cuisine with panoramic views. Innovative dishes using locally sourced seasonal ingredients.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80",
      hours: "18:00 - 23:00",
    },
    {
      id: 3,
      title: "THE GRILL",
      subtitle: "STEAKHOUSE",
      description: "Premium dry-aged steaks and fresh seafood. Wood-fired grill and extensive wine selection in a rustic elegant space.",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80",
      hours: "17:00 - 23:00",
    },
    {
      id: 4,
      title: "SUSHI MASTER",
      subtitle: "JAPANESE",
      description: "Edo-style sushi by Tokyo-trained masters. Omakase experience with the freshest fish and premium sake pairings.",
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80",
      hours: "17:30 - 22:30",
    },
    {
      id: 5,
      title: "LA PÂTISSERIE",
      subtitle: "FRENCH CAFÉ",
      description: "Parisian-style patisserie with artisanal pastries. Afternoon tea service and specialty coffees in a sunlit atrium.",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80",
      hours: "07:00 - 19:00",
    },
    {
      id: 6,
      title: "SPICE MARKET",
      subtitle: "INDIAN & MIDDLE EASTERN",
      description: "Vibrant flavors from across Asia. Traditional spices meet modern techniques in a contemporary colorful setting.",
      image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80",
      hours: "12:00 - 22:30",
    }
  ];

  return (
    <section className="min-h-screen bg-black text-white">
      {/* Hero Image Section */}
      <div className="relative h-screen w-full">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80"
          alt="Fine Dining at Forest Hills Resort"
          className="w-full h-full object-cover"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        
        {/* Text Content in Bottom-Left Corner */}
        <div className="absolute bottom-0 left-0 p-8 md:p-12 lg:p-16 max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-tight leading-tight">
            Dining Experiences
          </h1>
          <div className="w-24 h-1 bg-white mb-6"></div>
          <p className="text-gray-300 text-xl md:text-2xl font-light leading-relaxed">
            Six distinct culinary venues offering exceptional dining in elegant settings
          </p>
        </div>
      </div>

      {/* Rest of the content */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Restaurants Grid - Cross Layout */}
          <div className="space-y-20">
            {restaurants.map((restaurant, index) => (
              <div 
                key={restaurant.id} 
                className={`group cursor-pointer ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
              >
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                  
                  {/* Image Section - Alternating Sides */}
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden">
                      <img
                        src={restaurant.image}
                        alt={restaurant.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    </div>
                  </div>
                  
                  {/* Text Section */}
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="space-y-6">
                      
                      {/* Title and Subtitle */}
                      <div>
                        <h2 className="text-3xl font-light text-white mb-2">
                          {restaurant.title}
                        </h2>
                        <p className="text-gray-400 text-sm tracking-wider uppercase font-light">
                          {restaurant.subtitle}
                        </p>
                      </div>
                      
                      {/* Divider */}
                      <div className="w-16 h-0.5 bg-white/30"></div>
                      
                      {/* Description */}
                      <p className="text-gray-400 font-light leading-relaxed text-lg">
                        {restaurant.description}
                      </p>
                      
                      {/* Hours */}
                      <div className="border-t border-gray-800 pt-6">
                        <div className="text-sm text-gray-400 font-light mb-2">HOURS</div>
                        <div className="text-xl font-light">
                          {restaurant.hours}
                        </div>
                      </div>
                      
                      {/* Button */}
                      <div className="mt-6">
                        <a 
                          href="#"
                          className="inline-flex items-center gap-2 text-white font-light hover:text-gray-300 transition-colors"
                        >
                          <span>View menu & reserve</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>

          {/* Footer Section */}
          <div className="mt-20 pt-12 border-t border-gray-800">
            <div className="text-center">
              <h3 className="text-3xl font-light text-white mb-8">Reservations & Information</h3>
              <p className="text-gray-400 text-lg font-light mb-8 max-w-2xl mx-auto">
                For all dining enquiries and special requests
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="p-8 border border-gray-800 rounded-xl hover:border-gray-600 transition-all duration-300">
                  <div className="text-2xl mb-4">📞</div>
                  <h4 className="text-lg font-light mb-2">BY PHONE</h4>
                  <p className="text-gray-400 font-light">+47 123 456 78</p>
                </div>
                
                <div className="p-8 border border-gray-800 rounded-xl hover:border-gray-600 transition-all duration-300">
                  <div className="text-2xl mb-4">📧</div>
                  <h4 className="text-lg font-light mb-2">BY EMAIL</h4>
                  <p className="text-gray-400 font-light">dining@foresthills.com</p>
                </div>
                
                <div className="p-8 border border-gray-800 rounded-xl hover:border-gray-600 transition-all duration-300">
                  <div className="text-2xl mb-4">📍</div>
                  <h4 className="text-lg font-light mb-2">IN PERSON</h4>
                  <p className="text-gray-400 font-light">Hotel Concierge Desk</p>
                </div>
              </div>
              
              <div className="border-t border-gray-800 pt-8">
                <p className="text-gray-400 text-sm font-light">
                  Advance reservations recommended • Smart casual dress code • 
                  All dietary requirements accommodated • Private dining available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiningSection;