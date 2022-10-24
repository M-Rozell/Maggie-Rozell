
import Sidebar from '../Sidebar';
import { FaBars } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import { Nav, NavbarContainer, MobilIconWrapper, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';


const MainNavbar = ({ CloseKiraVideo }) => {

  const [scrollNav, setScrollNav] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [navIcon, setNavIcon] = useState(true);


  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  };


  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, []);

  
  const handleMobileIcon = () => {
    setSidebar(true)
    setNavIcon(false)
  };


  return (
    <>
      <Nav scrollNav={scrollNav}>

        <NavbarContainer>

          <MobilIconWrapper>
            {navIcon && <MobileIcon onClick={() => { handleMobileIcon() }}>
              <FaBars />
            </MobileIcon>}
          </MobilIconWrapper>
          
          {sidebar && <Sidebar CloseSidebar={setSidebar} OpenNavIcon={setNavIcon} CloseKiraVideo={CloseKiraVideo} />}

          <NavMenu>

            <NavItem>
              <NavLinks to="Hero" onClick={() => { CloseKiraVideo() }}>Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="About" onClick={() => { CloseKiraVideo() }}>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Projects" onClick={() => { CloseKiraVideo() }}>Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Skills" onClick={() => { CloseKiraVideo() }}>Skills</NavLinks>
            </NavItem>

          </NavMenu>

          

        </NavbarContainer>
      </Nav>
    </>
  )
};

export default MainNavbar;


