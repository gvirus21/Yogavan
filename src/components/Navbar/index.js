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

import { animateScroll as scroll } from "react-scroll";

const toggleHome = () => {
  scroll.scrollToTop();
};
const Navbar = ({ toggle, isScrolled }) => {
  return (
    <>
      <Nav isScrolled={isScrolled}>
        <NavContainer>
          <NavLogo to="/">
            <Logo onClick={toggleHome} />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <HiOutlineMenuAlt3 />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                exact={true}
                offset={-80}
              >
                {" "}
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="discover"
                smooth={true}
                duration={500}
                exact={true}
                offset={-80}
              >
                Discover
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="services"
                smooth={true}
                duration={500}
                exact={true}
                offset={-80}
              >
                Services
              </NavLinks>
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
