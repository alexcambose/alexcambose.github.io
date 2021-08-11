import * as React from 'react';
import styled from 'styled-components';

interface IButtonProps {
  children: React.ReactNode;
}
const ButtonElement = styled.button`
  border: 2px solid white;
  padding: 0.5rem 1rem;
  background: transparent;
  color: white;
  cursor: pointer;
`;
const Button: React.FunctionComponent<IButtonProps> = ({ children }) => {
  return <ButtonElement>{children}</ButtonElement>;
};

export default Button;
