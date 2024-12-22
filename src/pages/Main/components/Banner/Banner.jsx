import banner from "./assets/banner.jpg";
import "./Banner.scss";

export const Banner = () => {
  return (
    <div className="banner-component">
      <img src={banner} className="banner-image" alt="Banner" />
    </div>
  );
};