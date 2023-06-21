'use client';
import Image from 'next/image';

interface AvatarCardProps {
  title: string;
  description: string;
  imageUrl: string;
  action: string;
}
export const AvatarCard = ({ title, description, action, imageUrl }: AvatarCardProps) => {
  return (
    <header className="flex items-center">
      <div className="relative h-48 w-48 flex-none overflow-hidden rounded-full">
        <Image alt="Profile image" src={imageUrl} fill className="object-cover" />
      </div>
      <div className="ml-4">
        <h1 className="text-2xl">{title}</h1>
        <p>{description}</p>
        <p>{action}</p>
      </div>
    </header>
  );
};
