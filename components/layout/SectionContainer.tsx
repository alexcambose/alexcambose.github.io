import classNames from 'classnames';
import { ReactNode } from 'react';

interface SectionContainerProps {
  id: string;
  title: string;
  children: ReactNode;
}
export const SectionContainer = ({ id, title, children }: SectionContainerProps) => {
  return (
    <section id={id} aria-label={title} className={classNames('mt-8 first:mt-0 lg:mt-16')}>
      <header className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h3>{title}</h3>
      </header>
      {children}
    </section>
  );
};
