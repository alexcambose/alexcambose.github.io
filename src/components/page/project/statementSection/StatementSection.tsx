import { Col, Row } from '@/components/ui/layout/Grid';
import * as React from 'react';
import {
  StatementSectionContainer,
  StatementSectionWrapper,
  StatementSectionTitle,
  StatementSectionContent,
  StatementSectionType,
} from './StatementSection.styled';

interface IStatementSectionProps {
  children: React.ReactNode;
  title: string;
  type?: StatementSectionType;
}

const StatementSection: React.FunctionComponent<IStatementSectionProps> = ({
  children,
  title,
  type = StatementSectionType.DARK,
}) => {
  return (
    <StatementSectionWrapper type={type}>
      <StatementSectionContainer>
        <Row>
          <Col>
            <StatementSectionTitle>{title}</StatementSectionTitle>
          </Col>
          <Col flex={3}>
            <StatementSectionContent>{children}</StatementSectionContent>
          </Col>
        </Row>
      </StatementSectionContainer>
    </StatementSectionWrapper>
  );
};

export default StatementSection;
