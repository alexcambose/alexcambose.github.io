import { ReactNode } from 'react';

interface WorkTimelineContentProps {
  children: ReactNode;
}
export const WorkTimelineContent = ({ children }: WorkTimelineContentProps) => {
  return (
    <p className="mt-1 whitespace-pre-line">
      <h2 className="text-xl">Mixdice</h2>
      <p>2019-2020</p>
      <p className="ml-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque facilis praesentium et,
        aliquam error distinctio! Facere autem accusamus, eum modi quaerat ad neque vel iste minima
        reiciendis consequuntur, eaque ipsam!
      </p>
      <h2 className="text-xl">InstantOption</h2>
      <p>2019-2020</p>
      <p className="ml-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque facilis praesentium et,
        aliquam error distinctio! Facere autem accusamus, eum modi quaerat ad neque vel iste minima
        reiciendis consequuntur, eaque ipsam!
      </p>
      <h2 className="text-xl">Rolla</h2>
      <p>2019-2020</p>
      <p className="ml-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque facilis praesentium et,
        aliquam error distinctio! Facere autem accusamus, eum modi quaerat ad neque vel iste minima
        reiciendis consequuntur, eaque ipsam!
      </p>
      {children}
    </p>
  );
};
