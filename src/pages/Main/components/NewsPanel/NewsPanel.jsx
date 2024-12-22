import React from "react";
import "./NewsPanel.scss";

export const NewsPanel = () => {
  return (
    <div className="news-panel">
      <div className="news-section">
        <ul>
          <li>
            <a href="#">Temple News:</a>
          </li>
        </ul>
      </div>

      <div className="text-update-section">
        <ul>
          <li>
            <a href="#">
              Temple Committee has proposed the construction of Nitya Annadana
              Building and Gaushala in the premises of Temple. Devotees can
              donate their offerings to take part in this support. Temple has a
              requirement of Panchaloha Nandi Idol and Palaki for the purpose of
              Kashi Vishwanath Swamy Seva on the auspicious occasion of Kalyana
              Mahotsavam. Devotees can take part in donating the requirement.
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
