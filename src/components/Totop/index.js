
import React from 'react';
import { TbArrowBigUpLines } from "react-icons/tb";
import { ArrowUpContainer, ArrowIcon } from './ToTopElements';
import { HashLink as ArrowLink } from "react-router-hash-link";

const ToTop = ({ CloseKiraVideo }) => {

  // const goToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth',
  //   })
  //   CloseKiraVideo()
  // };

  const goToTop = () => {
    CloseKiraVideo()
  }

  return (

    <ArrowUpContainer>
      <ArrowLink to="/maggie-rozell/#Hero">
      <ArrowIcon onClick={goToTop}> <TbArrowBigUpLines /> </ArrowIcon>
    </ArrowLink>
    </ArrowUpContainer>
  )
};

export default ToTop;