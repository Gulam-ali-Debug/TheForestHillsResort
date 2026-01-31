'use client';

import { useState } from 'react';

const ContactFormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '',
    roomType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        checkIn: '',
        checkOut: '',
        guests: '',
        roomType: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Image */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80")',
            filter: 'grayscale(100%)'
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4 tracking-wider">CONTACT US</h1>
            <div className="w-32 h-0.5 bg-white mx-auto mb-6"></div>
            <p className="text-xl font-light tracking-wide">Plan Your Stay at Forest Hills Resort</p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {isSubmitted ? (
          <div className="text-center py-12">
            <div className="inline-block p-6 mb-6 border-2 border-black">
              <svg className="w-16 h-16 mx-auto text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4">THANK YOU</h2>
            <p className="text-gray-700 text-lg mb-2">Your inquiry has been received.</p>
            <p className="text-gray-600">We will contact you within 24 hours.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 tracking-wide">THE FOREST HILLS RESORT</h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="w-10 h-10 border border-black flex items-center justify-center mr-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">ADDRESS</h3>
                    <p className="text-gray-700">Forest Hills Road, Udaipur, Rajasthan 313001</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 border border-black flex items-center justify-center mr-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">PHONE</h3>
                    <p className="text-gray-700">+91 63779 42494</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 border border-black flex items-center justify-center mr-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">EMAIL</h3>
                    <p className="text-gray-700">info@theforesthillsresort.com</p>
                  </div>
                </div>
              </div>

              {/* Resort Description */}
              <div className="border-t border-gray-300 pt-8">
                <h3 className="text-xl font-semibold mb-4">ABOUT THE RESORT</h3>
                <p className="text-gray-700 leading-relaxed">
                  Nestled in the serene hills of Udaipur, The Forest Hills Resort offers a luxurious escape 
                  amidst nature. Experience world-class amenities, exquisite dining, and breathtaking views 
                  of the Aravalli mountains.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8 tracking-wide">BOOKING INQUIRY</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">FULL NAME *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-400 focus:border-black focus:outline-none transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">EMAIL ADDRESS *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-400 focus:border-black focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">PHONE NUMBER *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-400 focus:border-black focus:outline-none transition-colors"
                      placeholder="+91 00000 00000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">GUESTS *</label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-400 focus:border-black focus:outline-none transition-colors bg-white"
                    >
                      <option value="">Select number of guests</option>
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5+">5+ Guests</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">CHECK-IN DATE *</label>
                    <input
                      type="date"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-400 focus:border-black focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">CHECK-OUT DATE *</label>
                    <input
                      type="date"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-400 focus:border-black focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">ROOM TYPE *</label>
                  <select
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-400 focus:border-black focus:outline-none transition-colors bg-white"
                  >
                    <option value="">Select room type</option>
                    <option value="deluxe">Deluxe Room</option>
                    <option value="suite">Suite</option>
                    <option value="villa">Forest Villa</option>
                    <option value="family">Family Suite</option>
                    <option value="honeymoon">Honeymoon Suite</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">ADDITIONAL MESSAGES</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-400 focus:border-black focus:outline-none transition-colors resize-none"
                    placeholder="Any special requests or questions..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-black text-white font-semibold text-lg tracking-wide hover:bg-gray-900 transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin h-5 w-5 mr-3 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      SUBMITTING...
                    </span>
                  ) : (
                    'SEND INQUIRY'
                  )}
                </button>

                <p className="text-sm text-gray-600 text-center">
                  * Required fields. We respect your privacy and will not share your information.
                </p>
              </form>
            </div>
          </div>
        )}
      </div>

      {/* Map Section */}
      <div className="border-t border-gray-300">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-8 text-center tracking-wide">OUR LOCATION</h2>
          <div className="h-[400px] bg-gray-200 flex items-center justify-center">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3633.415288989515!2d73.77380993313521!3d24.401636038156877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967eb8ebb9204d5%3A0xca41dc92561071ea!2sThe%20Forest%20Hills%20Resort!5e0!3m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="The Forest Hills Resort Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormPage;