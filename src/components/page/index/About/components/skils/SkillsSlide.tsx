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
  SkillsItemDescription,
  SkillsLink,
} from './SkillsSlide.styled';

interface ISkill {
  name: string;
  icon: string;
  description?: string;
  url?: string;
}
interface ISkillsSlideProps {
  skills: ISkill[];
}
const SkillItem: React.FunctionComponent<{
  skill: ISkill;
}> = ({ skill: { icon: Icon, name, description, url } }) => {
  const element = (
    <SkillsItemContainer expandable={!!description}>
      <SkillsItemIcon>
        <Icon />
      </SkillsItemIcon>
      <SkillsItemText>{name}</SkillsItemText>
      {description && (
        <SkillsItemDescription>{description}</SkillsItemDescription>
      )}
    </SkillsItemContainer>
  );
  if (url) {
    return (
      <SkillsLink target="_blank" href={url}>
        {element}
      </SkillsLink>
    );
  }
  return element;
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
