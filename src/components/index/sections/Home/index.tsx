import Section from '@/components/ui/layout/Section';
import * as React from 'react';
import styled from 'styled-components';
import Navbar from './components/navbar/Navbar';

const HomeSection = styled(Section)`
  height: 100vh;
  background-color: ${({ theme }) => theme.palette.background};
`;

const Home: React.FunctionComponent = () => (
  <HomeSection title="Home">
    <Navbar />
  </HomeSection>
);

export default Home;
