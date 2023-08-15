import classNames from 'classnames';
import { HTMLAttributes } from 'react';

export interface TagListProps extends HTMLAttributes<HTMLDivElement> {
  tags: string[];
}
export const TagList = ({ tags, className, ...props }: TagListProps) => {
  return (
    <span className={classNames(className)} {...props}>
      {tags.map((category, i) => (
        <small className="text-xsm opacity-90" key={category}>
          {category} {i < tags.length - 1 && '· '}
        </small>
      ))}
    </span>
  );
};
