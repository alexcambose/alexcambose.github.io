import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { usePrefersDarkMode } from './usePrefersDarkMode';
import { ThemeTypeEnum } from '../types';

export const useTheme = () => {
  const context = useContext(ThemeContext);
  const prefersDarkMode = usePrefersDarkMode();
  if (context === null || context === undefined) {
    throw new Error('No theme available on context');
  }

  return {
    ...context,
    isDark:
      context.theme === ThemeTypeEnum.AUTO ? prefersDarkMode : context.theme === ThemeTypeEnum.DARK,
  };
};
