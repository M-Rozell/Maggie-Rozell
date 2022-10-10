
import '../css/TTTModal.css';
import Square from './tttComponents/Square';
import { AiFillCloseCircle } from 'react-icons/ai';
import React, { useState, useEffect } from 'react';
import { WinningCells } from './tttComponents/WinningCells';


function TTTModal({ closeModal, openBtn }) {

    const [table, setTable] = useState(['', '', '', '', '', '', '', '', '']);
    const [player, setPlayer] = useState('O');
    const [result, setResult] = useState({ winner: 'none', state: 'none' });

    useEffect(() => {
        checkWin();
        checkTie();
        if (player === 'X') {
            setPlayer('O')
        } else {
            setPlayer('X')
        }
    }, [table]);

    useEffect(() => {
        if (result.state !== 'none') {
            setTimeout(() => {
                alert(`${result.winner} has won!!`);
                restartGame();
            }, 100)
        }
    }, [result]);

    const chooseSquare = (square) => {
        setTable(table.map((value, index) => {
            if (index === square && value === '') {
                return player
            }
            return value;
        }));
    };

    const checkWin = () => {
        WinningCells.forEach((currentWin) => {
            const firstPlayer = table[currentWin[0]];
            if (firstPlayer === '') return;
            let currentWinTrue = true
            currentWin.forEach((index) => {
                if (table[index] !== firstPlayer) {
                    currentWinTrue = false
                }
            })
            if (currentWinTrue) {
                setResult({ winner: player, state: 'Won' })
            }
        });
    };

    const checkTie = () => {
        let filled = true;
        table.forEach((square) => {
            if (square === '') {
                filled = false
            }
        })
        if (filled) {
            setResult({ winner: 'No One', state: 'Tie' })
        }
    };

    const restartGame = () => {
        setTable(['', '', '', '', '', '', '', '', ''])
        setPlayer('O');
    };

    const handleCloseTTTModal = () => {
        closeModal(false)
        openBtn(true)
    };

    return (

        <div className='tttContainer'>
            <div className='tttModalBg'>

                <div className='tttCloseBtn '>
                    <button onClick={() => handleCloseTTTModal()}><AiFillCloseCircle /></button>
                </div>

                <div className='tttTitle'>Tic Tac Toe</div>

                <div id="board" className=''>

                    <div className="tRow">

                        <Square value={table[0]} clickSquare={() => { chooseSquare(0) }} />
                        <Square value={table[1]} clickSquare={() => { chooseSquare(1) }} />
                        <Square value={table[2]} clickSquare={() => { chooseSquare(2) }} />
                    </div>


                    <div className="tRow">

                        <Square value={table[3]} clickSquare={() => { chooseSquare(3) }} />
                        <Square value={table[4]} clickSquare={() => { chooseSquare(4) }} />
                        <Square value={table[5]} clickSquare={() => { chooseSquare(5) }} />
                    </div>

                    <div className="tRow">

                        <Square value={table[6]} clickSquare={() => { chooseSquare(6) }} />
                        <Square value={table[7]} clickSquare={() => { chooseSquare(7) }} />
                        <Square value={table[8]} clickSquare={() => { chooseSquare(8) }} />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default TTTModal;