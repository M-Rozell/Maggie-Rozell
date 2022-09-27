
import React from 'react';
import Icon from '../images/starPort50.png';
import { motion } from "framer-motion";
import { ObjectThreeAnimation } from '../animationElements';
import '../animation.css';


const iconVariant = {
    thirdAnimationStyle: {
        scale: [0.25, 0.5, 0.75, 1, 1.25, 1.25, 1, 0.75, 0.5, 0.25],
        rotate: [0, 90, 180, 270, 360, 360, 270, 180, 90, 0],
        transition: {
            delay: 1,
            duration: 1,
            ease: "easeInOut",
            repeat: 3,
            repeatType: 'loop'
        },// repeat: Infinity delay: 1
        opacity: 1
    }
};

export default function ThirdStyle(i) {

    const randomize = Math.floor(Math.random() * 100) + '%';

    return (

        <ObjectThreeAnimation
            key={i}
            className="spanAnimation"
            style={{ top: randomize, left: randomize }}
        >
            <motion.img
                className="motionImg"
                src={Icon}
                variants={iconVariant}
                initial={{ opacity: 0 }}
                animate='thirdAnimationStyle'
                exit={{ opacity: 0 }}
            >
            </motion.img>
        </ObjectThreeAnimation>
    )
};








