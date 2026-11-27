import clsx from "clsx";
import type { HTMLAttributes } from "react";
import { iconContentClass, iconWrapperClass } from "../styles.css";

type UploadIconProps = Omit<HTMLAttributes<SVGElement>, "viewBox" | "role">;

export const UploadIcon = ({ className, ...rest }: UploadIconProps) => {
  return (
    <svg
      {...rest}
      className={clsx(iconWrapperClass, className)}
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M16 21V7M10 13L16 7L22 13M6 22V25C6 26.1 6.9 27 8 27H24C25.1 27 26 26.1 26 25V22"
        className={iconContentClass}
      />
    </svg>
  );
};
