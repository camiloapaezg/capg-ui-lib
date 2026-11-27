import clsx from "clsx";
import type { HTMLAttributes } from "react";
import { iconContentClass, iconWrapperClass } from "../styles.css";

type DocumentIconProps = Omit<HTMLAttributes<SVGElement>, "viewBox" | "role">;

export const DocumentIcon = ({ className, ...rest }: DocumentIconProps) => {
  return (
    <svg
      {...rest}
      className={clsx(iconWrapperClass, className)}
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M8 4H18L25 11V27C25 28.1 24.1 29 23 29H8C6.9 29 6 28.1 6 27V6C6 4.9 6.9 4 8 4Z"
        className={iconContentClass}
      />
      <path
        d="M18 4V11H25M11 16H21M11 20H21M11 24H18"
        className={iconContentClass}
      />
    </svg>
  );
};
