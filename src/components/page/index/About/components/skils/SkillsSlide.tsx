import * as React from 'react';
import chunk from 'lodash/chunk';
import { useEffect, useRef, useState } from 'react';
import {
  SkillsContainer,
  SkillsSlideRow,
  SkillsSlideColumn,
  SkillsItemContainer,
  SkillsItemIcon,
  SkillsItemText,
} from './SkillsSlide.styled';

interface ISkill {
  name: string;
  icon: string;
}
interface ISkillsSlideProps {
  skills: ISkill[];
}
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
            <SkillsSlideColumn key={i} style={{ flexBasis: '20%' }}>
              <SkillItem skill={skill} />
            </SkillsSlideColumn>
          ))}
        </SkillsSlideRow>
      ))}
    </SkillsContainer>
  );
};

export default SkillsSlide;
