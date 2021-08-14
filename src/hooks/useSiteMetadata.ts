import { useStaticQuery, graphql } from 'gatsby';
interface ISiteMetadata {
  title: string;
  description: string;
  author: string;
  siteUrl: string;
  lang: string;
  social: { twitter: string };
}
const useSiteMetadata = (): ISiteMetadata => {
  const { site } = useStaticQuery<{ site: { siteMetadata: ISiteMetadata } }>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            lang
            social {
              twitter
            }
          }
        }
      }
    `
  );
  return site.siteMetadata;
};

export default useSiteMetadata;
