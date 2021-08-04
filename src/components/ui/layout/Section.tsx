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

const Section: React.FunctionComponent<ISectionProps> = ({
  children,
  title,
  ...props
}) => {
  return (
    <section {...props}>
      {title && <HiddenHeader> {title} </HiddenHeader>}
      {children}
    </section>
  );
};

export default Section;
