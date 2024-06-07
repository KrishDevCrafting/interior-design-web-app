import React from "react";
import "../Pages/Section1.css";
import img from "./Assets/pexels-medhat-ayad-122846-447592.jpg"
import img2 from "./Assets/multipleChaire.jpg"
const Section1 = () => {
  return (
    <>
      <section className="hero-head">
        <div className="heading-1">
          <h1>design studio</h1>
        </div>
        <div className="sub-heading">
          <h2>Simple & Modern Homes</h2>
        </div>
        <div className="sub-para">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            voluptates autem nesciunt architecto iusto, adipisci provident sed
            nihil! Et, illo?
          </p>
        </div>
        <div>
          <button className="btn">
            <span>learn more</span>
          </button>
        </div>
      </section>
      <section className="AboutMe-container">
        <div className="About-box">
          <h1 id="About-Heading">About US</h1>
          <p id="About-text">One of The Fastest Way To Business Gain Success</p>
          <span>
            <img id="img-style" src={img} alt="" />
          </span>
        </div>
        <div className="About-box">
          <p id="AboutBox-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            officia nobis id officiis vitae dolore dolorum quas corporis fugit
            explicabo.
          </p>
          <button>
            <span>Learn More</span>
          </button>
          <span>
            <img id="img2-style"  src={img2} alt= "" srcset="" />
          </span>
        </div>
      </section>
    </>
  );
};

export default Section1;
