
import React from "react";
import {
  SidebarContainer,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";

const Sidebar = ({ CloseKiraVideo, open, setOpen }) => {
  

  const handleSidebarMenu = () => {
    setOpen(!open);
    CloseKiraVideo();
  };


  return (
    <>
      <SidebarContainer open={open} setOpen={setOpen}>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="Hero" onClick={handleSidebarMenu}>
              Home
            </SidebarLink>
          </SidebarMenu>

          <SidebarMenu>
            <SidebarLink to="About" onClick={handleSidebarMenu}>
              About
            </SidebarLink>
          </SidebarMenu>

          <SidebarMenu>
            <SidebarLink to="Projects" onClick={handleSidebarMenu}>
              Projects
            </SidebarLink>
          </SidebarMenu>

          <SidebarMenu>
            <SidebarLink to="Skills" onClick={handleSidebarMenu}>
              Skills
            </SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
