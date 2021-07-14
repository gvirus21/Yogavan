import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Footer from "../components/Footer";
import img1 from "../images/img-1.jpg";
import img2 from "../images/img-2.jpg";
import img3 from "../images/img-3.jpg";

import {
  InfoSectionAbout,
  InfoSectionDiscover,
  InfoSectionServices,
} from "../components/InfoSection/Data";

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
      <InfoSection img={img1} {...InfoSectionAbout} />
      <InfoSection img={img2} {...InfoSectionDiscover} />
      <InfoSection img={img3} {...InfoSectionServices} />
      {/* <InfoSection />
      <InfoSection /> */}
      <Footer />
    </>
  );
};

export default Home;
