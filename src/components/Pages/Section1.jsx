import React from "react";
import { motion } from "framer-motion";
import "../Pages/Section1.css";
import img from "./Assets/pexels-medhat-ayad-122846-447592.jpg";
import img2 from "./Assets/multipleChaire.jpg";

const Section1 = () => {
  return (
    <>
      <section className="hero-head">
        <motion.div
          className="heading-1"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>design studio</h1>
        </motion.div>
        <motion.div
          className="sub-heading"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2>Simple & Modern Homes</h2>
        </motion.div>
        <motion.div
          className="sub-para"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            voluptates autem nesciunt architecto iusto, adipisci provident sed
            nihil! Et, illo?
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span>learn more</span>
          </motion.button>
        </motion.div>
      </section>
      <section className="AboutMe-container">
        <motion.div
          className="About-box"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 id="About-Heading">About US</h1>
          <p id="About-text">One of The Fastest Way To Business Gain Success</p>
          <span>
            <motion.img
              id="img-style"
              src={img}
              alt=""
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </span>
        </motion.div>
        <motion.div
          className="About-box"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p id="AboutBox-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            officia nobis id officiis vitae dolore dolorum quas corporis fugit
            explicabo.
          </p>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <span>Learn More</span>
          </motion.button>
          <span>
            <motion.img
              id="img2-style"
              src={img2}
              alt=""
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </span>
        </motion.div>
      </section>
    </>
  );
};

export default Section1;
