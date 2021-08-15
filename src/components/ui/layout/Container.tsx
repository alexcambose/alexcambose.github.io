import styled, { css } from 'styled-components';

export default styled.div<{ narrow?: boolean }>`
  width: 85%;
  margin: 0 auto;
  ${({ narrow }) =>
    narrow &&
    css`
      width: 60%;
    `}
`;
