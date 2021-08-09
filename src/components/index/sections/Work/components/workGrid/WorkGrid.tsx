import * as React from 'react';
import { WorkGridContainer } from './workGrid.styled';
import WorkGridItem from './WorkGridItem';
const workItems = [
  {
    images: ['a'],
    title: 'Proofchain',
    type: 'a',
  },
  {
    images: ['a'],
    title: 'Instanoption',
    type: 'b',
  },
  {
    images: ['a'],
    title: 'Mixdice',
    type: 'c',
  },
  {
    images: ['a'],
    title: 'Portolio v1',
    type: 'd',
  },
  {
    images: ['a'],
    title: 'Motus',
    type: 'e',
  },
  {
    images: ['a'],
    title: 'Studeo',
    type: 'f',
  },
  {
    images: ['a'],
    title: 'Rapoarte Drumuri',
    type: 'g',
  },
  {
    images: ['a'],
    title: 'Time Tracker',
    type: 'h',
  },
  {
    images: ['a'],
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
