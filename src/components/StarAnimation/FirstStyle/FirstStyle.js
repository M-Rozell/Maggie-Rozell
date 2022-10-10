
import React from 'react';
import '../animation.css';
import { motion } from "framer-motion";
import Icon from '../images/starPort50.png';
import { ObjectOneAnimation } from '../animationElements';


const iconVariant = {

    animationStyle: {
        scale: [1, 1.25, 1.75, 2, 2.25, 2.25, 2, 1.75, 1.25, 1],
        rotate: [0, 90, 180, 270, 360, 360, 270, 180, 90, 0],
        transition: {
            delay: 1,
            duration: 1,
            ease: "easeInOut",
            repeat: 1,
            repeatType: 'loop'
        },// repeat: Infinity delay: 1
        opacity: 1,
    }
};

export default function FirstStyle(i) {

    const randomize = Math.floor(Math.random() * 100) + '%';

    return (
        <>
            <ObjectOneAnimation
                key={i}
                className="spanAnimation"
                style={{ top: randomize, left: randomize }}
            >
                <motion.img
                    className="motionImg"
                    src={Icon}
                    variants={iconVariant}
                    initial={{ opacity: 0 }}
                    animate='animationStyle'
                    exit={{ opacity: 0 }}
                >
                </motion.img>
            </ObjectOneAnimation>
        </>
    )
};