import * as React from 'react';
import styled from 'styled-components';

interface IHamburgerMenuProps {
  isOpened?: boolean;
  onClick: () => void;
}

const HamburgerMenuContainer = styled.div`
  position: absolute;
  top: calc(100vh + 5rem);
  height: 20px;
  width: 30px;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 4px;
  right: 4rem;
  cursor: pointer;
  z-index: 10;
`;
const HamburgerMenuLine = styled.div`
  height: 3px;
  background-color: ${({ theme }) => theme.palette.white};

  margin-bottom: 6px;
  border-radius: 10px;
`;

const HamburgerMenu: React.FunctionComponent<IHamburgerMenuProps> = ({
  isOpened,
  onClick,
}) => {
  return (
    <HamburgerMenuContainer onClick={onClick}>
      <HamburgerMenuLine></HamburgerMenuLine>
      <HamburgerMenuLine></HamburgerMenuLine>
      <HamburgerMenuLine></HamburgerMenuLine>
    </HamburgerMenuContainer>
  );
};

export default HamburgerMenu;
