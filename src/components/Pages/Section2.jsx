import React from "react";
import "../Pages/Section2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faHouse,
  faPaste,
} from "@fortawesome/free-solid-svg-icons";
const ServiceSection = () => {
  return (
    <>
      <div className="head-text">
        <h4>WHAT WE DO</h4>
        <h2>
          We can build you the Interior <br />
          of your dream
        </h2>
      </div>
      <div className="main-container">
        <div className="box-card">
          <span>
            <h1>
              {
                <FontAwesomeIcon
                  icon={faBuilding}
                  style={{ color: "#cda274" }}
                />
              }
            </h1>{" "}
            The Art and Science of Architecture
          </span>
        </div>
        <div className="box-card">
          <span>
            <h1>
              <FontAwesomeIcon
                icon={faHouse}
                style={{
                  "--fa-primary-color": "#cda279",
                  "--fa-secondary-color": "#cda279",
                }}
              />
            </h1>
            Home Check and Safety and Secure
          </span>
        </div>
        <div className="box-card">
          <span>
            <h1>
              <FontAwesomeIcon
                icon={faPaste}
                style={{
                  "--fa-primary-color": "#cda279",
                  "--fa-secondary-color": "#cda279",
                }}
              />
            </h1>
            Pattern and Materials for Interior Plan
          </span>
        </div>
      </div>
    </>
  );
};

export default ServiceSection;
