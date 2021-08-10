import * as React from 'react';
import { WorkGridItemContainer } from './workGridItem.styled';
import WorkGridItemGallery from './WorkGridItemGallery';
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
  return (
    <WorkGridItemContainer type={type}>
      <WorkGridItemGallery images={images} />
    </WorkGridItemContainer>
  );
};

export default WorkGridItem;
