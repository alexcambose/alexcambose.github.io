'use client';
import { ArrowSquareOut, GithubLogo } from '@phosphor-icons/react';

export interface ProjectCardFooterProps {
  externalUrl?: string;
  githubUrl?: string;
}
export const ProjectCardFooter = ({ externalUrl, githubUrl }: ProjectCardFooterProps) => {
  return (
    <>
      {externalUrl && (
        <a href={externalUrl} target="_blank">
          <ArrowSquareOut />
        </a>
      )}
      {githubUrl && (
        <a href={externalUrl} target="_blank">
          <GithubLogo />
        </a>
      )}
    </>
  );
};
