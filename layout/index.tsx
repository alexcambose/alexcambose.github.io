'use client';
import { AvatarCard } from '@/components/avatarCard/AvatarCard';
import { Link } from '@/components/baseComponents/link/Link';
import { Container } from '@/components/layout/Container';
import { SocialElementType, SocialIcons } from '@/components/socialIcons/SocialIcons';
import { useTheme } from '@/theme/hooks/useTheme';
import classNames from 'classnames';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { Navbar } from './navigation/Navbar';
import { SwitchThemeButton } from '@/components/switchThemeButton/SwitchThemeButton';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
interface LayoutProps {
  children: ReactNode;
}

const layoutTheme = {
  position: 'fixed',
  background: 'bg-background-light dark:bg-background-dark',
  border: 'border-8 border-r-0 border-page-frame-color-light dark:border-page-frame-color-dark',
  height: 'min-h-screen',
  font: 'font-sans dark:text-default-dark text-default-light',
};

export const Layout = ({ children }: LayoutProps) => {
  const { isDark } = useTheme();
  return (
    <html
      lang="en"
      className={classNames(
        { dark: isDark },
        {
          'background-light': !isDark,
          'dark:background-dark': isDark,
        },
        {
          'selection:bg-cyan-800': isDark,
          'selection:text-white': isDark,
          // 'selection:bg-slate-900': is Dark,
          // 'selection:bg-red-950': isDark,
        }
      )}
    >
      <body>
        <div
          id="scroll-container"
          className={classNames(
            inter.variable,
            layoutTheme.position,
            layoutTheme.background,
            layoutTheme.border,
            layoutTheme.height,
            layoutTheme.font,
            'overflow-auto top-0 right-0 left-0 bottom-0'
          )}
        >
          {/* <WalletNav /> */}
          <div className="px-6 md:px-12 lg:px-24">
            <Container
              leftSidebar={
                <>
                  <div>
                    <AvatarCard
                      title="Alexandru Cambose"
                      description="Product-focused Software engineer"
                      imageUrl="https://avatars.githubusercontent.com/u/12383978?v=4"
                      action="I thrive on tackling complex challenges that empowers financial systems. Can-do attitude. Always shipping."
                    />
                    <Navbar />
                  </div>
                  <div>
                    <SocialIcons
                      data={{
                        [SocialElementType.Linkedin]: {
                          url: 'https://www.linkedin.com/in/alexcambose/',
                        },
                        [SocialElementType.Github]: { url: 'https://github.com/alexcambose' },
                        [SocialElementType.Twitter]: { url: 'https://twitter.com/alexcambose' },
                        [SocialElementType.Medium]: {
                          url: 'https://medium.com/@alexcambose',
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
              {/* <SwitchThemeButton /> */}
              <main>{children}</main>
            </Container>
            <footer className="py-8 max-w-screen-xl mx-auto">
              <p className="text-sm text-slate-500 tracking-wide">
                Designed and coded by Alexandru Cambose. Built with{' '}
                <Link href="https://nextjs.org/" target="_blank">
                  Next.js
                </Link>{' '}
                and{' '}
                <Link href="https://tailwindcss.com/" target="_blank">
                  Tailwind CSS
                </Link>
                , deployed with{' '}
                <Link href="https://vercel.com/" target="_blank">
                  Vercel
                </Link>
                . All text is set in the Inter typeface. See{' '}
                <Link href="https://github.com/alexcambose/alexcambose.github.io" target="_blank">
                  Github repository
                </Link>
                .
              </p>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
};
