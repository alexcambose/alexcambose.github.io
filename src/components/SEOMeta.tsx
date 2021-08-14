import * as React from 'react';
import useSiteMetadata from '@/hooks/useSiteMetadata';
import { Helmet } from 'react-helmet';

interface ISEOMetaProps {
  title?: string;
  description?: string;
  meta?: object[];
}

const SEOMeta: React.FunctionComponent<ISEOMetaProps> = ({
  title,
  description,
  meta = [],
}) => {
  const data = useSiteMetadata();

  return (
    <Helmet
      htmlAttributes={{ lang: data.lang }}
      title={title}
      meta={[
        {
          name: `description`,
          content: description || data.description,
        },
        {
          property: `og:title`,
          content: title || data.title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: data.social.twitter,
        },
        {
          name: `twitter:title`,
          content: title || data.title,
        },
        {
          name: `twitter:description`,
          content: description || data.description,
        },
      ].concat(meta)}
    />
  );
};

export default SEOMeta;
