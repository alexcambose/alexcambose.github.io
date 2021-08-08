import * as React from 'react';
import styled from 'styled-components';
import chunk from 'lodash/chunk';
import { useEffect, useRef, useState } from 'react';

interface ISkill {
  name: string;
  icon: string;
}
interface ISkillsSlideProps {
  skills: ISkill[];
}
const SkillsContainer = styled.div``;
const SkillsSlideRow = styled.div`
  display: flex;
  padding: 1rem 0 1.6rem;
`;
const SkillsSlideColumn = styled.div`
  flex: 1;
  &:not(:last-of-type) {
    padding-right: 2rem;
  }
`;
const SkillsItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #00000052;
  box-shadow: 0px 4px 20px 3px #23211a;
  padding: 0 1rem 0.6rem;
`;
const SkillsItemIcon = styled.div`
  font-size: 5rem;
  margin: 1rem 1rem 0;
`;
const SkillsItemText = styled.span`
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
const SkillItem: React.FunctionComponent<{
  skill: ISkill;
}> = ({ skill: { icon: Icon, name } }) => {
  return (
    <SkillsItemContainer>
      <SkillsItemIcon>
        <Icon />
      </SkillsItemIcon>
      <SkillsItemText>{name}</SkillsItemText>
    </SkillsItemContainer>
  );
};
const SkillsSlide: React.FunctionComponent<ISkillsSlideProps> = ({
  skills,
}) => {
  return (
    <SkillsContainer>
      {chunk(skills, 5).map((skillsRow, i) => (
        <SkillsSlideRow key={i}>
          {skillsRow.map((skill, i) => (
            <SkillsSlideColumn key={i}>
              <SkillItem skill={skill} />
            </SkillsSlideColumn>
          ))}
        </SkillsSlideRow>
      ))}
    </SkillsContainer>
  );
};

export default SkillsSlide;
