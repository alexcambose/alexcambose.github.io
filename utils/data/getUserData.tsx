import { ProjectItem } from '@/components/projects/types';

const projectMetadataOverride = {
  proofchain: {
    title: 'Proofchain',
    description:
      'Proofchain leverages blockchain technology to facilitate efficient communication and data exchange between global supply chains, providing customers with proof of product provenance and ownership. This project also provides blockchain tools for customers/suppliers to integrate into their current systems.',
    tags: ['React', 'Redux', 'NextJS', 'Web3.js', 'Solidity', 'Truffle', 'Jest'],
  },
  mixdice: {
    title: 'MixDice',
    thumbnailImageUrl: `${process.env.VERCEL_URL}/screenshots/mixdice1.png`,
    description:
      'A cryptocurrency-based gaming platform. It allows users to deposit crypto and use the funds inside the app. It uses a provably fair algorithm to for generating random numbers.',
    tags: [
      'React',
      'Typescript',
      'Express',
      'NextJS',
      'GraphQL',
      'WebSockets',
      'MongoDB',
      'Web3js',
      'Geth',
      'Bcoin',
    ],
    githubUrl: undefined,
  },
  motus: {
    title: 'MotusJS',
    description: 'An animation library that mimics CSS keyframes when scrolling.',
    tags: ['Typescript', 'Parcel', 'Docosaurus'],
  },
  studeo: {
    title: 'Studeo',
    description: 'An e-learning platform to help students learn faster and easier for exams.',
    tags: ['Vue', 'PHP', 'Laravel', 'MySql'],
  },
};
const additionalProjects = {
  '40-lines-of-sass': {
    description: 'Full featured flexbox grid in 40 lines of Sass.',
    tags: ['SASS'],
  },
  'x-frame-options': {
    description: "A service that let's you bypass th x-frame-options header to embed content.",
    tags: ['NodeJS', 'Express'],
  },
  'provably-fair-example': {
    description: 'Provably fair implementation done in javascript.',
    tags: ['Javascript', 'NodeJS'],
  },
  'sentry-traced': {
    description:
      'A package that provides a decorator to annotate class methods with Sentry tracing information.',
    tags: ['Typescript', 'Sentry'],
  },
  'webcam-base64-streaming': {
    description: 'Webcam live streaming with WebSockets and Base64 encoded data.',
    tags: ['Javascript', 'Websockets', 'NodeJS'],
  },
};
export const getUserData = async () => {
  let data = {} as any;
  try {
    const res = await fetch(`https://${process.env.VERCEL_URL}/api`);
    data = await res.json();
  } catch (e) {
    console.error(e);
    const res = await fetch(`https://${process.env.VERCEL_URL}/api`);
    console.log(await res.text());
    return data;
  }
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
        thumbnailImageUrl: e.openGraphImageUrl,
        externalUrl: e.homepageUrl,
        githubUrl: e.url,
        // @ts-ignore
        ...(projectMetadataOverride[e.name] || {}),
        // @ts-ignore
        ...(additionalProjects[e.name] || {}),
        isAdditionalOpenSourceProject,
      };
    }) as ProjectItem[],
  };
};
