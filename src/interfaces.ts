export interface IWorkItem {
  images: string[];
  title: string;
  type: string;
  tags: string[];
  date: string;
  platform: string;
  summary: string;
  repoUrl?: string;
  url?: string;
}
