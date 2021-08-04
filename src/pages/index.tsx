import * as React from 'react';
import Layout from '../components/layout';
import { Helmet } from 'react-helmet';
import Home from '@/components/index/sections/Home/index';
import About from '@/components/index/sections/About/index';
import Contact from '@/components/index/sections/Contact/index';
import Work from '@/components/index/sections/Work/index';
import Blog from '../components/index/sections/Blog/index';
// markup
const IndexPage: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Alexandru Cambose</title>
        <meta
          name="description"
          content="Alexandru Cambose is a passionate Web Developer and Designer based in Iași, Romania. His specialty is full website design and development from start to finish. Fluent in Html, CSS, Javascript, Php, Nodejs and Laravel."
        ></meta>
      </Helmet>
      <Home />
      <About />
      <Work />

      <Blog />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
