import { ProjectCard } from './ProjectCard';
import { ProjectItem } from './types';

export interface ProjectsListProps {
  projects: ProjectItem[];
}
export const ProjectsList = ({ projects }: ProjectsListProps) => {
  return (
    <ul role="article list-none">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} data={project} isReversed={index % 2 === 0} />
      ))}
    </ul>
  );
};
