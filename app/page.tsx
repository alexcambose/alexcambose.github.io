import { About } from '@/components/about/About';
import { Blog } from '@/components/blog/Blog';
import { Contact } from '@/components/contact/Contact';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { Projects } from '@/components/projects/Projects';
import { WorkTimeline } from '@/components/workTimeline/WorkTimeline';
import type { Metadata } from 'next';
import { workTimelineData } from './data';

export const metadata: Metadata = {
  title: 'Alexandru Cambose',
};

const Home = () => {
  return (
    <>
      <SectionContainer id="about" title="About Me">
        <About />
      </SectionContainer>
      <SectionContainer id="experience" title="Experience">
        <WorkTimeline data={workTimelineData} />
      </SectionContainer>
      <SectionContainer id="projects" title="Projects">
        <Projects />
      </SectionContainer>
      <SectionContainer id="writings" title="Writings">
        <Blog />
      </SectionContainer>
      <SectionContainer id="contact" title="Contact">
        <Contact />
      </SectionContainer>
    </>
  );
};

export default Home;
