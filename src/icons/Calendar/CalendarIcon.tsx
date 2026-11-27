import clsx from "clsx";
import type { HTMLAttributes } from "react";
import { iconContentClass, iconWrapperClass } from "../styles.css";
import { contentClass } from "./styles.css";

type CalendarIconProps = Omit<HTMLAttributes<SVGElement>, "viewBox" | "role">;

export const CalendarIcon = ({ className, ...rest }: CalendarIconProps) => {
  return (
    <svg
      {...rest}
      viewBox="0 0 32 32"
      role="img"
      className={clsx(iconWrapperClass, className)}
    >
      <rect
        x="6"
        y="8"
        width="20"
        height="19"
        rx="2"
        className={iconContentClass}
      />
      <path d="M6 13H26M11 5V10M21 5V10" className={iconContentClass} />
      <path
        d="M11 17H11.01M16 17H16.01M21 17H21.01M11 22H11.01M16 22H16.01"
        className={contentClass}
      />
    </svg>
  );
};
