import * as React from 'react';
import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
interface ILinkProps {
  to: string;
  children: string;
  [key: string]: any;
}

const StyledLink = styled(GatsbyLink)`
  font-weight: 300;
  color: ${({ theme }) => theme.link.color};
  text-decoration: none;
`;

const Link: React.FunctionComponent<ILinkProps> = ({
  to,
  children,
  ...props
}) => {
  return (
    <StyledLink to={to} {...props}>
      {children}
    </StyledLink>
  );
};

export default Link;
