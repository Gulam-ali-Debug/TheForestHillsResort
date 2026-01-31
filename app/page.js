import Image from "next/image";
import BookNowButton from "./components/booknowbtn";
import Slider from "./components/sliderimage";
import MinimalImageCard from "./components/sm";
import ImageGallery from "./components/imageGallery";
import GoogleMap from "./components/googlemap";
import ReviewSection from "./components/reviewSection"
import ExploreOurHotel from "./components/exploreHotel"

export default function Home() {
  return (
     <>
     
     <BookNowButton/ >
     <Slider/ >
     <ExploreOurHotel/ >
     
     <ImageGallery/ >
     <ReviewSection/ >
     <GoogleMap/ >

     </>
  );
}
