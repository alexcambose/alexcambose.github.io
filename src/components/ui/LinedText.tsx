import styled, { css } from 'styled-components';

const line = css`
  content: ' ';
  position: absolute;
  height: 2px;
  background-color: ${({ theme }) => theme.palette.white};
  width: 36px;
  top: 50%;
  transform: translateY(-50%);
`;

export default styled.div`
  position: relative;
  padding-left: 50px;
  padding-right: 50px;
  text-align: center;
  &:after {
    ${line}
    right: 0;
  }
  &:before {
    ${line}
    left: 0;
  }
`;
