import Container from '@/components/ui/layout/Container';
import styled from 'styled-components';

export const ProjectHeaderContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
`;

export const ProjectHeaderOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
`;
export const ProjectHeaderInfoContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  padding-bottom: 2rem;
`;
export const ProjectHeaderTitle = styled.div`
  font-size: 6rem;
  margin-bottom: 1rem;
`;

export const ProjectHeaderInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const ProjectHeaderInfoLabel = styled.div`
  font-size: 1.2rem;
  opacity: 0.8;
`;

export const ProjectHeaderInfoValue = styled.div`
  font-size: 1.6rem;
`;

export const ProjectHeaderInfoItem = styled.div`
  display: flex;
  flex-direction: column;
  & svg {
    font-size: 3rem;
  }
`;
