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
import { SocialElementType, SocialIcons } from '@/components/socialIcons/SocialIcons';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
interface LayoutProps {
  children: ReactNode;
}
const layoutTheme = {
  position: 'relative',
  background: 'bg-slate-100 dark:bg-slate-950',
  border: 'border-8 border-blue-500 dark:border-blue-950',
  height: 'min-h-screen',
  font: 'font-sans text-black dark:text-gray-400',
};
export const Layout = ({ children }: LayoutProps) => {
  const { theme } = useTheme();
  const prefersDarkMode = usePrefersDarkMode();
  return (
    <html
      lang="en"
      className={classNames(
        { dark: shouldAppendDarkRoot(theme, prefersDarkMode) },
        {
          'bg-slate-100': !prefersDarkMode,
          'bg-slate-950': prefersDarkMode,
        }
      )}
    >
      <body>
        <div
          className={classNames(
            inter.variable,
            layoutTheme.position,
            layoutTheme.background,
            layoutTheme.border,
            layoutTheme.height,
            layoutTheme.font
          )}
        >
          <WalletNav />
          <Container
            className="mt-20"
            leftSidebar={
              <>
                <div>
                  <AvatarCard
                    title="Lorem ipsum"
                    description="Product-focused Software engineer"
                    imageUrl="https://placehold.co/600x400.png"
                    action="I thrive on tackling complex challenges that empowers financial systems. Can-do attitude. Always shipping."
                  />
                  <Navbar />
                </div>

                <div className="">
                  <SocialIcons
                    data={{
                      [SocialElementType.Twitter]: { url: 'https://twitter.com/alexcambose' },
                      [SocialElementType.Github]: { url: 'https://github.com/alexcambose' },
                      [SocialElementType.Linkedin]: {
                        url: 'https://www.linkedin.com/in/alexcambose/',
                      },
                      [SocialElementType.Instagram]: {
                        url: 'https://www.instagram.com/alexcambose/',
                      },
                      [SocialElementType.Facebook]: { url: 'https://facebook.com/alexcambose' },
                    }}
                  />
                </div>
              </>
            }
          >
            <SwitchThemeButton />
            <main>{children}</main>
          </Container>
          <footer>footer</footer>
        </div>
      </body>
    </html>
  );
};
