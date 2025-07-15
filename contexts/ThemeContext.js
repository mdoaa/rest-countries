import { createContext, useState, useEffect, use } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    document.documentElement.className = darkMode ? "dark" : ""
  }, [darkMode]);
    
    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </ThemeContext.Provider>
   )
}
