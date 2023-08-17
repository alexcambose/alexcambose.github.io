import { ReactNode } from 'react';

const Bold = ({ children }: { children: ReactNode }) => {
  return <span className="dark:text-slate-300 font-medium">{children}</span>;
};
export const About = () => {
  return (
    <div>
      <p className="mb-4">
        I&apos;m a <Bold>software engineer</Bold> with a knack for tackling complex problems and a
        passion for <Bold>finance</Bold>, <Bold>web3</Bold> and <Bold>blockchain</Bold>. With over{' '}
        <Bold>6 years</Bold> of hands-on experience, I&apos;ve had the privilege of wearing diverse
        hats ranging from <Bold>frontend</Bold> and <Bold>backend</Bold> developer, to{' '}
        <Bold>mentor</Bold>, <Bold>architect</Bold>, and <Bold>team lead</Bold>.
      </p>
      <p className="mb-4">
        My journey began when I started programming at a young age and it has since flourished into
        both my hobby and my profession. I take pride in constantly stepping out of my comfort zone
        and embracing new challenges. I firmly believe that success is a collective effort. Driven
        by an insatiable curiosity, I&apos;m always eager to learn, adapt, and stay on top of the
        latest developments in <Bold>tech</Bold> and <Bold>finance</Bold>.
      </p>
      <p>
        When I&apos;m not at the computer, you&apos;ll probably find me exploring new places and
        seeking out adventures.
      </p>
    </div>
  );
};
