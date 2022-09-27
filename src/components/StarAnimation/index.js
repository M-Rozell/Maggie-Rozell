
import React from "react";
import { AnimationContainer, AnimationOneWrapper, AnimationTwoWrapper, AnimationThreeWrapper } from "./animationElements";
import FirstStyleList from './FirstStyle/FirstStyleList';
import SecondStyleList from "./SecondStyle/SecondStyleList";
import ThirdStyleList from './ThirdStyle/ThirdStyleList';


const Animation = () => {

    return (

        <AnimationContainer>

            <AnimationOneWrapper>
                <FirstStyleList />
            </AnimationOneWrapper>

            <AnimationTwoWrapper>
                <SecondStyleList />
            </AnimationTwoWrapper>

            <AnimationThreeWrapper>
                <ThirdStyleList />
            </AnimationThreeWrapper>

        </AnimationContainer>
    )
};

export default Animation;