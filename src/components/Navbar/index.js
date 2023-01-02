
import Sidebar from '../Sidebar';
import { FaBars } from 'react-icons/fa';
import React, { useState } from 'react';
import { Nav, MobilIconWrapper, MobileIcon, NavMenu, NavLinks } from './NavbarElements';


const MainNavbar = ({ CloseKiraVideo }) => {

  const [sidebar, setSidebar] = useState(false);
  const [navIcon, setNavIcon] = useState(true);



  
  const handleMobileIcon = () => {
    setSidebar(true)
    setNavIcon(false)
  };


  return (
    <>
    
      <Nav >  

          <MobilIconWrapper>
            {navIcon && <MobileIcon onClick={() => { handleMobileIcon() }}>
              <FaBars />
            </MobileIcon>}
          </MobilIconWrapper>
          
          {sidebar && <Sidebar CloseSidebar={setSidebar} OpenNavIcon={setNavIcon} CloseKiraVideo={CloseKiraVideo} />}

          <NavMenu>

            
              <NavLinks to="Hero" onClick={() => { CloseKiraVideo() }}>Home</NavLinks>
            
            
              <NavLinks to="About" onClick={() => { CloseKiraVideo() }}>About</NavLinks>
            
            
              <NavLinks to="Projects" onClick={() => { CloseKiraVideo() }}>Projects</NavLinks>
            
            
              <NavLinks to="Skills" onClick={() => { CloseKiraVideo() }}>Skills</NavLinks>
            

          </NavMenu>

          
      </Nav>
    </>
  )
};

export default MainNavbar;


