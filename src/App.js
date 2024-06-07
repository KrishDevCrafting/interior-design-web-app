import React from "react";
import Navbar from "./components/NavbarC/Navbar";
import { BrowserRouter } from "react-router-dom";
import Section1 from "./components/Pages/Section1";
import ServiceSection from "./components/Pages/Section2";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Section1/>
        <ServiceSection/>
      </BrowserRouter>
    </>
  );
};

export default App;
