import styled from "styled-components";

export const InfoBody = styled.div`
  height: 30em;
  width: 100vw;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 700px) {
    height: 50em;
  }
`;

export const InfoContainer = styled.div`
  height: 25em;
  width: 80%;
  max-width: 1200px;
  /* background-color: pink; */
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 700px) {
    height: 45em;
    flex-direction: column;
  }
`;

export const InfoImg = styled.img`
  height: 20em;
  width: 20em;

  background-color: orangered;
`;

export const InfoTextContainer = styled.div`
  height: 20em;
  width: 50vw;
  /* background-color: aliceblue; */

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 700px) {
    height: 30em;
  }
`;

export const InfoHeading = styled.h1`
  font-size: 2em;
`;

export const InfoDesc = styled.p`
  font-size: 1.2em;
  margin: 2em;
  text-align: center;
  font-weight: 300;
`;
