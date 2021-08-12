import About from '@/components/page/index/About/index';
import Contact from '@/components/page/index/Contact/index';
import Home from '@/components/page/index/Home/index';
import Work from '@/components/page/index/Work/index';
import Menu from '@/components/ui/menu/Menu';
import useSiteMetadata from '@/hooks/useSiteMetadata';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import { StickyContainer } from 'react-sticky';
import Blog from '@/components/page/index/Blog/index';
import Layout from '../components/layout';

const IndexPage: React.FC = () => {
  const data = useSiteMetadata();
  return (
    <Layout>
      <Helmet htmlAttributes={{ lang: data.lang }}>
        <meta charSet="utf-8" />
        <title>{data.title}</title>
        <meta name="description" content={data.description}></meta>
      </Helmet>
      <Home />
      <StickyContainer>
        <Menu />
        <About />
        <Work />

        <Blog />
        <Contact />
      </StickyContainer>
    </Layout>
  );
};

export default IndexPage;
