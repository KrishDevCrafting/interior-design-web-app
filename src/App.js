import React from "react";
import Navbar from "./components/NavbarC/Navbar";
import { BrowserRouter } from "react-router-dom";
import Section1 from "./components/Pages/Section1";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Section1/>
      </BrowserRouter>
    </>
  );
};

export default App;
