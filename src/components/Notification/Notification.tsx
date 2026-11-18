import { Portal, Toast, Toaster, type ToasterProps } from "@ark-ui/react";
import { Icon } from "@iconify-icon/react";
import clsx from "clsx";
import { Button, ButtonAppearance } from "../Button";
import {
  closeButtonClass,
  closeIconClass,
  descriptionClass,
  rootClass,
  titleClass,
} from "./styles.css";
import type { ToastSemanticIcons } from "./types";

export type NotificationProps = Omit<ToasterProps, "children"> &
  React.RefAttributes<HTMLDivElement> & {
    icons?: ToastSemanticIcons;
    rootProps?: Toast.RootProps & React.RefAttributes<HTMLDivElement>;
  };

export const Notification = ({
  icons,
  rootProps,
  ...rest
}: NotificationProps) => {
  return (
    <Portal>
      <Toaster {...rest}>
        {(toast) => {
          const ToastIcon =
            toast.type !== undefined && icons !== undefined
              ? icons[toast.type]
              : undefined;
          return (
            <Toast.Root
              {...rootProps}
              key={toast.id}
              className={clsx(rootClass, rootProps?.className)}
            >
              <Toast.Title className={titleClass}>
                {ToastIcon}
                {toast.title}
              </Toast.Title>
              <Toast.Description className={descriptionClass}>
                {toast.description}
              </Toast.Description>
              <Toast.CloseTrigger asChild>
                <Button
                  aria-label="Close dialog"
                  className={closeButtonClass}
                  appearance={ButtonAppearance.Ghost}
                  icon={
                    <Icon
                      icon="fluent:dismiss-16-regular"
                      className={closeIconClass}
                    />
                  }
                />
              </Toast.CloseTrigger>
            </Toast.Root>
          );
        }}
      </Toaster>
    </Portal>
  );
};
