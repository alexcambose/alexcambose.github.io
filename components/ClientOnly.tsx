import { useIsMounted } from '@/hooks';
import React from 'react';

export const ClientOnly = ({ children }: { children: React.ReactNode }) => {
  const isMounted = useIsMounted();
  if (!isMounted) return null;

  return <div>{children}</div>;
};
