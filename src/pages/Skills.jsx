
import React from 'react';
import '../css/Skills.css';
import ToTop from '../components/Totop';
import ScrollingSkills from '../components/ScrollingSkills';


const Skills = ({ CloseKiraVideo }) => {

  return (

    <div className='skillsContainer' id='Skills'>

      <div className='skillsTitle' id='rotate'>Skills</div>

      <div className='windowContainer'>
        <div className='window'>

          <ScrollingSkills />

        </div>
      </div>

      <div className='skillsTitleTwo' id='rotateTwo'>Skills</div>

      <div className='bottomArrow'>
        <ToTop CloseKiraVideo={CloseKiraVideo} />
      </div>

    </div>
  )
};

export default Skills;

