import classNames from 'classnames';
import { Badge } from '../baseComponents/badge/Badge';
import { BadgeList } from '../baseComponents/badge/BadgeList';
import { ProjectItem } from './types';
import Image from 'next/image';
import { ArrowSquareOut } from '@phosphor-icons/react';
import { ProjectCardFooter } from './ProjectCardFooter';

export interface ProjectCardProps {
  data: ProjectItem;
  isReversed?: boolean;
}
export const ProjectCard = ({ data, isReversed }: ProjectCardProps) => {
  return (
    <li className={classNames('mt-14 flex first:mt-0', { 'flex-row-reverse': isReversed })}>
      <Image
        alt="Project mage"
        className="max-w-[50%] h-72 object-cover"
        width={500}
        height={500}
        src={data.thumbnailImageUrl}
      />
      <div className={classNames('flex flex-col justify-center', { 'items-end': !isReversed })}>
        <h3 className="mb-5 text-2xl">{data.title}</h3>

        <div className="bg-page-frame-color-dark p-6 rounded-md drop-shadow-sm hover:drop-shadow-lg transition w-[120%]">
          <p className={classNames('text-sm')}>{data.description}</p>
        </div>
        <BadgeList>
          <Badge>Aaaa</Badge>
          <Badge>Aaaa</Badge>
        </BadgeList>
        <ProjectCardFooter />
      </div>
    </li>
  );
};
