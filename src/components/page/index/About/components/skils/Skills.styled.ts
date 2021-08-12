import Container from '@/components/ui/layout/Container';
import styled from 'styled-components';

export const SkillsContainer = styled.div`
  position: sticky;
  top: 0;
  min-height: 100vh;
  margin-top: 4rem;
  background-color: #00000021;
  transition: 3s;
`;
export const SkillsTitle = styled.span`
  font-size: 4rem;
  font-weight: bold;
  flex: 1;
  transform: rotate(-90deg);
  height: fit-content;
  width: fit-content;
`;
export const SkillsTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;
export const SkillsCanvas = styled.div`
  flex: 6;
  width: inherit;
  height: 100vh;
  position: relative;
  & > [aria-roledescription='carousel'] {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 20vh;
  }
`;
export const CarouselSlide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SkillsContent = styled(Container)`
  display: flex;
`;
export const Indicator = styled.div`
  cursor: pointer;
  width: 3rem;
  height: 0.8rem;
  margin-left: 1rem;
  transition: all 0.2s, box-shadow 1s, width 0.4s;
  /* font-size: 0rem; */
  color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  letter-spacing: -0.2rem;
  &:hover {
    color: white;
    letter-spacing: 0.1rem;
    height: 3rem !important;
    width: 6rem !important;
    /* transform: scale(1.1); */
  }
  &:nth-of-type(1) {
    background-color: ${({ theme }) => theme.skills.frontend};
  }
  &:nth-of-type(2) {
    background-color: ${({ theme }) => theme.skills.backend};
  }
  &:nth-of-type(3) {
    background-color: ${({ theme }) => theme.skills.other};
  }
  &.active {
    height: 1rem;
    &:nth-of-type(1) {
      box-shadow: 0 0 24px 2px ${({ theme }) => theme.skills.frontend};
      width: 3.3rem;
    }
    &:nth-of-type(2) {
      box-shadow: 0 0 24px 2px ${({ theme }) => theme.skills.backend};
      width: 3.3rem;
    }
    &:nth-of-type(3) {
      box-shadow: 0 0 24px 2px ${({ theme }) => theme.skills.other};
      width: 3.3rem;
    }
  }
`;
