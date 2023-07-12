import { ReactNode } from 'react';

interface WorkTimelineContentProps {
  children: ReactNode;
}
export const WorkTimelineContent = ({ children }: WorkTimelineContentProps) => {
  return (
    <p className="mt-1 whitespace-pre-line">
      <h2 className="mt-3 text-xl">Mixdice</h2>
      <p className="text-sm">2019 - 2020</p>
      <p className="my-2 border-l-[1px] border-x-gray-800 pl-2 text-sm">
        - Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste vitae doloribus possimus
        commodi quasi aspernatur esse magnam rerum voluptatum, saepe sequi unde ipsam repellendus!
        Velit atque cum in consequatur iure?
        <br />- Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste vitae doloribus
        possimus commodi quasi aspernatur esse magnam rerum voluptatum, saepe sequi unde ipsam
        repellendus! Velit atque cum in consequatur iure?
        <br />- Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste vitae doloribus
        possimus commodi quasi aspernatur esse magnam rerum voluptatum, saepe sequi unde ipsam
        repellendus! Velit atque cum in consequatur iure?
      </p>
      <h2 className="mt-3 text-xl">InstantOption</h2>
      <p className="text-sm">2019 - 2020</p>
      <p className="my-2 border-l-[1px] border-x-gray-800 pl-2 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque facilis praesentium et,
        aliquam error distinctio! Facere autem accusamus, eum modi quaerat ad neque vel iste minima
        reiciendis consequuntur, eaque ipsam!
      </p>
      <h2 className="mt-3 text-xl">Rolla</h2>
      <p className="text-sm">2019 - 2020</p>
      <p className="my-2 border-l-[1px] border-x-gray-800 pl-2 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque facilis praesentium et,
        aliquam error distinctio! Facere autem accusamus, eum modi quaerat ad neque vel iste minima
        reiciendis consequuntur, eaque ipsam!
      </p>
      <p className="text-sm">{children}</p>
    </p>
  );
};
