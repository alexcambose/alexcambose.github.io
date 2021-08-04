import Container from '@/components/ui/layout/Container';
import Link from '@/components/ui/Link';
import styled from 'styled-components';
export const NavbarContainer = styled(Container)`
  margin-top: 1rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`;
export const NavbarLogo = styled.span``;
export const NavbarList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
`;
export const NavbarItem = styled.li`
  &:not(:last-of-type) {
    padding-right: calc(1rem + 1vw);
  }
  &:not(:first-of-type) {
    padding-left: calc(1rem + 1vw);
  }
`;
export const NavbarLink = styled(Link)``;
