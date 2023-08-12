import { Octokit } from '@octokit/core';
const getQuery = () => `
{
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
    itemShowcase {
      hasPinnedItems
      items(first: 10) {
        totalCount
        nodes {
          ... on Repository {
            id
            name
            description
            licenseInfo {
              id
            }
            openGraphImageUrl
            forkCount
            createdAt
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