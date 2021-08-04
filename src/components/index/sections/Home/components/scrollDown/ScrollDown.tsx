import * as React from 'react';
import {
  ScrollDownContainer,
  ScrollDownChevron,
  ScrollDownText,
} from './ScrollDown.styled';

const ScrollDown: React.FunctionComponent = (props) => {
  return (
    <ScrollDownContainer {...props}>
      <ScrollDownChevron></ScrollDownChevron>
      <ScrollDownChevron></ScrollDownChevron>
      <ScrollDownChevron></ScrollDownChevron>
      <ScrollDownChevron></ScrollDownChevron>
      <ScrollDownText>Scroll down</ScrollDownText>
    </ScrollDownContainer>
  );
};

export default ScrollDown;
