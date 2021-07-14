import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const FooterMain = styled.div`
  height: 25em;
  width: 100vw;
  background-color: #1a1a1a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 700px) {
    height: 50em;
  }
`;

export const FooterElephant = styled.div`
  height: 18em;
  width: 60vw;
  margin-top: 5em;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    height: 45em;
  }
`;

export const FooterHorse = styled.div`
  height: 15em;
  width: 10em;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 700px) {
    margin: 2em;
  }
`;

export const FooterHeading = styled.h3`
  font-size: 1.2em;
  color: #fff;
  text-transform: uppercase;
  margin: 10px;
`;

export const FooterLinks = styled(LinkR)`
  font-size: 0.8em;
  text-transform: uppercase;
  color: #fff;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 700px) {
    margin: 0.5em;
  }
`;

export const CopyRightMessage = styled.p`
  color: #777;
  font-size: 0.8em;
  margin-top: 2em;
  margin-bottom: 5em;
`;
