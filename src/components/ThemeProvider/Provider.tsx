import { useState, type PropsWithChildren } from "react";
import { themeDarkClass, themeLightClass } from "../../styles/theme.css";
import ThemeContext from "./Context";

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [className, setClassName] = useState<string>(themeLightClass);

  // Handlers
  function onToggleTheme(dark: boolean) {
    setClassName(dark === true ? themeDarkClass : themeLightClass);
  }

  return (
    <ThemeContext.Provider value={{ className, onToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
