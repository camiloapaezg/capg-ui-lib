import { Accordion } from "@ark-ui/react";
import clsx from "clsx";
import { useMemo } from "react";
import { ChevronDownIcon } from "../../icons/ChevronDown/ChevronDownIcon";
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
      {items.map(({ value, title, content, ...rest }) => (
        <Accordion.Item
          {...rest}
          className={itemClass}
          key={value}
          value={value}
        >
          <Accordion.ItemTrigger className={itemTriggerClass}>
            {title}
            <Accordion.ItemIndicator className={itemIndicatorClass}>
              <ChevronDownIcon />
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
