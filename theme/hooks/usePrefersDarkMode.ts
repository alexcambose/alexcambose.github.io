import { useEffect, useState } from 'react';
import { prefersDarkMode, watchPrefersDarkMode } from '../mediaUtils';

export const usePrefersDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    setDarkMode(prefersDarkMode());
    return watchPrefersDarkMode((newPrefersDarkMode) => {
      setDarkMode(newPrefersDarkMode);
    });
  }, []);
  return darkMode;
};
