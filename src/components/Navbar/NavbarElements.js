import styled from "styled-components";
import logo from "../../images/yogavan-logo.svg";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: transparent;
  color: #fff;
  height: 5em;
  width: 100%;
  margin-top: -5em;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  position: sticky;
  top: 0;
  z-index: 10;
  text-align: center;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5em;
  width: 90%;
  z-index: 1;
  padding: 0 24px;
  max-width: 1100px;

  transition: 0.3s all ease;
`;

export const NavLogo = styled.div`
  width: 8em;
`;

export const Logo = styled.svg`
  background-image: url(${logo});
  height: 2em;
  background-repeat: no-repeat;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 700px) {
    display: block;
    position: absolute;
    top: 0.1em;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 2rem;
    cursor: pointer;
    color: crimson;
    transition: color 0.2s ease-in;

    &:hover {
      color: grey;
    }
    &:active {
      color: crimson;
    }
  }
`;

export const NavMenu = styled.ul`
  list-style: none;
  font-size: 1em;
  display: flex;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  margin: 0 1em;
`;

export const NavLinks = styled(LinkS)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  font-size: 0.9em;
  cursor: pointer;
  transition: color 0.2s ease-in;
  text-transform: uppercase;

  &:hover {
    color: crimson;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-left: 2em;
`;

export const NavBtnLink = styled(LinkR)`
  background: linear-gradient(45deg, crimson, orangered);
  padding: 1em 1.5em;
  color: white;
  border-radius: 3em;
  white-space: nowrap;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  text-transform: uppercase;

  font-size: 0.8em;
  text-align: center;
  font-weight: 400;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 4px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);
  }
`;
