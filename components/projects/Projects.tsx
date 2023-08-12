import { getUserData } from '@/utils/data/getUserData';
import { ProjectsList } from './ProjectsList';

export const Projects = async () => {
  const userData = await getUserData();
  console.log(userData.projects);
  return (
    <ProjectsList
      projects={userData.projects.map((e) => ({
        id: 1,
        title: e.name,
        description: e.description,
        thumbnailImageUrl: e.openGraphImageUrl,
      }))}
    />
  );
};
