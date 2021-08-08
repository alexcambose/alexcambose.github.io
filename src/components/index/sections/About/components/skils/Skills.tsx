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
import ExpressSVG from '@/images/svg/express.svg';
import MongoSVG from '@/images/svg/mongo.svg';
import GraphqlSVG from '@/images/svg/graphql.svg';
import PostgresSVG from '@/images/svg/postgres.svg';
import EthereumSVG from '@/images/svg/ethereum.svg';
import SoliditySVG from '@/images/svg/solidity.svg';
import TruffleSVG from '@/images/svg/truffle.svg';
import PhpSVG from '@/images/svg/php.svg';
import LaravelSVG from '@/images/svg/laravel.svg';
import PythonSVG from '@/images/svg/python.svg';
import ApacheSVG from '@/images/svg/apache.svg';
import NgnixSVG from '@/images/svg/nginx.svg';
import DockerSVG from '@/images/svg/docker.svg';
import Pm2SVG from '@/images/svg/pm2.svg';
import AdobexdSVG from '@/images/svg/adobexd.svg';
import AdobepsSVG from '@/images/svg/adobeps.svg';
import AdobeiSVG from '@/images/svg/adobei.svg';
import LinuxSVG from '@/images/svg/linux.svg';
import GithubSVG from '@/images/svg/github.svg';
import { useState } from 'react';
import theme from '@/theme';

interface ISkillsProps {
  onTabChange: (tabIndex: number) => void;
}

const SkillsContainer = styled.div`
  min-height: 100vh;
  margin-top: 4rem;
  background-color: #00000021;
  transition: 3s;
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
  flex: 6;
  width: inherit;
  height: 100vh;
  position: relative;
  & > [aria-roledescription='carousel'] {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 20vh;
  }
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

const backend = [
  {
    name: 'Node',
    icon: NodeSVG,
  },
  { name: 'Expres', icon: ExpressSVG },
  { name: 'Mongo', icon: MongoSVG },
  { name: 'Graphql', icon: GraphqlSVG },
  { name: 'Postgres', icon: PostgresSVG },
  { name: 'Ethereum', icon: EthereumSVG },
  { name: 'Solidity', icon: SoliditySVG },
  { name: 'Truffle', icon: TruffleSVG },
  { name: 'Php', icon: PhpSVG },
  { name: 'Laravel', icon: LaravelSVG },
  { name: 'Python', icon: PythonSVG },
  { name: 'Apache', icon: ApacheSVG },
  { name: 'Ngnix', icon: NgnixSVG },
  { name: 'Docker', icon: DockerSVG },
  { name: 'Pm2', icon: Pm2SVG },
];
const other = [
  { name: 'Adobe XD', icon: AdobexdSVG },
  { name: 'Photoshop', icon: AdobepsSVG },
  { name: 'Illustrator', icon: AdobeiSVG },
  { name: 'Linux', icon: LinuxSVG },
  { name: 'Github', icon: GithubSVG },
];
const Indicator = styled.div`
  cursor: pointer;
  width: 3rem;
  height: 0.8rem;
  margin-left: 1rem;
  transition: all 0.2s, box-shadow 1s, width 0.4s;
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
    background-color: ${({ theme }) => theme.skills.frontend};
  }
  &:nth-of-type(2) {
    background-color: ${({ theme }) => theme.skills.backend};
  }
  &:nth-of-type(3) {
    background-color: ${({ theme }) => theme.skills.other};
  }
  &.active {
    height: 1rem;
    &:nth-of-type(1) {
      box-shadow: 0 0 24px 2px ${({ theme }) => theme.skills.frontend};
      width: 3.3rem;
    }
    &:nth-of-type(2) {
      box-shadow: 0 0 24px 2px ${({ theme }) => theme.skills.backend};
      width: 3.3rem;
    }
    &:nth-of-type(3) {
      box-shadow: 0 0 24px 2px ${({ theme }) => theme.skills.other};
      width: 3.3rem;
    }
  }
`;
const label = ['Frontend', 'Backend', 'Other'];

const Skills: React.FunctionComponent<ISkillsProps> = ({ onTabChange }) => {
  const [isLampVisible, setIsLampVisible] = useState();
  const [currentPosition, setCurrentPosition] = useState(0);
  return (
    <SkillsContainer
      style={{
        backgroundColor: [
          theme.skills.frontendBg,
          theme.skills.backendBg,
          theme.skills.otherBg,
        ][currentPosition],
      }}
    >
      <SkillsContent>
        <SkillsTitleContainer>
          <SkillsTitle>Skills</SkillsTitle>
        </SkillsTitleContainer>
        <SkillsCanvas>
          {isLampVisible && <Lamp color={currentPosition}></Lamp>}
          <Slide
            onChange={(_, next) => {
              if (next === currentPosition) return;
              setIsLampVisible(false);
              setCurrentPosition(next);
              onTabChange(next);
              setIsLampVisible(true);
            }}
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
              <SkillsSlide skills={backend} />
            </CarouselSlide>
            <CarouselSlide>
              <SkillsSlide skills={other} />
            </CarouselSlide>
          </Slide>
        </SkillsCanvas>
      </SkillsContent>
    </SkillsContainer>
  );
};

export default Skills;
