export default function ExploreUdaipur() {
   return (
      <>
      
       {/* Hero Image Section for Explore Udaipur */}
<div className="relative h-screen w-full">
 <img
   src="https://plus.unsplash.com/premium_photo-1697729844084-c03db2377161?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   alt="Luxury Hotels in Udaipur"
   className="w-full h-full object-cover"
 />
 
 {/* Gradient Overlay */}
 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
 
 {/* Text Content in Bottom-Left Corner */}
 <div className="absolute bottom-0 left-0 p-8 md:p-12 lg:p-16 max-w-2xl">
   <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-tight leading-tight">
     Explore Udaipur
   </h1>
   <div className="w-24 h-1 bg-white mb-6"></div>
   <p className="text-gray-300 text-xl md:text-2xl font-light leading-relaxed">
     Discover luxury accommodations in the City of Lakes
   </p>
 </div>
</div>

{/* Udaipur Places Gallery - Premium Layout */}
<div className="min-h-screen bg-black py-8 md:py-12 px-4 md:px-8 lg:px-16">
 {/* Gallery Title */}
 <div className="mb-8 md:mb-12 text-center">
   <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 tracking-tight">
     Discover Udaipur
   </h1>
   <div className="w-24 h-1 bg-white mx-auto mb-4"></div>
   <p className="text-gray-300 text-xl md:text-2xl font-light max-w-3xl mx-auto">
     Experience the vibrant colors and majestic beauty of Rajasthan's most romantic city
   </p>
 </div>

 {/* Premium Compact Grid Layout */}
 <div className="max-w-7xl mx-auto space-y-4 md:space-y-6">
   
   {/* Row 1 - Two Large Images Side by Side */}
   <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
     
     {/* Lake Palace - Left */}
     <div className="group relative overflow-hidden rounded-xl">
       <div className="relative h-[450px] w-full overflow-hidden">
         <img
           src="https://s7ap1.scene7.com/is/image/incredibleindia/2-lake-palace-udaipur-rajasthan-attr-hero?qlt=82&ts=1742166394501"
           alt="Lake Palace Udaipur"
           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
         />
         <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
       </div>
       <div className="absolute bottom-0 left-0 p-6 md:p-8">
         <h3 className="text-3xl md:text-4xl font-light text-white mb-2">Lake Palace</h3>
         <div className="w-20 h-1 bg-white mb-3"></div>
         <p className="text-gray-200 font-light text-lg max-w-md">
           Iconic marble palace floating on Lake Pichola
         </p>
       </div>
     </div>

     {/* Lake Pichola - Right */}
     <div className="group relative overflow-hidden rounded-xl">
       <div className="relative h-[450px] w-full overflow-hidden">
         <img
           src="https://images.unsplash.com/photo-1655022077661-f8e590448684?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
           alt="Lake Pichola Sunset"
           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
         />
         <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/40 to-transparent"></div>
       </div>
       <div className="absolute bottom-0 right-0 p-6 md:p-8 text-right">
         <h3 className="text-3xl md:text-4xl font-light text-white mb-2">Lake Pichola</h3>
         <div className="w-20 h-1 bg-white mb-3 ml-auto"></div>
         <p className="text-gray-200 font-light text-lg max-w-md ml-auto">
           Golden reflections of palaces on tranquil waters
         </p>
       </div>
     </div>
   </div>

   {/* Row 2 - Three Square Images */}
   <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
     
     {/* Monsoon Palace */}
     <div className="group relative overflow-hidden rounded-xl">
       <div className="relative h-[350px] w-full overflow-hidden">
         <img
           src="https://images.unsplash.com/photo-1731202212249-d7885e170e2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
           alt="Monsoon Palace View"
           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
       </div>
       <div className="absolute bottom-0 left-0 p-6">
         <h3 className="text-2xl font-light text-white mb-2">Monsoon Palace</h3>
         <div className="w-16 h-1 bg-white mb-2"></div>
         <p className="text-gray-200 font-light">Hilltop palace with panoramic views</p>
       </div>
     </div>

     {/* Jag Mandir */}
     <div className="group relative overflow-hidden rounded-xl">
       <div className="relative h-[350px] w-full overflow-hidden">
         <img
           src="https://images.unsplash.com/photo-1728210070471-0a99584a374e?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
           alt="Jag Mandir Palace"
           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
       </div>
       <div className="absolute bottom-0 left-0 p-6">
         <h3 className="text-2xl font-light text-white mb-2">Jag Mandir</h3>
         <div className="w-16 h-1 bg-white mb-2"></div>
         <p className="text-gray-200 font-light">Marble palace on Lake Pichola</p>
       </div>
     </div>

     {/* Fateh Sagar Lake */}
     <div className="group relative overflow-hidden rounded-xl">
       <div className="relative h-[350px] w-full overflow-hidden">
         <img
           src="https://images.unsplash.com/photo-1744385294315-193a7a3158b2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
           alt="Fateh Sagar Lake"
           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
       </div>
       <div className="absolute bottom-0 left-0 p-6">
         <h3 className="text-2xl font-light text-white mb-2">Fateh Sagar Lake</h3>
         <div className="w-16 h-1 bg-white mb-2"></div>
         <p className="text-gray-200 font-light">Picturesque lake with island palaces</p>
       </div>
     </div>
   </div>

   {/* Row 3 - Two Medium Images */}
   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
     
     {/* Udaipur Solar Observatory */}
     <div className="group relative overflow-hidden rounded-xl">
       <div className="relative h-[400px] w-full overflow-hidden">
         <img
           src="https://live.staticflickr.com/4713/40575992652_63f3b1240f_b.jpg"
           alt="Udaipur Solar Observatory"
           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
         />
         <div className="absolute inset-0 bg-gradient-to-tr from-black/70 to-transparent"></div>
       </div>
       <div className="absolute bottom-0 left-0 p-6">
         <h3 className="text-2xl md:text-3xl font-light text-white mb-2">Solar Observatory</h3>
         <div className="w-20 h-1 bg-white mb-3"></div>
         <p className="text-gray-200 font-light text-lg">India's premier solar research facility</p>
       </div>
     </div>

     {/* Celebration Mall */}
     <div className="group relative overflow-hidden rounded-xl">
       <div className="relative h-[400px] w-full overflow-hidden">
         <img
           src="https://udaipurblog.com/wp-content/uploads/2018/07/IMG_4499.jpg"
           alt="Celebration Mall"
           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
         />
         <div className="absolute inset-0 bg-gradient-to-tl from-black/70 to-transparent"></div>
       </div>
       <div className="absolute bottom-0 right-0 p-6 text-right">
         <h3 className="text-2xl md:text-3xl font-light text-white mb-2">Celebration Mall</h3>
         <div className="w-20 h-1 bg-white mb-3 ml-auto"></div>
         <p className="text-gray-200 font-light text-lg">Modern shopping and entertainment destination</p>
       </div>
     </div>
   </div>

   {/* Row 4 - Four Small Images Grid */}
   <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
     
     {/* Saheliyon Ki Bari */}
     <div className="group relative overflow-hidden rounded-lg h-[280px]">
       <img
         src="https://s7ap1.scene7.com/is/image/incredibleindia/saheliyon-ki-bari-udaipur-attr-hero-2?qlt=82&ts=1742196039494"
         alt="Saheliyon Ki Bari"
         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
       />
       <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300"></div>
       <div className="absolute inset-0 flex items-center justify-center p-4">
         <h3 className="text-xl font-light text-white text-center">Saheliyon Ki Bari</h3>
       </div>
     </div>

     {/* Bagore Ki Haveli */}
     <div className="group relative overflow-hidden rounded-lg h-[280px]">
       <img
         src="https://s7ap1.scene7.com/is/image/incredibleindia/1-bagore-ki-haveli-udaipur-rajasthan-attr-hero?qlt=82&ts=1742160043861"
         alt="Bagore Ki Haveli"
         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
       />
       <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300"></div>
       <div className="absolute inset-0 flex items-center justify-center p-4">
         <h3 className="text-xl font-light text-white text-center">Bagore Ki Haveli</h3>
       </div>
     </div>

     {/* Ambrai Ghat */}
     <div className="group relative overflow-hidden rounded-lg h-[280px]">
       <img
         src="https://www.rajasthantourplanner.com/blog/wp-content/uploads/2025/02/Ambrai-Ghat-Udaipur.jpg"
         alt="Ambrai Ghat"
         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
       />
       <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300"></div>
       <div className="absolute inset-0 flex items-center justify-center p-4">
         <h3 className="text-xl font-light text-white text-center">Ambrai Ghat</h3>
       </div>
     </div>

     {/* Shilpgram */}
     <div className="group relative overflow-hidden rounded-lg h-[280px]">
       <img
         src="https://s7ap1.scene7.com/is/image/incredibleindia/shilpgram-udaipur-rajasthan-1-musthead-hero?qlt=82&ts=1742166365065"
         alt="Shilpgram"
         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
       />
       <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300"></div>
       <div className="absolute inset-0 flex items-center justify-center p-4">
         <h3 className="text-xl font-light text-white text-center">Shilpgram</h3>
       </div>
     </div>
   </div>

   {/* Bottom Call to Action */}
   <div className="mt-8 md:mt-12 text-center">
     <h3 className="text-2xl md:text-3xl font-light text-white mb-3">
       Experience the Magic of Udaipur
     </h3>
     <p className="text-gray-400 font-light text-lg">
       Plan your visit to the City of Lakes
     </p>
   </div>
 </div>
</div>
      </>
   );
 }