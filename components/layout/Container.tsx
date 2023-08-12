import classNames from 'classnames';
import { HTMLAttributes, ReactNode } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  leftSidebar: ReactNode;
}

export const Container = ({ leftSidebar, children, className }: ContainerProps) => (
  <div className={classNames('mx-auto max-w-screen-xl font-sans flex', className)}>
    <div className="lg:flex lg:justify-between lg:gap-8 grow">
      <header className="lg:w-5/12 flex flex-col py-20 justify-between sticky top-0 max-h-screen">
        {leftSidebar}
      </header>
      <main id="content" className="lg:w-7/12 py-20">
        {children}
      </main>
    </div>
  </div>
);
