import Container from '@/components/ui/layout/Container';
import styled from 'styled-components';
export enum StatementSectionType {
  LIGHT,
  DARK,
}
const StatementSectionBackground = (theme) => ({
  [StatementSectionType.LIGHT]: theme.palette.white,
  [StatementSectionType.DARK]: theme.palette.black,
});
const StatementSectionColor = (theme) => ({
  [StatementSectionType.LIGHT]: theme.palette.black,
  [StatementSectionType.DARK]: theme.palette.white,
});
export const StatementSectionContainer = styled(Container)``;
export const StatementSectionTitle = styled.div`
  font-size: 2.7rem;
  text-decoration: underline;
`;
export const StatementSectionContent = styled.div`
  font-size: 2rem;
  font-weight: lighter;
`;
export const StatementSectionWrapper = styled.div<{
  type: StatementSectionType;
}>`
  padding: calc(3rem + 6vh) 0;
  background-color: ${({ type, theme }) =>
    StatementSectionBackground(theme)[type]};
  color: ${({ type, theme }) => StatementSectionColor(theme)[type]};
`;
