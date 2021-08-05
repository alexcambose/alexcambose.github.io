import Section from '@/components/ui/layout/Section';
import * as React from 'react';
import styled from 'styled-components';
const WorkSection = styled(Section)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.palette.black};
`;

const Work: React.FunctionComponent = () => (
  <WorkSection title="Work">333</WorkSection>
);

export default Work;
