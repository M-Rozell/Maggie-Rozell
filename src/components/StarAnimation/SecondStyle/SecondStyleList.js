
import React from 'react';
import { UlTwoAnimation } from '../animationElements';
import SecondStyle from './SecondStyle';


const range = (start, end) => {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
};

const rangeResult = range(1, 10);

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