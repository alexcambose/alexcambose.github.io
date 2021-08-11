import * as React from 'react';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
interface IWorkGridItemGalleryProps {
  images: (props: any) => React.ReactNode[];
}

const WorkGridItemGalleryContanier = styled.div`
  height: 100%;
  position: relative;
  overflow: hidden;
  box-shadow: black 0px 0px 20px 0px inset;
  transition: 0.3s;
`;

const WorkGridItemGalleryImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;
const WorkGridItemGalleryImageBackground = styled.div`
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
const WorkGridItemGallery: React.FunctionComponent<IWorkGridItemGalleryProps> =
  ({ images }) => {
    const [currentImage, setCurrentImage] = useState(1);
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage((v) => (v + 1) % images.length);
      }, 2000);
      return () => {
        clearInterval(interval);
      };
    }, []);
    const imagesObj = images.map((e, i) => (
      <div
        key={i}
        style={{
          boxShadow: 'black 0px 0px 19px 20px inset',
          height: '100%',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          transition: 'transform 1s',
          position: 'absolute',
          opacity:
            (currentImage + 1) % images.length === i
              ? '0'
              : currentImage === i
              ? '1'
              : '1',
          transform: `translateX(${
            (currentImage + 1) % images.length === i
              ? '200%'
              : currentImage === i
              ? '0'
              : '-200%'
          })`,
        }}
      >
        <WorkGridItemGalleryImage>
          {e({ style: { height: '100%' } })}
        </WorkGridItemGalleryImage>
        <WorkGridItemGalleryImageBackground>
          {e({ style: { height: '100%' } })}
        </WorkGridItemGalleryImageBackground>
      </div>
    ));
    return (
      <WorkGridItemGalleryContanier>{imagesObj}</WorkGridItemGalleryContanier>
    );
  };

export default WorkGridItemGallery;
