import * as React from 'react';
import {
  TitleAttribute,
  TitleContainer,
  TitleFirstName,
  TitleHello,
  TitleLastName,
} from './Title.styled';

const Title: React.FunctionComponent = () => {
  return (
    <TitleContainer>
      <TitleHello>Hi, I'm</TitleHello>
      <TitleFirstName>Alexandru</TitleFirstName>
      <TitleLastName>Cambose</TitleLastName>
      <TitleAttribute>Full Stack Developer</TitleAttribute>
    </TitleContainer>
  );
};

export default Title;
