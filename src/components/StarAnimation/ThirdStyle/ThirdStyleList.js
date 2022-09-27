
import React from 'react';
import { UlThreeAnimation } from '../animationElements';
import ThirdStyle from './ThirdStyle';

const range = (start, end) => {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
};

const rangeResult = range(1, 10);

const listAnimations = rangeResult.map((e, i) =>
    <li
        className='listThreeAnimation'
        key={i}
    >{<ThirdStyle />}</li>
);

export default function ObjectThreeComponent() {

    return (
        <>
            <UlThreeAnimation>
                {listAnimations}
            </UlThreeAnimation>
        </>

    )
};