import { ProjectItem } from '@/components/projects/types';
import { Octokit } from '@octokit/core';
const getQuery = () => `{
  viewer {
    databaseId
    login
    bio
    bioHTML
    url
    email
    isHireable
    avatarUrl
    company
    status {
      id
      indicatesLimitedAvailability
    }
    followers {
      totalCount
    }
    repositories(first: 100,isArchived:false,isFork:false, orderBy: {field:UPDATED_AT,direction:DESC}) {
      nodes {
        ... on Repository {
          id
          name
          homepageUrl
          url
          description
          licenseInfo {
            id
          }
          openGraphImageUrl
          forkCount
          createdAt
          updatedAt
          homepageUrl
          stargazerCount
          primaryLanguage {
            id
            name
            color
          }
          languages(first: 10) {
            totalSize
            totalCount
            edges {
              node {
                name
                color
              }
              size
            }
          }
          watchers {
            totalCount
          }
        }
      }
    }
  }
}
`;

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
  'time-tracker': {
    description: 'A VSCode extension to track working time.',
    tags: ['typescript'],
  },
};
export const getUserData = async () => {
  let data = {} as any;
  const octokit = new Octokit({ auth: process.env.GITHUB_PERSONAL_ACCESS_TOKEN });

  data = await octokit.graphql(getQuery());

  const mainProjects = data.viewer.repositories.nodes.filter(
    (e: any) =>
      // @ts-ignore
      projectMetadataOverride[e.name] !== undefined || additionalProjects[e.name] !== undefined
  );
  return {
    projects: mainProjects.map((e: any) => {
      // @ts-ignore
      let isAdditionalOpenSourceProject = !!additionalProjects[e.name];
      return {
        ...e,
        thumbnailImageUrl: e.openGraphImageUrl,
        externalUrl: e.homepageUrl,
        githubUrl: e.url,
        title: e.name,
        // @ts-ignore
        ...(projectMetadataOverride[e.name] || {}),
        // @ts-ignore
        ...(additionalProjects[e.name] || {}),
        isAdditionalOpenSourceProject,
      };
    }) as ProjectItem[],
  };
};
