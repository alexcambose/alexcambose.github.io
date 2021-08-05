import Section from '@/components/ui/layout/Section';
import * as React from 'react';
import styled from 'styled-components';
const AboutSection = styled(Section)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const About: React.FunctionComponent = () => (
  <AboutSection title="About">333</AboutSection>
);

export default About;
