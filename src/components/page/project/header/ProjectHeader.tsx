import { IWorkItem } from '@/interfaces';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import WorkGridItemGallery from '../../index/Work/components/workGrid/WorkGridItemGallery';
import {
  ProjectHeaderContainer,
  ProjectHeaderTitle,
  ProjectHeaderInfo,
  ProjectHeaderPlatform,
  ProjectHeaderInfoLabel,
  ProjectHeaderInfoValue,
  ProjectHeaderYear,
  ProjectHeaderTags,
  ProjectHeaderOverlay,
  ProjectHeaderInfoContainer,
  ProjectHeaderInfoItem,
} from './ProjectHeader.styled';
import GithubSVG from '@/images/svg/github.svg';

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
            {workItem.repoUrl && (
              <ProjectHeaderInfoItem>
                <a target="_blank" href={workItem.repoUrl}>
                  <GithubSVG />
                </a>
              </ProjectHeaderInfoItem>
            )}
          </ProjectHeaderInfo>
        </ProjectHeaderInfoContainer>
      </ProjectHeaderOverlay>
    </ProjectHeaderContainer>
  );
};

export default ProjectHeader;
