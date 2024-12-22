import React, { useState } from "react";
import slider1 from "./assets/slider_1.png";
import slider2 from "./assets/slider_2.png";
import slider3 from "./assets/slider_3.png";
import slider4 from "./assets/slider_4.png";
import slider8 from "./assets/slider_8.png";

import "./ContentSlider.scss";

export const ContentSlider = () => {
  const [hoverElement, setHoverElement] = useState(0);

  const handleMouseEnter = (element) => {
    setHoverElement(element);
  };

  const handleMouseLeave = () => {
    setHoverElement(0);
  };

  return (
    <div className="content-slider">
      <div className="content-slider__section">
        <img
          src={hoverElement === 1 ? slider8 : slider1}
          className="content-slider__image"
          alt="slider1"
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        />
        <img
          src={hoverElement === 2 ? slider8 : slider2}
          className="content-slider__image"
          alt="slider2"
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
        />
        <img
          src={hoverElement === 3 ? slider8 : slider3}
          className="content-slider__image"
          alt="slider3"
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
        />
        <img
          src={hoverElement === 4 ? slider8 : slider4}
          className="content-slider__image"
          alt="slider4"
          onMouseEnter={() => handleMouseEnter(4)}
          onMouseLeave={handleMouseLeave}
        />
      </div>
    </div>
  );
};
