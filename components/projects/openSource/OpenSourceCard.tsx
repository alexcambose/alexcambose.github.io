import { ProjectItem } from '../types';

export interface OpenSourceCardProps {
  data: ProjectItem;
}
export const OpenSourceCard = ({ data }: OpenSourceCardProps) => {
  const { title, description } = data;
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
