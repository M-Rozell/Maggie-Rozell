
import React from 'react';
import '../css/Skills.css';
import ToTop from '../components/Totop';
import ScrollingSkills from '../components/ScrollingSkills';


const Skills = ({ CloseKiraVideo }) => {

  return (

    <div className='skillsContainer' id='Skills'>

      <h1 className='skillsTitle' id='rotate'>Skills</h1>

      <div className='windowContainer'>
        <div className='window'>

          <ScrollingSkills />

        </div>
      </div>

      <h1 className='skillsTitleTwo' id='rotateTwo'>Skills</h1>

      <div className='bottomArrow'>
        <ToTop CloseKiraVideo={CloseKiraVideo} />
      </div>

    </div>
  )
};

export default Skills;

