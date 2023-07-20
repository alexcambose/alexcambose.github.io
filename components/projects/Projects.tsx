import { getUserData } from '@/utils/data/getUserData';
import { ProjectsList } from './ProjectsList';

export const Projects = async () => {
  const userData = await getUserData();
  return (
    <ProjectsList
      projects={userData.projects.map((e) => ({
        id: 1,
        title: 'Build an App App',
        description: 'lorem',
        thumbnailImageUrl: e.openGraphImageUrl,
      }))}
    />
  );
};
