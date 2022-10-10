
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
  border-left: 2px solid cornsilk;
  border-right: 2px solid cornsilk;
  border-bottom: 2px solid cornsilk;
  margin: 0;
  padding: 0;
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
  bottom: 3.5rem;
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



//React Icons for About Page//
export const LinkBtns = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: .85rem;
  padding: 0;
  margin: 0;

    @media screen and (min-width: 390px) {
      font-size: 1.25rem;
  }
    
    @media screen and (min-width: 768px) {
      font-size: 1.5rem;
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
