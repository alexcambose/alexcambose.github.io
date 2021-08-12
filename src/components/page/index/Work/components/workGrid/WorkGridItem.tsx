import Button from '@/components/ui/Button';
import { IWorkItem } from '@/interfaces';
import * as React from 'react';
import {
  WorkGridAction,
  WorkGridDate,
  WorkGridItemContainer,
  WorkGridItemOverlay,
  WorkGridSummary,
  WorkGridTag,
  WorkGridTags,
  WorkGridTitle,
} from './WorkGridItem.styled';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import WorkGridItemGallery from './WorkGridItemGallery';
type IWorkGridItemProps = IWorkItem;
const WorkGridItem: React.FunctionComponent<IWorkGridItemProps> = ({
  images,
  title,
  summary,
  tags,
  type,
  date,
}) => {
  return (
    <WorkGridItemContainer type={type}>
      <WorkGridItemGallery images={images} />
      <WorkGridItemOverlay>
        <WorkGridTags>
          {tags.map((e, i) => (
            <WorkGridTag key={i}>{e}</WorkGridTag>
          ))}
        </WorkGridTags>
        <WorkGridTitle>{title}</WorkGridTitle>
        <WorkGridSummary>{summary}</WorkGridSummary>
        <WorkGridDate>{date}</WorkGridDate>
        <WorkGridAction>
          <Button>
            <AniLink paintDrip to="proofchain">
              View
            </AniLink>
          </Button>
        </WorkGridAction>
      </WorkGridItemOverlay>
    </WorkGridItemContainer>
  );
};

export default WorkGridItem;
