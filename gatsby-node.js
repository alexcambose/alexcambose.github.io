const fs = require('fs');
const path = require('path');
exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allFile(filter: { sourceInstanceName: { eq: "projects" } }) {
        edges {
          node {
            extension
            dir
            modifiedTime
            name
          }
        }
      }
    }
  `);
  data.allFile.edges.forEach(({ node }) => {
    const data = JSON.parse(
      fs.readFileSync(
        path.resolve(node.dir, `${node.name}.${node.extension}`),
        'utf-8'
      )
    );

    actions.createPage({
      path: node.name,
      component: require.resolve(
        `./src/templates/${data.template || 'projectGeneric.tsx'}`
      ),
      context: { data },
    });
  });
};
