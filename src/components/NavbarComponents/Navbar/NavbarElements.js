import styled, { keyframes } from "styled-components";
import { Link as LinkScroll } from "react-scroll";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const Nav = styled.nav`
  width: 100%;
  overflow-x: hidden;
  position: relative;
  height: 4.375rem;
  margin-top: -4.375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 20;
  animation-name: ${fadeIn};
  animation-duration: 1s;
`;

export const MobilIconWrapper = styled.div`
  width: 100%;
  height: 3.75rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (min-width: 48em) {
    display: none;
  }
`;


export const NavMenu = styled.div`
  display: none;

  @media screen and (min-width: 48em) {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const NavLinks = styled(LinkScroll)`
  background-color: rgb(40, 40, 40, 0.6);
  border: 1px solid #f7ef8a;
  border-radius: 2px;
  box-shadow: cornsilk 3px 3px 0 0, #f7ef8a 3px 3px 0 1px;
  color: #f7ef8a;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 0.75rem;
  margin: 0 1.875rem 0.625rem 0;
  text-align: center;
  text-decoration: none;
  padding: 0.25rem 1.5625rem;

  &:hover {
    text-decoration: none;
    color: cornsilk;
  }

  &:active {
    color: #ae8625;
    box-shadow: cornsilk 2px 2px 0 0, #ae8625 2px 2px 0 1px;
    transform: translate(2px, 2px);
  }
`;
