import { ReactNode, useEffect, useState } from "react";
import { Theme, ThemeContext } from "./theme-context";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // 2. Safe JSON parsing with try-catch
  const getInitialTheme = (): Theme => {
    const savedMode = localStorage.getItem("mode");
    if (!savedMode) return "light";

    try {
      return JSON.parse(savedMode) as Theme;
    } catch (e) {
      return savedMode as Theme;
      console.error(e);
    }
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // 3. Persist and apply classes
  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(theme));

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
