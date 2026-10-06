'use client';
import classNames from 'classnames';
import Markdown from 'react-markdown';

interface WorkTimelineContentProps {
  children: string;
  className: string;
}

// Rendered as a <div>: Markdown output contains block elements (<ul>, <p>) that are invalid
// inside a <p> and caused a hydration mismatch.
export const WorkTimelineContent = ({ children, className }: WorkTimelineContentProps) => {
  return (
    <div className={classNames('markdown-content', className)}>
      <Markdown>{children}</Markdown>
    </div>
  );
};
