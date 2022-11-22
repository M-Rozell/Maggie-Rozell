
import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';
import { AiOutlineCloseCircle } from 'react-icons/ai';


export const SidebarContainer = styled.aside`
    position: fixed;
    margin: 0;
    padding: 0;
    z-index: 999;
    width: 275px;
    height: 50px;
    background: transparent;
    border-radius: 8px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    top: 10px;
    right: 10px;

    @media screen and (min-width: 768px){
        display: none;
}

    @media screen and (min-width: 281px){
        width: 350px;
        right: 20px;
}
`


export const SidebarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: 25px;
`


export const SidebarCloseIcon = styled(AiOutlineCloseCircle)`
    color: #F7EF8A;
`


export const SidebarIcon = styled.div`
    position: absolute;
    top: 4px;
    right: 8px;
    background: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    outline: none;
`


export const SidebarMenu = styled.ul`
    margin: 7px;
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

    @media screen and (min-width: 281px) {
        font-size: 1.2rem;
}
`