import styled from 'styled-components';

export const SectionTitleLinedContainer = styled.div`
  position: relative;
  padding: 10rem 0 4rem;
  &:before {
    content: ' ';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: 1px;
    background-color: black;
  }
`;
export const SectionTitleLinedContent = styled.div`
  background: white;
  font-size: 3rem;
  font-weight: bold;
  padding: 0 1rem;
  color: black;
  position: absolute;
  left: 4vw;
  top: 50%;
  transform: translateY(-50%);
`;
