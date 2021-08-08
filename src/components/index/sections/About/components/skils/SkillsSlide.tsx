import * as React from 'react';
import styled from 'styled-components';
import chunk from 'lodash/chunk';

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
  box-shadow: 0px 6px 21px #000000;
  padding: 0 1rem 0.4rem;
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

const SkillsSlide: React.FunctionComponent<ISkillsSlideProps> = ({
  skills,
}) => {
  return (
    <SkillsContainer>
      {chunk(skills, 5).map((skillsRow, i) => (
        <SkillsSlideRow key={i}>
          {skillsRow.map(({ icon: Icon, name }, i) => (
            <SkillsSlideColumn key={i}>
              <SkillsItemContainer>
                <SkillsItemIcon>
                  <Icon />
                </SkillsItemIcon>
                <SkillsItemText>{name}</SkillsItemText>
              </SkillsItemContainer>
            </SkillsSlideColumn>
          ))}
        </SkillsSlideRow>
      ))}
    </SkillsContainer>
  );
};

export default SkillsSlide;
