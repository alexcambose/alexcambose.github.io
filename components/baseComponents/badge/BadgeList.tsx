import classNames from 'classnames';
import { Children, HTMLAttributes, ReactNode, isValidElement } from 'react';

export interface BadgeListProps extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode;
}

export const BadgeList = ({ children, className, ...props }: BadgeListProps) => {
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

  return (
    <ul className={classNames('mt-3 flex flex-wrap', className)} {...props}>
      {badges}
    </ul>
  );
};
