import React from "react";
import Navbar from "../components/Navbar";
import Enroll from "../components/Enroll";
import Footer from "../components/Footer";

const EnrollPage = () => {
  return (
    <>
      <Navbar isScrolled={true} />
      <Enroll />
      <Footer />
    </>
  );
};

export default EnrollPage;
