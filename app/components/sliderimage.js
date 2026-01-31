'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    image: './slider_image1.JPG',
    unsplashFallback: './slider_image1.JPG',
    alt: 'Forest Hills Resort',
    title: 'The Forest Hills Resort',
    subtitle: 'Luxury Amidst Nature in Udaipur',
    isLocal: true,
  },
  {
    id: 2,
    image: './slider_image2.JPG',
    unsplashFallback: './slider_image2.JPG',
    alt: 'Luxury Rooms',
    title: 'Luxury Accommodations',
    subtitle: 'Elegant rooms with stunning views',
    isLocal: true,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80',
    alt: 'Resort Pool',
    title: 'Infinity Pool',
    subtitle: 'Overlooking the Aravalli Hills',
    isLocal: false,
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80',
    alt: 'Fine Dining',
    title: 'Fine Dining',
    subtitle: 'Culinary experiences to remember',
    isLocal: false,
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80',
    alt: 'Spa & Wellness',
    title: 'Spa & Wellness',
    subtitle: 'Rejuvenate your mind and body',
    isLocal: false,
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80',
    alt: 'Udaipur Views',
    title: 'Panoramic Views',
    subtitle: 'Breathtaking vistas of Udaipur',
    isLocal: false,
  }
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [localImageErrors, setLocalImageErrors] = useState({});

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);

  const goToSlide = useCallback((index) => {
    if (isTransitioning || currentSlide === index) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning, currentSlide]);

  const handleImageError = useCallback((slide, e) => {
    // If it's a local image, log a visible warning for developer!
    if (slide.isLocal) {
      setLocalImageErrors(prev => ({ ...prev, [slide.id]: true }));
      // The following is a clear error message for devs:
      // eslint-disable-next-line no-console
      console.error(
        `[SliderImage] LOCAL image failed to load: "${slide.image}".\n` +
        `• If you develop locally, check that "/public${slide.image}" exists and is not misspelled.\n` +
        `• ${typeof window !== 'undefined' && 'Try loading this in your browser: ' + slide.image}`
      );
    }

    // Use fallback if defined
    if (slide.unsplashFallback) {
      // Avoid infinite error loop if fallback also fails
      if (e.target.src !== slide.unsplashFallback) {
        e.target.src = slide.unsplashFallback;
      }
    } else {
      e.target.alt = 'Failed to load image';
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key >= '1' && e.key <= '6') {
        const index = parseInt(e.key) - 1;
        if (index < slides.length) goToSlide(index);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide, goToSlide]);

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      <div 
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div 
            key={slide.id} 
            className="relative min-w-full h-full"
          >
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover transition-opacity duration-1000"
                onError={(e) => handleImageError(slide, e)}
                loading={index < 2 ? 'eager' : 'lazy'}
                style={localImageErrors[slide.id] ? { background: '#222', color: 'red' } : undefined}
              />
              {(localImageErrors[slide.id]) && slide.isLocal && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/70 text-red-400 font-bold text-xl z-10 pointer-events-none">
                  Failed to load local image:<br />{slide.image}
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>
            </div>

            <div className="relative h-full flex flex-col justify-center items-center px-4 md:px-8 lg:px-16">
              <div className="max-w-6xl w-full text-center">

                <h2 
                  className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 transition-all duration-1000 delay-300 ${
                    currentSlide === index 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ 
                    textShadow: '2px 2px 8px rgba(0,0,0,0.8)'
                  }}
                >
                  {slide.title}
                </h2>
                <p 
                  className={`text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 md:mb-12 transition-all duration-1000 delay-500 ${
                    currentSlide === index 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ 
                    textShadow: '1px 1px 4px rgba(0,0,0,0.6)'
                  }}
                >
                  {slide.subtitle}
                </p>
                <div 
                  className={`flex gap-4 justify-center transition-all duration-1000 delay-700 ${
                    currentSlide === index 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                >
                  <button className="bg-white text-black px-6 md:px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Book Now
                  </button>
                  <button className="bg-transparent border-2 border-white text-white px-6 md:px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                    Explore More
                  </button>
                </div>
              </div>
              <div className="absolute bottom-8 left-8 text-white/60 text-sm font-mono hidden md:block">
                {String(index + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        disabled={isTransitioning}
        className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-black/40 backdrop-blur-sm hover:bg-black/60 text-white p-4 rounded-full transition-all duration-300 z-20 group disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        disabled={isTransitioning}
        className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-black/40 backdrop-blur-sm hover:bg-black/60 text-white p-4 rounded-full transition-all duration-300 z-20 group disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className={`group relative transition-all duration-300 ${
              currentSlide === index ? 'scale-125' : 'hover:scale-110'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            <div 
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-white shadow-lg' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black/75 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Slide {index + 1}
            </div>
          </button>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800/50 backdrop-blur-sm z-20">
        <div 
          className="h-full bg-gradient-to-r from-white to-white/80 transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(255,255,255,0.3)]"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      <button
        onClick={() => {
          console.log('Play/Pause clicked');
        }}
        className="absolute bottom-8 right-8 bg-black/40 backdrop-blur-sm hover:bg-black/60 text-white p-3 rounded-full transition-all duration-300 z-20"
        aria-label="Pause autoplay"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
        </svg>
      </button>

      <div className="absolute bottom-24 right-8 text-white/60 text-sm font-mono z-20">
        {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
      </div>
    </section>
  );
}

export default Slider;
