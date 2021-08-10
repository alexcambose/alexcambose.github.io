import * as React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

interface IWorkGridItemGalleryProps {
  images: string[];
}

const WorkGridItemGalleryContanier = styled.div``;

const WorkGridItemGalleryImage = styled.div``;

const WorkGridItemGallery: React.FunctionComponent<IWorkGridItemGalleryProps> =
  ({ images }) => {
    console.log(images);
    return (
      <WorkGridItemGalleryContanier>
        {images.map((e, i) => (
          <WorkGridItemGalleryImage key={i}>
            <StaticImage
              height={50}
              src={`../../../../../../images/work/${e}`}
              alt="Logo"
            />
          </WorkGridItemGalleryImage>
        ))}
      </WorkGridItemGalleryContanier>
    );
  };

export default WorkGridItemGallery;
