import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as React from 'react';

interface IImageFromPropProps {
  image: string;
}

const ImageFromProp: React.FunctionComponent<IImageFromPropProps> = ({
  image,
}) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);
  console.log(data);
  const gImage = getImage(
    data.images.edges.find((e) => e.node.relativePath === image).node
      .childImageSharp.gatsbyImageData
  );

  return <GatsbyImage image={gImage} alt="aa" />;
};

export default ImageFromProp;
