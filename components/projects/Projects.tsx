import { getUserData } from '@/utils/data/getUserData';
import { ProjectsList } from './ProjectsList';

export const Projects = async () => {
  const userData = await getUserData();
  return (
    <>
      {JSON.stringify(userData, null, 2)}
      <ProjectsList
        projects={userData.projects.map((e) => ({
          id: 1,
          title: 'Build an App App',
          description: 'lorem',
          thumbnailImageUrl: 'https://placehold.co/600x400',
        }))}
      />
    </>
  );
};
