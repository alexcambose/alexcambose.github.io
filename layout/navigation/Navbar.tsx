'use client';
import { Tab } from '@headlessui/react';
import Link, { LinkProps } from 'next/link';
import { ReactNode, ElementType } from 'react';

const NavItem = ({ children, ...props }: { children: ReactNode } & LinkProps) => {
  return (
    // @ts-ignore
    <Tab as={Link} className="px-[1vw] py-4" {...props}>
      {children}
    </Tab>
  );
};

const NavContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Tab.Group>
      <Tab.List className="flex flex-col justify-center">{children}</Tab.List>
    </Tab.Group>
  );
};

export const Navbar = () => {
  return (
    <NavContainer>
      <NavItem href="#">About</NavItem>
      <NavItem href="#skills">Skills</NavItem>
      <NavItem href="#projects">Projects</NavItem>
      <NavItem href="#blog">Blog</NavItem>
      <NavItem href="#contact">Contact</NavItem>
    </NavContainer>
  );
};
