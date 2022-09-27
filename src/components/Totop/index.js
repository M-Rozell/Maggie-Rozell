
import React from 'react';
import { TbArrowBigUpLines } from "react-icons/tb";
import { ArrowUpContainer, ArrowIcon } from './ToTopElements';

const ToTop = ({CloseKiraVideo}) => {

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    CloseKiraVideo()
  };

  return (

    <ArrowUpContainer>

      <ArrowIcon onClick={goToTop}> <TbArrowBigUpLines /> </ArrowIcon>

    </ArrowUpContainer>
  )
};

export default ToTop;