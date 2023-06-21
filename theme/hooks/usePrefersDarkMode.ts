import { useEffect, useState } from 'react';
import { prefersDarkMode, watchPrefersDarkMode } from '../mediaUtils';

export const usePrefersDarkMode = () => {
  const [darkMode, setDarkMode] = useState(prefersDarkMode());
  useEffect(() => {
    return watchPrefersDarkMode((newPrefersDarkMode) => {
      setDarkMode(newPrefersDarkMode);
    });
  }, []);
  return darkMode;
};
