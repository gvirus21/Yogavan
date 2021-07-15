import React from "react";
import Navbar from "../components/Navbar";
import SignUp from "../components/SignUp";
import Footer from "../components/Footer";

const SignupPage = () => {
  return (
    <>
      <Navbar isScrolled={true} />
      <SignUp />
      <Footer />
    </>
  );
};

export default SignupPage;
