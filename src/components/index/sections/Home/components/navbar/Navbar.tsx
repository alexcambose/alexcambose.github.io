import * as React from 'react';
import styled from 'styled-components';
import {
  NavbarContainer,
  NavbarItem,
  NavbarLink,
  NavbarList,
  NavbarLogo,
} from './Navbar.styled';
import { StaticImage } from 'gatsby-plugin-image';
import { upperFirst } from 'lodash';

const Navbar: React.FunctionComponent = () => {
  return (
    <NavbarContainer>
      <NavbarLogo>
        <StaticImage
          height={50}
          src="../../../../../../images/logo.png"
          alt="Logo"
        />
      </NavbarLogo>
      <NavbarList>
        {['home', 'about', 'work', 'blog', 'contact'].map((e, i) => (
          <NavbarItem key={i}>
            <NavbarLink to={`#${e}`}>{upperFirst(e)}</NavbarLink>
          </NavbarItem>
        ))}
      </NavbarList>
    </NavbarContainer>
  );
};

export default Navbar;
