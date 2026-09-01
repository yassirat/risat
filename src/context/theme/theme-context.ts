import { createContext } from "react";

export type Theme = "light" | "dark";

export interface ThemeProps {
  toggleTheme(): void;
  theme: Theme;
}

export const ThemeContext = createContext<ThemeProps | undefined>(undefined);
