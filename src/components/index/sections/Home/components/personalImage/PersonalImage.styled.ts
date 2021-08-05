import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

export const PersonalImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  max-width: 60vh;
`;
export const PersonalImageElement = styled(StaticImage)`
  width: 40vw;
  height: auto;
`;
