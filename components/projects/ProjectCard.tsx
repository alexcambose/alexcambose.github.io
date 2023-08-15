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
export const ProjectCard = ({ data, isReversed }: ProjectCardProps) => {
  return (
    <li className={classNames('mt-14 flex first:mt-0 group odd:flex-row-reverse')}>
      <Image
        alt="Project mage"
        className="max-w-[50%] h-72 object-cover saturate opacity-90 grayscale  group-hover:opacity-100 group-hover:grayscale-0 group-hover:saturate transition"
        width={500}
        height={500}
        src={data.thumbnailImageUrl}
      />
      <div className="flex flex-col justify-center group-odd:items-end">
        <div className="group-odd:mr-[-20%] group-even:ml-[-20%] z-10">
          <h3 className="mb-5 text-2xl text-slate-50 group-even:text-right">{data.title}</h3>
          

          <div className="bg-page-frame-color-dark p-6 rounded-md transition group-hover:shadow-md">
            <p className="text-sm group-even:text-right group-hover:dark:text-slate-300 transition">
              {data.description}
            </p>

          </div>
          <BadgeList className="group-even:justify-end">
            {data.tags.map((e) => (
              <Badge size="small" key={e}>
                {e}
              </Badge>
            ))}
          </BadgeList>
        </div>
        <ProjectCardFooter
          className="group-odd:self-start group-even:self-end"
          externalUrl={data.externalUrl}
          githubUrl={data.githubUrl}
        />
      </div>
    </li>
  );
};
