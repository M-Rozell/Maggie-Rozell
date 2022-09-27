
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
  background-size: 100% 10px;
  box-sizing: border-box;
  padding: 0;
  margin: 0;

&:hover {
    background: linear-gradient(45deg, #f56036 2px, #ddad0b 1px);
    background-size: 10px 10px;
  }
`

export const ScrollSkills = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2.25rem;
  text-transform: uppercase;
  background-image: linear-gradient(#f56036 0.75px, transparent 1px);
  background-size: 100% 10px;
  font-family: 'Bungee Shade', cursive;
  background-clip: text;
  -webkit-background-clip: text;
  text-align: center;
  transition: .1s;
  transition: margin 1s;
  color: #bb2e12;

&:hover {
    margin-top: -3500px;
    transition: margin 35s linear;
    margin-bottom: 0;
  }
`

export const ScrollList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

