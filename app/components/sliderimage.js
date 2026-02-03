'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1769879455504-45f4b93131f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Forest Hills Resort',
    title: 'The Forest Hills Resort',
    subtitle: 'Luxury Amidst Nature in Udaipur',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1769879455980-aaf2d893a1d9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Luxury Rooms',
    title: 'Luxury Accommodations',
    subtitle: 'Elegant rooms with stunning views',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80',
    alt: 'Resort Pool',
    title: 'Infinity Pool',
    subtitle: 'Overlooking the Aravalli Hills',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1769974707320-1b334e3aeb8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Fine Dining',
    title: 'Fine Dining',
    subtitle: 'Culinary experiences to remember',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80',
    alt: 'Spa & Wellness',
    title: 'Spa & Wellness',
    subtitle: 'Rejuvenate your mind and body',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80',
    alt: 'Udaipur Views',
    title: 'Panoramic Views',
    subtitle: 'Breathtaking vistas of Udaipur',
  }
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  
  // Refs for touch handling
  const sliderRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startY = useRef(0);
  const currentX = useRef(0);
  const slidesContainerRef = useRef(null);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning]);

  const goToSlide = useCallback((index) => {
    if (isTransitioning || currentSlide === index) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning, currentSlide]);

  // Handle touch start
  const handleTouchStart = (e) => {
    isDragging.current = true;
    startX.current = e.touches[0].clientX;
    startY.current = e.touches[0].clientY;
    currentX.current = startX.current;
    
    // Reset drag offset
    setDragOffset(0);
  };

  // Handle touch move
  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    
    const touchX = e.touches[0].clientX;
    const touchY = e.touches[0].clientY;
    
    // Calculate movement
    const deltaX = touchX - currentX.current;
    const deltaY = touchY - startY.current;
    
    // Check if it's mostly horizontal movement
    if (Math.abs(touchX - startX.current) > Math.abs(touchY - startY.current)) {
      // It's horizontal movement - update drag offset
      currentX.current = touchX;
      setDragOffset(touchX - startX.current);
      
      // Prevent vertical scroll during horizontal drag
      e.preventDefault();
    }
  };

  // Handle touch end
  const handleTouchEnd = (e) => {
    if (!isDragging.current) return;
    
    const endX = e.changedTouches[0].clientX;
    const deltaX = endX - startX.current;
    const swipeThreshold = 50;
    
    // Determine if it was a swipe
    if (Math.abs(deltaX) > swipeThreshold) {
      if (deltaX > 0) {
        // Swipe right - go to previous slide
        prevSlide();
      } else {
        // Swipe left - go to next slide
        nextSlide();
      }
    }
    
    // Reset dragging state
    isDragging.current = false;
    setDragOffset(0);
  };

  // Mouse handlers for desktop
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX;
    currentX.current = startX.current;
    setDragOffset(0);
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    
    const mouseX = e.clientX;
    const deltaX = mouseX - currentX.current;
    
    currentX.current = mouseX;
    setDragOffset(mouseX - startX.current);
  };

  const handleMouseUp = (e) => {
    if (!isDragging.current) return;
    
    const endX = e.clientX;
    const deltaX = endX - startX.current;
    const swipeThreshold = 80;
    
    if (Math.abs(deltaX) > swipeThreshold) {
      if (deltaX > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
    
    isDragging.current = false;
    setDragOffset(0);
  };

  // Handle mouse leave
  const handleMouseLeave = () => {
    if (isDragging.current) {
      isDragging.current = false;
      setDragOffset(0);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging.current) {
        nextSlide();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide]);

  // Setup event listeners
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Touch events
    slider.addEventListener('touchstart', handleTouchStart, { passive: true });
    slider.addEventListener('touchmove', handleTouchMove, { passive: false });
    slider.addEventListener('touchend', handleTouchEnd);
    slider.addEventListener('touchcancel', handleTouchEnd);

    // Mouse events
    slider.addEventListener('mousedown', handleMouseDown);
    slider.addEventListener('mouseleave', handleMouseLeave);
    
    // Global mouse handlers
    const handleGlobalMouseMove = (e) => handleMouseMove(e);
    const handleGlobalMouseUp = (e) => handleMouseUp(e);
    
    window.addEventListener('mousemove', handleGlobalMouseMove);
    window.addEventListener('mouseup', handleGlobalMouseUp);

    return () => {
      slider.removeEventListener('touchstart', handleTouchStart);
      slider.removeEventListener('touchmove', handleTouchMove);
      slider.removeEventListener('touchend', handleTouchEnd);
      slider.removeEventListener('touchcancel', handleTouchEnd);
      
      slider.removeEventListener('mousedown', handleMouseDown);
      slider.removeEventListener('mouseleave', handleMouseLeave);
      
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, []);

  // Calculate transform with drag offset
  const getTransform = () => {
    if (!isDragging.current || dragOffset === 0) {
      return `translateX(-${currentSlide * 100}%)`;
    }
    
    // Calculate percentage based on slider width
    const slider = sliderRef.current;
    const slideWidth = slider ? slider.clientWidth : 100;
    const dragPercentage = (dragOffset / slideWidth) * 100;
    
    return `translateX(calc(-${currentSlide * 100}% + ${dragPercentage}px))`;
  };

  return (
    <section 
      ref={sliderRef}
      className="relative h-screen overflow-hidden bg-black"
      style={{ 
        userSelect: 'none',
        cursor: isDragging.current ? 'grabbing' : 'default'
      }}
    >
      <div 
        ref={slidesContainerRef}
        className="flex h-full transition-transform duration-300 ease-out"
        style={{ 
          transform: getTransform(),
          transition: isDragging.current ? 'none' : 'transform 300ms ease-out'
        }}
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
                className="w-full h-full object-cover"
                loading={index < 2 ? 'eager' : 'lazy'}
                draggable="false"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>
            </div>

            <div className="relative h-full flex flex-col justify-center items-center px-4 md:px-8 lg:px-16">
              <div className="max-w-6xl w-full text-center">
                <h2 
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6"
                >
                  {slide.title}
                </h2>
                <p 
                  className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 md:mb-12"
                >
                  {slide.subtitle}
                </p>
                <div 
                  className="flex gap-4 justify-center"
                >
                  <Link 
                    href="/contact"
                    className="bg-white text-black px-6 md:px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                  >
                    Book Now
                  </Link>
                  <button className="bg-transparent border-2 border-white text-white px-6 md:px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                    Explore More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons - visible on desktop */}
      <button
        onClick={prevSlide}
        disabled={isTransitioning || isDragging.current}
        className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 md:p-4 rounded-full transition-all duration-300 z-20 disabled:opacity-50 hidden sm:block"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        disabled={isTransitioning || isDragging.current}
        className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 md:p-4 rounded-full transition-all duration-300 z-20 disabled:opacity-50 hidden sm:block"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning || isDragging.current}
            className={`transition-all duration-300 ${currentSlide === index ? 'scale-125' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
          >
            <div 
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-white' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          </button>
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800/30 z-20">
        <div 
          className="h-full bg-gradient-to-r from-white to-white/80 transition-all duration-500 ease-out"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-8 right-4 md:right-8 text-white/60 text-sm font-mono z-20">
        {currentSlide + 1} / {slides.length}
      </div>
    </section>
  );
};

export default Slider;