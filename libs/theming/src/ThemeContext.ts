import { createContext } from 'react';
import { BASE_THEME } from './baseTheme';
import { Theme } from './types';

export const ThemeContext = createContext<Theme>(BASE_THEME);
