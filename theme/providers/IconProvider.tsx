'use client';

import { ReactNode, useMemo } from 'react';
import { IconContext } from '../context/IconsContext';
import { useTheme } from '../hooks/useTheme';
import { ThemeTypeEnum } from '../types';
import classNames from 'classnames';

export const IconProvider = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();
  const providerValue = useMemo(() => {
    return {
      color: 'inherit',
      className: classNames(
        {
          'fill-white': theme === ThemeTypeEnum.DARK,
          'fill-black': theme === ThemeTypeEnum.LIGHT,
        },
        'h-4 w-4'
      ),
    };
  }, [theme]);
  return <IconContext.Provider value={providerValue}>{children}</IconContext.Provider>;
};
