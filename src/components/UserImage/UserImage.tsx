import { Avatar } from "@ark-ui/react";
import clsx from "clsx";
import { useMemo } from "react";
import {
  circularClass,
  colorClasses,
  fallbackClass,
  imageClass,
  rootClass,
} from "./styles.css";
import { AvatarShape } from "./types";
import { UserImageHelpers } from "./helpers";

export type UserImageProps = Avatar.RootProps &
  React.RefAttributes<HTMLDivElement> & {
    fallback: string;
    shape?: AvatarShape;
    imageProps?: Avatar.ImageProps & React.RefAttributes<HTMLImageElement>;
  };

export const UserImage = ({
  shape,
  fallback,
  imageProps,
  className,
  ...rest
}: UserImageProps) => {
  const mainClass = useMemo(() => {
    // Gets the background color class from fallback hash
    const index = UserImageHelpers.hashToRange(fallback, colorClasses.length);
    const baseClass = clsx(rootClass, colorClasses[index]);

    // Gets the class from shape
    switch (shape) {
      case AvatarShape.rectangular:
        return baseClass;

      default:
      case AvatarShape.circular:
        return clsx(baseClass, circularClass);
    }
  }, [shape, fallback]);

  return (
    <Avatar.Root {...rest} className={clsx(mainClass, className)}>
      <Avatar.Fallback className={fallbackClass}>
        {fallback.substring(0, 2)}
      </Avatar.Fallback>
      <Avatar.Image
        {...imageProps}
        className={clsx(imageClass, imageProps?.className)}
      />
    </Avatar.Root>
  );
};
