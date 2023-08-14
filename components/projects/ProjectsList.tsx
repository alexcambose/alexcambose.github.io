import { ProjectCard } from './ProjectCard';
import { OpenSourceCard } from './openSource/OpenSourceCard';
import { ProjectItem } from './types';

export interface ProjectsListProps {
  projects: ProjectItem[];
}
export const ProjectsList = ({ projects }: ProjectsListProps) => {
  return (
    <>
      <ul role="article list-none">
        {projects
          .filter((e) => !e.isAdditionalOpenSourceProject)
          .map((project, index) => (
            <ProjectCard key={project.id} data={project} isReversed={index % 2 === 0} />
          ))}
      </ul>
      <ul role="article list-none grid gap-4 grid-cols-3">
        {projects
          .filter((e) => e.isAdditionalOpenSourceProject)
          .map((project, index) => (
            <OpenSourceCard key={project.id} data={project} />
          ))}
      </ul>
    </>
  );
};
