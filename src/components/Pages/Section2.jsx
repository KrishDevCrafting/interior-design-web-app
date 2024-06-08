import React from "react";
import "../Pages/Section2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
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
            {" "}
            <h1 id="alignment">
              {
                <FontAwesomeIcon
                  icon={faBuilding}
                  style={{ color: "#cda274" }}
                />
              }
            </h1>
          </span>

          <span>The Art and Science of Architecture</span>
        </div>
        <div className="box-card">
          <span>Home Check and Safety and Secure</span>
        </div>
        <div className="box-card">
          <span>Pattern and Materials for Interior Plan</span>
        </div>
      </div>
    </>
  );
};

export default ServiceSection;
