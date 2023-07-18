import { getUserData } from '@/utils/data/getUserData';
import { ProjectsList } from './ProjectsList';

export const Projects = async () => {
  const userData = await getUserData();
  return (
    <>
      {JSON.stringify(userData, null, 2)}
      <ProjectsList projects={[]} />
    </>
  );
};
