import React from "react";
import {
  InfoBody,
  InfoContainer,
  InfoImg,
  InfoTextContainer,
  InfoHeading,
  InfoDesc,
} from "./InfoSectionElements";

const InfoSection = ({
  id,
  imgStart,
  lightBg,
  darkText,
  headline,
  description,
  img,
}) => {
  return (
    <>
      <InfoBody id={id} lightBg={lightBg}>
        <InfoContainer imgStart={imgStart}>
          <InfoImg src={img} />
          <InfoTextContainer>
            <InfoHeading darkText={darkText}>{headline}</InfoHeading>
            <InfoDesc darkText={darkText}>{description}</InfoDesc>
          </InfoTextContainer>
        </InfoContainer>
      </InfoBody>
    </>
  );
};

export default InfoSection;
