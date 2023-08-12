import { Badge } from '../baseComponents/badge/Badge';
import { BadgeList } from '../baseComponents/badge/BadgeList';
import { ProjectItem } from './types';
import Image from 'next/image';

export interface ProjectCardProps {
  data: ProjectItem;
}
export const ProjectCard = ({ data }: ProjectCardProps) => {
  return (
    <div className="mt-14 flex first:mt-0">
      <Image
        alt="Project mage"
        className="max-w-[50%] h-72 object-cover"
        width={500}
        height={500}
        src={data.thumbnailImageUrl}
      />
      <div className="ml-5">
        <h3 className="mb-5">{data.title}</h3>
        <p className="text-sm">{data.description}</p>
        <BadgeList>
          <Badge>Aaaa</Badge>
          <Badge>Aaaa</Badge>
        </BadgeList>
      </div>
    </div>
  );
};
