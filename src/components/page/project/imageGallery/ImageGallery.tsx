import { useStaticQuery, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import * as React from 'react';
import RImageGallery from 'react-image-gallery';

interface IImageGaleryProps {
  images: string[];
}

const ImageGalery: React.FunctionComponent<IImageGaleryProps> = ({
  images,
}) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  `);

  const gImages = images.map((imagePath) => {
    const foundImage = data.images.edges.find(
      (e) => e.node.relativePath === imagePath
    );
    if (!foundImage) {
      throw new Error(`${images[0]} not found!`);
    }
    return getImage(foundImage.node.childImageSharp.gatsbyImageData);
  });

  return (
    <RImageGallery
      showIndex={true}
      showPlayButton={false}
      // renderItem={(e) => console.log(e)}
      items={gImages.map(({ images: { fallback, sources } }) => ({
        srcSet: sources[0].srcSet,
        sizes: sources[0].sizes,
        original: fallback.src,
        thumbnail: fallback.src,
      }))}
    />
  );
};

export default ImageGalery;
