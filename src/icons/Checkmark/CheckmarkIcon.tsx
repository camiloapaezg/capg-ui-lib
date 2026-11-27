import clsx from "clsx";
import type { HTMLAttributes } from "react";
import { iconContentClass, iconWrapperClass } from "../styles.css";

type CheckmarkIconProps = Omit<HTMLAttributes<SVGElement>, "viewBox" | "role">;

export const CheckmarkIcon = ({ className, ...rest }: CheckmarkIconProps) => {
  return (
    <svg
      {...rest}
      viewBox="0 0 32 32"
      fill="none"
      className={clsx(iconWrapperClass, className)}
    >
      <path d="M7 16.5L13 22.5L25 10" className={iconContentClass} />
    </svg>
  );
};
