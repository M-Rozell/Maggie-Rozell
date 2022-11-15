
import styled, { keyframes } from 'styled-components';
import HeroImage from "../../images/HeroImageTrees.jpg";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

export const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${HeroImage}) ;
  background-repeat: no-repeat;
  background-position: center center fixed;
  background-size: cover;
  margin: 0;
  padding: 0;
  overflow: hidden;

    @media screen and (min-width: 768px) {
      border: 2px solid cornsilk;
  }
`

export const NavBg = styled.div`
width: 100%;
height: 70px;
background-color: rgb(40, 40, 40, 0.65);

border-bottom: 1px solid cornsilk;
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

export const TextWrapper = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
`


export const NameP1 = styled.p`
  position: absolute;
  color: #F7EF8A;
  font-family: 'IM Fell Great Primer SC', serif;
  /* font-size: 2rem; */
  font-size: clamp(2rem, 1rem + 5vw, 8rem);
  bottom: 9rem;
  left: clamp(.5rem, 1rem + 5vw, 1.25rem);
  animation-name: ${fadeIn};
  animation-duration: 5s;

/* @media screen and (min-width: 768px) {
  font-size: 4rem;
}

@media screen and (min-width: 1440px) {
  font-size: 5rem;
}

@media screen and (min-width: 2500px) {
  font-size: 7rem;
} */

`

export const NameP2 = styled.p`
  position: absolute;
  color: #F7EF8A;
  font-family: 'IM Fell Great Primer', serif;
  font-size: clamp(.5rem, .75rem + 1vw, 2rem);
  bottom: 8.5rem;
  left: clamp(.5rem, 1rem + 5vw, 1.25rem);
  animation-name: ${fadeIn};
  animation-duration: 5s;
`


//React Icons for About Page//
export const LinkBtns = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: .75rem;
  padding: 0;
  margin: 0;

    @media screen and (min-width: 390px) {
      font-size: .95rem;
  }
    
    @media screen and (min-width: 768px) {
      font-size: 1.25rem;
  }
`


export const GitHub = styled.a`
  color: #F7EF8A;
  text-decoration: none;

  &:visited {
    color: #AE8625;
  }

  &:hover {
    color: cornsilk;
  }
`


export const Email = styled.a`
  margin-left: 10px;
  margin-right: 10px;
  color: #F7EF8A;
  text-decoration: none;

  &:visited {
    color: #AE8625;
  }

  &:hover {
    color: cornsilk;
  }
`


export const LinkedIn = styled.a`
  color: #F7EF8A;
  text-decoration: none;

  &:visited {
    color: #AE8625;
  }

  &:hover {
    color: cornsilk;
  }
`
