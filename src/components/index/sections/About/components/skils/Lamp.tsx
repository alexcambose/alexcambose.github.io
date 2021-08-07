import * as React from 'react';
import styled from 'styled-components';

interface ILampProps {
  color?: 0 | 1 | 2;
}

const LampContainer = styled.div`
  flex: 1;
`;

const Lamp: React.FunctionComponent<ILampProps> = ({ color = 0 }) => {
  return <LampContainer>aa</LampContainer>;
};

export default Lamp;
