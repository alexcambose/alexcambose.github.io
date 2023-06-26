import classNames from 'classnames';
import { HTMLAttributes, ReactNode } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={classNames('grid place-content-center', className)}>
      <div className="w-200">{children}</div>
    </div>
  );
};
