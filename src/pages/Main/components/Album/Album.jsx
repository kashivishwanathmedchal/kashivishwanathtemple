import { useNavigate } from "react-router-dom";
import pic1Large from "./assets/Pic1-large.jpg";
import pic1Small from "./assets/Pic1-small.jpg";
import pic2Large from "./assets/Pic2-large.jpg";
import pic2Small from "./assets/Pic2-small.jpg";
import pic3Large from "./assets/Pic3-large.jpg";
import pic3Small from "./assets/Pic3-small.jpg";
import pic4Large from "./assets/Pic4-large.jpg";
import pic4Small from "./assets/Pic4-small.jpg";
import pic5Large from "./assets/Pic5-large.jpg";
import pic5Small from "./assets/Pic5-small.jpg";
import pic6Large from "./assets/Pic6-large.jpg";
import pic6Small from "./assets/Pic6-small.jpg";
import pic7Large from "./assets/Pic7-large.jpg";
import pic7Small from "./assets/Pic7-small.jpg";
import pic8Large from "./assets/Pic8-Large.jpg";
import pic8Small from "./assets/Pic8-small.jpg";
import pic9Large from "./assets/Pic9-large.jpg";
import pic9Small from "./assets/Pic9-small.jpg";
import pic10Large from "./assets/Pic10-large.jpg";
import pic10Small from "./assets/Pic10-small.jpg";
import "./Album.scss";

export const Album = () => {
  const navigate = useNavigate();
  const isViewMore = !window.location.href.includes("gallery");

  const handleViewMoreClick = () => {
    navigate("/gallery");
  };

  return (
    <div className="album-component">
      <div className="album-header">
        <ul>
          <li>
            <a href="#">Photo Gallery</a>
          </li>
        </ul>
      </div>
      <div className="album-photos">
        <div className="photo-grid">
          {[{ large: pic1Large, small: pic1Small }, { large: pic2Large, small: pic2Small }, { large: pic3Large, small: pic3Small }, { large: pic4Large, small: pic4Small }, { large: pic5Large, small: pic5Small }, { large: pic6Large, small: pic6Small }, { large: pic7Large, small: pic7Small }, { large: pic8Large, small: pic8Small }, { large: pic9Large, small: pic9Small }, { large: pic10Large, small: pic10Small }].map((pic, index) => (
            <a
              key={index}
              href={pic.large}
              data-lightbox="my_gall"
              target="_blank"
              rel="noreferrer"
            >
              <img src={pic.small} alt={`pic${index + 1}`} />
            </a>
          ))}
        </div>
      </div>
      {isViewMore && (
        <div className="view-more" onClick={handleViewMoreClick}>
          <ul>
            <li>
              <a href="#">View More</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};