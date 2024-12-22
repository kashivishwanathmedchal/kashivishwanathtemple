import React from "react";
import "./Footer.scss";

export const Footer = () => {
  return (
    <div className="bottom-panel">
      <div className="bottom-section">
        <div className="bottom-section-content">
          <h3>Temple Address</h3>
          <ul>
            <li>
              <a href="#">
                Sri Kashi Vishwanath Temple, <br />
                Near Railway Gate, Medchal, Medchal Dist, 501401, Telangana,
                India
              </a>
            </li>
          </ul>
        </div>

        <div className="bottom-section-content">
          <h3>Email</h3>
          <ul>
            <li>
              <a href="#">Email: kashivishwanathtemplemedchal@gmail.com</a>
            </li>
            <li>
              <a href="#">Website: www.kashivishwanathtemplemedchal.org</a>
            </li>
          </ul>
        </div>

        <div className="bottom-section-content">
          <h3>Contact</h3>
          <ul>
            <li>
              <a href="#">Phone: +91-9949441095</a>
            </li>
            <li>
              <a href="#">Whatsapp: +91-9949441095</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
