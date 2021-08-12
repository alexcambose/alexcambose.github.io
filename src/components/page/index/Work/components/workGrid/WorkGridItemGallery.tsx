import * as React from 'react';
import { useEffect, useState } from 'react';
import {
  WorkGridItemGalleryContanier,
  WorkGridItemGalleryImage,
  WorkGridItemGalleryImageBackground,
} from './WorkGridItemGallery.styled';
interface IWorkGridItemGalleryProps {
  images: (props: any) => React.ReactNode[];
}
const WorkGridItemGallery: React.FunctionComponent<IWorkGridItemGalleryProps> =
  ({ images }) => {
    const [currentImage, setCurrentImage] = useState(1);
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage((v) => (v + 1) % images.length);
      }, 2000000);
      return () => {
        clearInterval(interval);
      };
    }, []);
    const imagesObj = images.map((e, i) => (
      <div
        key={i}
        style={{
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
          {e({
            style: {
              height: '100%',
              width: '100%',
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
            },
          })}
        </WorkGridItemGalleryImage>
        <WorkGridItemGalleryImageBackground>
          {e({
            style: {
              height: '100%',
              width: '100%',
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
            },
          })}
        </WorkGridItemGalleryImageBackground>
      </div>
    ));
    return (
      <WorkGridItemGalleryContanier>{imagesObj}</WorkGridItemGalleryContanier>
    );
  };

export default WorkGridItemGallery;
