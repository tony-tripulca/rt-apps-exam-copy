import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export const useTheme = () => {
  const theme = useContext(ThemeContext);

  if(!theme) {
    throw Error('Missing theme provider. Make sure to wrap your app with ThemeContext.Provider component.')
  }

  return theme;
};
