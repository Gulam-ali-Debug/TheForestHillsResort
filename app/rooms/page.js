import SimpleRoomsSection from "../components/simplerooms";

export default function Rooms() {
  return (
    <>
      {/* Hero Image Section */}
      <div className="relative h-screen w-full">
        <img
          src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80"
          alt="Luxury Rooms at Forest Hills Resort"
          className="w-full h-full object-cover"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        
        {/* Text Content in Bottom-Left Corner */}
        <div className="absolute bottom-0 left-0 p-8 md:p-12 lg:p-16 max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-tight leading-tight">
            Luxury Accommodations
          </h1>
          <div className="w-24 h-1 bg-white mb-6"></div>
          <p className="text-gray-300 text-xl md:text-2xl font-light leading-relaxed">
            Experience unparalleled comfort in our elegantly appointed rooms and suites
          </p>
        </div>
      </div>

      <SimpleRoomsSection />
    </>
  );
}