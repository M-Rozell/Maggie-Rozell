
import '../../css/TTTModal.css';
import React from 'react';

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