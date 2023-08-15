import { Star } from '@/utils/icons';

export interface StargazerCountProps {
  children: number;
}
export const StargazerCount = ({ children }: StargazerCountProps) => {
  if (!children) return null;
  return (
    <span className="flex items-center">
      <Star /> <span className='ml-1 dark:text-slate-100 text-sm'>{children}</span>
    </span>
  );
};
