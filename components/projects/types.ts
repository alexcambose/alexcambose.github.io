export interface ProjectItem {
  id: string | number;
  title: string;
  description: string;
  tags: string[];
  thumbnailImageUrl: string;
  isAdditionalOpenSourceProject: boolean;
  stargazersCount: number;
  githubUrl?: string;
  externalUrl?: string;
}
