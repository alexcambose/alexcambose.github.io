import styled, { css, keyframes } from 'styled-components';

export const animation1 = keyframes`
  30% {
    transform: rotate(24deg) translate(9px, -1px);
    width: 80%;
  }
  60%{
    transform: rotate(24deg) translate(9px, -1px);
    width: 80%;}
  100% {
    transform: rotate(45deg) translate(9px, 2px);
    width: 80%;
  }
`;
export const animation2 = keyframes`
  30% {
    transform: rotate(-24deg) translate(9px, 1px);
    width: 80%;
  }
  60%{
    transform: rotate(-24deg) translate(9px, 1px);
    width: 80%;}
  100% {
    transform: rotate(-45deg) translate(9px, -2px);
    width: 80%;
  }
`;
export const animation3 = keyframes`
  30% {
    width: 120%;
    transform: translate(-22%);
  }
  60%{
    width: 120%;
    transform: translate(-22%);
    opacity: 1;}
  100% {
    opacity: 0;
    transform: translate(-52%);
  }
`;

export const animationRev1 = keyframes`
0% {
  transform: rotate(45deg) translate(9px, 2px);
    width: 80%;
}
  30% {
    transform: rotate(-24deg) translate(-9px, -1px);
    width: 80%;
  }
  60%{
    transform: rotate(-24deg) translate(-9px, -1px);
    width: 80%;}
  100% {
    transform: rotate(0deg) translate(0px, 0px);
    width: 100%;
  }
`;
export const animationRev2 = keyframes`
0% {
  transform: rotate(-45deg) translate(9px, -2px);
    width: 80%;
}
  30% {
    transform: rotate(24deg) translate(-9px, 1px);
    width: 80%;
  }
  60%{
    transform: rotate(24deg) translate(-9px, 1px);
    width: 80%;}
  100% {
    transform: rotate(0deg) translate(0px, 0px);
    width: 100%;
  }
`;
export const animationRev3 = keyframes`
0% {
  opacity: 0;
    transform: translate(-52%);
}
  30% {
    width: 120%;
    transform: translate(-18%);
  }
  60%{
   width: 120%;
    transform: translate(-18%);
    opacity: 1;}
  100% {
    opacity: 1;
    width: 100%;

    transform: translate(0%);
  }
`;
export const HamburgerMenuLine = styled.span`
  height: 3px;
  margin-top: 5px;
  background-color: ${({ theme }) => theme.palette.white};
  display: block;
  width: 100%;
  transition: 0.3s;
`;
export const HamburgerMenuContainer = styled.div`
  position: absolute;
  top: calc(100vh + 5rem);
  width: 2.1rem;
  /* background-color: rgba(0, 0, 0, 0.1); */
  right: 4rem;
  cursor: pointer;

  opacity: 0;
  transition: 0.3s;
  z-index: 10;
  ${({ isOpened, isPrevOpened }) =>
    (isOpened &&
      css`
        & > span {
          background-color: ${({ theme }) => theme.palette.black};
        }
        & > span:nth-of-type(1) {
          animation: ${animation1} 0.5s linear forwards;
        }
        & > span:nth-of-type(3) {
          animation: ${animation2} 0.5s linear forwards;
        }
        & > span:nth-of-type(2) {
          animation: ${animation3} 0.5s linear forwards;
        }
      `) ||
    (isPrevOpened &&
      css`
        & > span {
          background-color: ${({ theme }) => theme.palette.white};
        }
        & > span:nth-of-type(1) {
          animation: ${animationRev1} 0.5s linear forwards;
        }
        & > span:nth-of-type(3) {
          animation: ${animationRev2} 0.5s linear forwards;
        }
        & > span:nth-of-type(2) {
          animation: ${animationRev3} 0.5s linear forwards;
        }
      `)}
`;
