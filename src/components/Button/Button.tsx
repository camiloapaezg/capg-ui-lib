import clsx from "clsx";
import { useMemo, type ButtonHTMLAttributes, type JSX } from "react";
import {
  buttonGhostClass,
  buttonIconClass,
  buttonOutlineClass,
  buttonPrimaryClass,
  buttonSecondaryClass,
  rootClass,
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
        return buttonPrimaryClass;
      case "Secondary":
        return buttonSecondaryClass;
      case "Ghost":
        return buttonGhostClass;
      case "Outline":
        return buttonOutlineClass;
      default:
        return rootClass;
    }
  }, [appearance]);

  const _buttonIconClass: string | undefined = useMemo(
    () => (label ? undefined : buttonIconClass),
    [label],
  );

  return (
    <button
      {...rest}
      className={clsx(buttonClass, _buttonIconClass, className)}
    >
      {icon}
      {label}
    </button>
  );
};
