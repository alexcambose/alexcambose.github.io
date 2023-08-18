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
    <a href={githubUrl} target="_blank">
      <Panel className="group/item group-hover:opacity-90 hover:!opacity-100 hover:-translate-y-0.5 transition hover:shadow-lg flex flex-col pointer h-full">
        <div className="flex justify-between">
          <Folder className="group-hover/item:fill-primary-dark transition w-4 h-4 fill-slate-100" />
          <div className="flex gap-2">
            <ForkCount>{forkCount}</ForkCount>
            <StargazerCount>{stargazerCount}</StargazerCount>
          </div>
        </div>
        <h3 className="md:text-lg font-semibold text-slate-200 mb-3 lg:mb-4 mt-2 group-hover/item:text-primary-dark transition">
          {title}
        </h3>
        <p className="text-sm grow group-hover/item:text-slate-300 transition">{description}</p>
        <TagList tags={tags} className="dark:text-slate-400 mt-3 lg:mt-4" />
      </Panel>
    </a>
  );
};
