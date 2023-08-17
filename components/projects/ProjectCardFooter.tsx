import { ArrowSquareOut, GithubLogo } from '@/utils/icons';
import classNames from 'classnames';
import { HTMLAttributes } from 'react';
import { IconContainer } from '../baseComponents/icon/IconContainer';

export interface ProjectCardFooterProps extends HTMLAttributes<HTMLDivElement> {
  externalUrl?: string;
  githubUrl?: string;
}

export const ProjectCardFooter = ({
  externalUrl,
  githubUrl,
  className,
  ...props
}: ProjectCardFooterProps) => {
  return (
    <div className={classNames('flex text-2xl', className)} {...props}>
      {externalUrl && (
        <a href={externalUrl} target="_blank" className="p-2">
          <IconContainer icon={ArrowSquareOut} hoverColor="#fff" />
        </a>
      )}
      {githubUrl && (
        <a href={githubUrl} target="_blank" className="p-2">
          <IconContainer icon={GithubLogo} hoverColor="#fff" />
        </a>
      )}
    </div>
  );
};
