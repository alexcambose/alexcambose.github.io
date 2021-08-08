import * as React from 'react';
import { forwardRef } from 'react';
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
`;
const Section = forwardRef<HTMLInputElement, ISectionProps>(
  ({ children, title, ...props }, ref) => {
    return (
      <CustomSection ref={ref} {...props}>
        {title && <HiddenHeader> {title} </HiddenHeader>}
        {children}
      </CustomSection>
    );
  }
);
export default Section;
