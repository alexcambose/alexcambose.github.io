import Container from '@/components/ui/layout/Container';
import Section from '@/components/ui/layout/Section';
import SectionTitle from '@/components/ui/sectionTitle/SectionTitle';
import * as React from 'react';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import WorkGrid from './components/workGrid/WorkGrid';
const WorkSection = styled(Section)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background-color: ${({ theme }) => theme.palette.black}; */
  transition: background-size 4s, background-color 1s;
  /* background: linear-gradient(90deg, white 21px, transparent 1%) center,
    linear-gradient(white 21px, transparent 1%) center, white;
  background-size: 100vw 100vh;
  background-position: center;

  &:hover { */
  background: linear-gradient(90deg, #272727 21px, transparent 1%) center,
    linear-gradient(#272727 21px, transparent 1%) center, white;
  background-size: 22px 22px;
  /* } */
`;

const Work: React.FunctionComponent = () => {
  const sectionRef = useRef();
  const onMouseMove = (e) => {
    const $section = sectionRef.current;

    $section.style.backgroundPosition = `${e.clientX / 20}px ${
      e.clientY / 20
    }px`;
  };
  useEffect(() => {
    const $section = sectionRef.current;

    $section.addEventListener('mousemove', onMouseMove);
    return () => {
      $section.removeEventListener('mousemove', onMouseMove);
    };
  }, []);
  return (
    <WorkSection ref={sectionRef} title="Work">
      <Container>
        <SectionTitle number="02">Work</SectionTitle>
        <WorkGrid />
      </Container>
    </WorkSection>
  );
};

export default Work;
