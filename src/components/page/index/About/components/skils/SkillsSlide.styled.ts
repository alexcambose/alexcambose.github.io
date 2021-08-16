import styled, { css } from 'styled-components';

export const SkillsContainer = styled.div``;
export const SkillsSlideRow = styled.div`
  display: flex;
  padding: 1rem 0 1.6rem;
`;
export const SkillsSlideColumn = styled.div`
  &:not(:last-of-type) {
    padding-right: 2rem;
  }
  &:first-of-type {
    padding-right: 2rem;
  }
`;
export const SkillsItemContainer = styled.div<{ expandable?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: black;
  color: white;
  box-shadow: 0px 4px 10px 0px #23211ac2;
  padding: 0 1rem 0.6rem;
  ${({ expandable }) =>
    expandable &&
    css`
      transition: 0.3s;
      height: 100%;
      /* height:  */
      &:hover {
        height: calc(100% + 1rem);
        transform: translateY(-1rem);
        box-shadow: 0px 4px 10px 0px #23211af2;
      }
    `}
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
export const SkillsItemDescription = styled.div`
  /* height: 0; */
  opacity: 0;
  flex: 0;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(0.5rem);
  font-size: 0.9rem;
  letter-spacing: -2px;
  white-space: nowrap;
  ${SkillsItemContainer}:hover & {
    opacity: 1;
    flex: 1;
    transform: translateY(0);
    letter-spacing: 0;

    /* height: 30px; */
  }
`;
export const SkillsLink = styled.a`
  text-decoration: none;
`;
