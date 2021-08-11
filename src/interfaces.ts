import React from 'react';

export interface IWorkItem {
  images: (props: any) => React.ReactNode[];
  title: string;
  type: string;
  tags: string[];
  date: string;
  platform: string;
  summary: string;
}
