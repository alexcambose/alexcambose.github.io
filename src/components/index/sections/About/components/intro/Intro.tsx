import { Row, Col } from '@/components/ui/layout/Grid';
import * as React from 'react';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';

interface IIntroProps {}
const IntroContainer = styled.div`
  position: relative;
  margin-top: 4rem;
  margin-bottom: 4rem;
`;
const LeftText = styled.div`
  position: sticky;
  font-weight: bold;
  top: 14rem;
  font-size: 3rem;
  padding: 2rem;
`;
const AnimatedTextContainer = styled.div`
  position: relative;
  padding: 2rem;

  &:after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: -1000px;
    background-color: #3d3d3d;
    z-index: -1;
    border-radius: 30px;
  }
`;
const AnimatedTextRow = styled.div`
  font-weight: bold;
  font-size: 3rem;
  line-height: 6rem;
`;
const Intro: React.FunctionComponent<IIntroProps> = (props) => {
  const animatedTextContainerRef = useRef(null);
  const indicatorTextRef = useRef(null);
  const scrollHandler = () => {
    const $animatedTextContainer = animatedTextContainerRef.current;
    const $indicatorText = indicatorTextRef.current;
    if (!$animatedTextContainer || !$indicatorText) return;
    const $firstText = $animatedTextContainer.firstChild;
    const $lastText = $animatedTextContainer.lastChild;
    // @ts-ignore
    const { top } = $firstText.getBoundingClientRect();
    // @ts-ignore
    const { top: bottom } = $lastText.getBoundingClientRect();
    // let newValue = Math.floor((window.innerHeight / 1.5 - top) / 2.9);
    let newValue = Math.floor(window.innerHeight / 2 - top);
    newValue = Math.max($firstText.offsetTop, newValue);
    newValue = Math.min($lastText.offsetTop, newValue);
    // $indicatorText.style.marginTop = newValue + 'px';
    // enable item
    const items = [...$animatedTextContainer.children];

    let minItem = 0,
      minDistance = Infinity;
    for (let i = 0; i < items.length; i++) {
      const distance = Math.abs($indicatorText.offsetTop - items[i].offsetTop);
      if (distance < minDistance) {
        minDistance = distance;
        minItem = i;
      }
      items[i].style.opacity = 0.03;
      items[i].style.textShadow = 'none';
      items[i].style.color = 'white';
    }
    items[minItem].style.opacity = 1;
    items[minItem].style.color = minItem % 2 == 0 ? '#4EFFEF' : '#fff';
    items[minItem].style.textShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
  };
  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);
  return (
    <IntroContainer>
      <Row>
        <Col>
          <LeftText ref={indicatorTextRef}>
            Hi. I'm Alexandru Cambose, nice to meet you.
          </LeftText>
        </Col>
        <Col>
          <AnimatedTextContainer ref={animatedTextContainerRef}>
            {[
              'Full Stack Developer',
              'with a passion for blockchain.',
              'I love solving complex problems',
              'by writing clean code.',
              'If you are looking for someone',
              'who can buind your app,',
              'well done!',
              'You found the man for the job.',
            ].map((e, i) => (
              <AnimatedTextRow key={i}>{e}</AnimatedTextRow>
            ))}
          </AnimatedTextContainer>
        </Col>
      </Row>
    </IntroContainer>
  );
};

export default Intro;
