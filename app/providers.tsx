import { WagmiProvider } from '@/components/wallet/providers/wagmiProvider';
import { IconProvider } from '@/theme/providers/IconProvider';
import { ThemeProvider } from '@/theme/providers/ThemeProvider';
import { ReactNode } from 'react';

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider>
      <IconProvider>
        <WagmiProvider>{children}</WagmiProvider>
      </IconProvider>
    </ThemeProvider>
  );
};
