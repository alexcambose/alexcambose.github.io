'use client';
import { useTheme } from '@/theme/hooks/useTheme';
import { ThemeTypeEnum } from '@/theme/types';
import { CircleHalf, Moon, Sun } from '@phosphor-icons/react';
import { Button } from '../baseComponents/button/Button';
const icons = {
  [ThemeTypeEnum.AUTO]: <CircleHalf />,
  [ThemeTypeEnum.LIGHT]: <Sun />,
  [ThemeTypeEnum.DARK]: <Moon />,
};
export const SwitchThemeButton = () => {
  const { setTheme, theme } = useTheme();
  const handleSwitchTheme = () => {
    setTheme((v) => {
      if (v === ThemeTypeEnum.LIGHT) {
        return ThemeTypeEnum.DARK;
      } else if (v === ThemeTypeEnum.DARK) {
        return ThemeTypeEnum.AUTO;
      }
      return ThemeTypeEnum.LIGHT;
    });
  };
  return <Button onClick={handleSwitchTheme}>Toggle {icons[theme]}</Button>;
};
