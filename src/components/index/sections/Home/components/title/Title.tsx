import * as React from 'react';
import {
  TitleAttribute,
  TitleContainer,
  TitleFirstName,
  TitleHello,
  TitleLastName,
} from './Title.styled';
import { motion } from 'framer-motion';

const Title: React.FunctionComponent = () => {
  return (
    <TitleContainer>
      <TitleHello animate={{ scale: [0.5, 2, 1] }}>Hi, I'm</TitleHello>
      <TitleFirstName>Alexandru</TitleFirstName>
      <TitleLastName>Cambose</TitleLastName>
      <TitleAttribute>Full Stack Developer</TitleAttribute>
    </TitleContainer>
  );
};

export default Title;
