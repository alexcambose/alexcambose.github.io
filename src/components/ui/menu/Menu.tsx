import HamburgerMenu from '@/components/ui/menu/HamburgerMenu';
import ArrowSVG from '@/images/svg/arrow.svg';
import { AnimatePresence, motion } from 'framer-motion';
import { upperFirst } from 'lodash';
import * as React from 'react';
import { useState } from 'react';
import {
  MenuContainer,
  MenuHeader,
  MenuContent,
  MenuFooter,
  MenuPageItems,
  MenuEmailContact,
  MenuEmailContactLabel,
  MenuEmailContactEmail,
  MenuSocialLinks,
  MenuSocialLinkItem,
  MenuPageItem,
  MenuPageNumber,
  MenuPageLink,
  MenuOverlay,
  MenuPageArrow,
  MenuBorder,
  MenuShadow,
} from './Menu.styled';
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
      <HamburgerMenu isOpened={isOpened} onClick={onMenuClick} />

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
