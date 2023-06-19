import { ReactNode, createContext, useContext } from 'react';
import type { Theme } from './theme';
import { defaultTheme } from './theme';

export const ThemeContext = createContext<Theme | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => (
  <ThemeContext.Provider value={defaultTheme}>{children}</ThemeContext.Provider>
);

export const useTheme = (): Theme => {
  const theme = useContext(ThemeContext);

  if (theme === null || theme === undefined) {
    throw new Error('No theme available on context');
  }

  return theme;
};
