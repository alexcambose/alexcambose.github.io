import Container from '@/components/ui/layout/Container';
import styled, { css, keyframes } from 'styled-components';

const zoomInAnimation = keyframes`
  90% {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    opacity:1;
  }
  100% {
    opacity: 0;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
  }
`;

export const WorkGridItemContainer = styled.div<{
  type: string;
}>`
  background: white;
  grid-area: ${({ type }) => type};
  border: 0rem solid transparent;
  transform: scale(1);
  outline: 0.12rem solid transparent;
  transition: 0.3s;
  &:not(.animation-start):hover {
    transform: translate3d(0, -1rem, 0);
    outline: 0.12rem solid white;
  }
  &.animation-start {
    position: fixed;
    z-index: 99;
    animation: ${zoomInAnimation} 2.5s forwards;
    transform: translate3d() !important;
    outline: none !important;
  }
`;

export const WorkGridItems = styled.div`
  height: 100%;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  opacity: 1;
  transition: 3s;
  transform: scale(1);
  &.expanded {
    width: 85%;
  }
`;

export const WorkGridItemOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 1));
  transition: 0.3s;
  background-size: 400% 400%;
  background-position: 0% -400%;

  padding: 2rem;
  ${WorkGridItemContainer}:hover & {
    background-position: 0% -300%;
  }
`;
export const WorkGridTags = styled.div`
  display: flex;

  transition: 0.3s;
  transform: translateY(20px);
  opacity: 0;

  ${WorkGridItemContainer}:not(.animation-start):hover & {
    transition-delay: 100ms;
    transform: translateY(0px);
    opacity: 1;
  }
`;
export const WorkGridTitle = styled.div`
  font-size: 4rem;

  transition: 0.3s;
  transform: translateY(20px);
  opacity: 0;

  ${WorkGridItemContainer}:not(.animation-start):hover & {
    transition-delay: 200ms;
    transform: translateY(0px);
    opacity: 1;
  }
`;
export const WorkGridTag = styled.div`
  font-size: 1rem;
  opacity: 0.8;
  transition: 0.3s;

  transition: 0.3s;
  transform: translateY(20px);
  opacity: 0;

  ${WorkGridItemContainer}:not(.animation-start):hover & {
    transition-delay: 300ms;
    transform: translateY(0px);
    opacity: 1;
  }
  &:not(:first-of-type) {
    margin-left: 1rem;
  }
`;
export const WorkGridSummary = styled.div`
  letter-spacing: 0.2rem;
  font-size: 1.5rem;
  transition: 0.3s;
  transform: translateY(20px);
  opacity: 0;

  ${WorkGridItemContainer}:not(.animation-start):hover & {
    transition-delay: 300ms;
    transform: translateY(0px);
    opacity: 1;
  }
`;

export const WorkGridDate = styled.div`
  transition: 0.3s;
  transform: translateY(20px);
  opacity: 0;

  ${WorkGridItemContainer}:not(.animation-start):hover & {
    transition-delay: 400ms;
    transform: translateY(0px);
    opacity: 1;
  }
  margin-top: 1rem;
`;
export const WorkGridAction = styled.div`
  margin-top: 1rem;
  transition: 0.3s;
  transform: translateY(20px);
  opacity: 0;

  ${WorkGridItemContainer}:not(.animation-start):hover & {
    transition-delay: 500ms;
    transform: translateY(0px);
    opacity: 1;
  }
`;
