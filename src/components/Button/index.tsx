import clsx from "clsx";
import { useMemo, type ButtonHTMLAttributes, type JSX } from "react";
import {
  baseClass,
  ghostClass,
  iconButtonBaseClass,
  outlineClass,
  primaryClass,
  secondaryClass,
} from "./styles.css";
import { ButtonAppearance } from "./types";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  appearance: keyof typeof ButtonAppearance;
  label?: string;
  icon?: JSX.Element;
};

export const Button = ({
  label,
  appearance,
  icon,
  className,
  ...rest
}: ButtonProps) => {
  const buttonClass: string = useMemo(() => {
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

  const iconButtonClass: string | undefined = useMemo(
    () => (label ? undefined : iconButtonBaseClass),
    [label],
  );

  return (
    <button {...rest} className={clsx(buttonClass, iconButtonClass, className)}>
      {icon}
      {label}
    </button>
  );
};
