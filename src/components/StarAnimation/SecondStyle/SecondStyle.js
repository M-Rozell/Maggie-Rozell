
import React from 'react';
import '../animation.css';
import { motion } from "framer-motion";
import Icon from '../images/starPort50.png';
import { ObjectTwoAnimation } from '../animationElements';


const iconVariant = {
    
    secondAnimationStyle: {
        scale: [0.5, 0.75, 1, 1.25, 1.5, 1.5, 1.25, 1, 0.75, 0.5],
        rotate: [0, 90, 180, 270, 360, 360, 270, 180, 90, 0],
        transition: {
            delay: 1,
            duration: 1,
            ease: "easeInOut",
            repeat: 2,
            repeatType: 'loop'
        },// repeat: Infinity delay: 1
        opacity: 1
    }
};

export default function SecondStyle(i) {

    const randomize = Math.floor(Math.random() * 100) + '%';

    return (

        <ObjectTwoAnimation
            key={i}
            className="spanAnimation"
            style={{ top: randomize, left: randomize }}
        >
            <motion.img
                className="motionImg"
                src={Icon}
                variants={iconVariant}
                initial={{ opacity: 0 }}
                animate='secondAnimationStyle'
                exit={{ opacity: 0 }}
            ></motion.img>
        </ObjectTwoAnimation>
    )
};






