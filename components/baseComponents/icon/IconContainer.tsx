'use client';
import { Icon } from '@phosphor-icons/react';

export interface IconContainerProps {
  icon: Icon;
  hoverColor?: string;
}
export const IconContainer = ({ icon, hoverColor }: IconContainerProps) => {
  const Icon = icon;
  return (
    <span className="group/icon">
      <span className="group-hover/icon:hidden opacity-80">
        <Icon />
      </span>
      <span className="hidden group-hover/icon:inline opacity-0 group-hover/icon:opacity-100">
        <Icon style={{ fill: hoverColor }} weight="fill" />
      </span>
    </span>
  );
};
