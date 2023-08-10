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
    <header className="flex flex-col">
      <div className="relative h-40 w-40 flex-none overflow-hidden mb-8">
        <Image alt="Profile image" src={imageUrl} fill className="object-cover rounded-full" />
        {activeStatus && (
          <span
            className={classNames(
              'absolute bottom-1 right-1 h-7 w-7 bg-green-400 rounded-full border-4 border-slate-100 dark:border-slate-950'
            )}
          />
        )}
      </div>

      <h1 className="text-4xl font-bold tracking-tight dark:text-highlighted-dark sm:text-5xl">
        {title}
      </h1>
      <p className="mt-3 text-lg font-medium tracking-tight dark:text-highlighted-dark sm:text-xl">
        {description}
      </p>
      <p className="mt-4 leading-normal">{action}</p>
    </header>
  );
};
