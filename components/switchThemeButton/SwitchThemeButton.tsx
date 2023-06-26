'use client';

import { useTheme } from '@/theme/hooks/useTheme';
import { ThemeTypeEnum } from '@/theme/types';
import { CircleHalf, Moon, Sun } from '@phosphor-icons/react';
import { Button } from '../baseComponents/button/Button';
import classNames from 'classnames';

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

  return (
    <Button className={classNames('absolute top-0 left-0')} onClick={handleSwitchTheme}>
      {icons[theme]}
    </Button>
  );
};
