import React from "react";
import {
  InfoBody,
  InfoContainer,
  InfoImg,
  InfoTextContainer,
  InfoHeading,
  InfoDesc,
} from "./InfoSectionElements";

const InfoSection = () => {
  return (
    <>
      <InfoBody>
        <InfoContainer>
          <InfoImg />
          <InfoTextContainer>
            <InfoHeading>About Us</InfoHeading>
            <InfoDesc>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              temporibus ad repellat, laudantium ullam cum cumque sequi delectus
              sapiente rem architecto, corrupti libero dolore numquam, saepe
              aut? Incidunt, explicabo placeat!
            </InfoDesc>
          </InfoTextContainer>
        </InfoContainer>
      </InfoBody>
    </>
  );
};

export default InfoSection;
