import * as React from 'react';
import { WorkGridItemContainer } from './workGridItem.styled';
interface IWorkGridItemProps {
  images: string[];
  title: string;
  type: number;
}

const WorkGridItem: React.FunctionComponent<IWorkGridItemProps> = ({
  images,
  string,
  type,
}) => {
  return <WorkGridItemContainer type={type}>aa</WorkGridItemContainer>;
};

export default WorkGridItem;
