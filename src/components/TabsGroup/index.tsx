import { Tabs } from "@ark-ui/react";
import clsx from "clsx";
import {
  indicatorClass,
  listClass,
  rootClass,
  triggerClass,
} from "./styles.css";
import type { TabsGroupItem } from "./types";

export type TabsGroupProps = Tabs.RootProps &
  React.RefAttributes<HTMLDivElement> & {
    items: TabsGroupItem[];
  };

export const TabsGroup = ({ items, className, ...rest }: TabsGroupProps) => {
  return (
    <Tabs.Root {...rest} className={clsx(rootClass, className)}>
      <Tabs.List className={listClass}>
        {items.map(({ value, title, triggerProps }) => (
          <Tabs.Trigger
            {...triggerProps}
            key={`tabs-trigger-${value}`}
            value={value}
            className={clsx(triggerClass, triggerProps?.className)}
          >
            {title}
          </Tabs.Trigger>
        ))}
        <Tabs.Indicator className={indicatorClass} />
      </Tabs.List>
      {items.map(({ value, content, contentProps }) => (
        <Tabs.Content
          {...contentProps}
          key={`tabs-content-${value}`}
          value={value}
        >
          {content}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};
