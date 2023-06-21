'use client';
import { ReactNode } from 'react';
import { WalletNav } from './navigation/WalletNav';
import { Navbar } from './navigation/Navbar';
import { Container } from '@/components/layout/Container';
import { Inter } from 'next/font/google';
import classNames from 'classnames';
import { AvatarCard } from '@/components/avatarCard/AvatarCard';
import { SwitchThemeButton } from '@/components/switchThemeButton/SwitchThemeButton';
import { ThemeTypeEnum } from '@/theme/types';
import { useTheme } from '@/theme/hooks/useTheme';
import { usePrefersDarkMode } from '@/theme/hooks/usePrefersDarkMode';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
interface LayoutProps {
  children: ReactNode;
}

const shouldAppendDark = (theme: ThemeTypeEnum, prefersDarkMode: boolean) => {
  if (theme === ThemeTypeEnum.DARK) return true;
  if (theme === ThemeTypeEnum.LIGHT) return false;
  return prefersDarkMode;
};

export const Layout = ({ children }: LayoutProps) => {
  const { theme } = useTheme();
  const prefersDarkMode = usePrefersDarkMode();
  return (
    <html lang="en" className={classNames({ dark: shouldAppendDark(theme, prefersDarkMode) })}>
      <body>
        <div
          className={classNames(
            inter.variable,
            'min-h-screen border-8 border-blue-500 bg-slate-100 font-sans'
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
