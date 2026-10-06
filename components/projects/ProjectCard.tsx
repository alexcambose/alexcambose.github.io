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
    <li className={classNames('group mt-14 grid grid-cols-11 first:mt-0')}>
      <div
        className={classNames(
          'relative overflow-hidden',
          imageGridStyle.default,
          imageGridStyle.xl,
          imageGridStyle.lg,
          imageGridStyle.md,
          imageGridStyle.sm,
          'saturate group-hover:saturate opacity-90 grayscale transition group-hover:opacity-100 group-hover:grayscale-0'
        )}
      >
        {data.thumbnailImageUrl && (
          <Image
            src={data.thumbnailImageUrl}
            alt=""
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover object-center"
          />
        )}
      </div>

      <div
        className={classNames(
          contentGridStyle.default,
          contentGridStyle.xl,
          contentGridStyle.lg,
          contentGridStyle.md,
          contentGridStyle.sm,
          'z-10 flex flex-col justify-center bg-slate-900/80 p-8 sm:bg-transparent sm:p-0'
        )}
      >
        <div className="flex flex-col items-start sm:group-odd:items-end sm:group-even:items-start">
          <h3 className="mb-5 text-left text-2xl text-slate-50 sm:group-even:text-right">
            {data.title}
          </h3>

          <div className="rounded-md bg-transparent transition group-hover:shadow-md sm:bg-page-frame-color-dark sm:p-6">
            <p className="text-left text-sm text-default-dark-lighter transition sm:text-default-dark sm:group-odd:text-right sm:group-hover:dark:text-slate-300">
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
