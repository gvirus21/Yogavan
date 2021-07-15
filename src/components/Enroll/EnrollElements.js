import styled from "styled-components";
import { Link } from "react-router-dom";

export const EnrollContainer = styled.div`
  background-color: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 60em;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const EnrollBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 60em;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  /* background-size: cover; */
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const EnrollInfoContainer = styled.div`
  height: 50em;
  width: 50em;
  padding: 8em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  z-index: 10;
`;

export const H1 = styled.h1`
  font-size: 2em;
  color: #fff;
  z-index: 20;
  text-transform: capitalize;
  text-align: center;
`;

export const EnrollForm = styled.div`
  width: 30em;
  height: 20em;
  padding: 4em;
  border-radius: 1em;
  box-shadow: 0px 10px 20px 5px rgba(0, 0, 0, 0.1);
  background-color: whitesmoke;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const EnrollInput = styled.input`
  width: 20em;
  border-radius: 0.4em;
  padding: 0.5em;
  font-size: 1.2em;
  border: 2px solid #777;
  outline: none;

  &:focus {
    border: 2px solid orangered;
  }
`;

export const Button = styled(Link)`
  background: linear-gradient(45deg, crimson, orangered);
  border-radius: 2em;
  padding: 1em 2em;
  text-decoration: none;
  color: #fff;
  letter-spacing: 1px;
  font-size: 1.2em;
  transition: 0.3s all ease-in-out;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 4px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);
  }
`;
