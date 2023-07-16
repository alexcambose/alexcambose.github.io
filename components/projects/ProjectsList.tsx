import { ProjectCard } from './ProjectCard';
import { ProjectItem } from './types';

export interface ProjectsListProps {
  projects: ProjectItem[];
}
export const ProjectsList = ({ projects }: ProjectsListProps) => {
  return (
    <div>
      {projects.map((project) => (
        <ProjectCard key={project.id} />
      ))}
    </div>
  );
};
