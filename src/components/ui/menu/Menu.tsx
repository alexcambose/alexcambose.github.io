import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import HamburgerMenu from '@/components/ui/HamburgerMenu';
import { useState } from 'react';
import ArrowSVG from '@/images/svg/arrow.svg';
import { upperFirst } from 'lodash';
import Link from '../Link';
const MenuContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 30vw;
  background-color: ${({ theme }) => theme.palette.white};
  color: ${({ theme }) => theme.palette.black};

  z-index: 9;
  /* border: 0rem solid ${({ theme }) => theme.palette.white}; */
  padding: 3rem 4rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  &:before {
    content: ' ';
    position: absolute;
    top: 4px;
    left: 4px;
    height: calc(100% - 8px);
    width: calc(100% - 8px);
    background-color: ${({ theme }) => theme.palette.white};
    z-index: -1;
  }
  box-shadow: 0 0 0px 0px rgb(255 255 255 / 20%);
  transition: box-shadow 0.3s;
  &:hover {
    box-shadow: 0 0 0px 0.5rem rgb(255 255 255 / 20%);
  }
`;
const MenuHeader = styled.div`
  flex: 1;
`;
const MenuContent = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
`;
const MenuFooter = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const MenuPageItems = styled.div`
  &:hover > *:not(:hover) {
    opacity: 0.3;
  }
`;
const MenuEmailContact = styled.div``;
const MenuEmailContactLabel = styled.div`
  opacity: 0.5;
`;
const MenuEmailContactEmail = styled.div`
  font-size: 2rem;
`;
const MenuSocialLinks = styled.div`
  margin-top: 2rem;
  display: flex;
`;
const MenuSocialLinkItem = styled(Link)`
  color: ${({ theme }) => theme.palette.black} !important;
  flex: 1;
`;
const MenuPageItem = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  position: relative;
  display: flex;
  align-items: flex-end;
  width: fit-content;
  transition: 0.3s;
`;
const MenuPageNumber = styled.span`
  opacity: 0.5;
  width: 2.2rem;
  display: inline-block;
`;
const MenuPageLink = styled.span`
  font-size: 3rem;
`;
const MenuOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 9;
`;
const MenuPageArrow = styled.span`
  padding-top: 0.8rem;
  align-self: center;
  opacity: 0;
  transition: 0.3s;
  transform: translateX(0.3rem);

  ${MenuPageItem}:hover & {
    transform: translateX(1rem);
    opacity: 1;
  }
`;
const MenuBorder = styled.div`
  position: absolute;
  display: block;
  top: -50%;
  left: -50%;
  z-index: -9;
  display: block;
  height: 200%;
  width: 200%;
  transform: rotate(-45deg);
  overflow: hidden;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.palette.white} 20%,
    ${({ theme }) => theme.palette.white} 40%,
    ${({ theme }) => theme.palette.black} 50%,
    ${({ theme }) => theme.palette.black} 55%,
    ${({ theme }) => theme.palette.white} 70%,
    ${({ theme }) => theme.palette.white} 100%
  );
  background-size: 200% auto;

  animation: shine 3s linear;
  animation-delay: 3s;
  opacity: 0;

  @keyframes shine {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    100% {
      opacity: 1;
      background-position: 200% center;
    }
  }
`;
const MenuShadow = styled(motion.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 30vw;
  background: ${({ theme, color = 'black' }) => theme.palette[color]};
  z-index: 8;
`;
const Menu: React.FunctionComponent = () => {
  const [isOpened, setIsOpened] = useState(false);
  const onMenuClick = () => {
    setIsOpened((v) => !v);
  };
  const container = {
    hidden: {
      transition: {
        staggerChildren: 0.06,
        // delayChildren: 0.1,
        staggerDirection: -1,
      },
    },
    show: {
      transition: {
        staggerChildren: 0.06,
        // delayChildren: 0.1,
        staggerDirection: 1,
      },
    },
  };
  const item = {
    hidden: {
      opacity: 0,
      translateX: '30vw',
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      translateX: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  const menu = (
    <MenuContainer variants={item}>
      <MenuBorder />
      <MenuHeader></MenuHeader>
      <MenuContent>
        <MenuPageItems>
          {['home', 'about', 'work', 'blog', 'contact'].map((e, i) => (
            <MenuPageItem key={i}>
              <MenuPageNumber>0{i}.</MenuPageNumber>
              <MenuPageLink>{upperFirst(e)}</MenuPageLink>
              <MenuPageArrow>
                <ArrowSVG />
              </MenuPageArrow>
            </MenuPageItem>
          ))}
        </MenuPageItems>
      </MenuContent>
      <MenuFooter>
        <MenuEmailContact>
          <MenuEmailContactLabel>Get in touch</MenuEmailContactLabel>
          <MenuEmailContactEmail>hello@alexcambose.com</MenuEmailContactEmail>
        </MenuEmailContact>
        <MenuSocialLinks>
          <MenuSocialLinkItem
            target="blank"
            to="https://github.com/alexcambose"
          >
            Github.
          </MenuSocialLinkItem>
          <MenuSocialLinkItem
            target="blank"
            to="https://www.linkedin.com/in/alexcambose/"
          >
            LinkedIn.
          </MenuSocialLinkItem>
          <MenuSocialLinkItem
            target="blank"
            to="https://www.facebook.com/alexcambose/"
          >
            Facebook.
          </MenuSocialLinkItem>
        </MenuSocialLinks>
      </MenuFooter>
    </MenuContainer>
  );
  return (
    <>
      <HamburgerMenu onClick={onMenuClick} />

      <AnimatePresence initial={false}>
        {isOpened && (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <MenuOverlay
              onClick={onMenuClick}
              transition={{ delay: 0.6 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            ></MenuOverlay>
            <MenuShadow color="gray" variants={item}></MenuShadow>
            <MenuShadow color="accent" variants={item}></MenuShadow>
            <MenuShadow color="white" variants={item}></MenuShadow>
            <MenuShadow color="black" variants={item}></MenuShadow>

            {menu}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Menu;
