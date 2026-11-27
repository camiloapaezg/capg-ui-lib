import clsx from "clsx";
import type { HTMLAttributes } from "react";
import { iconContentClass, iconWrapperClass } from "../styles.css";

type ChevronDownIconProps = Omit<
  HTMLAttributes<SVGElement>,
  "viewBox" | "role"
>;

export const ChevronDownIcon = ({
  className,
  ...rest
}: ChevronDownIconProps) => {
  return (
    <svg
      {...rest}
      viewBox="0 0 32 32"
      role="img"
      className={clsx(iconWrapperClass, className)}
    >
      <path d="M9 12L16 19L23 12" className={iconContentClass} />
    </svg>
  );
};
