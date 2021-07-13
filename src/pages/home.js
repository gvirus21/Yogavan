import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroSection />
      <Footer />
    </>
  );
};

export default Home;
