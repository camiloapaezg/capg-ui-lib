import clsx from "clsx";
import type { HTMLAttributes } from "react";
import { iconContentClass, iconWrapperClass } from "../styles.css";

type ChevronUpDownIconProps = Omit<
  HTMLAttributes<SVGElement>,
  "viewBox" | "role"
>;

export const ChevronUpDownIcon = ({
  className,
  ...rest
}: ChevronUpDownIconProps) => {
  return (
    <svg
      {...rest}
      viewBox="0 0 32 32"
      role="img"
      className={clsx(iconWrapperClass, className)}
    >
      <path
        d="M10 13L16 7L22 13M10 19L16 25L22 19"
        className={iconContentClass}
      />
    </svg>
  );
};
