import { ReactNode } from 'react';

export interface BadgeProps {
  children: ReactNode;
}
export const Badge = ({ children }: BadgeProps) => {
  return (
    <span className="mb-2 mr-2 inline-block select-none rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-700">
      {children}
    </span>
  );
};
