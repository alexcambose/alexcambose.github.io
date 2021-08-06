import * as React from 'react';
import styled from 'styled-components';

interface ISectionNumberProps {
  children: React.ReactNode;
}
const SectionNumberContainer = styled.div`
  opacity: 0.1;
  font-size: 6rem;
  font-weight: bold;
`;
const SectionNumber: React.FunctionComponent<ISectionNumberProps> = ({
  children,
}) => {
  return <SectionNumberContainer>{children}</SectionNumberContainer>;
};

export default SectionNumber;
