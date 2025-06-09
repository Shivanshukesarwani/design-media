import React, { createContext, useState, useContext } from "react";
import { getTheme } from "../theme";

const ThemeContext = createContext<any>(null);

export const ThemeProviderCustom: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [darkMode, setDarkMode] = useState(true);
  const theme = getTheme(darkMode);
  return <ThemeContext.Provider value={{darkMode, setDarkMode, theme}}>{children}</ThemeContext.Provider>;
};
export const useThemeCustom = () => useContext(ThemeContext);