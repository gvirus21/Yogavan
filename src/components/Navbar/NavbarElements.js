import styled from "styled-components";
import logo from "../../images/yogavan-logo.svg";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: #fff;
  height: 7em;
  width: 100%;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  margin: 0;
  text-align: center;
`;

export const NavContainer = styled.div`
  height: 3em;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.3s all ease;

  @media screen and (max-width: 760px) {
    width: 90%;
  }
`;

export const NavLogo = styled.div`
  width: 10em;
`;

export const Logo = styled.svg`
  background-image: url(${logo});
  height: 2.3em;
  background-repeat: no-repeat;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 700px) {
    display: block;
    position: absolute;
    top: 0.8em;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
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
  background-color: crimson;
  padding: 1em 1.5em;
  color: white;
  border-radius: 3em;
  white-space: nowrap;
  text-decoration: none;
  transition: all 0.3s ease-in;
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
