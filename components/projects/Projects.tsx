import { getUserData } from '@/utils/data/getUserData';
import { ProjectsList } from './ProjectsList';

export const Projects = async () => {
  const userData = await getUserData();
  return <ProjectsList projects={userData.projects} />;
};
