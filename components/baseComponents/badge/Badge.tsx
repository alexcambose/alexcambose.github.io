import classNames from 'classnames';
import { ReactNode } from 'react';

export interface BadgeProps {
  children: ReactNode;
  size: 'normal' | 'small';
}
export const Badge = ({ children, size = 'normal' }: BadgeProps) => {
  return (
    <span
      className={classNames(
        'mb-2 mr-2 inline-block select-none rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-700',
        { 'text-xxs px-2 py-1': size === 'small' }
      )}
    >
      {children}
    </span>
  );
};
