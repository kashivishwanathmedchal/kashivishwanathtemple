import React from "react";
import "./OurPrograms.scss";

export const OurPrograms = () => {
  return (
    <div className="our-programs">
      <div className="our-programs__section">
        <ul>
          <li>
            <a href="javascript:void(0)">Our Programs</a>
          </li>
        </ul>
      </div>
      <div className="our-programs__list">
        <div className="program-item">
          <div className="program-item__section">
            <ul>
              <li>
                <a href="javascript:void(0)">Kalyanotsavam</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="program-item">
          <div className="program-item__section">
            <ul>
              <li>
                <a href="javascript:void(0)">Maha Shivratri</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="program-item">
          <div className="program-item__section">
            <ul>
              <li>
                <a href="javascript:void(0)">Annapurna Jayanthi</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
