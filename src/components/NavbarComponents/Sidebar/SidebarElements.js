
import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';


export const SidebarContainer = styled.aside`
    position: fixed;
    margin: 0;
    padding: 0;
    background: transparent;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    border-radius: 8px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    top: 0.725rem;
    transition: transform 0.3s ease-in-out;
    
    
    @media screen and (min-width: 48em){
        display: none;
}

    @media screen and (min-width: 17.5625em){
        width: 21.875rem;
        right: 1.25rem;
}
`


export const SidebarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: 1.5625rem;

`


export const SidebarMenu = styled.ul`
    margin: 0.4375rem;
    padding: 0;
`


export const SidebarLink = styled(LinkScroll)`
    font-size: 1rem;
    text-decoration: none;
    list-style: none;
    font-family: 'Mingzat', sans-serif;
    text-decoration: none;
    color: #f0f9db;
    cursor: pointer;

    &:hover {
        color: #AE8625;
}

    @media screen and (min-width: 17.5625em) {
        font-size: 1.2rem;
}
`