import React from 'react'
import {
  GiDiceSixFacesOne,
  GiDiceSixFacesTwo,
  GiDiceSixFacesThree,
  GiDiceSixFacesFour,
  GiDiceSixFacesFive,
  GiDiceSixFacesSix,
} from 'react-icons/gi'

export const DieNumbers = ({ num }) => {

  

   return num === 1 ? (
        <GiDiceSixFacesOne />
      ) : num === 2 ? (
        <GiDiceSixFacesTwo />
      ) : num === 3 ? (
        <GiDiceSixFacesThree />
      ) : num === 4 ? (
        <GiDiceSixFacesFour />
      ) : num === 5 ? (
        <GiDiceSixFacesFive />
      ) : (
        <GiDiceSixFacesSix />
      );
}

