
import styled from "styled-components";

export const VideoContainer = styled.div`
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    position: relative;
    background-color: rgb(0, 0, 0, 0.9);
`

export const VideoAnimationWrapper = styled.div`
    position: relative;
    overflow: hidden;
    z-index: 4;
`

export const VideoWrapper = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 2%;
    left: 0;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    z-index: 5;
`

export const KiraFrame = styled.div`
    position: absolute;
    width: 18.75rem;
    height: 31.25rem;
    background-color: #fa1402;
    box-shadow: #FF8300 0px 0px 0px 2px inset, rgb(0, 0, 0, 0.9) -5px 5px 0px -3px, #fcf003 -5px 5px, rgb(0, 0, 0, 0.9) -10px 10px 0px -3px, #88db02 -10px 10px, rgb(0, 0, 0, 0.9) -15px 15px 0px -3px, #741AAC -15px 15px, rgb(0, 0, 0, 0.9) -20px 20px 0px -3px, #0000FF -20px 20px;
    z-index: 7;

    @media screen and (min-width: 90em) {
        width: 31.25rem;
        height: 50rem;
    }

    @media screen and (min-width: 160em) {
        width: 43.75rem;
        height: 68.75rem;
    }
`


export const VideoBg = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: transparent;
    z-index: 6;
`


export const KiraVideo = styled.video`
    width: 17.1875rem;
    height: 29.6875rem;
    border: 1px solid cornsilk;
    border-radius: 25%;
    z-index: 8;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;

    @media screen and (min-width: 90em) {
        width: 29.6875rem;
        height: 48.4375rem;
        border: 2px solid cornsilk;
}

    @media screen and (min-width: 160em) {
        width: 42.1875rem;
        height: 67.1875rem;
        border: 3px solid cornsilk;
}
`