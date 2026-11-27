import clsx from "clsx";
import type { HTMLAttributes } from "react";
import { iconContentClass, iconWrapperClass } from "../styles.css";

type LineHorizontalIconProps = Omit<
  HTMLAttributes<SVGElement>,
  "viewBox" | "role"
>;

export const LineHorizontalIcon = ({
  className,
  ...rest
}: LineHorizontalIconProps) => {
  return (
    <svg
      {...rest}
      className={clsx(iconWrapperClass, className)}
      viewBox="0 0 32 32"
      fill="none"
    >
      <path d="M7 16H25" className={iconContentClass} />
    </svg>
  );
};
