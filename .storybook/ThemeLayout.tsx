import { useEffect, type HTMLAttributes, type PropsWithChildren } from "react";
import { useTheme } from "../src/components/ThemeProvider/useTheme";

export const ThemeLayout = ({
  children,
  ...rest
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
  const { className: themeClass } = useTheme();

  // Adds the theme layout to the body element.
  useEffect(() => {
    themeClass.split(" ").forEach((className) => {
      document.body.classList.add(className);
    });
  }, [themeClass]);

  return <div {...rest}>{children}</div>;
};
