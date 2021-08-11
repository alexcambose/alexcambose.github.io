import { IWorkItem } from '@/interfaces';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { WorkGridContainer } from './workGrid.styled';
import WorkGridItem from './WorkGridItem';
const workItems: IWorkItem[] = [
  {
    images: [
      (props) => (
        <StaticImage
          {...props}
          imgStyle={{ objectFit: `contain` }}
          src={`../../../../../../images/work/proofchain/main.png`}
          alt="Logo"
        />
      ),
      (props) => (
        <StaticImage
          {...props}
          src={`../../../../../../images/work/proofchain/proofchain-macbook.png`}
          alt="Logo"
          imgStyle={{ objectFit: `contain` }}
        />
      ),
      (props) => (
        <StaticImage
          {...props}
          src={`../../../../../../images/work/proofchain/dual.png`}
          alt="Logo"
          imgStyle={{ objectFit: `contain` }}
        />
      ),
    ],
    title: 'Proofchain',
    type: 'a',
    summary: 'Blockchain based supply chain tracking',
    tags: ['FULLSTACK', 'BLOCKCHAIN', 'DESIGN'],
    platform: 'Web - Dapp',
    date: '2021',
  },
  {
    images: [],
    tags: [],
    title: 'Instanoption',
    type: 'b',
  },
  {
    images: [],
    tags: [],
    title: 'Mixdice',
    type: 'c',
  },
  {
    images: [],
    tags: [],
    title: 'Portolio v1',
    type: 'd',
  },
  {
    images: [],
    tags: [],
    title: 'Motus',
    type: 'e',
  },
  {
    images: [],
    tags: [],
    title: 'Studeo',
    type: 'f',
  },
  {
    images: [],
    tags: [],
    title: 'Rapoarte Drumuri',
    type: 'g',
  },
  {
    images: [],
    tags: [],
    title: 'Time Tracker',
    type: 'h',
  },
  {
    images: [],
    tags: [],
    title: 'Zound',
    type: 'i',
  },
];
const WorkGrid: React.FunctionComponent = () => {
  return (
    <WorkGridContainer>
      {workItems.map((e, i) => (
        <WorkGridItem key={i} {...e} />
      ))}
    </WorkGridContainer>
  );
};

export default WorkGrid;
