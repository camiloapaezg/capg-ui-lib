import { Dialog, Portal } from "@ark-ui/react";
import { Icon } from "@iconify-icon/react";
import type { JSX, PropsWithChildren } from "react";
import {
  backdropClass,
  contentClass,
  headerClass,
  closeIconClass,
  positionerClass,
  titleClass,
} from "./styles.css";

import clsx from "clsx";
import { Button } from "../Button";
import { ButtonAppearance } from "../Button/types";

export type BasicDialogProps = Omit<
  Dialog.RootProps,
  "lazyMount" | "unmountOnExit"
> & {
  trigger?: JSX.Element;
  title?: string;
  titleProps?: Dialog.TitleProps & React.RefAttributes<HTMLHeadingElement>;
  contentProps?: Dialog.ContentProps & React.RefAttributes<HTMLDivElement>;
};

export const BasicDialog = ({
  title,
  trigger,
  titleProps,
  contentProps,
  children,
  ...rest
}: PropsWithChildren<BasicDialogProps>) => {
  return (
    <Dialog.Root {...rest} lazyMount unmountOnExit>
      {trigger && <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>}
      <Portal>
        <Dialog.Backdrop className={backdropClass} />
        <Dialog.Positioner className={positionerClass}>
          <Dialog.Content
            {...contentProps}
            className={clsx(contentClass, contentProps?.className)}
          >
            <header className={headerClass}>
              {title && (
                <Dialog.Title
                  {...titleProps}
                  className={clsx(titleClass, titleProps?.className)}
                >
                  {title}
                </Dialog.Title>
              )}
              <Dialog.CloseTrigger asChild>
                <Button
                  appearance={ButtonAppearance.Ghost}
                  icon={
                    <Icon
                      icon="fluent:dismiss-16-regular"
                      className={closeIconClass}
                    />
                  }
                />
              </Dialog.CloseTrigger>
            </header>
            {children}
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};
