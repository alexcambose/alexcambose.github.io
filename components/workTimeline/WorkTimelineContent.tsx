'use client';
import classNames from 'classnames';
import Markdown from 'react-markdown';

interface WorkTimelineContentProps {
  children: string;
  className: string;
}

export const WorkTimelineContent = ({ children, className }: WorkTimelineContentProps) => {
  return (
    <p className={classNames('markdown-content', className)}>
      <Markdown>{children}</Markdown>
    </p>
  );
};
