import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import Link from '../Link';

export const MenuContainer = styled(motion.div)`
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
export const MenuHeader = styled.div`
  flex: 1;
`;
export const MenuContent = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
`;
export const MenuFooter = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const MenuPageItems = styled.div`
  &:hover > *:not(:hover) {
    opacity: 0.3;
  }
`;
export const MenuEmailContact = styled.div``;
export const MenuEmailContactLabel = styled.div`
  opacity: 0.5;
`;
export const MenuEmailContactEmail = styled.div`
  font-size: 2rem;
`;
export const MenuSocialLinks = styled.div`
  margin-top: 2rem;
  display: flex;
`;
export const MenuSocialLinkItem = styled(Link)`
  color: ${({ theme }) => theme.palette.black} !important;
  flex: 1;
`;
export const MenuPageItem = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  position: relative;
  display: flex;
  align-items: flex-end;
  transition: 0.3s;
`;
export const MenuPageNumber = styled.span`
  opacity: 0.5;
  width: 2.2rem;
  display: inline-block;
`;
export const MenuPageLink = styled.span`
  font-size: 3rem;
`;
export const MenuOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 9;
`;
export const MenuPageArrow = styled.span`
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
export const MenuBorder = styled.div`
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
export const MenuShadow = styled(motion.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 30vw;
  background: ${({ theme, color = 'black' }) => theme.palette[color]};
  z-index: 8;
`;
