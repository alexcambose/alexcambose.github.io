'use client';

import { WagmiProvider } from '@/components/wallet/providers/wagmiProvider';
import { ThemeProvider } from '@/theme';
import { ReactNode } from 'react';

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider>
      <WagmiProvider>{children}</WagmiProvider>
    </ThemeProvider>
  );
};
