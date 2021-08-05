import * as React from 'react';
import styled from 'styled-components';

interface IHamburgerMenuProps {
  isOpened?: boolean;
  onClick?: () => void;
}

const HamburgerMenuContainer = styled.div`
  position: absolute;
  height: 20px;
  width: 30px;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 4px;
`;
const HamburgerMenuLine = styled.div`
  height: 3px;
  background-color: #fff;
  margin-bottom: 6px;
  border-radius: 10px;
`;

const HamburgerMenu: React.FunctionComponent<IHamburgerMenuProps> = ({
  isOpened,
  onClick,
}) => {
  return (
    <HamburgerMenuContainer>
      <HamburgerMenuLine></HamburgerMenuLine>
      <HamburgerMenuLine></HamburgerMenuLine>
      <HamburgerMenuLine></HamburgerMenuLine>
    </HamburgerMenuContainer>
  );
};

export default HamburgerMenu;
