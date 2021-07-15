import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainBody = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(45deg, crimson, orangered);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  height: 35em;
  width: 35em;
  border-radius: 1em;
  padding: 2em;
  background-color: #fff;
  box-shadow: 0px 10px 20px 5px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const FormContainer = styled.div`
  height: 20em;
  width: 30em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 3em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.input`
  cursor: text;
  font-size: 1.2em;
  padding: 0.3em 0.5em;
  border-radius: 0.2em;
  outline: none;
  border: 1px solid grey;

  &:focus {
    border: #c9183a 2px solid;
  }
`;

export const Label = styled.label`
  left: 0.5rem;
  top: 0.3rem;
  padding: 0 0.5rem;
  font-size: 1.3em;
`;

export const SignUpButton = styled(Link)`
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
