import { ProjectItem } from '@/components/projects/types';

const projectMetadataOverride = {
  proofchain: {
    name: 'Proofchain',
  },
  mixdice: {},
  motus: {
    name: 'MotusJS',
    description: 'An animation library that mimics CSS keyframes when scrolling.',
  },
  studeo: {
    name: 'Studeo',
  },
};
const additionalProjects = {
  '40-lines-of-sass': {
    description: 'Full featured flexbox grid in 40 lines of Sass',
  },
  'x-frame-options': {},
  'provably-fair-example': {},
  'sentry-traced': {},
  'webcam-base64-streaming': {
    description: 'Webcam live streaming with WebSockets and Base64',
  },
};
export const getUserData = async () => {
  const res = await fetch(`${process.env.VERCEL_URL}/api`);
  const data = await res.json();
  const mainProjects = data.viewer.repositories.nodes.filter(
    (e: any) =>
      // @ts-ignore
      projectMetadataOverride[e.name] !== undefined || additionalProjects[e.name] !== undefined
  );
  console.log(mainProjects);
  return {
    projects: mainProjects.map((e: any) => {
      // @ts-ignore
      let isAdditionalOpenSourceProject = !!additionalProjects[e.name];
      return {
        ...e,
        // @ts-ignore
        ...(projectMetadataOverride[e.name] || {}),
        // @ts-ignore
        ...(additionalProjects[e.name] || {}),
        thumbnailImageUrl: e.openGraphImageUrl,
        isAdditionalOpenSourceProject,
      };
    }) as ProjectItem[],
  };
};
