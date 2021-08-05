import * as React from 'react';
import { useEffect, useState } from 'react';
import { Sticky, StickyContainer } from 'react-sticky';
import {
  HamburgerMenuContainer,
  HamburgerMenuLine,
} from './HamburgerMenu.styled';

interface IHamburgerMenuProps {
  isOpened?: boolean;
  onClick: () => void;
}
const HamburgerMenu: React.FunctionComponent<IHamburgerMenuProps> = ({
  isOpened,
  onClick,
}) => {
  const [isPrevOpened, setIsPrevOpened] = useState(false);
  useEffect(() => {
    setIsPrevOpened(!isOpened);
  }, [isOpened]);
  const mouseMove = () => {};
  useEffect(() => {
    document.addEventListener('mousemove', mouseMove);
    return () => {
      document.removeEventListener('mousemove', mouseMove);
    };
  }, []);
  return (
    <Sticky>
      {({ style, isSticky }) => (
        <HamburgerMenuContainer
          isOpened={isOpened}
          isPrevOpened={isPrevOpened}
          style={{
            ...style,
            ...(isSticky
              ? {
                  opacity: 1,
                  top: '4rem',
                  right: '4rem',
                  width: '2.1rem',
                  left: 'auto',
                }
              : {}),
          }}
          onClick={onClick}
        >
          <HamburgerMenuLine></HamburgerMenuLine>
          <HamburgerMenuLine></HamburgerMenuLine>
          <HamburgerMenuLine></HamburgerMenuLine>
        </HamburgerMenuContainer>
      )}
    </Sticky>
  );
};

export default HamburgerMenu;
