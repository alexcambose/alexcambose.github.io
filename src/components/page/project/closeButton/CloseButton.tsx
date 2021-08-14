import * as React from 'react';
import styled from 'styled-components';
import TransitionLink from 'gatsby-plugin-transition-link';

interface ICloseButtonProps {}

const CloseButtonContainer = styled.div`
  position: fixed;
  top: 3rem;
  right: 3rem;
  background: rgba(0, 0, 0, 0.4);
  width: 2rem;
  height: 2rem;
  z-index: 10;
  cursor: pointer;
  transform: scale(1);
  transition: 0.3s;

  &:hover {
    background: rgba(0, 0, 0, 0.6);
    transform: scale(1.1);
  }
  &:active {
    background: rgba(0, 0, 0, 1);
  }
`;

const CloseButtonLine = styled.div`
  height: 2px;
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  width: 100%;
  background-color: white;
  &:nth-of-type(1) {
    transform: translateY(-50%) rotate(45deg);
  }
  &:nth-of-type(2) {
    transform: translateY(-50%) rotate(-45deg);
  }
  ${CloseButtonContainer}:hover {
    &:nth-of-type(1) {
      transform: translateY(-50%) rotate(-45deg);
    }
    &:nth-of-type(2) {
      transform: translateY(-50%) rotate(45deg);
    }
  }
`;

const CloseButton: React.FunctionComponent<ICloseButtonProps> = (props) => {
  return (
    <CloseButtonContainer>
      <TransitionLink to="/">
        <CloseButtonLine />
        <CloseButtonLine />
      </TransitionLink>
    </CloseButtonContainer>
  );
};

export default CloseButton;
