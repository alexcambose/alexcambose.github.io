module.exports = {
  siteMetadata: {
    siteUrl: 'https://alexcambose.com',
    title: 'Alexandru Cambose',
    description: `I'm a passionate Full Stack Web Developer based in Iași, Romania. My specialty is web development from start to finish. I'm Fluent in HTML, CSS, Javascript, React and Node.js`,
    author: '@alexcambose',
    lang: 'en',
    social: {
      twitter: 'alexcambose',
    },
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-gatsby-cloud',
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'G-ELK1D55JTV',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    `gatsby-plugin-tsconfig-paths`,
    'gatsby-transformer-sharp',
    `gatsby-plugin-transition-link`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: `${__dirname}/src/data/projects`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          options: {
            classIdPrefix: true,
            props: {
              width: '1em',
              height: '1em',
            },
          },
        },
      },
    },
  ],
};
