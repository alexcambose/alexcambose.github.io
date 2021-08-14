import About from '@/components/page/index/About/index';
import Contact from '@/components/page/index/Contact/index';
import Home from '@/components/page/index/Home/index';
import Work from '@/components/page/index/Work/index';
import Menu from '@/components/ui/menu/Menu';
import useSiteMetadata from '@/hooks/useSiteMetadata';
import * as React from 'react';
import { StickyContainer } from 'react-sticky';
import Blog from '@/components/page/index/Blog/index';
import Layout from '../components/layout';
import SEOMeta from '@/components/SEOMeta';

const IndexPage: React.FC = (props) => {
  const data = useSiteMetadata();
  return (
    <Layout {...props}>
      <SEOMeta />
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
