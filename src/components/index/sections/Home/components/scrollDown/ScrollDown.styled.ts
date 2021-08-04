import styled from 'styled-components';

export const ScrollDownContainer = styled.span`
  position: relative;
  display: inline-block;
  width: fit-content;
  font-size: calc(0.4rem + 1vh);
  height: 4em;
  cursor: pointer;
`;
export const ScrollDownChevron = styled.span`
  position: absolute;
  width: 1.7em;
  height: 0.4em;
  opacity: 0;
  animation: move 3s ease-out infinite;
  left: 50%;
  transform: scale3d(0.5, 0.5, 0.5) translateY(1.9em) translateX(-100%);
  transition: 0.3s;
  &:hover {
    &:before,
    &:after {
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
    }
  }
  @keyframes move {
    25% {
      opacity: 1;
    }
    33% {
      opacity: 1;
      transform: translateY(2em) translateX(-50%);
    }
    50% {
      opacity: 1;
      transform: translateY(2.2em) translateX(-50%);
    }
    67% {
      opacity: 1;
      transform: translateY(2.6em) translateX(-50%);
    }
    100% {
      opacity: 0;
      transform: translateY(3.3em) scale3d(0.5, 0.5, 0.5) translateX(-100%);
    }
  }
  &:first-child {
    animation: move 3s ease-out 1s infinite;
  }

  &:nth-child(2) {
    animation: move 3s ease-out 2s infinite;
  }

  &:before,
  &:after {
    content: ' ';
    position: absolute;
    top: 0;
    height: 100%;
    width: 51%;
    background: #fff;
  }

  &:before {
    left: 0;
    transform: skew(0deg, 30deg);
  }

  &:after {
    right: 0;
    width: 50%;
    transform: skew(0deg, -30deg);
  }
`;
export const ScrollDownText = styled.span`
  color: ${({ theme }) => theme.palette.white};
  opacity: 0;
  transition: 0.3s;

  ${ScrollDownContainer}:hover & {
    opacity: 1;
  }
`;
