import * as React from 'react';
import styled, { css } from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
interface ILinkProps {
  to: string;
  children: React.ReactNode;
  [key: string]: any;
}
const LinkStyle = css`
  font-weight: 300;
  color: ${({ theme }) => theme.link.color};
  text-decoration: none;
`;
const StyledLink = styled(GatsbyLink)`
  ${LinkStyle}
`;
const StyledHrefLink = styled.a`
  ${LinkStyle}
`;
const Link: React.FunctionComponent<ILinkProps> = ({
  to,
  children,
  ...props
}) => {
  if (to && to.indexOf('http') !== -1) {
    return (
      <StyledHrefLink target="_blank" href={to} {...props}>
        {children}
      </StyledHrefLink>
    );
  }
  return (
    <StyledLink to={to} {...props}>
      {children}
    </StyledLink>
  );
};

export default Link;
