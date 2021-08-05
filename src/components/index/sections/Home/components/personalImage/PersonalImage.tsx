import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { PersonalImageContainer } from './PersonalImage.styled';

const PersonalImage: React.FunctionComponent = () => {
  return (
    <PersonalImageContainer>
      <StaticImage
        src="../../../../../../images/me.png"
        alt="Logo"
        placeholder="blurred"
        layout="constrained"
      />
    </PersonalImageContainer>
  );
};

export default PersonalImage;
