import * as React from 'react';
import {
  SectionTitleLinedContainer,
  SectionTitleLinedContent,
} from './SectionTitleLined.styled';

interface ISectionTitleLinedProps {
  children: string;
}

const SectionTitleLined: React.FunctionComponent<ISectionTitleLinedProps> = ({
  children,
}) => {
  return (
    <SectionTitleLinedContainer>
      <SectionTitleLinedContent>{children}</SectionTitleLinedContent>
    </SectionTitleLinedContainer>
  );
};

export default SectionTitleLined;
