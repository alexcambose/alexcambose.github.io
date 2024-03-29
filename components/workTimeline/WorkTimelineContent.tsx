import { ReactNode } from 'react';

interface WorkTimelineContentProps {
  children: ReactNode;
}
export const WorkTimelineContent = ({ children }: WorkTimelineContentProps) => {
  return <p className="mt-1 whitespace-pre-line text-sm">{children}</p>;
};
