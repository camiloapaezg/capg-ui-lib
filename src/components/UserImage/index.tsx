import { Avatar } from "@ark-ui/react";
import clsx from "clsx";
import { fallbackClass, imageClass, rootClass } from "./styles.css";

export type UserImageProps = Avatar.RootProps &
  React.RefAttributes<HTMLDivElement> & {
    fallback: string;
    imageProps?: Avatar.ImageProps & React.RefAttributes<HTMLImageElement>;
  };

export const UserImage = ({
  fallback,
  imageProps,
  className,
  ...rest
}: UserImageProps) => {
  return (
    <Avatar.Root {...rest} className={clsx(rootClass, className)}>
      <Avatar.Fallback className={fallbackClass}>{fallback}</Avatar.Fallback>
      <Avatar.Image
        {...imageProps}
        className={clsx(imageClass, imageProps?.className)}
      />
    </Avatar.Root>
  );
};
