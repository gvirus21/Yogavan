import React from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import {
  Nav,
  NavContainer,
  NavLogo,
  Logo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle, isScrolled }) => {
  return (
    <>
      <Nav isScrolled={isScrolled}>
        <NavContainer>
          <NavLogo to="/">
            <Logo />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <HiOutlineMenuAlt3 />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover">Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Services</NavLinks>
            </NavItem>
            <NavBtn>
              <NavBtnLink to="/signup">Sign up</NavBtnLink>
            </NavBtn>
          </NavMenu>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
