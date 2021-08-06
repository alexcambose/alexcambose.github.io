import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
`;
export const Col = styled.div`
  flex: 1;
  &:not(:first-child) {
    margin-left: 1rem;
  }
`;
