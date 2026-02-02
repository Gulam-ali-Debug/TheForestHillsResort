'use client'
import React, { useState, useEffect, useRef } from 'react';

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const modalRef = useRef(null);
  const contentRef = useRef(null);
  const [touchStart, setTouchStart] = useState(null);
  const [verticalDelta, setVerticalDelta] = useState(0);
  const [isClosing, setIsClosing] = useState(false);

  const galleryImages = [
    { 
      id: 1, 
      src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80", 
      alt: "Main Resort Building", 
      category: "Resort",
      description: "Our beautiful main building surrounded by lush forest"
    },
    { 
      id: 2, 
      src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80", 
      alt: "Deluxe Room", 
      category: "Rooms",
      description: "Spacious deluxe room with mountain views"
    },
    { 
      id: 3, 
      src: "https://images.unsplash.com/photo-1564501049418-3c27787d01e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80", 
      alt: "Restaurant", 
      category: "Dining",
      description: "Fine dining experience with organic ingredients"
    },
    { 
      id: 4, 
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80", 
      alt: "Spa", 
      category: "Amenities",
      description: "Relax and rejuvenate at our luxury spa"
    },
    { 
      id: 5, 
      src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80", 
      alt: "Swimming Pool", 
      category: "Amenities",
      description: "Infinity pool overlooking the forest"
    },
    { 
      id: 6, 
      src: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80", 
      alt: "Mountain View", 
      category: "Views",
      description: "Breathtaking mountain views from our suites"
    },
    { 
      id: 7, 
      src: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80", 
      alt: "Forest Trail", 
      category: "Activities",
      description: "Explore nature through our guided forest trails"
    },
    { 
      id: 8, 
      src: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80", 
      alt: "Luxury Bathroom", 
      category: "Rooms",
      description: "Luxurious bathroom with natural stone finishes"
    },
    { 
      id: 9, 
      src: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80", 
      alt: "Garden View", 
      category: "Landscape",
      description: "Beautiful garden landscape with seasonal flowers"
    },
    { 
      id: 10, 
      src: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80", 
      alt: "Conference Hall", 
      category: "Facilities",
      description: "State-of-the-art conference facilities for business events"
    },
    { 
      id: 11, 
      src: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80", 
      alt: "Sunset View", 
      category: "Views",
      description: "Spectacular sunset views from our observation deck"
    },
    { 
      id: 12, 
      src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80", 
      alt: "Lobby Area", 
      category: "Interior",
      description: "Elegant lobby with comfortable seating areas"
    },
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedImage(null);
      setVerticalDelta(0);
      setIsClosing(false);
      document.body.style.overflow = 'auto';
    }, 300);
  };

  const handleKeyDown = (e, imageId) => {
    if (e.key === 'Enter') {
      const image = galleryImages.find(img => img.id === imageId);
      handleImageClick(image);
    }
    if (e.key === 'Escape' && selectedImage) {
      closeModal();
    }
  };

  // Simple touch handlers without complex logic
  const handleTouchStart = (e) => {
    setTouchStart({
      y: e.touches[0].clientY,
      x: e.touches[0].clientX,
    });
    setVerticalDelta(0);
  };

  const handleTouchMove = (e) => {
    if (!touchStart) return;
    
    const currentY = e.touches[0].clientY;
    const currentX = e.touches[0].clientX;
    const deltaY = currentY - touchStart.y;
    const deltaX = currentX - touchStart.x;
    
    // Only handle vertical swipes (more vertical than horizontal)
    if (Math.abs(deltaY) > Math.abs(deltaX)) {
      const content = contentRef.current;
      const isAtTop = content.scrollTop === 0;
      
      // If we're at the top and swiping down, handle modal drag
      if (isAtTop && deltaY > 0) {
        e.preventDefault();
        setVerticalDelta(deltaY);
      }
      // If we're NOT at the top, allow normal scrolling
      else if (!isAtTop) {
        // Allow normal scrolling - don't prevent default
      }
    }
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    
    const endY = e.changedTouches[0].clientY;
    const deltaY = endY - touchStart.y;
    
    // If swiped down enough, close the modal
    if (deltaY > 100) {
      closeModal();
    } else {
      // Reset position
      setVerticalDelta(0);
    }
    
    setTouchStart(null);
  };

  // Add event listeners for touch events
  useEffect(() => {
    const content = contentRef.current;
    if (!content || !selectedImage) return;

    content.addEventListener('touchstart', handleTouchStart, { passive: true });
    content.addEventListener('touchmove', handleTouchMove, { passive: false });
    content.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      content.removeEventListener('touchstart', handleTouchStart);
      content.removeEventListener('touchmove', handleTouchMove);
      content.removeEventListener('touchend', handleTouchEnd);
    };
  }, [selectedImage, touchStart]);

  // Add escape key listener
  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === 'Escape' && selectedImage) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [selectedImage]);

  // Clean up
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <div className="inline-block mb-4">
              <div className="w-20 h-1 bg-gray-500 mb-3 mx-auto"></div>
              <p className="text-sm font-light tracking-[0.3em] text-gray-400 uppercase mb-2">
                Watch for Experience
              </p>
            </div>
            <h2 className="text-5xl font-light text-white mb-4">
              Our Gallery
            </h2>
            <p className="text-gray-400 font-light max-w-2xl mx-auto">
              Experience the serene beauty of Forest Hills Resort through our curated collection.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Row 1 */}
            <div className="md:col-span-2">
              <div 
                className="relative h-64 rounded overflow-hidden shadow-md cursor-pointer group"
                onClick={() => handleImageClick(galleryImages[0])}
                onKeyDown={(e) => handleKeyDown(e, galleryImages[0].id)}
                tabIndex={0}
                role="button"
                aria-label={`View ${galleryImages[0].alt} in full screen`}
              >
                <img 
                  src={galleryImages[0].src} 
                  alt={galleryImages[0].alt}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                    <span className="inline-block text-white text-sm font-medium bg-black/80 px-3 py-1.5 rounded uppercase tracking-widest">
                      {galleryImages[0].category}
                    </span>
                    <h3 className="text-white text-xl font-medium mt-3 tracking-wide">
                      {galleryImages[0].alt}
                    </h3>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="text-center text-white p-4">
                      <p className="text-base mb-4 tracking-wide">CLICK TO EXPAND</p>
                      <div className="w-10 h-10 mx-auto border-2 border-white/50 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              <div 
                className="relative h-64 rounded overflow-hidden shadow-md cursor-pointer group"
                onClick={() => handleImageClick(galleryImages[1])}
                onKeyDown={(e) => handleKeyDown(e, galleryImages[1].id)}
                tabIndex={0}
                role="button"
                aria-label={`View ${galleryImages[1].alt} in full screen`}
              >
                <img 
                  src={galleryImages[1].src} 
                  alt={galleryImages[1].alt}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700">
                  <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                    <span className="inline-block text-white text-xs font-medium bg-black/80 px-3 py-1 rounded uppercase tracking-widest">
                      {galleryImages[1].category}
                    </span>
                    <h3 className="text-white text-lg font-medium mt-2 tracking-wide">
                      {galleryImages[1].alt}
                    </h3>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="text-center text-white p-4">
                      <div className="w-8 h-8 mx-auto border-2 border-white/50 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Row 2 */}
            <div className="md:col-span-1">
              <div 
                className="relative h-56 rounded overflow-hidden shadow-md cursor-pointer group"
                onClick={() => handleImageClick(galleryImages[3])}
                onKeyDown={(e) => handleKeyDown(e, galleryImages[3].id)}
                tabIndex={0}
                role="button"
                aria-label={`View ${galleryImages[3].alt} in full screen`}
              >
                <img 
                  src={galleryImages[3].src} 
                  alt={galleryImages[3].alt}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700">
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                    <span className="inline-block text-white text-xs font-medium bg-black/80 px-2 py-1 rounded uppercase tracking-widest">
                      {galleryImages[3].category}
                    </span>
                    <h3 className="text-white text-base font-medium mt-1.5 tracking-wide">
                      {galleryImages[3].alt}
                    </h3>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="text-center text-white">
                      <div className="w-6 h-6 mx-auto border-2 border-white/50 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <div 
                className="relative h-56 rounded overflow-hidden shadow-md cursor-pointer group"
                onClick={() => handleImageClick(galleryImages[4])}
                onKeyDown={(e) => handleKeyDown(e, galleryImages[4].id)}
                tabIndex={0}
                role="button"
                aria-label={`View ${galleryImages[4].alt} in full screen`}
              >
                <img 
                  src={galleryImages[4].src} 
                  alt={galleryImages[4].alt}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700">
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                    <span className="inline-block text-white text-xs font-medium bg-black/80 px-2 py-1 rounded uppercase tracking-widest">
                      {galleryImages[4].category}
                    </span>
                    <h3 className="text-white text-base font-medium mt-1.5 tracking-wide">
                      {galleryImages[4].alt}
                    </h3>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="text-center text-white">
                      <div className="w-6 h-6 mx-auto border-2 border-white/50 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 3 */}
            {galleryImages.slice(5, 8).map((image) => (
              <div 
                key={image.id}
                className="relative h-64 rounded overflow-hidden shadow-md cursor-pointer group"
                onClick={() => handleImageClick(image)}
                onKeyDown={(e) => handleKeyDown(e, image.id)}
                tabIndex={0}
                role="button"
                aria-label={`View ${image.alt} in full screen`}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700">
                  <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                    <span className="inline-block text-white text-xs font-medium bg-black/80 px-2 py-1 rounded uppercase tracking-widest">
                      {image.category}
                    </span>
                    <h3 className="text-white text-lg font-medium mt-2 tracking-wide">
                      {image.alt}
                    </h3>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="text-center text-white p-4">
                      <div className="w-8 h-8 mx-auto border-2 border-white/50 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Row 4 - 4 Smaller Images */}
            <div className="md:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                {galleryImages.slice(8, 12).map((image) => (
                  <div 
                    key={image.id}
                    className="relative h-48 rounded overflow-hidden shadow-md cursor-pointer group"
                    onClick={() => handleImageClick(image)}
                    onKeyDown={(e) => handleKeyDown(e, image.id)}
                    tabIndex={0}
                    role="button"
                    aria-label={`View ${image.alt} in full screen`}
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700">
                      <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                        <span className="inline-block text-white text-xs font-medium bg-black/80 px-1.5 py-0.5 rounded uppercase tracking-widest">
                          {image.category}
                        </span>
                        <h3 className="text-white text-sm font-medium mt-1 tracking-wide line-clamp-1">
                          {image.alt}
                        </h3>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <div className="text-center text-white">
                          <div className="w-6 h-6 mx-auto border-2 border-white/50 rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal with simplified swipe handling */}
      {selectedImage && (
        <div 
          ref={modalRef}
          className="fixed inset-0 z-50 bg-black bg-opacity-95 flex flex-col items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
          style={{
            transform: `translateY(${verticalDelta}px)`,
            opacity: isClosing ? 0 : 1 - (verticalDelta / 500),
            transition: isClosing ? 'transform 0.3s ease, opacity 0.3s ease' : 'none',
          }}
        >
          <div className="flex-1 flex items-center justify-center w-full overflow-hidden">
            <div 
              className="relative w-full max-w-5xl h-full flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with close button */}
              <div className="flex justify-end p-4 z-10">
                <button
                  onClick={closeModal}
                  className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300"
                  aria-label="Close full screen view"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Content area */}
              <div 
                ref={contentRef}
                className="flex-1 overflow-y-auto overscroll-contain"
                style={{ 
                  WebkitOverflowScrolling: 'touch',
                  touchAction: 'pan-y'
                }}
              >
                <div className="w-full px-4 pb-20">
                  {/* Image container */}
                  <div className="w-full mb-6 flex items-center justify-center min-h-[50vh]">
                    <img
                      src={selectedImage.src}
                      alt={selectedImage.alt}
                      className="max-w-full max-h-[60vh] object-contain"
                    />
                  </div>

                  {/* Content */}
                  <div className="w-full max-w-4xl mx-auto">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="inline-block text-white text-sm font-medium bg-black/80 px-3 py-1.5 rounded uppercase tracking-widest">
                        {selectedImage.category}
                      </span>
                      <span className="text-white/60 text-sm uppercase tracking-widest">Full Screen</span>
                    </div>
                    <h3 className="text-white text-2xl font-medium mb-3 tracking-wide">
                      {selectedImage.alt}
                    </h3>
                    <p className="text-white/80 text-base max-w-2xl leading-relaxed mb-6">
                      {selectedImage.description}
                    </p>
                    
                    {/* Navigation buttons */}
                    <div className="flex justify-between items-center pt-4 border-t border-white/20">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
                          const prevIndex = currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1;
                          setSelectedImage(galleryImages[prevIndex]);
                          if (contentRef.current) {
                            contentRef.current.scrollTop = 0;
                          }
                        }}
                        className="flex items-center gap-2 text-white/80 hover:text-white transition-colors p-2"
                        aria-label="Previous image"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                        <span className="text-sm">Previous</span>
                      </button>
                      
                      <div className="text-white/60 text-sm">
                        {galleryImages.findIndex(img => img.id === selectedImage.id) + 1} / {galleryImages.length}
                      </div>
                      
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
                          const nextIndex = currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0;
                          setSelectedImage(galleryImages[nextIndex]);
                          if (contentRef.current) {
                            contentRef.current.scrollTop = 0;
                          }
                        }}
                        className="flex items-center gap-2 text-white/80 hover:text-white transition-colors p-2"
                        aria-label="Next image"
                      >
                        <span className="text-sm">Next</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Visual cue for swipe */}
          <div className="w-full text-center py-4 border-t border-white/20">
            <div className="inline-block w-8 h-1 bg-white/30 rounded-full mb-2"></div>
            <p className="text-white/60 text-sm md:hidden">Swipe down to close</p>
            <p className="text-white/60 text-sm hidden md:block">Click outside or press ESC to close</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;