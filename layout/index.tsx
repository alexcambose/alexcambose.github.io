'use client';
import { AvatarCard } from '@/components/avatarCard/AvatarCard';
import { Container } from '@/components/layout/Container';
import { SwitchThemeButton } from '@/components/switchThemeButton/SwitchThemeButton';
import { usePrefersDarkMode } from '@/theme/hooks/usePrefersDarkMode';
import { useTheme } from '@/theme/hooks/useTheme';
import { shouldAppendDarkRoot } from '@/theme/utils';
import classNames from 'classnames';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { Navbar } from './navigation/Navbar';
import { WalletNav } from './navigation/WalletNav';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
interface LayoutProps {
  children: ReactNode;
}
const layoutTheme = {
  background: 'bg-slate-100 dark:bg-slate-950',
  border: 'border-8 border-blue-500 dark:border-blue-950',
  height: 'min-h-screen',
  font: 'font-sans text-black dark:text-white',
};
export const Layout = ({ children }: LayoutProps) => {
  const { theme } = useTheme();
  const prefersDarkMode = usePrefersDarkMode();
  return (
    <html lang="en" className={classNames({ dark: shouldAppendDarkRoot(theme, prefersDarkMode) })}>
      <body>
        <div
          className={classNames(
            inter.variable,
            layoutTheme.background,
            layoutTheme.border,
            layoutTheme.height,
            layoutTheme.font
          )}
        >
          <WalletNav />
          <Container>
            <AvatarCard
              title="Lorem ipsum"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget vehicula tellus, id porta libero. Nunc ornare rutrum mauris ac congue. Fusce vestibulum dolor quis lorem dictum, quis feugiat ipsum ullamcorper. Donec imperdiet dui leo, eget tempor leo semper sit amet. Etiam tempus felis sit amet augue rutrum, nec consectetur mi vulputate."
              imageUrl="https://placehold.co/600x400.png"
              action="aa"
            />
            <SwitchThemeButton />
            <Navbar />
            <main>{children}</main>
          </Container>
        </div>
        <footer>footer</footer>
      </body>
    </html>
  );
};
