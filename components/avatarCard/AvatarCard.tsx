'use client';
import classNames from 'classnames';
import Image from 'next/image';
export enum ActiveStatusEnum {
  ACTIVE = 'ACTIVE',
}
interface AvatarCardProps {
  title: string;
  description: string;
  imageUrl: string;
  action: string;
  activeStatus?: ActiveStatusEnum;
}
export const AvatarCard = ({
  title,
  description,
  action,
  imageUrl,
  activeStatus = ActiveStatusEnum.ACTIVE,
}: AvatarCardProps) => {
  return (
    <header className="flex items-center">
      <div className="relative h-48 w-48 flex-none overflow-hidden">
        <Image alt="Profile image" src={imageUrl} fill className="object-cover rounded-full" />
        {activeStatus && (
          <span
            className={classNames(
              'absolute bottom-3 right-3 h-8 w-8 bg-green-400 rounded-full border-4 border-slate-100 dark:border-slate-950'
            )}
          />
        )}
      </div>
      <div className="ml-4">
        <h1 className="text-2xl">{title}</h1>
        <p>{description}</p>
        <p>{action}</p>
      </div>
    </header>
  );
};
