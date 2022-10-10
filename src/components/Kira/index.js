
import React from 'react';
import Animation from '../StarAnimation';
import Video from '../../video/KiraTrim.mp4';
import { VideoContainer, VideoWrapper, VideoAnimationWrapper, KiraFrame, VideoBg, KiraVideo } from './KiraElements';


const Kira = () => {

    return (
        <>
            <VideoContainer id="KV" >
                <VideoAnimationWrapper>
                    <Animation />

                    <VideoWrapper>

                        <VideoBg>
                            <KiraFrame></KiraFrame>
                            <KiraVideo autoPlay loop muted src={Video} type='video/mp4' />
                        </VideoBg>

                    </VideoWrapper>

                </VideoAnimationWrapper>
            </VideoContainer>
        </>
    )
};

export default Kira;

