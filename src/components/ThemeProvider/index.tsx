import { useState, type PropsWithChildren } from "react";
import ThemeContext from "./context";
import {
  shadowsClass,
  themeDarkClass,
  themeLightClass,
} from "../../styles/theme.css";
import clsx from "clsx";

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [className, setClassName] = useState<string>(
    clsx(shadowsClass, themeLightClass),
  );

  // Handlers
  function onToggleTheme(dark: boolean) {
    setClassName(
      clsx(shadowsClass, dark === true ? themeDarkClass : themeLightClass),
    );
  }

  return (
    <ThemeContext.Provider value={{ className, onToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
