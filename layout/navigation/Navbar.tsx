'use client';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import { HTMLAttributes, ReactNode, useEffect, useState } from 'react';
export interface NavItemProps {
  children: ReactNode;
  href: string;
  isActive: boolean; // New prop
}

const NavItem = ({ children, href, isActive, ...props }: NavItemProps) => {
  return (
    <li>
      <a className={classNames('group flex items-center py-3')} href={href} {...props}>
        <span
          className={classNames(
            'mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none',
            { '!w-16 !bg-slate-200': isActive }
          )}
        />
        <span
          className={classNames(
            'text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200',
            { '!text-slate-200': isActive }
          )}
        >
          {children}
        </span>
      </a>
    </li>
  );
};
export const Navbar = () => {
  const [currentPath, setCurrentPath] = useState('#about');

  useEffect(() => {
    const scrollContainer = document.getElementById('scroll-container');
    if (!scrollContainer) return;

    const handleLocationChange = () => {
      setCurrentPath(window.location.hash);
    };

    const handleScroll = () => {
      const sections = ['#about', '#experience', '#projects', '#writings', '#contact'];
      if (scrollContainer.scrollTop === 0) {
        setCurrentPath(sections[0]);
        return;
      }
      if (
        Math.round(scrollContainer.scrollHeight - scrollContainer.scrollTop) ===
        scrollContainer.clientHeight
      ) {
        // If user has scrolled to the very bottom, set the last section as active
        setCurrentPath(sections[sections.length - 1]);
        return;
      }
      for (const section of sections) {
        const element = document.querySelector(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 0 && rect.bottom > 0) {
            setCurrentPath(section);
            break;
          }
        }
      }
    };

    window.addEventListener('hashchange', handleLocationChange);
    scrollContainer.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('hashchange', handleLocationChange);
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="my-[4vh] w-max">
        <NavItem href="#about" isActive={currentPath === '#about'}>
          About
        </NavItem>
        <NavItem href="#experience" isActive={currentPath === '#experience'}>
          Experience
        </NavItem>
        <NavItem href="#projects" isActive={currentPath === '#projects'}>
          Projects
        </NavItem>
        <NavItem href="#writings" isActive={currentPath === '#writings'}>
          Writings
        </NavItem>
        <NavItem href="#contact" isActive={currentPath === '#contact'}>
          Contact
        </NavItem>
      </ul>
    </nav>
  );
};
