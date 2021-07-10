import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const SidebarContainer = styled.div`
  position: fixed;
  z-index: 1000;
  height: 100%;
  width: 100%;
  background-color: #eee;
  display: grid;
  align-items: center;
  top: 0;
  right: 0;
  transition: all 0.3s ease-in;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: crimson;
`;

export const Icon = styled.div`
  position: absolute;
  top: 3rem;
  right: 3rem;
  background: transparent;
  font-size: 2em;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  text-align: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 80px);

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(5, 60px);
  }
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  text-transform: uppercase;
  text-decoration: none;
  list-style: none;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  color: #000;
  cursor: pointer;

  &:hover {
    color: crimson;
  }
  &:active {
    color: #777;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(LinkR)`
  border-radius: 3em;
  text-transform: uppercase;
  background-color: crimson;
  white-space: nowrap;
  padding: 1em 3em;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 4px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);
  }
`;
