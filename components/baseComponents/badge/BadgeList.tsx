import { Children, HTMLAttributes, ReactNode, isValidElement } from 'react';

export interface BadgeListProps extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode;
}

export const BadgeList = ({ children, ...props }: BadgeListProps) => {
  return (
    <ul {...props}>
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return <li className="inline">{child}</li>;
        }
        // non react elements (text inside the table ...etc)
        return child;
      })}
    </ul>
  );
};
