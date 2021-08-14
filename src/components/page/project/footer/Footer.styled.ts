import Container from '@/components/ui/layout/Container';
import styled from 'styled-components';

export const ProjectFooterContainer = styled.div`
  background: black;
  color: white;
  padding: 4.2rem 0;
  font-weight: 300;
`;
export const ProjectFooterBack = styled.div`
  font-size: 1.4rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
  opacity: 0.8;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
export const ProjectFooterInfo = styled.div`
  font-size: 2rem;
`;
export const ProjectFooterContent = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
