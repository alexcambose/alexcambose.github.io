import { Panel } from '@/components/baseComponents/panel/Panel';
import { ProjectItem } from '../types';
import { Folder } from '@/utils/icons';
import { TagList } from '@/components/baseComponents/badge/TagList';
import { StargazerCount } from '../components/StargezerCount';
import { ForkCount } from '../components/ForkCount';

export interface OpenSourceCardProps {
  data: ProjectItem;
}
export const OpenSourceCard = ({ data }: OpenSourceCardProps) => {
  const { title, description, tags, githubUrl, stargazerCount, forkCount } = data;
  return (
    <li>
      <a href={githubUrl} target="_blank" rel="noopener noreferrer">
        <Panel className="group/item pointer flex h-full flex-col transition hover:-translate-y-0.5 hover:!opacity-100 hover:shadow-lg group-hover:opacity-90">
          <div className="flex justify-between">
            <Folder className="h-4 w-4 fill-slate-100 transition group-hover/item:fill-primary-dark" />
            <div className="flex gap-2">
              <ForkCount>{forkCount}</ForkCount>
              <StargazerCount>{stargazerCount}</StargazerCount>
            </div>
          </div>
          <h3 className="mb-3 mt-2 font-semibold text-slate-200 transition group-hover/item:text-primary-dark md:text-lg lg:mb-4">
            {title}
          </h3>
          <p className="grow text-sm transition group-hover/item:text-slate-300">{description}</p>
          <TagList tags={tags} className="mt-3 dark:text-slate-400 lg:mt-4" />
        </Panel>
      </a>
    </li>
  );
};
