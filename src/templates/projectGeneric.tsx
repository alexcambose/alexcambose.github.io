import Layout from '@/components/layout';
import CloseButton from '@/components/page/project/closeButton/CloseButton';
import ProjectFooter from '@/components/page/project/footer/Footer';
import ProjectHeader from '@/components/page/project/header/ProjectHeader';
import { IWorkItem } from '@/interfaces';
import * as React from 'react';
import styled from 'styled-components';

interface IProjectGenericProps {
  pageContext: { data: IWorkItem };
  children?: React.ReactNode[];
}
const ProjectWrapper = styled.div`
  background: white;
  color: black;
`;
const ProjectGeneric: React.FunctionComponent<IProjectGenericProps> = ({
  pageContext,
  children,
  ...props
}) => {
  const workItem = pageContext.data;
  return (
    <Layout title={workItem.title} description={workItem.summary} {...props}>
      <ProjectWrapper>
        <CloseButton />
        <ProjectHeader workItem={workItem}></ProjectHeader>
        {children}
        <ProjectFooter github={workItem.repoUrl} />
      </ProjectWrapper>
    </Layout>
  );
};

export default ProjectGeneric;
