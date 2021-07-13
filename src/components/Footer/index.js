import React from "react";
import {
  FooterMain,
  FooterElephant,
  FooterHorse,
  FooterHeading,
  FooterLinks,
  CopyRightMessage,
} from "./FooterElements";

const Footer = () => {
  return (
    <>
      <FooterMain>
        <FooterElephant>
          <FooterHorse>
            <FooterHeading>About</FooterHeading>
            <FooterLinks>How this works?</FooterLinks>
            <FooterLinks>Testimonies</FooterLinks>
            <FooterLinks>Careers</FooterLinks>
            <FooterLinks>Terms of use</FooterLinks>
          </FooterHorse>
          <FooterHorse>
            <FooterHeading>Socials</FooterHeading>
            <FooterLinks>Facebook</FooterLinks>
            <FooterLinks>Twitter</FooterLinks>
            <FooterLinks>Instagram</FooterLinks>
            <FooterLinks>Youtube</FooterLinks>
          </FooterHorse>
          <FooterHorse>
            <FooterHeading>Contact Us</FooterHeading>
            <FooterLinks>Contact</FooterLinks>
            <FooterLinks>Support</FooterLinks>
            <FooterLinks>Email</FooterLinks>
          </FooterHorse>
        </FooterElephant>
        <CopyRightMessage>
          {" "}
          ©Yogavan.com, Inc. All rights reserved.{" "}
        </CopyRightMessage>
      </FooterMain>
    </>
  );
};

export default Footer;
