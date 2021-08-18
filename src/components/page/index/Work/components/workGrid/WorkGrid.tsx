import { IWorkItem } from '@/interfaces';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { WorkGridContainer } from './WorkGrid.styled';
import WorkGridItem from './WorkGridItem';
const workItems: IWorkItem[] = [
  {
    images: [
      'projects/proofchain/main.png',
      'projects/proofchain/proofchain-macbook.png',
      'projects/proofchain/dual.png',
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
