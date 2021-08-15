import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { convertToBgImage } from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';

interface IBackgroundImageFromPropProps {
  image: string;
  children: React.ReactNode;
  [key: string]: any;
}

const BackgroundImageFromProp: React.FunctionComponent<IBackgroundImageFromPropProps> =
  ({ image, children, ...props }) => {
    const data = useStaticQuery(graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 2000, maxHeight: 4000) {
                  ...GatsbyImageSharpFluid_withWebp
                }
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
    const gImage = getImage(foundImage.node.childImageSharp.fluid);
    const bgImage = convertToBgImage(gImage);

    return (
      <BackgroundImage
        {...props}
        Tag="section"
        fluid={foundImage.node.childImageSharp.fluid}
        backgroundColor={`white`}
        title="Fullscreen Background"
        id="fullscreenbg"
        role="img"
        aria-label="Fullscreen Background"
      >
        {children}
      </BackgroundImage>
    );
  };

export default styled(BackgroundImageFromProp)`
  width: 100%;
  height: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
`;
