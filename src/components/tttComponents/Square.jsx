
import React from 'react';
import '../../css/TTTModal.css';


function Square({ value, clickSquare }) {

    return (

        <div
            className='square'
            onClick={clickSquare}>
            {value}
        </div>
    )
};

export default Square;