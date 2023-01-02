
import styled from "styled-components";

export const ScrollingSkillsContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    margin: 0;
    padding: 0;
    user-select: none;
    display: flex;
`


export const ScrollBox = styled.div`
  width: 100%;
  background: linear-gradient(#f56036 0.75px, #ddad0b 1px);
  background-size: 100% 0.625rem;
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  &:hover {
    background: linear-gradient(45deg, #f56036 2px, #ddad0b 1px);
    background-size: 0.625rem 0.625rem;
  }
`


export const ScrollSkills = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2.15rem;
  text-transform: uppercase;
  background-image: linear-gradient(#f56036 0.75px, transparent 1px);
  background-size: 100% 0.625rem;
  font-family: 'Bungee Shade', cursive;
  background-clip: text;
  -webkit-background-clip: text;
  text-align: center;
  transition: .1s;
  transition: margin 1s;
  color: #bb2e12;
  

  &:hover {
    margin-top: -218.75rem;
    transition: margin 35s linear;
    margin-bottom: 0;
  }

  @media screen and (min-width: 90em) {
    font-size: 4rem;
  }

  @media screen and (min-width: 160em) {
    font-size: 6rem
  }
`


export const ScrollList = styled.ul`
  list-style-type: none;
  margin: 0;
  
`

