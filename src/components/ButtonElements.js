import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const HeroButton = styled(LinkR)`
  padding: 1em 3em;
  background: linear-gradient(45deg, crimson, orangered);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.2em;
  border-radius: 2em;
  transition: 0.2s all ease-in-out;
  text-decoration: none;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 4px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);
  }
`;
