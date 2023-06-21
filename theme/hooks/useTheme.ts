import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === null || context === undefined) {
    throw new Error('No theme available on context');
  }

  return context;
};
