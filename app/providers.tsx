import { WagmiProvider } from '@/components/wallet/providers/wagmiProvider';
import { IconProvider } from '@/theme/providers/IconProvider';
import { ThemeProvider } from '@/theme/providers/ThemeProvider';
import { GoogleAnalytics } from '@/utils/GoogleAnalyticsProvider';
import { PHProvider, PostHogPageview } from '@/utils/PostHogProvider';
import { ReactNode, Suspense } from 'react';

export const Providers = ({ children }: { children: ReactNode }) => (
  <ThemeProvider>
    <IconProvider>
      <WagmiProvider>
        <Suspense>
          <PostHogPageview />
        </Suspense>
        <GoogleAnalytics />
        <PHProvider>{children}</PHProvider>
      </WagmiProvider>
    </IconProvider>
  </ThemeProvider>
);
