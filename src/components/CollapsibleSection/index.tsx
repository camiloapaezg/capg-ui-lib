import { Accordion } from "@ark-ui/react";
import { Icon } from "@iconify-icon/react";
import clsx from "clsx";
import { useMemo } from "react";
import {
  bodyCenteredClass,
  itemBodyClass,
  itemClass,
  itemContentClass,
  itemIndicatorClass,
  itemTriggerClass,
  rootClass,
} from "./styles.css";
import type { CollapsibleItem } from "./types";

export type CollapsibleSectionProps = Accordion.RootProps &
  React.RefAttributes<HTMLDivElement> & {
    items: CollapsibleItem[];
  };

export const CollapsibleSection = ({
  items,
  orientation,
  className,
  ...rest
}: CollapsibleSectionProps) => {
  const bodyClass = useMemo(
    () =>
      orientation === "horizontal"
        ? clsx(itemBodyClass, bodyCenteredClass)
        : itemBodyClass,
    [orientation],
  );

  return (
    <Accordion.Root
      {...rest}
      className={clsx(rootClass, className)}
      orientation={orientation}
    >
      {items.map(({ value, title, content, disabled }) => (
        <Accordion.Item className={itemClass} key={value} value={value}>
          <Accordion.ItemTrigger
            className={itemTriggerClass}
            disabled={disabled}
          >
            {title}
            <Accordion.ItemIndicator className={itemIndicatorClass}>
              <Icon icon={"fluent:chevron-down-16-regular"} />
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent className={itemContentClass}>
            <p className={bodyClass}>{content}</p>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};
