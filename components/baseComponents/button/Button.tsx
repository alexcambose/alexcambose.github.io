import classNames from 'classnames';
import { ButtonHTMLAttributes } from 'react';
import { buttonTheme } from './theme';

type ButtonProps = {
  fullWidth?: boolean;
  variant?: 'default' | 'transparent';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ fullWidth, variant = 'default', ...props }: ButtonProps) => {
  const className = classNames(
    'p-4 inline-flex items-center justify-center font-medium outline-1 outline-offset-2 focus:outline',
    { 'w-full': fullWidth },
    buttonTheme.background,
    props.className,
    { '!bg-transparent': variant === 'transparent' }
  );
  return <button {...props} className={className} />;
};
