import { Menu, type MenuRootProps } from "@ark-ui/react/menu";
import clsx from "clsx";
import { useMemo, type JSX } from "react";
import {
  checkboxItemClass,
  contentClass,
  itemButtonClass,
  itemGroupClass,
  itemGroupLabelClass,
  itemIndicatorClass,
  itemTextClass,
} from "./styles.css";
import type {
  CheckboxItemProps,
  ContextMenuItem,
  CustomItemProps,
  MenuItemProps,
} from "./types";

export type ContextMenuProps = MenuRootProps & {
  items: ContextMenuItem[];
  trigger?: JSX.Element;
  customTrigger?: boolean;
  asStandardMenu?: boolean;
  contentProps?: Menu.ContentProps & React.RefAttributes<HTMLDivElement>;
};

const emptyGroup = "-";

export const MenuItem = ({
  category,
  text,
  value,
  ...rest
}: ContextMenuItem) => {
  switch (category) {
    case "custom":
      return (rest as CustomItemProps)?.onRenderItem();

    case "checkbox":
      return (
        <Menu.CheckboxItem
          {...(rest as CheckboxItemProps)}
          key={value}
          value={value}
          className={checkboxItemClass}
        >
          <Menu.ItemIndicator className={itemIndicatorClass}>
            {"✓"}
          </Menu.ItemIndicator>
          <Menu.ItemText className={itemTextClass}>{text}</Menu.ItemText>
        </Menu.CheckboxItem>
      );

    default:
    case "button":
      return (
        <Menu.Item
          {...(rest as MenuItemProps)}
          key={value}
          value={value}
          className={itemButtonClass}
        >
          {text}
        </Menu.Item>
      );
  }
};

export const ContextMenu = ({
  items,
  trigger,
  customTrigger,
  asStandardMenu,
  contentProps,
  ...rest
}: ContextMenuProps) => {
  const grouped: boolean = useMemo(
    () => items.findIndex((i) => i.group !== undefined) >= 0,
    [items],
  );

  const groups: Map<string, ContextMenuItem[]> | undefined = useMemo(() => {
    if (grouped === false) {
      return undefined;
    }

    const groups = new Map<string, ContextMenuItem[]>();
    for (const item of items) {
      const groupName = item.group ?? emptyGroup;
      const group = groups.get(groupName);
      if (group) {
        group.push(item);
        continue;
      }

      groups.set(groupName, [item]);
    }

    return groups;
  }, [grouped, items]);

  const contextTrigger: React.ReactNode | null = useMemo(() => {
    if (!trigger) {
      return null;
    }

    if (customTrigger === true) {
      return trigger;
    }

    if (asStandardMenu !== true) {
      return <Menu.ContextTrigger asChild>{trigger}</Menu.ContextTrigger>;
    }

    return <Menu.Trigger asChild>{trigger}</Menu.Trigger>;
  }, [trigger, customTrigger, asStandardMenu]);

  const content: React.ReactNode = useMemo(() => {
    if (!groups || groups.size === 0) {
      return items.map(({ value, text: label, ...rest }) => (
        <MenuItem {...rest} key={value} value={value} text={label} />
      ));
    }

    return Array.from(groups.keys()).map((key) => (
      <Menu.ItemGroup key={key} className={itemGroupClass}>
        <Menu.ItemGroupLabel className={itemGroupLabelClass}>
          {key}
        </Menu.ItemGroupLabel>
        {groups.get(key)?.map(({ value, text: label, ...rest }) => (
          <MenuItem
            {...rest}
            key={`${key}-${value}`}
            value={value}
            text={label}
          />
        ))}
      </Menu.ItemGroup>
    ));
  }, [items, groups]);

  return (
    <Menu.Root {...rest}>
      {contextTrigger}
      <Menu.Positioner>
        <Menu.Content
          {...contentProps}
          className={clsx(contentClass, contentProps?.className)}
        >
          {content}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};
