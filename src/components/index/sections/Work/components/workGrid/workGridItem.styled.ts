import styled from 'styled-components';

export const WorkGridItemContainer = styled.div<{
  type: string;
}>`
  background: white;
  grid-area: ${({ type }) => type};
  border: 0rem solid transparent;
  transform: scale(1);
  outline: 0.12rem solid transparent;
  transition: 0.3s;
  &:hover {
    transform: translate3d(0, -1rem, 0);
    outline: 0.12rem solid white;
  }
`;

export const WorkGridItemOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 1));
  transition: 0.3s;
  background-size: 400% 400%;
  background-position: 0% -400%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2rem;
  ${WorkGridItemContainer}:hover & {
    background-position: 0% -300%;
  }
  & > * {
    transition: 0.3s;
    transform: translateY(20px);
    opacity: 0;
    transition-delay: 0ms;
  }

  ${WorkGridItemContainer}:hover & > * {
    transform: translateY(0px);
    opacity: 1;
  }
`;
export const WorkGridTags = styled.div`
  display: flex;

  ${WorkGridItemContainer}:hover & {
    transition-delay: 100ms;
  }
`;
export const WorkGridTitle = styled.div`
  font-size: 4rem;

  ${WorkGridItemContainer}:hover & {
    transition-delay: 200ms;
  }
`;
export const WorkGridTag = styled.div`
  font-size: 1rem;
  opacity: 0.8;
  transition: 0.3s;

  ${WorkGridItemContainer}:hover & {
    transition-delay: 300ms;
  }
  &:not(:first-of-type) {
    margin-left: 1rem;
  }
`;
export const WorkGridSummary = styled.div`
  letter-spacing: 0.2rem;
  font-size: 1.5rem;
  ${WorkGridItemContainer}:hover & {
    transition-delay: 300ms;
  }
`;

export const WorkGridDate = styled.div`
  ${WorkGridItemContainer}:hover & {
    transition-delay: 400ms;
  }
  margin-top: 1rem;
`;
export const WorkGridAction = styled.div`
  margin-top: 1rem;
  ${WorkGridItemContainer}:hover & {
    transition-delay: 500ms;
  }
`;
