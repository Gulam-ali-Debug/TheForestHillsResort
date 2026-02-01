'use client'
import { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const ReviewSection = () => {
    const [currentReview, setCurrentReview] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [dragDistance, setDragDistance] = useState(0);
    const containerRef = useRef(null);
    const autoSlideRef = useRef(null);

    const reviews = [
        {
            id: 1,
            name: "Aarav Sharma",
            location: "Mumbai",
            rating: 5,
            text: "An absolute paradise! The Forest Hills Resort exceeded all expectations. The blend of luxury and nature is perfectly executed.",
            date: "December 2023"
        },
        {
            id: 2,
            name: "Priya Patel",
            location: "Delhi",
            rating: 5,
            text: "The attention to detail is remarkable. Every moment felt special. Can't wait to return next season!",
            date: "January 2024"
        },
        {
            id: 3,
            name: "Rohan Mehta",
            location: "Bangalore",
            rating: 4,
            text: "Perfect weekend getaway. The views are breathtaking and the service is impeccable. Highly recommended.",
            date: "February 2024"
        }
    ];

    const blurImages = [
        {
            url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=800&fit=crop",
            alt: "Resort view"
        },
        {
            url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop",
            alt: "Luxury suite"
        },
        {
            url: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200&h=800&fit=crop",
            alt: "Pool area"
        }
    ];

    const nextReview = () => {
        setCurrentReview((prev) => (prev + 1) % reviews.length);
    };

    const prevReview = () => {
        setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    // Auto-slide every 5 seconds
    useEffect(() => {
        autoSlideRef.current = setInterval(() => {
            nextReview();
        }, 5000);

        return () => {
            if (autoSlideRef.current) {
                clearInterval(autoSlideRef.current);
            }
        };
    }, []);

    // Pause auto-slide on hover/drag
    const pauseAutoSlide = () => {
        if (autoSlideRef.current) {
            clearInterval(autoSlideRef.current);
        }
    };

    const resumeAutoSlide = () => {
        if (autoSlideRef.current) {
            clearInterval(autoSlideRef.current);
        }
        autoSlideRef.current = setInterval(() => {
            nextReview();
        }, 5000);
    };

    // Touch and mouse drag handlers
    const handleDragStart = (e) => {
        // Only start dragging if it's a horizontal swipe on the slider
        setIsDragging(true);
        pauseAutoSlide();
        const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
        const clientY = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;
        setStartX({ x: clientX, y: clientY });
        setDragDistance(0);
    };

    const handleDragMove = (e) => {
        if (!isDragging) return;
        
        e.preventDefault();
        const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
        const clientY = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;
        const distanceX = clientX - startX.x;
        const distanceY = clientY - startX.y;
        
        // Only set drag distance for horizontal movement
        // If vertical movement is significant, it's probably a scroll attempt
        const isHorizontalSwipe = Math.abs(distanceX) > Math.abs(distanceY);
        
        if (isHorizontalSwipe) {
            setDragDistance(distanceX);
        } else {
            // If it's vertical movement, cancel dragging to allow scrolling
            setIsDragging(false);
            setDragDistance(0);
        }
    };

    const handleDragEnd = () => {
        if (!isDragging) return;
        
        setIsDragging(false);
        const threshold = 50;
        
        if (Math.abs(dragDistance) > threshold) {
            if (dragDistance > 0) {
                prevReview();
            } else {
                nextReview();
            }
        }
        
        setDragDistance(0);
        setTimeout(resumeAutoSlide, 3000); // Resume after 3 seconds
    };

    // Add event listeners for drag
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const options = { passive: false };
        
        // Store references to functions for cleanup
        const handleStart = (e) => handleDragStart(e);
        const handleMove = (e) => handleDragMove(e);
        const handleEnd = () => handleDragEnd();
        
        container.addEventListener('mousedown', handleStart, options);
        container.addEventListener('mousemove', handleMove, options);
        container.addEventListener('mouseup', handleEnd, options);
        container.addEventListener('mouseleave', handleEnd, options);
        
        container.addEventListener('touchstart', handleStart, options);
        container.addEventListener('touchmove', handleMove, options);
        container.addEventListener('touchend', handleEnd, options);
        container.addEventListener('touchcancel', handleEnd, options);

        return () => {
            container.removeEventListener('mousedown', handleStart);
            container.removeEventListener('mousemove', handleMove);
            container.removeEventListener('mouseup', handleEnd);
            container.removeEventListener('mouseleave', handleEnd);
            
            container.removeEventListener('touchstart', handleStart);
            container.removeEventListener('touchmove', handleMove);
            container.removeEventListener('touchend', handleEnd);
            container.removeEventListener('touchcancel', handleEnd);
        };
    }, [isDragging, dragDistance, startX]);

    const renderStars = (rating) => {
        return (
            <div className="flex gap-1">
                {[...Array(5)].map((_, index) => (
                    <Star
                        key={index}
                        size={20}
                        className={index < rating ? "fill-amber-400 text-amber-400" : "text-gray-600"}
                    />
                ))}
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-black py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Review Section */}
                <div className="max-w-5xl mx-auto">
                    {/* Section Header - White text */}
                    <div className="mb-16 text-center">
                        <div className="inline-block mb-4">
                            <div className="w-20 h-1 bg-gray-500 mb-3 mx-auto"></div>
                            <p className="text-sm font-light tracking-[0.3em] text-gray-400 uppercase mb-2">
                                Guest Experiences
                            </p>
                        </div>
                        <h2 className="text-5xl font-light text-white mb-4">
                            What Our Guests Say
                        </h2>
                        <p className="text-gray-400 font-light max-w-2xl mx-auto">
                            This is a review section. All reviews will be shown here with star ratings.
                        </p>
                    </div>

                    {/* Current Review Display */}
                    <div 
                        className="relative rounded-xl overflow-hidden shadow-2xl mb-16 border border-gray-800"
                        ref={containerRef}
                        style={{ 
                            cursor: isDragging ? 'grabbing' : 'grab',
                            touchAction: 'pan-y pinch-zoom' // Allow vertical scrolling
                        }}
                        onMouseEnter={pauseAutoSlide}
                        onMouseLeave={resumeAutoSlide}
                    >
                        {/* Background Images - Brighter for dark theme */}
                        <div className="absolute inset-0">
                            {blurImages.map((image, index) => (
                                <div
                                    key={index}
                                    className="absolute inset-0 transition-opacity duration-1000"
                                    style={{
                                        opacity: index === currentReview ? 1 : 0,
                                        backgroundImage: `url(${image.url})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        filter: 'brightness(0.7) contrast(1.1)',
                                        transform: `translateX(${isDragging ? dragDistance : 0}px)`,
                                        transition: isDragging ? 'none' : 'opacity 1000ms ease, transform 300ms ease'
                                    }}
                                />
                            ))}
                            {/* Dark overlay - Adjusted for black background */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                        </div>
                        
                        {/* Review Content */}
                        <div className="relative z-10 p-12 md:p-16 min-h-[400px] flex flex-col justify-center">
                            {/* Left Arrow - Hidden on mobile/tablet */}
                            <button
                                onClick={prevReview}
                                className="absolute left-8 top-1/2 transform -translate-y-1/2 p-4 rounded-full border border-white/20 bg-black/40 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 z-20 hidden lg:block"
                                aria-label="Previous review"
                            >
                                <ChevronLeft size={28} className="text-white" />
                            </button>
                            
                            {/* Right Arrow - Hidden on mobile/tablet */}
                            <button
                                onClick={nextReview}
                                className="absolute right-8 top-1/2 transform -translate-y-1/2 p-4 rounded-full border border-white/20 bg-black/40 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 z-20 hidden lg:block"
                                aria-label="Next review"
                            >
                                <ChevronRight size={28} className="text-white" />
                            </button>
                            
                            {/* Stars */}
                            <div className="mb-8">
                                {renderStars(reviews[currentReview].rating)}
                            </div>
                            
                            {/* Review Text */}
                            <p className="text-3xl md:text-4xl font-light text-white mb-12 leading-relaxed italic max-w-3xl mx-auto">
                                "{reviews[currentReview].text}"
                            </p>
                            
                            {/* Reviewer Info */}
                            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                                <div className="text-white">
                                    <h3 className="text-2xl font-light mb-2">
                                        {reviews[currentReview].name}
                                    </h3>
                                    <p className="text-gray-300 font-light text-lg">
                                        {reviews[currentReview].location} • {reviews[currentReview].date}
                                    </p>
                                </div>
                                
                                {/* Navigation dots */}
                                <div className="flex items-center gap-3">
                                    {reviews.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentReview(index)}
                                            className={`transition-all duration-300 ${
                                                index === currentReview 
                                                    ? 'w-10 h-2 bg-white rounded-full' 
                                                    : 'w-2 h-2 bg-white/40 hover:bg-white/60 rounded-full'
                                            }`}
                                            aria-label={`Go to review ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Reviews List */}
                    <div className="space-y-8">
                        {reviews.map((review) => (
                            <div 
                                key={review.id}
                                className="border border-gray-800 rounded-xl p-8 hover:bg-gray-900/50 transition-all duration-300 hover:border-gray-700"
                            >
                                <div className="flex flex-col md:flex-row items-start justify-between mb-6 gap-4">
                                    <div>
                                        <h4 className="text-2xl font-light text-white mb-2">
                                            {review.name}
                                        </h4>
                                        <p className="text-gray-400 font-light text-lg">
                                            {review.location}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        {renderStars(review.rating)}
                                        <p className="text-gray-500 text-lg font-light mt-2">
                                            {review.date}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-gray-300 text-xl font-light leading-relaxed">
                                    {review.text}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Divider with Rating */}
                    <div className="mt-20 pt-12 border-t border-gray-800">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                            <div className="text-center md:text-left">
                                <div className="text-6xl font-light text-white mb-4">4.8</div>
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, index) => (
                                        <Star
                                            key={index}
                                            size={24}
                                            className="fill-amber-400 text-amber-400"
                                        />
                                    ))}
                                </div>
                                <p className="text-gray-400 text-lg font-light">
                                    Based on 127 guest reviews
                                </p>
                            </div>
                            <div className="flex-1 max-w-lg">
                                <div className="space-y-3">
                                    {[5, 4, 3, 2, 1].map((stars) => (
                                        <div key={stars} className="flex items-center gap-6">
                                            <div className="w-16 text-right">
                                                <span className="text-gray-300 text-lg font-light">{stars} star{stars > 1 ? 's' : ''}</span>
                                            </div>
                                            <div className="flex-1 h-3 bg-gray-800 rounded-full overflow-hidden">
                                                <div 
                                                    className="h-full bg-amber-400"
                                                    style={{ 
                                                        width: `${stars === 5 ? '85%' : stars === 4 ? '12%' : '3%'}` 
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewSection;