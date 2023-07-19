import { ProjectItem } from './types';
import Image from 'next/image';

export interface ProjectCard {
  data: ProjectItem;
}
export const ProjectCard = ({ data }: ProjectCard) => {
  console.log({ data });
  return (
    <div className="flex">
      <Image
        alt="Project mage"
        width="100"
        height="100"
        style={{ width: 100, height: 100 }}
        src={data.thumbnailImageUrl}
      />
      <div>
        <h3>Build an App</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime placeat consequuntur nam,
          mollitia quis ipsum vitae deleniti odit fuga rerum vero veritatis quod impedit, earum non
          et iste exercitationem voluptatibus?
        </p>
      </div>
    </div>
  );
};
