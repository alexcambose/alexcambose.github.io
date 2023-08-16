'use client';
import { ReactNode, useEffect, useMemo, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { prefersDarkMode } from '../mediaUtils';
import { ThemeTypeEnum } from '../types';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeTypeEnum>(ThemeTypeEnum.AUTO);

  useEffect(() => {
    const localStorageTheme = localStorage.getItem('theme') as ThemeTypeEnum;
    setTheme(() => {
      if (localStorageTheme) return localStorageTheme;
      return prefersDarkMode() ? ThemeTypeEnum.DARK : ThemeTypeEnum.LIGHT;
    });
  }, []);

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
