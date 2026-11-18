import clsx from "clsx";
import { useState, type HTMLAttributes, type PropsWithChildren } from "react";
import { themeDarkClass, themeLightClass } from "../../styles/theme.css";
import ThemeContext from "./context";

export type ThemeProviderProps = HTMLAttributes<HTMLDivElement>;

export const ThemeProvider = ({
  className,
  children,
  ...rest
}: PropsWithChildren<ThemeProviderProps>) => {
  const [currentTheme, setCurrentTheme] = useState<string>(themeLightClass);

  // Handlers
  function onToggleTheme(dark: boolean) {
    setCurrentTheme(dark === true ? themeDarkClass : themeLightClass);
  }

  return (
    <ThemeContext.Provider value={{ className: currentTheme, onToggleTheme }}>
      <div
        {...rest}
        role="presentation"
        className={clsx(currentTheme, className)}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
