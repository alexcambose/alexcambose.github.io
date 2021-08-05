import * as React from 'react';
import styled from 'styled-components';

interface ISectionProps {
  children: React.ReactNode;
  title?: string;
}

const HiddenHeader = styled.h1`
  position: absolute;
  top: -9999px;
  left: -9999px;
`;
const CustomSection = styled.section`
  position: relative;
  min-height: 100vh;
  z-index: -1;
`;
const Section: React.FunctionComponent<ISectionProps> = ({
  children,
  title,
  ...props
}) => {
  return (
    <CustomSection {...props}>
      {title && <HiddenHeader> {title} </HiddenHeader>}
      {children}
    </CustomSection>
  );
};

export default Section;
