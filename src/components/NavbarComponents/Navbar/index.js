
import Burger from "../BurgerMenu/index.js";
import React from "react";
import { Nav, MobilIconWrapper, NavMenu, NavLinks } from "./NavbarElements";

const MainNavbar = ({ CloseKiraVideo, open, setOpen}) => {

  // const ref = useRef();

  // useEffect(() => {
  //   const checkOutsideClick = (e) => {
  //     if (open && ref.current && !ref.current.contains(e.target)) {
  //       setOpen(!open);
  //     }
  //   };
  //   document.addEventListener("mousedown", checkOutsideClick);

  //   return () => {
  //     //cleanup the event listener
  //     document.removeEventListener("mousedown", checkOutsideClick);
  //   };
  // }, [open]);

  return (
    <>
      <Nav >
        <MobilIconWrapper >
          <Burger CloseKiraVideo={CloseKiraVideo} open={open} setOpen={setOpen}/>
        </MobilIconWrapper>

        <NavMenu>
          <NavLinks
            to="Hero"
            onClick={() => {
              CloseKiraVideo();
            }}
          >
            Home
          </NavLinks>

          <NavLinks
            to="About"
            onClick={() => {
              CloseKiraVideo();
            }}
          >
            About
          </NavLinks>

          <NavLinks
            to="Projects"
            onClick={() => {
              CloseKiraVideo();
            }}
          >
            Projects
          </NavLinks>

          <NavLinks
            to="Skills"
            onClick={() => {
              CloseKiraVideo();
            }}
          >
            Skills
          </NavLinks>
        </NavMenu>
      </Nav>
    </>
  );
};

export default MainNavbar;
