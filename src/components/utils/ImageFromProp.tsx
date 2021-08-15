import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { convertToBgImage } from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image';

interface IImageFromPropProps {
  image: string;
  [key: string]: any;
}

const ImageFromProp: React.FunctionComponent<IImageFromPropProps> = ({
  image,
  ...props
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
  const foundImage = data.images.edges.find(
    (e) => e.node.relativePath === image
  );
  if (!foundImage) {
    throw new Error(`${image} not found!`);
  }
  const gImage = getImage(foundImage.node.childImageSharp.gatsbyImageData);
  return <GatsbyImage {...props} layout="fullWidth" image={gImage} alt="aa" />;
};

export default ImageFromProp;
