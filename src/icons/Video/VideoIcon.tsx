import clsx from "clsx";
import type { HTMLAttributes } from "react";
import { iconContentClass, iconWrapperClass } from "../styles.css";

type VideoIconProps = Omit<HTMLAttributes<SVGElement>, "viewBox" | "role">;

export const VideoIcon = ({ className, ...rest }: VideoIconProps) => {
  return (
    <svg
      {...rest}
      className={clsx(iconWrapperClass, className)}
      viewBox="0 0 32 32"
      fill="none"
    >
      <rect
        x="4"
        y="8"
        width="17"
        height="16"
        rx="2"
        className={iconContentClass}
      />
      <path d="M21 13L28 9V23L21 19V13Z" className={iconContentClass} />
    </svg>
  );
};
