import { Children, ReactNode, isValidElement } from 'react';

export const BadgeList = ({ children }: { children: ReactNode }) => {
  return (
    <ul>
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return (
            <li>
              <child.type />
            </li>
          );
        }
        // non react elements (text inside the table ...etc)
        return child;
      })}
    </ul>
  );
};
