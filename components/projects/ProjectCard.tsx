import classNames from 'classnames';
import Image from 'next/image';
import { Badge } from '../baseComponents/badge/Badge';
import { BadgeList } from '../baseComponents/badge/BadgeList';
import { ProjectCardFooter } from './ProjectCardFooter';
import { ProjectItem } from './types';

export interface ProjectCardProps {
  data: ProjectItem;
  isReversed?: boolean;
}

const imageGridStyle = {
  default: 'row-span-full',
  xl: 'xl:group-odd:col-start-1 xl:group-odd:col-end-7 xl:group-even:col-start-6 xl:group-even:col-end-12',
  lg: 'lg:group-odd:col-start-1 lg:group-odd:col-end-8 lg:group-even:col-start-4 lg:group-even:col-end-12',
  md: 'md:group-odd:col-start-1 md:group-odd:col-end-8 md:group-even:col-start-4 md:group-even:col-end-12',
  sm: 'col-span-full sm:group-odd:col-start-1 sm:group-odd:col-end-9 sm:group-even:col-start-3 sm:group-even:col-end-12',
};
const contentGridStyle = {
  default: 'row-span-full',
  xl: 'xl:group-odd:col-start-6 xl:group-odd:col-end-12 xl:group-even:col-start-1 xl:group-even:col-end-7',
  lg: 'lg:group-odd:col-start-4 lg:group-odd:col-end-12 lg:group-even:col-start-1 lg:group-even:col-end-8',
  md: 'md:group-odd:col-start-4 md:group-odd:col-end-12 md:group-even:col-start-1 md:group-even:col-end-8',
  sm: 'col-span-full sm:group-odd:col-start-3 sm:group-odd:col-end-12 sm:group-even:col-start-1 sm:group-even:col-end-9',
};

export const ProjectCard = ({ data, isReversed }: ProjectCardProps) => {
  return (
    <li className={classNames('mt-14 first:mt-0 group grid grid-cols-11')}>
      <div
        className={classNames(
          imageGridStyle.default,
          imageGridStyle.xl,
          imageGridStyle.lg,
          imageGridStyle.md,
          imageGridStyle.sm,
          'bg-cover bg-center saturate opacity-90 grayscale group-hover:opacity-100 group-hover:grayscale-0 group-hover:saturate transition'
        )}
        style={{ backgroundImage: `url(${data.thumbnailImageUrl})` }}
      />

      <div
        className={classNames(
          contentGridStyle.default,
          contentGridStyle.xl,
          contentGridStyle.lg,
          contentGridStyle.md,
          contentGridStyle.sm,
          'flex flex-col justify-center z-10 p-8 sm:p-0 sm:bg-transparent bg-slate-900/80'
        )}
      >
        <div className="flex flex-col items-start sm:group-even:items-start sm:group-odd:items-end">
          <h3 className="mb-5 text-2xl text-slate-50 text-left sm:group-even:text-right">
            {data.title}
          </h3>

          <div className="bg-transparent sm:bg-page-frame-color-dark sm:p-6 rounded-md transition group-hover:shadow-md">
            <p className="text-default-dark-lighter sm:text-default-dark text-sm text-left sm:group-odd:text-right sm:group-hover:dark:text-slate-300 transition">
              {data.description}
            </p>
          </div>
          <BadgeList className="justify-start sm:group-odd:justify-end ">
            {data.tags.map((e) => (
              <Badge size="small" key={e}>
                {e}
              </Badge>
            ))}
          </BadgeList>
          <ProjectCardFooter externalUrl={data.externalUrl} githubUrl={data.githubUrl} />
        </div>
      </div>
    </li>
  );
};
