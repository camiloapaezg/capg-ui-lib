import { ScrollArea } from "@ark-ui/react";
import type { Orientation } from "@zag-js/types";
import clsx from "clsx";
import { useMemo, type PropsWithChildren } from "react";
import {
  contentClass,
  cornerClass,
  rootClass,
  scrollbarHorizontalClass,
  scrollbarVerticalClass,
  thumbClass,
  viewportClass,
} from "./styles.css";

export type ScrollableAreaProps = ScrollArea.RootProps &
  React.RefAttributes<HTMLDivElement> & {
    orientation?: Orientation;
  };

export const ScrollableArea = ({
  orientation,
  children,
  className,
  ...rest
}: PropsWithChildren<ScrollableAreaProps>) => {
  const isVertical: boolean = useMemo(
    () => !orientation || orientation === "vertical",
    [orientation],
  );

  const isHorizontal: boolean = useMemo(
    () => !orientation || orientation === "horizontal",
    [orientation],
  );

  return (
    <ScrollArea.Root {...rest} className={clsx(rootClass, className)}>
      <ScrollArea.Viewport className={viewportClass}>
        <ScrollArea.Content className={contentClass}>
          {children}
        </ScrollArea.Content>
      </ScrollArea.Viewport>
      {isVertical && (
        <ScrollArea.Scrollbar
          orientation={"vertical"}
          className={scrollbarVerticalClass}
        >
          <ScrollArea.Thumb className={thumbClass} />
        </ScrollArea.Scrollbar>
      )}
      {isHorizontal && (
        <ScrollArea.Scrollbar
          orientation={"horizontal"}
          className={scrollbarHorizontalClass}
        >
          <ScrollArea.Thumb className={thumbClass} />
        </ScrollArea.Scrollbar>
      )}
      <ScrollArea.Corner className={cornerClass} />
    </ScrollArea.Root>
  );
};
