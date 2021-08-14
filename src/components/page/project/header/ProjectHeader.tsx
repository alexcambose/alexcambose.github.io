import Button from '@/components/ui/Button';
import Link from '@/components/ui/typography/Link';
import GithubSVG from '@/images/svg/github.svg';
import { IWorkItem } from '@/interfaces';
import * as React from 'react';
import WorkGridItemGallery from '../../index/Work/components/workGrid/WorkGridItemGallery';
import {
  ProjectHeaderContainer,
  ProjectHeaderInfo,
  ProjectHeaderInfoContainer,
  ProjectHeaderInfoItem,
  ProjectHeaderInfoLabel,
  ProjectHeaderInfoValue,
  ProjectHeaderOverlay,
  ProjectHeaderTitle,
} from './ProjectHeader.styled';

interface IProjectHeaderProps {
  workItem: IWorkItem;
}

const ProjectHeader: React.FunctionComponent<IProjectHeaderProps> = ({
  workItem,
}) => {
  return (
    <ProjectHeaderContainer>
      <WorkGridItemGallery images={workItem.images} />
      <ProjectHeaderOverlay>
        <ProjectHeaderInfoContainer>
          <ProjectHeaderTitle>{workItem.title}</ProjectHeaderTitle>
          <ProjectHeaderInfo>
            <ProjectHeaderInfoItem>
              <ProjectHeaderInfoLabel>Platform</ProjectHeaderInfoLabel>
              <ProjectHeaderInfoValue>
                {workItem.platform}
              </ProjectHeaderInfoValue>
            </ProjectHeaderInfoItem>
            <ProjectHeaderInfoItem>
              <ProjectHeaderInfoLabel>Year</ProjectHeaderInfoLabel>
              <ProjectHeaderInfoValue>{workItem.date}</ProjectHeaderInfoValue>
            </ProjectHeaderInfoItem>
            <ProjectHeaderInfoItem>
              <ProjectHeaderInfoLabel>Tags</ProjectHeaderInfoLabel>
              <ProjectHeaderInfoValue>
                {workItem.tags.join(', ')}
              </ProjectHeaderInfoValue>
            </ProjectHeaderInfoItem>
            {(workItem.repoUrl || workItem.url) && (
              <ProjectHeaderInfoItem
                style={{
                  alignItems: 'center',
                }}
              >
                {workItem.url && (
                  <Link
                    style={{ marginBottom: '1rem' }}
                    target="_blank"
                    to={workItem.url}
                  >
                    <Button>View</Button>
                  </Link>
                )}
                {workItem.repoUrl && (
                  <Link target="_blank" to={workItem.repoUrl}>
                    <GithubSVG />
                  </Link>
                )}
              </ProjectHeaderInfoItem>
            )}
          </ProjectHeaderInfo>
        </ProjectHeaderInfoContainer>
      </ProjectHeaderOverlay>
    </ProjectHeaderContainer>
  );
};

export default ProjectHeader;
