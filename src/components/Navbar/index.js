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

const Navbar = ({ toggle }) => {
  return (
    <div>
      <Nav>
        <NavContainer>
          <NavLogo to="/">
            <Logo />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <HiOutlineMenuAlt3 />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>Services</NavLinks>
            </NavItem>
            <NavBtn>
              <NavBtnLink>Sign up</NavBtnLink>
            </NavBtn>
          </NavMenu>
        </NavContainer>
      </Nav>
    </div>
  );
};

export default Navbar;
