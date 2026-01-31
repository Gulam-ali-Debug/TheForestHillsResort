const BookNowButton = () => {
    return (
      <div 
        className="hidden md:block z-50"
        style={{
          position: 'fixed',
          right: '0',
          top: '70%',
          transform: 'translateY(-50%)'
        }}
      >
        <a
          href="https://hotels.eglobe-solutions.com/theforesthillsresort/booking/hotels/the-forest-hills-resort-udaipur"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-2 rounded-l-lg shadow-lg transition duration-300 flex items-center justify-center"
          aria-label="Book now at The Forest Hills Resort Udaipur"
        >
          <span className="transform rotate-180" style={{ writingMode: 'vertical-rl' }}>
            BOOK NOW
          </span>
        </a>
      </div>
    );
  }
  
  export default BookNowButton;