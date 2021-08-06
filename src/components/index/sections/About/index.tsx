import Container from '@/components/ui/layout/Container';
import Section from '@/components/ui/layout/Section';
import SectionTitle from '@/components/ui/sectionTitle/SectionTitle';
import * as React from 'react';
import styled from 'styled-components';
const AboutSection = styled(Section)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3rem 0;
`;

const About: React.FunctionComponent = () => (
  <AboutSection title="About">
    <Container>
      <SectionTitle number="01">About</SectionTitle>
    </Container>
  </AboutSection>
);

export default About;
