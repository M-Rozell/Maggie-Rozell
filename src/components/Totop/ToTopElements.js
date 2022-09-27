
import styled from "styled-components";

export const ArrowUpContainer = styled.div`
  position: relative;
  display: flex;
`

export const ArrowIcon = styled.div`
    color: cornsilk;
    background: transparent;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    animation: movebtn 3s linear infinite;
    transition: all .5s ease-in-out;

&:hover {
  animation: none;
  color: #F7EF8A;
  }

  @keyframes movebtn {
    0% {
        transform: translateY(0px);
    }

    25% {
        transform: translateY(10px);
    }

    50% {
        transform: translateY(0px);
    }

    75% {
        transform: translateY(-10px);
    }

    100% {
        transform: translateY(0px);
    }
}
`