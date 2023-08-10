import classNames from 'classnames';
import { AnchorHTMLAttributes } from 'react';

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link = ({ children, ...props }: LinkProps) => {
  return (
    <a className={classNames('text-slate-700 dark:text-slate-200 hover:dark:text-primary-dark', props.className)} {...props}>
      {children}
    </a>
  );
};
