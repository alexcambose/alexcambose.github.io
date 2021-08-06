import Parallax from '@/components/utils/Parallax';
import * as React from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import SectionNumber from './SectionNumber';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import ViewportEnter from '@/components/utils/ViewportEnter';

interface ISectionTitleProps {
  children: string;
  number: string;
}

const SectionTitleContainer = styled.div`
  position: relative;
`;
const SectionTitleContent = styled.div`
  font-size: 14rem;
  color: ${({ theme }) => theme.palette.white};
`;
const SectionTitleNumberContainer = styled.div`
  /* position: absolute; */
`;
const SectionTitleLine = styled(motion.div)`
  position: absolute;
  bottom: 1rem;
  height: 1rem;
  background-color: ${({ theme }) => theme.palette.accent};
  width: 10rem;
`;

const SectionTitle: React.FunctionComponent<ISectionTitleProps> = ({
  children,
  number,
}) => {
  return (
    <SectionTitleContainer>
      <Parallax amount={100}>
        <SectionTitleNumberContainer>
          <SectionNumber>{number}</SectionNumber>
        </SectionTitleNumberContainer>
      </Parallax>

      <SectionTitleContent>
        {children.split('').map((e, i) => (
          <span key={i}>{e}</span>
        ))}
      </SectionTitleContent>
      <ViewportEnter
        initial="hidden"
        transition={{ duration: 0.5 }}
        variants={{
          hidden: {
            x: -10,
            width: '3rem',
            opacity: 0.5,
            scale: 0.6,
          },
          visible: {
            x: 0,
            width: '10rem',
            opacity: 1,
            scale: 1,
          },
        }}
        el={SectionTitleLine}
      />
    </SectionTitleContainer>
  );
};

export default SectionTitle;
