
import React from 'react';
import { UlAnimation } from '../animationElements';
import FirstStyle from './FirstStyle';
import { ListOne } from '../animationElements';

const range = (start, end) => {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
};

const rangeResult = range(1, 10);

const listAnimations = rangeResult.map((e, i) =>
    <ListOne
        className='listOneAnimation'
        key={i}
    >{<FirstStyle />}</ListOne>

);

export default function ObjectOneComponent() {

    return (

        <UlAnimation>
            {listAnimations}
        </UlAnimation>
    )
};
