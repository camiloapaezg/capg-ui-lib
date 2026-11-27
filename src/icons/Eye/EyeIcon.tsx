import clsx from "clsx";
import type { HTMLAttributes } from "react";
import { iconContentClass, iconWrapperClass } from "../styles.css";
import { pupilClass } from "./styles.css";

type EyeIconProps = Omit<HTMLAttributes<SVGElement>, "viewBox" | "role">;

export const EyeIcon = ({ className, ...rest }: EyeIconProps) => {
  return (
    <svg
      {...rest}
      className={clsx(iconWrapperClass, className)}
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M3.5 16C6.5 10.5 11 8 16 8C21 8 25.5 10.5 28.5 16C25.5 21.5 21 24 16 24C11 24 6.5 21.5 3.5 16Z"
        className={iconContentClass}
      />
      <circle cx="16" cy="16" r="4" className={pupilClass} />
    </svg>
  );
};
