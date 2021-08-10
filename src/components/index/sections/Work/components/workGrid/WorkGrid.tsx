import * as React from 'react';
import { WorkGridContainer } from './workGrid.styled';
import WorkGridItem from './WorkGridItem';
const workItems = [
  {
    images: ['proofchain/main.png'],
    title: 'Proofchain',
    type: 'a',
  },
  {
    images: [],
    title: 'Instanoption',
    type: 'b',
  },
  {
    images: [],
    title: 'Mixdice',
    type: 'c',
  },
  {
    images: [],
    title: 'Portolio v1',
    type: 'd',
  },
  {
    images: [],
    title: 'Motus',
    type: 'e',
  },
  {
    images: [],
    title: 'Studeo',
    type: 'f',
  },
  {
    images: [],
    title: 'Rapoarte Drumuri',
    type: 'g',
  },
  {
    images: [],
    title: 'Time Tracker',
    type: 'h',
  },
  {
    images: [],
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
