import ImageFromProp from '@/components/utils/ImageFromProp';
import * as React from 'react';
import { useEffect, useState } from 'react';
import {
  WorkGridItemGalleryContanier,
  WorkGridItemGalleryImage,
  WorkGridItemGalleryImageBackground,
} from './WorkGridItemGallery.styled';
interface IWorkGridItemGalleryProps {
  images: (props: any) => string[];
  disabled?: boolean;
}
const WorkGridItemGallery: React.FunctionComponent<IWorkGridItemGalleryProps> =
  ({ images, disabled }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [galleryInterval, setGalleryInterval] = useState<any>(null);
    const startInterval = () => {
      const interval = setInterval(() => {
        if (disabled) {
          setCurrentImage(0);
        } else {
          setCurrentImage((v) => (v + 1) % images.length);
        }
      }, 2000);
      setGalleryInterval(interval);
      return () => {
        clearInterval(galleryInterval);
      };
    };
    useEffect(() => {
      return startInterval();
    }, []);
    useEffect(() => {
      if (disabled) {
        setCurrentImage(0);
        clearInterval(galleryInterval);
      }
    }, [disabled]);
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
          <ImageFromProp
            image={e}
            imgStyle={{ objectFit: `contain` }}
            style={{
              height: '100%',
              width: '100%',
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          />
        </WorkGridItemGalleryImage>
        <WorkGridItemGalleryImageBackground>
          <ImageFromProp
            image={e}
            imgStyle={{ objectFit: `contain` }}
            style={{
              height: '100%',
              width: '100%',
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          />
        </WorkGridItemGalleryImageBackground>
      </div>
    ));
    return (
      <WorkGridItemGalleryContanier>{imagesObj}</WorkGridItemGalleryContanier>
    );
  };

export default WorkGridItemGallery;
