import * as React from 'react';
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
import {
  SkillsContainer,
  SkillsTitle,
  SkillsTitleContainer,
  SkillsCanvas,
  CarouselSlide,
  SkillsContent,
  Indicator,
} from './Skills.styled';

interface ISkillsProps {
  onTabChange: (tabIndex: number) => void;
}

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

const label = ['Frontend', 'Backend', 'Other'];

const Skills: React.FunctionComponent<ISkillsProps> = ({ onTabChange }) => {
  const [isLampVisible, setIsLampVisible] = useState(true);
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
