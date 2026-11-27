import clsx from "clsx";
import type { HTMLAttributes } from "react";
import { iconContentClass, iconWrapperClass } from "../styles.css";
import { lettersClass } from "./styles.css";

type DocumentPdfIconProps = Omit<
  HTMLAttributes<SVGElement>,
  "viewBox" | "role"
>;

export const DocumentPdfIcon = ({
  className,
  ...rest
}: DocumentPdfIconProps) => {
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
      <path d="M18 4V11H25" className={iconContentClass} />
      <g className={lettersClass}>
        <path d="M9 18H10.8C11.7 18 12.1 18.4 12.1 19.1C12.1 19.8 11.7 20.2 10.8 20.2H9V18ZM9 18V23" />
        <path d="M13.5 18H14.6C16 18 16.7 18.9 16.7 20.5C16.7 22.1 16 23 14.6 23H13.5V18Z" />
        <path d="M18.1 23V18H21.2M18.1 20.4H20.6" />
      </g>
    </svg>
  );
};
