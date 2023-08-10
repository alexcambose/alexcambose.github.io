import { ReactNode } from 'react';

export interface WorkTimelineItem {
  startDate: Date;
  endDate?: Date;
  title: string;
  companyName: string;
  subtitle: string;
  description: ReactNode;
  techStack: string[];
  companyImageUrl: string;
  subItems: Omit<WorkTimelineItem, 'companyImageUrl' | 'subtitle'>;
}
