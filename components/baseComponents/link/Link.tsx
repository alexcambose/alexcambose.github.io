import classNames from 'classnames';
import { AnchorHTMLAttributes } from 'react';

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link = ({ children, className, ...props }: LinkProps) => {
  return (
    <a
      rel={props.target === '_blank' ? 'noopener noreferrer' : undefined}
      {...props}
      className={classNames(
        'text-slate-700 dark:text-slate-200 hover:dark:text-primary-dark',
        className
      )}
    >
      {children}
    </a>
  );
};
