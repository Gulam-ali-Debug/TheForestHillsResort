import SimpleRoomsSection from "../components/simplerooms";

export default function Rooms() {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center mt-0">
        <video
          className="w-full h-auto max-h-[90vh] object-cover shadow-lg"
          src="/About_hotel.mp4"
          loop
          autoPlay
          muted
          playsInline
          style={{ background: '#000' }}
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <SimpleRoomsSection />
    </>
  );
}
