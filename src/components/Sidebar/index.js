import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ toggle, isOpen }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink
              to="about"
              onClick={toggle}
              smooth={true}
              duration={500}
              exact={true}
              offset={-80}
            >
              About
            </SidebarLink>
            <SidebarLink
              to="discover"
              onClick={toggle}
              smooth={true}
              duration={500}
              exact={true}
              offset={-80}
            >
              Discover
            </SidebarLink>
            <SidebarLink
              to="services"
              onClick={toggle}
              smooth={true}
              duration={500}
              exact={true}
              offset={-80}
            >
              services
            </SidebarLink>
          </SidebarMenu>

          <SideBtnWrap>
            <SidebarRoute to="/signup" onClick={toggle}>
              Sign Up
            </SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
