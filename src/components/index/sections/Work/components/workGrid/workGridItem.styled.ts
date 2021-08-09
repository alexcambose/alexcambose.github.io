import styled from 'styled-components';

export const WorkGridItemContainer = styled.div<{
  type: number;
}>`
  background: white;
  grid-area: ${({ type }) => type};
`;
