import React from "react";
import "./OurProgramsSlider.scss";
import slider5 from "./assets/slider_5.png";
import slider6 from "./assets/slider_6.png";
import slider7 from "./assets/slider_7.png";

export const OurProgramsSlider = () => {
  return (
    <div className="our-programs-slider">
      <div className="our-programs-slider__content">
        <div className="our-programs-slider__images">
          <img src={slider5} className="slider-image" alt="Slider 1" />
          <img src={slider6} className="slider-image" alt="Slider 2" />
          <img src={slider7} className="slider-image" alt="Slider 3" />
        </div>
      </div>
    </div>
  );
};
