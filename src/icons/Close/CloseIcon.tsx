import clsx from "clsx";
import type { HTMLAttributes } from "react";
import { iconContentClass, iconWrapperClass } from "../styles.css";

type CloseIconProps = Omit<HTMLAttributes<SVGElement>, "viewBox" | "role">;

export const CloseIcon = ({ className, ...rest }: CloseIconProps) => {
  return (
    <svg
      {...rest}
      viewBox="0 0 32 32"
      role="img"
      aria-label="Close"
      className={clsx(iconWrapperClass, className)}
    >
      <path d="M9 9L23 23M23 9L9 23" className={iconContentClass} />
    </svg>
  );
};
