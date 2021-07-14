import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Footer from "../components/Footer";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  // for navigation bar background color change.
  const [isScrolled, SetIsScrolled] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      SetIsScrolled(true);
    } else {
      SetIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggle={toggle} isScrolled={isScrolled} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroSection />
      <InfoSection />
      {/* <InfoSection />
      <InfoSection /> */}
      <Footer />
    </>
  );
};

export default Home;
