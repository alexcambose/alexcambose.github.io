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
`;
const SkillsSlideColumn = styled.div`
  flex: 1;
  padding: 2rem;
`;
const SkillsItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  background-color: #00000052;
  box-shadow: 0px 6px 21px #000000;
`;
const SkillsItemIcon = styled.div`
  font-size: 5.1rem;
`;
const SkillsItemText = styled.span`
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
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
