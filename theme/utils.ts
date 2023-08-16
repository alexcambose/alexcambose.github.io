import { ThemeTypeEnum } from './types';

export const shouldAppendDarkRoot = (theme: ThemeTypeEnum, prefersDarkMode: boolean) => {
  if (theme === ThemeTypeEnum.DARK) return true;
  if (theme === ThemeTypeEnum.LIGHT) return false;
  return prefersDarkMode;
};
