import { Layout } from '@/layout';
import '@/styles/global.css';
import { ReactNode } from 'react';
import { Providers } from './providers';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <Providers>
      <Layout>{children}</Layout>
    </Providers>
  );
}

export { metadata } from './metadata';
