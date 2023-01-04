
import Sidebar from "../Sidebar/index";
import styled from "styled-components";
import React, { useState } from "react";

//styled-components
const StyledBurger = styled.div`
width: 2rem;
height: 2rem;
position: fixed;
top: 1rem;
right: 1rem;
display: flex;
justify-content: space-around;
flex-flow: column nowrap;
z-index: 20;

div {
  /* width: 2rem; */
  height: 0.25rem;
  background-color: #f7ef8a;
  border-radius: 0.625rem;
  transform-origin: -3px;
  transition: all 0.3s linear;

  &:nth-child(1) {
    transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    width: ${({ open }) => open ? '1.5rem' : '2rem'};
    
  }

  &:nth-child(2) {
    /* transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'}; */
    opacity: ${({ open }) => open ? '0' : '1'}
  }

  &:nth-child(3) {
    transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    width: ${({ open }) => open ? '1.5rem' : '2rem'};
  }

}
`

//functional component
const Burger = ({ CloseKiraVideo }) => {

const [open, setOpen] = useState(false);


  return (
    <>
    <StyledBurger open={open} setOpen={setOpen} onClick={() => setOpen(!open)}  >
      <div />
      <div />
      <div />
    </StyledBurger>
    <Sidebar open={open} setOpen={setOpen} CloseKiraVideo={CloseKiraVideo} />
    </>
  );
};

export default Burger;
