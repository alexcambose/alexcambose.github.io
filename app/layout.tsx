import { Layout } from '@/layout';
import '@/styles/global.css';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return <Layout>{children}</Layout>;
}

export { metadata } from './metadata';
