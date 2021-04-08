import React from "react";
import "../Content"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

export default function App() {
  return (
    <div className="App">
     <AliceCarousel autoPlay autoPlayInterval="3000">
      <img src="https://via.placeholder.com/1260x536" className="sliderimg" alt=""/>
      <img src="https://via.placeholder.com/1260x536" className="sliderimg" alt=""/>
      <img src="https://via.placeholder.com/1260x536" className="sliderimg" alt=""/>
      <img src="https://via.placeholder.com/1260x536" className="sliderimg" alt=""/>
    </AliceCarousel>
    </div>
  );
}
