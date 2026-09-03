import { Dialog, Portal, type PortalProps } from "@ark-ui/react";
import { Icon } from "@iconify-icon/react";
import type { JSX, PropsWithChildren } from "react";
import {
  backdropClass,
  closeButtonClass,
  closeIconClass,
  contentClass,
  headerClass,
  positionerClass,
  titleClass,
} from "./styles.css";

import clsx from "clsx";
import { Button } from "../Button";
import { ButtonAppearance } from "../Button/types";

export type BasicDialogProps = Dialog.RootProps & {
  trigger?: JSX.Element;
  title?: string;
  portalProps?: PortalProps;
  titleProps?: Dialog.TitleProps & React.RefAttributes<HTMLHeadingElement>;
  contentProps?: Dialog.ContentProps & React.RefAttributes<HTMLDivElement>;
};

export const BasicDialog = ({
  title,
  trigger,
  portalProps,
  titleProps,
  contentProps,
  children,
  ...rest
}: PropsWithChildren<BasicDialogProps>) => {
  return (
    <Dialog.Root {...rest}>
      {trigger && <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>}
      <Portal {...portalProps}>
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
                  className={closeButtonClass}
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
