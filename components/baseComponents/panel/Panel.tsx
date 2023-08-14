import classNames from 'classnames';
import { HTMLAttributes, ReactNode } from 'react';

export interface PanelProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const Panel = ({ children, className, ...props }: PanelProps) => {
  return (
    <div
      className={classNames(
        'bg-page-frame-color-dark p-6 rounded-md drop-shadow-sm hover:drop-shadow-lg transition',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
