import React from "react";
import Navbar from "./components/NavbarC/Navbar";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* shhhhhhhhhh */}
      </BrowserRouter>
    </>
  );
};

export default App;