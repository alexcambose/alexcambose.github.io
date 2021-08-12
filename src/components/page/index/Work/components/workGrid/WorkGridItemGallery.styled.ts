import styled from 'styled-components';

export const WorkGridItemGalleryContanier = styled.div`
  height: 100%;
  position: relative;
  overflow: hidden;
  box-shadow: black 0px 0px 10px 5px inset;
  transition: 0.3s;
`;

export const WorkGridItemGalleryImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;
export const WorkGridItemGalleryImageBackground = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  height: 100%;
  transform: scale(2);
  z-index: 0;
  filter: blur(5px);
`;
