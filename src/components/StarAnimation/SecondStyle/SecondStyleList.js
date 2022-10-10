
import React from 'react';
import SecondStyle from './SecondStyle';
import { UlTwoAnimation } from '../animationElements';


const range = (start, end) => {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
};

const rangeResult = range(1, 20);

const listAnimations = rangeResult.map((e, i) =>
    <li
        className='listTwoAnimation'
        key={i}
    >{<SecondStyle />}</li>
);

export default function ObjectTwoComponent() {

    return (
        <>
            <UlTwoAnimation>
                {listAnimations}
            </UlTwoAnimation>
        </>
    )
};