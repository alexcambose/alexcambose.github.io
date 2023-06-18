import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}
export const Container = ({ children }: ContainerProps) => {
  return <div className="grid place-content-center">{children}</div>;
};
