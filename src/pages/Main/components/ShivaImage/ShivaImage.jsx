import shiva from "./assets/Shiva.png";
import aboutTemple from "./assets/about _temple.jpg";

import "./ShivaImage.scss";

export const ShivaImage = () => {
  return (
    <div className="shiva-template">
      <div className="shiva-template__image-container">
        <img src={shiva} className="shiva-template__image" alt="Shiva" />
      </div>
      <div className="shiva-template__image-container">
        <img
          src={aboutTemple}
          className="shiva-template__image"
          alt="About Temple"
        />
      </div>
    </div>
  );
};
