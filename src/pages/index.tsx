import * as React from 'react';
import Layout from '../components/layout';
import { Helmet } from 'react-helmet';
// markup
const IndexPage: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <title>Alexandru Cambose</title>
      AAA
    </Layout>
  );
};

export default IndexPage;
