import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}
export const Container = ({ children }: ContainerProps) => {
  return (
    <div className="grid  place-content-center ">
      <div className="w-200 bg-slate-200">{children}</div>
    </div>
  );
};
