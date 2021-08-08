import Container from '@/components/ui/layout/Container';
import { Col, Row } from '@/components/ui/layout/Grid';
import Section from '@/components/ui/layout/Section';
import SectionTitle from '@/components/ui/sectionTitle/SectionTitle';
import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Intro from './components/intro/Intro';
import Skills from './components/skils/Skills';
const AboutSection = styled(Section)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3rem 0;
`;
const AboutText = styled.p`
  font-size: 2rem;
  line-height: 3rem;
`;
const About: React.FunctionComponent = () => {
  const [currentSkillsTab, setCurrentSkillsTab] = useState(0);
  useEffect(() => {
    //...
  }, [currentSkillsTab]);
  return (
    <AboutSection title="About">
      <Container>
        <SectionTitle number="01">About</SectionTitle>
        <Intro />
        <Row>
          <Col>
            <AboutText>
              I'm a full stack developer based in Iasi, Romania. My specialty is
              full website design and development from start to finish. I love
              to create smart and beautiful user interfaces, and to imaginate
              new ways of building stuff or solving problems.
            </AboutText>
          </Col>
          <Col>
            <AboutText>
              My interests, however, extend beyond the web, I am a perfectionist
              and a learner, always enjoying reading about something new or
              exploring the depths of a new topic. I approach each problem as a
              learning experience and I love to use my creativity and logic to
              come up with the right solution.
            </AboutText>
          </Col>
          <Col>
            <AboutText>
              When I'm not glued to my computer screen(it rarely happens) I'm
              probably messing around with hardware stuff or just out for a
              walk.
            </AboutText>
          </Col>
        </Row>
      </Container>
      <Skills onTabChange={setCurrentSkillsTab} />
    </AboutSection>
  );
};

export default About;
