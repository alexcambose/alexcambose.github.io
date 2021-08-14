import ImageFromProp from '@/components/utils/ImageFromProp';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { H2 } from '../typography/Header';
import { CardContainer, CardContent, CardTitle } from './Card.styled';

interface ICardProps {
  image: string;
  title: string;
  children?: string;
}

const Card: React.FunctionComponent<ICardProps> = ({
  image,
  title,
  children,
}) => {
  return (
    <CardContainer>
      <ImageFromProp image={image} />
      <CardTitle>{title}</CardTitle>
      {children && <CardContent>{children}</CardContent>}
    </CardContainer>
  );
};

export default Card;
