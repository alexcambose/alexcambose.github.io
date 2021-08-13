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
  WorkGridItems,
} from './WorkGridItem.styled';
import TransitionLink from 'gatsby-plugin-transition-link';
import classNames from 'classnames';
import WorkGridItemGallery from './WorkGridItemGallery';
import { useRef, useState } from 'react';
type IWorkGridItemProps = IWorkItem;
const WorkGridItem: React.FunctionComponent<IWorkGridItemProps> = ({
  images,
  title,
  summary,
  tags,
  type,
  date,
}) => {
  const containerRef = useRef();
  const [isExpanded, setIsExpaned] = useState(false);
  return (
    <WorkGridItemContainer ref={containerRef} type={type}>
      <WorkGridItemGallery disabled={isExpanded} images={images} />
      <WorkGridItemOverlay>
        <WorkGridItems className={classNames({ expanded: isExpanded })}>
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
              <TransitionLink
                to="proofchain"
                exit={{
                  length: 2,
                  zIndex: 100,
                  trigger: ({ node, e, exit, entry }) => {
                    console.log('exit', { node, e, exit, entry });
                    const $galleryItem = containerRef.current;
                    if (!$galleryItem) return;
                    console.log(containerRef);
                    const { width, height, top, left } =
                      $galleryItem.getBoundingClientRect();
                    $galleryItem.classList.add('animation-start');
                    $galleryItem.style.top = top + 'px';
                    $galleryItem.style.left = left + 'px';
                    $galleryItem.style.width = width + 'px';
                    $galleryItem.style.height = height + 'px';
                    document.body.style.overflowY = 'hidden';
                    setIsExpaned(true);
                    console.log(containerRef);
                  },
                }}
                entry={{
                  delay: 2,

                  trigger: ({ node, e, exit, entry }) => {
                    console.log('entry', { node, e, exit, entry });
                    document.body.style.overflowY = 'scroll';
                  },
                }}
              >
                aaa
              </TransitionLink>
            </Button>
          </WorkGridAction>
        </WorkGridItems>
      </WorkGridItemOverlay>
    </WorkGridItemContainer>
  );
};

export default WorkGridItem;
