import { useState, type HTMLAttributes, type PropsWithChildren } from "react";
import { useTheme } from "../src/components/ThemeProvider";
import { Toggle } from "../src/components/Toggle";

export const ThemeLayout = ({
  children,
  style,
  ...rest
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
  const { className: newTheme, onToggleTheme } = useTheme();
  const [darkTheme, setDarkTheme] = useState<boolean>(false);
  const [currentTheme, setCurrentTheme] = useState<string>();

  // Handlers
  function onCheckedChange({ checked }: { checked: boolean }) {
    onToggleTheme?.(checked);
    setDarkTheme(checked);
  }

  // Changes the theme by updating class names in the body element.
  if (currentTheme !== newTheme) {
    const container = document.body.getElementsByClassName("docs-story")[0];
    if (container) {
      currentTheme?.split(" ").forEach((className) => {
        container.classList.remove(className);
      });

      newTheme.split(" ").forEach((className) => {
        container.classList.add(className);
      });
    }

    setCurrentTheme(newTheme);
  }

  return (
    <div
      {...rest}
      style={{
        ...style,
        position: "relative",
      }}
    >
      <Toggle
        label="Dark mode"
        checked={darkTheme}
        onCheckedChange={onCheckedChange}
        style={{
          position: "absolute",
          bottom: "-1.5rem",
          right: "0rem",
        }}
      />
      {children}
    </div>
  );
};
