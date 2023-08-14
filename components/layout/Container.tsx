import classNames from 'classnames';
import { HTMLAttributes, ReactNode } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  leftSidebar: ReactNode;
}
const containerStyle = {
  topPadding: 'lg:py-[10vh]',
};
export const Container = ({ leftSidebar, children, className }: ContainerProps) => (
  <div className={classNames('mx-auto max-w-screen-xl font-sans flex', className)}>
    <div className="lg:flex lg:justify-between lg:gap-8 grow">
      <header
        className={classNames(
          'lg:w-5/12 flex flex-col justify-between lg:sticky top-0 max-h-screen',
          containerStyle.topPadding
        )}
      >
        {leftSidebar}
      </header>
      <main id="content" className={classNames('lg:w-7/12', containerStyle.topPadding)}>
        {children}
      </main>
    </div>
  </div>
);
