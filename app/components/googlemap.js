'use client'
import { useState } from 'react';

const GoogleMap = () => {
    const [zoom, setZoom] = useState(15);

    const handleZoomIn = () => {
        setZoom(prev => Math.min(prev + 1, 20));
    };

    const handleZoomOut = () => {
        setZoom(prev => Math.max(prev - 1, 1));
    };

    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-8">
            <div className="w-full max-w-6xl">
                {/* Text Content */}
                <div className="mb-12 text-center">
                    <div className="inline-block mb-4">
                        <div className="w-16 h-1 bg-gray-800 mb-2 mx-auto"></div>
                        <h2 className="text-sm font-light tracking-[0.3em] text-gray-600 uppercase">Our Location</h2>
                    </div>
                    <h1 className="text-5xl font-light text-gray-900 mb-6 tracking-tight">Find Us in Nature's Embrace</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed font-light">
                        Nestled in the serene hills of Rajasthan, The Forest Hills Resort offers a tranquil escape 
                        where luxury meets wilderness. Located just outside Udaipur, our resort provides the perfect 
                        balance of accessibility and seclusion.
                    </p>
                </div>

                {/* Map Container */}
                <div className="relative w-full h-[500px] rounded-lg overflow-hidden border border-gray-100 shadow-sm">
                    <iframe 
                        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3633.415288989515!2d73.77380993313521!3d24.401636038156877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967eb8ebb9204d5%3A0xca41dc92561071ea!2sThe%20Forest%20Hills%20Resort!5e0!3m2!1sen!2sin&zoom=${zoom}`}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        title="The Forest Hills Resort Location"
                    ></iframe>

                    {/* Clean zoom controls */}
                    <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-lg overflow-hidden z-10 border border-gray-200 shadow-sm">
                        <button 
                            onClick={handleZoomIn}
                            className="px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-200 w-10 flex items-center justify-center"
                            aria-label="Zoom in"
                        >
                            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                        </button>
                        <button 
                            onClick={handleZoomOut}
                            className="px-4 py-3 hover:bg-gray-50 transition-colors w-10 flex items-center justify-center"
                            aria-label="Zoom out"
                        >
                            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
                            </svg>
                        </button>
                    </div>

                    {/* Simple zoom level indicator */}
                    <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-200 shadow-sm z-10">
                        <span className="text-gray-700 text-sm font-medium">×{zoom}</span>
                    </div>
                </div>

                {/* Address & Details */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center md:text-left">
                        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Address</h3>
                        <p className="text-gray-800 font-light">
                            The Forest Hills Resort<br />
                            Udaipur, Rajasthan 313001<br />
                            India
                        </p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Coordinates</h3>
                        <p className="text-gray-800 font-light font-mono">
                            24°24'05.9"N 73°46'25.7"E
                        </p>
                    </div>
                    <div className="text-center md:text-right">
                        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Access</h3>
                        <p className="text-gray-800 font-light">
                            30 min from Udaipur Airport<br />
                            45 min from Udaipur City Center
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div className="mt-12 mb-8 flex justify-center">
                    <div className="w-24 h-px bg-gray-200"></div>
                </div>

                {/* Contact CTA */}
                <div className="text-center">
                    <p className="text-gray-600 mb-4 font-light">
                        Need directions or assistance?
                    </p>
                    <button className="px-8 py-3 border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-colors duration-300 text-sm font-medium tracking-wide rounded-sm">
                        Get Custom Directions
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GoogleMap;