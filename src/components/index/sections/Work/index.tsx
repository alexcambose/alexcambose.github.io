import Section from '@/components/ui/layout/Section';
import SectionTitle from '@/components/ui/sectionTitle/SectionTitle';
import * as React from 'react';
import styled from 'styled-components';
const WorkSection = styled(Section)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.palette.black};
`;

const Work: React.FunctionComponent = () => (
  <WorkSection title="Work">
    <SectionTitle number="02">Work</SectionTitle>
  </WorkSection>
);

export default Work;
