import styled from 'styled-components';

export const WorkGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 14vw);
  grid-gap: 1rem;
  grid-template-areas:
    'a a a a b b'
    'a a a a b b'
    'c c d d d d'
    'c c d d d d'
    'e e e e f g'
    'e e e e h i';
`;
