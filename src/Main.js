import React from "react";
import Navbar from "./components/NavbarC/Navbar";
import Section1 from "./components/Pages/Section1";
import ServiceSection from "./components/Pages/Section2";
import Footer from "./components/Pages/Section3";
import NotificationInbox from "./NotificationInbox";

const Main = () => {
  return (
    <>
      <NotificationInbox />
      <Navbar />
      <Section1 />
      <ServiceSection />
      <Footer />
    </>
  );
};

export default Main;
