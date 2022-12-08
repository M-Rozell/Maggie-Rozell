
import React from 'react'
import { HashLink as BLink } from "react-router-hash-link";
import { AiOutlineCloseCircle } from 'react-icons/ai';

const LinkComponent = () => {
  return (
    <>
      <BLink className="projectsLink" to="/maggie-rozell/#Projects"><AiOutlineCloseCircle /></BLink>
    </>
  )
};

export default LinkComponent;