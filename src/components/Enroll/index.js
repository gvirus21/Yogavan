import React from "react";
import {
  EnrollContainer,
  EnrollBg,
  VideoBg,
  EnrollInfoContainer,
  H1,
  EnrollForm,
  EnrollInput,
  Button,
} from "./EnrollElements";

import video from "../../videos/yoga.mp4";
const Enroll = () => {
  return (
    <>
      <EnrollContainer>
        <EnrollBg>
          <VideoBg autoPlay loop muted src={video} type="video/mp4" />
        </EnrollBg>
        <EnrollInfoContainer>
          <H1>
            Enroll with your Email to get our complete guided Meditation Lecture
            in your inbox.
          </H1>
          <EnrollForm>
            <EnrollInput placeholder="Email" />
            <Button to="/">Submit</Button>
          </EnrollForm>
        </EnrollInfoContainer>
      </EnrollContainer>
    </>
  );
};

export default Enroll;
