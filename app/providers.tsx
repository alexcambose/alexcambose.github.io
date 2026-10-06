import { IconProvider } from '@/theme/providers/IconProvider';
import { GoogleAnalytics } from '@/utils/GoogleAnalyticsProvider';
import { PHProvider, PostHogPageview } from '@/utils/PostHogProvider';
import { ReactNode, Suspense } from 'react';

export const Providers = ({ children }: { children: ReactNode }) => (
  <IconProvider>
    <Suspense>
      <PostHogPageview />
    </Suspense>
    <GoogleAnalytics />
    <PHProvider>{children}</PHProvider>
  </IconProvider>
);
