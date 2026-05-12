import clsx from "clsx";
import { useMemo, type HTMLAttributes, type JSX } from "react";
import {
  baseClass,
  ghostClass,
  outlineClass,
  primaryClass,
  secondaryClass,
} from "./styles.css";
import { ButtonAppearance } from "./types";

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  label: string;
  appearance: keyof typeof ButtonAppearance;
  icon?: JSX.Element;
};

export const Button = ({
  label,
  appearance,
  icon,
  className,
  ...rest
}: ButtonProps) => {
  const innerClass: string = useMemo(() => {
    switch (appearance) {
      case "Primary":
        return primaryClass;
      case "Secondary":
        return secondaryClass;
      case "Ghost":
        return ghostClass;
      case "Outline":
        return outlineClass;
      default:
        return baseClass;
    }
  }, [appearance]);

  return (
    <button {...rest} className={clsx(innerClass, className)}>
      {icon}
      {label}
    </button>
  );
};
