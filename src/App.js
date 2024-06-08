import React from "react";
//import Navbar from "./components/NavbarC/Navbar";
//import { BrowserRouter as Router, Route } from "react-router-dom";
import { Route, Router ,Routes } from "react-router-dom";
// import Section1 from "./components/Pages/Section1";
// import ServiceSection from "./components/Pages/Section2";
// import Footer from "./components/Pages/Section3";
import Main from "./Main";
import Contact from "./components/Pages/Contact";
const App = () => {
  return (
    <>
      <Routes>
   <Route path="/" element={<Main/>}/>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
