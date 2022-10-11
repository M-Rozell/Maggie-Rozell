
import React from 'react';
import { HeroContainer, TextWrapper, NameP1, NameP2 } from './HeroElements';


const HeroSection = () => {

  return (
    <HeroContainer id='Hero'>
      <TextWrapper>

        <NameP1 className="name fade-in-text">Maggie Rozell</NameP1>
        <NameP2 className="name fade-in-text">{`{webDesigner}`}</NameP2>

      </TextWrapper>
    </HeroContainer>
  )
};

export default HeroSection;












