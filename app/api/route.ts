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
export async function GET(request: Request) {
  const octokit = new Octokit({ auth: process.env.GITHUB_PERSONAL_ACCESS_TOKEN });

  const response = await octokit.graphql(getQuery());

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
}
