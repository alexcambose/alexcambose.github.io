import { Children, HTMLAttributes, ReactNode, isValidElement } from 'react';

export const BadgeList = ({ children }: { children: ReactNode }) => {
  const badges = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return (
        <li key={child.key} className="inline">
          <child.type {...child.props}>{child.props.children}</child.type>
        </li>
      );
    }
    // non react elements (text inside the table ...etc)
    return child;
  });
  return <ul className="mt-3">{badges}</ul>;
};
