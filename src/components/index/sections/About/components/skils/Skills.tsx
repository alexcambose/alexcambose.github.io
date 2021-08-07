import Container from '@/components/ui/layout/Container';
import * as React from 'react';
import styled from 'styled-components';
import { Slide } from 'react-slideshow-image';
import Lamp from './Lamp';
import SkillsSlide from './SkillsSlide';
import HtmlSVG from '@/images/svg/html.svg';
import CssSVG from '@/images/svg/css.svg';
import SassSVG from '@/images/svg/sass.svg';
import JsSVG from '@/images/svg/js.svg';
import RSVG from '@/images/svg/r.svg';
import NextSVG from '@/images/svg/next.svg';
import ReduxSVG from '@/images/svg/redux.svg';
import TypescriptSVG from '@/images/svg/typescript.svg';
import Web3SVG from '@/images/svg/web3.svg';
import RnSVG from '@/images/svg/rn.svg';
import WebpackSVG from '@/images/svg/webpack.svg';
import VueSVG from '@/images/svg/vue.svg';
import BootstrapSVG from '@/images/svg/bootstrap.svg';
import GatsbySVG from '@/images/svg/gatsby.svg';
import JquerySVG from '@/images/svg/jquery.svg';
import NodeSVG from '@/images/svg/node.svg';

interface ISkillsProps {}

const SkillsContainer = styled.div`
  min-height: 100vh;
  margin-top: 4rem;
  background-color: #00000021;
`;
const SkillsTitle = styled.span`
  font-size: 4rem;
  font-weight: bold;
  flex: 1;
  transform: rotate(-90deg);
  height: fit-content;
  width: fit-content;
`;
const SkillsTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;
const SkillsCanvas = styled.div`
  flex: 4;
  width: inherit;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const CarouselSlide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SkillsContent = styled(Container)`
  display: flex;
`;
const frontend = [
  {
    name: 'Html',
    icon: HtmlSVG,
  },
  {
    name: 'Css',
    icon: CssSVG,
  },
  {
    name: 'Js',
    icon: JsSVG,
  },
  {
    name: 'sass',
    icon: SassSVG,
  },
  {
    name: 'React',
    icon: RSVG,
  },
  {
    name: 'Next',
    icon: NextSVG,
  },
  {
    name: 'Redux',
    icon: ReduxSVG,
  },
  {
    name: 'Typescript',
    icon: TypescriptSVG,
  },
  {
    name: 'Web3.js',
    icon: Web3SVG,
  },
  {
    name: 'React native',
    icon: RnSVG,
  },
  {
    name: 'Webpack',
    icon: WebpackSVG,
  },
  {
    name: 'Vue.js',
    icon: VueSVG,
  },
  {
    name: 'Bootstrap',
    icon: BootstrapSVG,
  },
  {
    name: 'Gatsby',
    icon: GatsbySVG,
  },
  {
    name: 'Jquery',
    icon: JquerySVG,
  },
];

// const backend = [
//   {
//     name: 'Node',
//     icon: NodeSVG,
//   },
// ];
const other = [
  {
    name: 'Html',
    icon: HtmlSVG,
  },
];
const Indicator = styled.div`
  cursor: pointer;
  width: 3rem;
  height: 0.8rem;
  margin-left: 1rem;
  transition: 0.3s;
  /* font-size: 0rem; */
  color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  letter-spacing: -0.2rem;
  &:hover {
    color: white;
    letter-spacing: 0.1rem;
    height: 3rem !important;
    width: 6rem !important;
    /* transform: scale(1.1); */
  }
  &:nth-of-type(1) {
    background-color: #f9c22e;
  }
  &:nth-of-type(2) {
    background-color: #53b3cb;
  }
  &:nth-of-type(3) {
    background-color: #f92c2c;
  }
  &.active {
    height: 1rem;
    &:nth-of-type(1) {
      box-shadow: 0 0 24px 2px #f9c22e;
      width: 3.3rem;
    }
    &:nth-of-type(2) {
      box-shadow: 0 0 24px 2px #53b3cb;
      width: 3.3rem;
    }
    &:nth-of-type(3) {
      box-shadow: 0 0 24px 2px #f92c2c;
      width: 3.3rem;
    }
  }
`;
const label = ['Frontend', 'Backend', 'Other'];
const Skills: React.FunctionComponent<ISkillsProps> = (props) => {
  return (
    <SkillsContainer>
      <SkillsContent>
        <SkillsTitleContainer>
          <SkillsTitle>Skills</SkillsTitle>
        </SkillsTitleContainer>
        <SkillsCanvas>
          <Lamp></Lamp>
          <Slide
            indicators={(i) => <Indicator>{label[i]}</Indicator>}
            autoplay={false}
            prevArrow={<div />}
            nextArrow={<div />}
            style={{ flex: 4 }}
            easing="ease"
          >
            <CarouselSlide>
              <SkillsSlide skills={frontend} />
            </CarouselSlide>
            <CarouselSlide>
              <SkillsSlide skills={frontend} />
            </CarouselSlide>
            <CarouselSlide>
              <SkillsSlide skills={frontend} />
            </CarouselSlide>
          </Slide>
        </SkillsCanvas>
      </SkillsContent>
    </SkillsContainer>
  );
};

export default Skills;
