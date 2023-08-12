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
      <div className="w-6/12 ml-5">
        <h3 className="mb-5">Build an App</h3>
        <p className="text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime placeat consequuntur nam,
          mollitia quis ipsum vitae deleniti odit fuga rerum vero veritatis quod impedit, earum non
          et iste exercitationem voluptatibus?
        </p>
      </div>
    </div>
  );
};
