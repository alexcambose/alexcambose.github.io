import { ArrowsSplit } from '@/utils/icons';

export interface ForkCountProps {
  children: number;
}
export const ForkCount = ({ children }: ForkCountProps) => {
  if (!children) return null;
  return (
    <span className="flex items-center">
      <ArrowsSplit /> <span className="ml-1 dark:text-slate-100 text-sm">{children}</span>
    </span>
  );
};
