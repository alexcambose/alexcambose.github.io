import { ReactNode } from 'react';
import { WalletNav } from './navigation/WalletNav';
import { Navbar } from './navigation/Navbar';
import { Container } from '@/components/layout/Container';
import { Inter } from 'next/font/google';
import classNames from 'classnames';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div
        className={classNames(
          inter.variable,
          'min-h-screen border-8 border-blue-500 bg-slate-100 font-sans'
        )}
      >
        <WalletNav />
        <Container>
          <Navbar />
          <main>{children}</main>
        </Container>
      </div>
      <footer>footer</footer>
    </>
  );
};
