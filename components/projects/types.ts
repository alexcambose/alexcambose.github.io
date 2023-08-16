export interface ProjectItem {
  id: string | number;
  title: string;
  description: string;
  tags: string[];
  thumbnailImageUrl: string;
  isAdditionalOpenSourceProject: boolean;
  stargazerCount: number;
  forkCount: number;
  githubUrl?: string;
  externalUrl?: string;
}
