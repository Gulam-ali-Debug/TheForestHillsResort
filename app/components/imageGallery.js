'use client'
import React, { useState, useEffect } from 'react';

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

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
    // Additional images for the last row
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
    // Prevent body scroll when modal opens
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    // Re-enable body scroll when modal closes
    document.body.style.overflow = 'auto';
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

  // Add effect to handle modal scroll
  useEffect(() => {
    const handleModalScroll = (e) => {
      const modalContent = e.target;
      const isAtTop = modalContent.scrollTop === 0;
      const isAtBottom = modalContent.scrollHeight - modalContent.scrollTop === modalContent.clientHeight;
      
      // Allow modal to scroll
      if (!isAtTop && !isAtBottom) {
        e.stopPropagation();
      }
    };

    const modal = document.querySelector('.modal-content');
    if (modal) {
      modal.addEventListener('scroll', handleModalScroll, { passive: true });
      return () => modal.removeEventListener('scroll', handleModalScroll);
    }
  }, [selectedImage]);

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

  // Clean up on unmount
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

      {/* Modal with improved scroll handling */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black bg-opacity-95 flex flex-col items-center justify-center p-4"
          onClick={closeModal}
          style={{ touchAction: 'pan-y' }} // Allow vertical panning
        >
          <div className="flex-1 flex items-center justify-center w-full">
            <div 
              className="relative w-full max-w-5xl h-full flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with close button */}
              <div className="flex justify-end p-4">
                <button
                  onClick={closeModal}
                  className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 z-20"
                  aria-label="Close full screen view"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Scrollable content area */}
              <div 
                className="modal-content flex-1 overflow-y-auto overscroll-contain" // Added overscroll-contain
                style={{ 
                  WebkitOverflowScrolling: 'touch', // Smooth scrolling on iOS
                  overscrollBehavior: 'contain' // Prevent scroll chaining
                }}
              >
                <div className="flex flex-col items-center justify-center min-h-full">
                  {/* Image container */}
                  <div className="w-full max-h-[60vh] flex items-center justify-center mb-6">
                    <img
                      src={selectedImage.src}
                      alt={selectedImage.alt}
                      className="max-w-full max-h-full object-contain"
                      style={{ touchAction: 'pan-y pinch-zoom' }} // Allow zoom and pan
                    />
                  </div>

                  {/* Content that can scroll */}
                  <div className="w-full max-w-4xl mx-auto px-4 pb-8">
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
                        }}
                        className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
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
                        }}
                        className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
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
        </div>
      )}
    </div>
  );
};

export default ImageGallery;