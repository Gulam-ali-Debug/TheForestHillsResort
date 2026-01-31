"use client"
import React from 'react';
import Image from 'next/image';

const MinimalImageCard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-gray-100 bg-texture">
      <div className="max-w-6xl w-full mx-auto">
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300">
          
          {/* Image Section */}
          <div className="md:w-1/2 relative overflow-hidden group">
            <div className="aspect-square md:aspect-auto md:h-full">
              <Image 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Minimalist mountain landscape"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          
          {/* Text Section */}
          <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">Minimalist Design</span>
            <h2 className="text-2xl md:text-3xl font-light text-gray-800 mb-4">Simplicity in Every Detail</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              This layout exemplifies minimalist design principles with clean lines, ample white space, and focused content. 
              The subtle hover effects enhance user interaction without distracting from the core message.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              The textured background adds depth while maintaining visual harmony. Every element serves a purpose in this balanced composition.
            </p>
            
            <div className="flex space-x-4">
              <button className="px-5 py-2.5 text-sm border border-gray-300 text-gray-700 rounded-sm hover:border-gray-400 hover:text-gray-900 transition-all duration-200">
                Learn More
              </button>
              <button className="px-5 py-2.5 text-sm bg-gray-800 text-white rounded-sm hover:bg-gray-900 transition-all duration-200">
                Get Started
              </button>
            </div>
          </div>
          
        </div>
      </div>
      
      <style jsx global>{`
        .bg-texture {
          background-color: #f8f9fa;
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(0, 0, 0, 0.03) 0%, transparent 55%),
            radial-gradient(circle at 75% 75%, rgba(0, 0, 0, 0.03) 0%, transparent 55%);
          background-size: 60px 60px;
        }
        
        /* Minimalist hover effects */
        .shadow-sm {
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }
        
        .hover\\:shadow-lg:hover {
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
        }
        
        /* Smooth transitions */
        * {
          transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 150ms;
        }
      `}</style>
    </div>
  );
};



export default MinimalImageCard;