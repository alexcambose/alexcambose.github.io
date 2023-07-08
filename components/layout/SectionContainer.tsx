import classNames from 'classnames';
import { ReactNode } from 'react';

interface SectionContainerProps {
  id: string;
  title: string;
  children: ReactNode;
}
export const SectionContainer = ({ id, title, children }: SectionContainerProps) => {
  return (
    <section id={id} aria-label={title} className={classNames('lg:mt-16 mt-8 first:mt-0')}>
      <header className="text-3xl mb-4 lg:mb-6">{/* <h3>{title}</h3> */}</header>
      {children}
    </section>
  );
};
