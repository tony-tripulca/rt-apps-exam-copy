import { ThemeContext } from "./ThemeContext";
import { Theme } from "./types";

export interface ThemeProviderProps {
  theme: Theme;
  children: React.ReactNode;
}

export const ThemeProvider = ({ theme, children }: ThemeProviderProps) => (
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
);
