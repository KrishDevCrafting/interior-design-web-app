import React from 'react';
import "../Pages/Section3.css"
import img1 from "./Assets/woodenLook.jpg"
import img2 from "./Assets/Shofa.jpg"
import img3 from "./Assets/apple.jpg"
const Footer = () => {
    return (
      <>
        <div className="align-heading">
          <h3 id="color-text">OUR BLOG</h3>
          <h1 id="heading-text">Latest Posts</h1>
        </div>
        <div className="parent-box">
          <div className="child-box">
            <img id="Img-S" src={img1} alt="" srcset="" />

            <hr />
            <h1>
              Color Schemes to Intro
              <br /> Spring in Your Home
            </h1>

            <a href="http://" target="_blank" rel="noopener noreferrer">
              Read-Me
            </a>
          </div>
          <div className="child-box">
            <img id="Img-S" src={img2} alt="" srcset="" />

            <hr />
            <h1>
              Things to Know When
              <br /> Choosing Sofa
            </h1>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Read-Me
            </a>
          </div>
          <div className="child-box">
            <img id="Img-S" src={img3} alt="" srcset="" />

            <hr />
            <h1>
              4 Ways to create Extra <br />
              Space in Small Homes
            </h1>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Read-Me
            </a>
          </div>
        </div>
      </>
    );
}
 
export default Footer;