import styled from 'styled-components';

export const SkillsContainer = styled.div``;
export const SkillsSlideRow = styled.div`
  display: flex;
  padding: 1rem 0 1.6rem;
`;
export const SkillsSlideColumn = styled.div`
  flex: 1;
  &:not(:last-of-type) {
    padding-right: 2rem;
  }
`;
export const SkillsItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #00000052;
  box-shadow: 0px 4px 20px 3px #23211a;
  padding: 0 1rem 0.6rem;
`;
export const SkillsItemIcon = styled.div`
  font-size: 5rem;
  margin: 1rem 1rem 0;
`;
export const SkillsItemText = styled.span`
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
