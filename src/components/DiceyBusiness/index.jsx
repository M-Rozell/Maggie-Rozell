
import React, { useState, useRef, useEffect } from "react";
import { DieNumbers } from "./DieNumbers";
import { AiFillCloseCircle } from 'react-icons/ai';
import "../../css/Dicey.css";


export const Dicey = ({ closeModal, openBtn }) => {

  const [newDie, setNewDie] = useState([]);
  const [disableBtn, setDisableBtn] = useState(false)
  const squareRef = useRef(null)

  //disable button when height of square is met
  useEffect(() => {
    const { bottom } = squareRef.current.getBoundingClientRect();
    const height = window.innerHeight - 100;
    if (bottom >= height) {
      setDisableBtn(true)
    }
  }, [newDie])

  //when a dice is dblClicked it disappears
  const handleDblClick = (i) => {
    const newArray = [...newDie];
    newArray.splice(i, 1);
    setNewDie(newArray)

  }

  //Array of dice Numbers
  // useEffect(() => {
  //   console.log(newDie);
  // }, [newDie]);


  //Close Button
  const handleDiceyClose = () => {
    closeModal(false);
    openBtn(true);
  };


  //New Dice Roll
  const handleNewDie = () => {
    const randomDieNumber = Math.floor(Math.random() * 6) + 1;
    setNewDie([...newDie, randomDieNumber]);
  };




  //Sum of Displayed Dice
  const handleSum = () => {
    const sumDie = newDie.reduce((result, number) => result + number);
    alert(`The sum of all the dice is ${sumDie}`);
  };


  //Reroll all Displayed Dice
  const handleReroll = () => {
    const newDieNumbers = newDie.map(() => Math.floor(Math.random() * 6) + 1)
    setNewDie(newDieNumbers)
  };



  return (

    <div className="diceyContainer" >

      <button className="diceyCloseBtn"
        onClick={() => {
          handleDiceyClose();
        }}
      >
        <AiFillCloseCircle />
      </button>
      <h1 className="diceGameH1">Roll The Dice</h1>
      <div className="diceyBtnContainer" >
        <button className="newDie" onClick={() => handleNewDie()} disabled={disableBtn}>
          New
        </button>

        <button className="rerollDie" onClick={() => handleReroll()}>
          Reroll
        </button>

        <button className="sumDie" onClick={() => handleSum()}>
          Sum
        </button>
      </div>
      <p className="diceyP">DblClick on a die to remove it.</p>

      <div className="diceContainerDiv" ref={squareRef}>
        <ul className="diceUl" >

          {newDie.map((num, i) => (
            <li key={i} className="dice" onDoubleClick={() => handleDblClick(i)}>
              <DieNumbers num={num} />
            </li>
          ))}

        </ul>
      </div>
    </div>
  );
};

export default Dicey;
