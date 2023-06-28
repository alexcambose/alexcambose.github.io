import classNames from 'classnames';
import { HTMLAttributes, ReactNode } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  leftSidebar: ReactNode;
}
export const Container = ({ leftSidebar, children, className }: ContainerProps) => (
  <div
    className={classNames(
      'mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 flex',
      className
    )}
  >
    <div className="lg:flex lg:justify-between lg:gap-4 grow">
      <header className="lg:w-1/2 flex flex-col justify-between">{leftSidebar}</header>
      <main id="content" className="lg:w-1/2">
        {children}
      </main>
    </div>
  </div>
);
