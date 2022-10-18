
import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';


export const Nav = styled.nav`
  width: 100%;
  background: ${({scrollNav}) => (scrollNav ? 'transparent' : 'rgb(40, 40, 40, 0.65)')};
  border-bottom: ${({scrollNav}) => (scrollNav ? 'transparent' : "1px solid cornsilk")};
  height: 70px;
  margin-top: -70px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* font-size: 1rem; */
  position: sticky;
  top: 0;
  z-index:20;

  @media screen and (min-width: 768px) {
    border: ${({scrollNav}) => (scrollNav ? 'transparent' : "1px solid cornsilk")};
  }

  /* @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
} */
`


export const NavbarContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  width: 100%;
  padding: 0;
  /* max-width: 1100px; */
`

export const MobilIconWrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;


  @media screen and (min-width: 768px) {
  display: none;
}
`

export const MobileIcon = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    transform: translate(-100%, 15%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #F7EF8A;
  

  @media screen and (min-width: 768px) {
    display: none;
}
`


export const CatIcon = styled.div`
  position: absolute;
  top: 35px;
  left: 5px;
  color: cornsilk;
  font-size: 2rem;
  z-index: 21;

  &:hover {
    color: aqua;
    cursor: pointer;
}
` 


export const NavMenu = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`


export const NavItem = styled.div`
  height: 70px; //was 80
  display: flex;
  justify-content: center;
  align-items: center;
`


export const NavLinks = styled(LinkScroll)`
  appearance: button;
  background-color: rgb(40, 40, 40, 0.6);
  background-image: none;
  border: 1px solid #F7EF8A;
  border-radius: 2px;
  box-shadow: cornsilk 4px 4px 0 0, #F7EF8A 4px 4px 0 1px;
  box-sizing: border-box;
  color: #F7EF8A;
  cursor: pointer;
  display: inline-block;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: .75rem;
  line-height: 20px;
  margin: 0 30px 10px 0;
  overflow: visible;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  padding: 4px 25px;

  &:hover {
    text-decoration: none;
    color: cornsilk;  
}

  &:active {
    color: #AE8625;
    box-shadow: cornsilk 2px 2px 0 0, #AE8625 2px 2px 0 1px;
    transform: translate(2px, 2px);
}
`


