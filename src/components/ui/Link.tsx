import * as React from 'react';
import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
interface ILinkProps {
  to: string;
  children: string;
}

const StyledLink = styled(GatsbyLink)`
  font-weight: 300;
  color: ${({ theme }) => theme.link.color};
  text-decoration: none;
`;

const Link: React.FunctionComponent<ILinkProps> = ({ to, children }) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};

export default Link;
