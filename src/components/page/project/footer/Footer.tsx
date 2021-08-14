import Link from '@/components/ui/typography/Link';
import * as React from 'react';
import {
  ProjectFooterBack,
  ProjectFooterContainer,
  ProjectFooterContent,
  ProjectFooterInfo,
} from './Footer.styled';

interface IProjectFooterProps {
  github: string;
}

const ProjectFooter: React.FunctionComponent<IProjectFooterProps> = ({
  github,
}) => {
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <ProjectFooterContainer>
      <ProjectFooterContent>
        <ProjectFooterBack onClick={scrollTop}>back to top</ProjectFooterBack>
        <ProjectFooterInfo>
          View project on GitHub: <Link to={github}>{github}</Link>
        </ProjectFooterInfo>
      </ProjectFooterContent>
    </ProjectFooterContainer>
  );
};

export default ProjectFooter;
