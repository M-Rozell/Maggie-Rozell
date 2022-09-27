
import React from 'react'
import { HashLink as GLink } from "react-router-hash-link";
import { AiOutlineCloseCircle } from 'react-icons/ai';

const LinkComponent = () => {
  return (
    <>
      <GLink className="ghibliLink" to="/#Projects"><AiOutlineCloseCircle /></GLink>
    </>
  )
};

export default LinkComponent;