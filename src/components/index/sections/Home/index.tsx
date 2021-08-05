import Container from '@/components/ui/layout/Container';
import Section from '@/components/ui/layout/Section';
import * as React from 'react';
import styled from 'styled-components';
import HomeShade from './components/HomeShade';
import Navbar from './components/navbar/Navbar';
import PersonalImage from './components/personalImage/PersonalImage';
import ScrollDown from './components/scrollDown/ScrollDown';
import Title from './components/title/Title';

const HomeSection = styled(Section)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: visible;
`;
const HomeContainer = styled(Container)`
  flex: 1;
  display: flex;
`;
const HomeScrollDown = styled(ScrollDown)`
  position: absolute;
  bottom: 0.2rem;
  left: 50%;
  transform: translateX(-50%);
`;
const Home: React.FunctionComponent = () => (
  <HomeSection title="Home">
    <HomeShade />
    <Navbar />
    <HomeContainer>
      <Title />
      <PersonalImage />
    </HomeContainer>
    <HomeScrollDown></HomeScrollDown>
  </HomeSection>
);

export default Home;
