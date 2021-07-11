import React from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
} from "./HeroElements";
import video from "../../videos/yoga.mp4";
import { HeroButton } from "../ButtonElements.js";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>
          Give yourself an opportunity of yoga practice and change your life
        </HeroH1>
        <HeroP>
          Enroll for our plans today and recieve a Free DVD of guided
          meditation.
        </HeroP>
        <HeroBtnWrapper>
          <HeroButton to="enroll">Enroll Now</HeroButton>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
