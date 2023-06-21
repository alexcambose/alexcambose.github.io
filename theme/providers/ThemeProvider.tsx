'use client';
import { ReactNode, useState, useEffect, useMemo } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { prefersDarkMode, watchPrefersDarkMode } from '../mediaUtils';
import { ThemeTypeEnum } from '../types';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeTypeEnum>(() => {
    const localStorageTheme = localStorage.getItem('theme') as ThemeTypeEnum;
    if (localStorageTheme) return localStorageTheme;
    if (!localStorageTheme) return prefersDarkMode() ? ThemeTypeEnum.DARK : ThemeTypeEnum.LIGHT;
  });

  useEffect(() => {
    if (theme !== 'auto') localStorage.setItem('theme', theme);
    else localStorage.removeItem('theme');
  }, [theme]);

  const providerValue = useMemo(
    () => ({
      setTheme,
      theme,
    }),
    [theme]
  );

  return <ThemeContext.Provider value={providerValue}>{children}</ThemeContext.Provider>;
};
