import { createContext, Dispatch, SetStateAction } from 'react';
import { ThemeTypeEnum } from '../types';

export const ThemeContext = createContext<{
  setTheme: Dispatch<SetStateAction<ThemeTypeEnum>>;
  theme: ThemeTypeEnum;
}>({
  setTheme: () => {},
  theme: ThemeTypeEnum.DARK,
});
