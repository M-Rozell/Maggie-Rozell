
import React from 'react';
import { SidebarContainer, SidebarIcon, SidebarCloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElements';

const Sidebar = ({ CloseSidebar, OpenNavIcon, CloseKiraVideo }) => {

    const handleSidebarMenu = () => {
        CloseSidebar(false)
        OpenNavIcon(true)
        CloseKiraVideo()
    };

    return (
        <>
            <SidebarContainer >

                <SidebarWrapper>

                    <SidebarMenu>
                        <SidebarLink to='Hero' onClick={() => handleSidebarMenu()}>Home</SidebarLink>
                    </SidebarMenu>

                    <SidebarMenu>
                        <SidebarLink to='About' onClick={() => handleSidebarMenu()}>About</SidebarLink>
                    </SidebarMenu>

                    <SidebarMenu>
                        <SidebarLink to='Projects' onClick={() => handleSidebarMenu()}>Projects</SidebarLink>
                    </SidebarMenu>


                    <SidebarMenu>
                        <SidebarLink to='Skills' onClick={() => handleSidebarMenu()}>Skills</SidebarLink>
                    </SidebarMenu>

                    <SidebarIcon onClick={() => handleSidebarMenu()}>
                        <SidebarCloseIcon />
                    </SidebarIcon>

                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
};

export default Sidebar;